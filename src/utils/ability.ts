import {
  Ability,
  AbilityBuilder,
  createMongoAbility,
  RawRule,
  MongoQuery,
  Subject,
} from "@casl/ability";
import prisma from "../lib/prisma";
import { Permission, Role, User } from "../generated/prisma";
import { errorHandler } from "./error";

// Define proper types based on your schema
export type AppSubjects = 
  | "User" 
  | "Hotel"
  | "Room"
  | "RoomType"
  | "Guest"
  | "Reservation"
  |"ExchangeRate"
  | "Folio"
  | "POSOutlet"
  | "RatePlan"
  | "all";

export type AppActions = "create" | "read" | "update" | "delete" | "manage";
export type AppAbility = Ability<[AppActions, AppSubjects]>;


// Cache for abilities (optional - for better performance)
const abilityCache = new Map<string, AppAbility>(); // Changed to string for CUID
const CACHE_TTL = 5 * 60 * 1000; // 5 minutes

export async function defineAbilitiesForUser(
  userId: string // Changed to string for CUID
): Promise<AppAbility> {
  const cached = abilityCache.get(userId);
  if (cached) return cached;

  try {
    const user = await prisma.user.findUnique({
      where: { id: userId },
      include: {
        role: {
          include: {
                permissions: true
          }
        }
      }
    });

    if (!user) {
      throw errorHandler(404, "User not found");
    }

    const { can, build } = new AbilityBuilder<AppAbility>(createMongoAbility);
    const permissions = user.role?.permissions || [];

    for (const permission of permissions) {
      try {
        const conditions = resolvePlaceholders(permission.conditions, user);

        if (
          isValidAction(permission.action) &&
          isValidSubject(permission.subject)
        ) {
          can(
            permission.action as AppActions,
            permission.subject as AppSubjects,
            conditions as any
          );
        }
      } catch (error) {
        console.warn(
          `Invalid permission for user ${userId}:`,
          permission,
          error
        );
      }
    }

    const ability = build();
    abilityCache.set(userId, ability);
    setTimeout(() => abilityCache.delete(userId), CACHE_TTL);

    return ability;
  } catch (error) {
    console.error(`Error defining abilities for user ${userId}:`, error);
    throw errorHandler(500, "Failed to define user abilities");
  }
}

function resolvePlaceholders(
  conditions: any,
  user: User
): MongoQuery | null {
  if (!conditions || typeof conditions !== "object") {
    return conditions;
  }

  try {
    const resolveValue = (value: any): any => {
      if (typeof value === "string") {
        const placeholders: Record<string, any> = {
          "$user.id": user.id,
          "$user.email": user.email,
          "$user.tenantId": user.tenantId,
          "$user.hotelId": user.hotelId,
          // Add more placeholders as needed
        };

        return placeholders[value] ?? value;
      }

      if (Array.isArray(value)) {
        return value.map(resolveValue);
      }

      if (typeof value === "object" && value !== null) {
        const resolved: Record<string, any> = {};
        for (const [key, val] of Object.entries(value)) {
          resolved[key] = resolveValue(val);
        }
        return resolved;
      }

      return value;
    };

    return resolveValue(conditions);
  } catch (error) {
    console.warn("Error resolving placeholders:", error);
    return null;
  }
}

function isValidAction(action: string): action is AppActions {
  return ["create", "read", "update", "delete", "manage"].includes(action);
}

function isValidSubject(subject: string): subject is AppSubjects {
  return [
    "User",
    "Hotel",
    "Room",
    "RoomType",
    "Guest",
    "Reservation",
    "Folio",
    "POSOutlet",
    "RatePlan",
    "all"
  ].includes(subject);
}

export function clearUserAbilityCache(userId: string) { // Changed to string
  abilityCache.delete(userId);
}

export function clearAllAbilityCache() {
  abilityCache.clear();
}

export const createAbility = (rules: RawRule[]): AppAbility =>
  createMongoAbility(rules as any, {
    detectSubjectType: (object: any) => {
      if (object.__typename) return object.__typename;
      if (object.constructor?.name) return object.constructor.name;
      if (typeof object === "string") return object;
      return "Unknown";
    },
  });