
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Tenant
 * 
 */
export type Tenant = $Result.DefaultSelection<Prisma.$TenantPayload>
/**
 * Model Hotel
 * 
 */
export type Hotel = $Result.DefaultSelection<Prisma.$HotelPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Role
 * 
 */
export type Role = $Result.DefaultSelection<Prisma.$RolePayload>
/**
 * Model Permission
 * 
 */
export type Permission = $Result.DefaultSelection<Prisma.$PermissionPayload>
/**
 * Model Room
 * 
 */
export type Room = $Result.DefaultSelection<Prisma.$RoomPayload>
/**
 * Model RoomType
 * 
 */
export type RoomType = $Result.DefaultSelection<Prisma.$RoomTypePayload>
/**
 * Model RatePlan
 * 
 */
export type RatePlan = $Result.DefaultSelection<Prisma.$RatePlanPayload>
/**
 * Model Guest
 * 
 */
export type Guest = $Result.DefaultSelection<Prisma.$GuestPayload>
/**
 * Model Reservation
 * 
 */
export type Reservation = $Result.DefaultSelection<Prisma.$ReservationPayload>
/**
 * Model Folio
 * 
 */
export type Folio = $Result.DefaultSelection<Prisma.$FolioPayload>
/**
 * Model POSOutlet
 * 
 */
export type POSOutlet = $Result.DefaultSelection<Prisma.$POSOutletPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const FolioStatus: {
  OPEN: 'OPEN',
  CLOSED: 'CLOSED',
  DISPUTED: 'DISPUTED'
};

export type FolioStatus = (typeof FolioStatus)[keyof typeof FolioStatus]


export const RoomStatus: {
  AVAILABLE: 'AVAILABLE',
  OCCUPIED: 'OCCUPIED',
  MAINTENANCE: 'MAINTENANCE',
  DIRTY: 'DIRTY',
  CLEANING: 'CLEANING',
  RESERVED: 'RESERVED',
  OUT_OF_SERVICE: 'OUT_OF_SERVICE'
};

export type RoomStatus = (typeof RoomStatus)[keyof typeof RoomStatus]


export const AdjType: {
  PERCENT: 'PERCENT',
  FIXED: 'FIXED'
};

export type AdjType = (typeof AdjType)[keyof typeof AdjType]


export const ReservationStatus: {
  DRAFT: 'DRAFT',
  CONFIRMED: 'CONFIRMED',
  CHECKED_IN: 'CHECKED_IN',
  CHECKED_OUT: 'CHECKED_OUT',
  CANCELLED: 'CANCELLED',
  NO_SHOW: 'NO_SHOW',
  HELD: 'HELD'
};

export type ReservationStatus = (typeof ReservationStatus)[keyof typeof ReservationStatus]

}

export type FolioStatus = $Enums.FolioStatus

export const FolioStatus: typeof $Enums.FolioStatus

export type RoomStatus = $Enums.RoomStatus

export const RoomStatus: typeof $Enums.RoomStatus

export type AdjType = $Enums.AdjType

export const AdjType: typeof $Enums.AdjType

export type ReservationStatus = $Enums.ReservationStatus

export const ReservationStatus: typeof $Enums.ReservationStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Tenants
 * const tenants = await prisma.tenant.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Tenants
   * const tenants = await prisma.tenant.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.tenant`: Exposes CRUD operations for the **Tenant** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tenants
    * const tenants = await prisma.tenant.findMany()
    * ```
    */
  get tenant(): Prisma.TenantDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.hotel`: Exposes CRUD operations for the **Hotel** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Hotels
    * const hotels = await prisma.hotel.findMany()
    * ```
    */
  get hotel(): Prisma.HotelDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.role`: Exposes CRUD operations for the **Role** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Roles
    * const roles = await prisma.role.findMany()
    * ```
    */
  get role(): Prisma.RoleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.permission`: Exposes CRUD operations for the **Permission** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Permissions
    * const permissions = await prisma.permission.findMany()
    * ```
    */
  get permission(): Prisma.PermissionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.room`: Exposes CRUD operations for the **Room** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Rooms
    * const rooms = await prisma.room.findMany()
    * ```
    */
  get room(): Prisma.RoomDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.roomType`: Exposes CRUD operations for the **RoomType** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RoomTypes
    * const roomTypes = await prisma.roomType.findMany()
    * ```
    */
  get roomType(): Prisma.RoomTypeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ratePlan`: Exposes CRUD operations for the **RatePlan** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RatePlans
    * const ratePlans = await prisma.ratePlan.findMany()
    * ```
    */
  get ratePlan(): Prisma.RatePlanDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.guest`: Exposes CRUD operations for the **Guest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Guests
    * const guests = await prisma.guest.findMany()
    * ```
    */
  get guest(): Prisma.GuestDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.reservation`: Exposes CRUD operations for the **Reservation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reservations
    * const reservations = await prisma.reservation.findMany()
    * ```
    */
  get reservation(): Prisma.ReservationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.folio`: Exposes CRUD operations for the **Folio** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Folios
    * const folios = await prisma.folio.findMany()
    * ```
    */
  get folio(): Prisma.FolioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pOSOutlet`: Exposes CRUD operations for the **POSOutlet** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more POSOutlets
    * const pOSOutlets = await prisma.pOSOutlet.findMany()
    * ```
    */
  get pOSOutlet(): Prisma.POSOutletDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.9.0
   * Query Engine version: 81e4af48011447c3cc503a190e86995b66d2a28e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Tenant: 'Tenant',
    Hotel: 'Hotel',
    User: 'User',
    Role: 'Role',
    Permission: 'Permission',
    Room: 'Room',
    RoomType: 'RoomType',
    RatePlan: 'RatePlan',
    Guest: 'Guest',
    Reservation: 'Reservation',
    Folio: 'Folio',
    POSOutlet: 'POSOutlet'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "tenant" | "hotel" | "user" | "role" | "permission" | "room" | "roomType" | "ratePlan" | "guest" | "reservation" | "folio" | "pOSOutlet"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Tenant: {
        payload: Prisma.$TenantPayload<ExtArgs>
        fields: Prisma.TenantFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TenantFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TenantFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>
          }
          findFirst: {
            args: Prisma.TenantFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TenantFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>
          }
          findMany: {
            args: Prisma.TenantFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>[]
          }
          create: {
            args: Prisma.TenantCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>
          }
          createMany: {
            args: Prisma.TenantCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TenantCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>[]
          }
          delete: {
            args: Prisma.TenantDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>
          }
          update: {
            args: Prisma.TenantUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>
          }
          deleteMany: {
            args: Prisma.TenantDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TenantUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TenantUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>[]
          }
          upsert: {
            args: Prisma.TenantUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>
          }
          aggregate: {
            args: Prisma.TenantAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTenant>
          }
          groupBy: {
            args: Prisma.TenantGroupByArgs<ExtArgs>
            result: $Utils.Optional<TenantGroupByOutputType>[]
          }
          count: {
            args: Prisma.TenantCountArgs<ExtArgs>
            result: $Utils.Optional<TenantCountAggregateOutputType> | number
          }
        }
      }
      Hotel: {
        payload: Prisma.$HotelPayload<ExtArgs>
        fields: Prisma.HotelFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HotelFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HotelPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HotelFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HotelPayload>
          }
          findFirst: {
            args: Prisma.HotelFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HotelPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HotelFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HotelPayload>
          }
          findMany: {
            args: Prisma.HotelFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HotelPayload>[]
          }
          create: {
            args: Prisma.HotelCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HotelPayload>
          }
          createMany: {
            args: Prisma.HotelCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.HotelCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HotelPayload>[]
          }
          delete: {
            args: Prisma.HotelDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HotelPayload>
          }
          update: {
            args: Prisma.HotelUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HotelPayload>
          }
          deleteMany: {
            args: Prisma.HotelDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HotelUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.HotelUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HotelPayload>[]
          }
          upsert: {
            args: Prisma.HotelUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HotelPayload>
          }
          aggregate: {
            args: Prisma.HotelAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHotel>
          }
          groupBy: {
            args: Prisma.HotelGroupByArgs<ExtArgs>
            result: $Utils.Optional<HotelGroupByOutputType>[]
          }
          count: {
            args: Prisma.HotelCountArgs<ExtArgs>
            result: $Utils.Optional<HotelCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Role: {
        payload: Prisma.$RolePayload<ExtArgs>
        fields: Prisma.RoleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RoleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RoleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          findFirst: {
            args: Prisma.RoleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RoleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          findMany: {
            args: Prisma.RoleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>[]
          }
          create: {
            args: Prisma.RoleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          createMany: {
            args: Prisma.RoleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RoleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>[]
          }
          delete: {
            args: Prisma.RoleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          update: {
            args: Prisma.RoleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          deleteMany: {
            args: Prisma.RoleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RoleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RoleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>[]
          }
          upsert: {
            args: Prisma.RoleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          aggregate: {
            args: Prisma.RoleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRole>
          }
          groupBy: {
            args: Prisma.RoleGroupByArgs<ExtArgs>
            result: $Utils.Optional<RoleGroupByOutputType>[]
          }
          count: {
            args: Prisma.RoleCountArgs<ExtArgs>
            result: $Utils.Optional<RoleCountAggregateOutputType> | number
          }
        }
      }
      Permission: {
        payload: Prisma.$PermissionPayload<ExtArgs>
        fields: Prisma.PermissionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PermissionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PermissionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload>
          }
          findFirst: {
            args: Prisma.PermissionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PermissionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload>
          }
          findMany: {
            args: Prisma.PermissionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload>[]
          }
          create: {
            args: Prisma.PermissionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload>
          }
          createMany: {
            args: Prisma.PermissionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PermissionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload>[]
          }
          delete: {
            args: Prisma.PermissionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload>
          }
          update: {
            args: Prisma.PermissionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload>
          }
          deleteMany: {
            args: Prisma.PermissionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PermissionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PermissionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload>[]
          }
          upsert: {
            args: Prisma.PermissionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload>
          }
          aggregate: {
            args: Prisma.PermissionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePermission>
          }
          groupBy: {
            args: Prisma.PermissionGroupByArgs<ExtArgs>
            result: $Utils.Optional<PermissionGroupByOutputType>[]
          }
          count: {
            args: Prisma.PermissionCountArgs<ExtArgs>
            result: $Utils.Optional<PermissionCountAggregateOutputType> | number
          }
        }
      }
      Room: {
        payload: Prisma.$RoomPayload<ExtArgs>
        fields: Prisma.RoomFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RoomFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RoomFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          findFirst: {
            args: Prisma.RoomFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RoomFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          findMany: {
            args: Prisma.RoomFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>[]
          }
          create: {
            args: Prisma.RoomCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          createMany: {
            args: Prisma.RoomCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RoomCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>[]
          }
          delete: {
            args: Prisma.RoomDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          update: {
            args: Prisma.RoomUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          deleteMany: {
            args: Prisma.RoomDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RoomUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RoomUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>[]
          }
          upsert: {
            args: Prisma.RoomUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          aggregate: {
            args: Prisma.RoomAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRoom>
          }
          groupBy: {
            args: Prisma.RoomGroupByArgs<ExtArgs>
            result: $Utils.Optional<RoomGroupByOutputType>[]
          }
          count: {
            args: Prisma.RoomCountArgs<ExtArgs>
            result: $Utils.Optional<RoomCountAggregateOutputType> | number
          }
        }
      }
      RoomType: {
        payload: Prisma.$RoomTypePayload<ExtArgs>
        fields: Prisma.RoomTypeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RoomTypeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomTypePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RoomTypeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomTypePayload>
          }
          findFirst: {
            args: Prisma.RoomTypeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomTypePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RoomTypeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomTypePayload>
          }
          findMany: {
            args: Prisma.RoomTypeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomTypePayload>[]
          }
          create: {
            args: Prisma.RoomTypeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomTypePayload>
          }
          createMany: {
            args: Prisma.RoomTypeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RoomTypeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomTypePayload>[]
          }
          delete: {
            args: Prisma.RoomTypeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomTypePayload>
          }
          update: {
            args: Prisma.RoomTypeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomTypePayload>
          }
          deleteMany: {
            args: Prisma.RoomTypeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RoomTypeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RoomTypeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomTypePayload>[]
          }
          upsert: {
            args: Prisma.RoomTypeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomTypePayload>
          }
          aggregate: {
            args: Prisma.RoomTypeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRoomType>
          }
          groupBy: {
            args: Prisma.RoomTypeGroupByArgs<ExtArgs>
            result: $Utils.Optional<RoomTypeGroupByOutputType>[]
          }
          count: {
            args: Prisma.RoomTypeCountArgs<ExtArgs>
            result: $Utils.Optional<RoomTypeCountAggregateOutputType> | number
          }
        }
      }
      RatePlan: {
        payload: Prisma.$RatePlanPayload<ExtArgs>
        fields: Prisma.RatePlanFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RatePlanFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatePlanPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RatePlanFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatePlanPayload>
          }
          findFirst: {
            args: Prisma.RatePlanFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatePlanPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RatePlanFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatePlanPayload>
          }
          findMany: {
            args: Prisma.RatePlanFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatePlanPayload>[]
          }
          create: {
            args: Prisma.RatePlanCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatePlanPayload>
          }
          createMany: {
            args: Prisma.RatePlanCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RatePlanCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatePlanPayload>[]
          }
          delete: {
            args: Prisma.RatePlanDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatePlanPayload>
          }
          update: {
            args: Prisma.RatePlanUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatePlanPayload>
          }
          deleteMany: {
            args: Prisma.RatePlanDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RatePlanUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RatePlanUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatePlanPayload>[]
          }
          upsert: {
            args: Prisma.RatePlanUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatePlanPayload>
          }
          aggregate: {
            args: Prisma.RatePlanAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRatePlan>
          }
          groupBy: {
            args: Prisma.RatePlanGroupByArgs<ExtArgs>
            result: $Utils.Optional<RatePlanGroupByOutputType>[]
          }
          count: {
            args: Prisma.RatePlanCountArgs<ExtArgs>
            result: $Utils.Optional<RatePlanCountAggregateOutputType> | number
          }
        }
      }
      Guest: {
        payload: Prisma.$GuestPayload<ExtArgs>
        fields: Prisma.GuestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GuestFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GuestFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuestPayload>
          }
          findFirst: {
            args: Prisma.GuestFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GuestFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuestPayload>
          }
          findMany: {
            args: Prisma.GuestFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuestPayload>[]
          }
          create: {
            args: Prisma.GuestCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuestPayload>
          }
          createMany: {
            args: Prisma.GuestCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GuestCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuestPayload>[]
          }
          delete: {
            args: Prisma.GuestDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuestPayload>
          }
          update: {
            args: Prisma.GuestUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuestPayload>
          }
          deleteMany: {
            args: Prisma.GuestDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GuestUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GuestUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuestPayload>[]
          }
          upsert: {
            args: Prisma.GuestUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuestPayload>
          }
          aggregate: {
            args: Prisma.GuestAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGuest>
          }
          groupBy: {
            args: Prisma.GuestGroupByArgs<ExtArgs>
            result: $Utils.Optional<GuestGroupByOutputType>[]
          }
          count: {
            args: Prisma.GuestCountArgs<ExtArgs>
            result: $Utils.Optional<GuestCountAggregateOutputType> | number
          }
        }
      }
      Reservation: {
        payload: Prisma.$ReservationPayload<ExtArgs>
        fields: Prisma.ReservationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReservationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReservationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationPayload>
          }
          findFirst: {
            args: Prisma.ReservationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReservationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationPayload>
          }
          findMany: {
            args: Prisma.ReservationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationPayload>[]
          }
          create: {
            args: Prisma.ReservationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationPayload>
          }
          createMany: {
            args: Prisma.ReservationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReservationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationPayload>[]
          }
          delete: {
            args: Prisma.ReservationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationPayload>
          }
          update: {
            args: Prisma.ReservationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationPayload>
          }
          deleteMany: {
            args: Prisma.ReservationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReservationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ReservationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationPayload>[]
          }
          upsert: {
            args: Prisma.ReservationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationPayload>
          }
          aggregate: {
            args: Prisma.ReservationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReservation>
          }
          groupBy: {
            args: Prisma.ReservationGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReservationGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReservationCountArgs<ExtArgs>
            result: $Utils.Optional<ReservationCountAggregateOutputType> | number
          }
        }
      }
      Folio: {
        payload: Prisma.$FolioPayload<ExtArgs>
        fields: Prisma.FolioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FolioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FolioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FolioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FolioPayload>
          }
          findFirst: {
            args: Prisma.FolioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FolioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FolioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FolioPayload>
          }
          findMany: {
            args: Prisma.FolioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FolioPayload>[]
          }
          create: {
            args: Prisma.FolioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FolioPayload>
          }
          createMany: {
            args: Prisma.FolioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FolioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FolioPayload>[]
          }
          delete: {
            args: Prisma.FolioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FolioPayload>
          }
          update: {
            args: Prisma.FolioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FolioPayload>
          }
          deleteMany: {
            args: Prisma.FolioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FolioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FolioUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FolioPayload>[]
          }
          upsert: {
            args: Prisma.FolioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FolioPayload>
          }
          aggregate: {
            args: Prisma.FolioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFolio>
          }
          groupBy: {
            args: Prisma.FolioGroupByArgs<ExtArgs>
            result: $Utils.Optional<FolioGroupByOutputType>[]
          }
          count: {
            args: Prisma.FolioCountArgs<ExtArgs>
            result: $Utils.Optional<FolioCountAggregateOutputType> | number
          }
        }
      }
      POSOutlet: {
        payload: Prisma.$POSOutletPayload<ExtArgs>
        fields: Prisma.POSOutletFieldRefs
        operations: {
          findUnique: {
            args: Prisma.POSOutletFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$POSOutletPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.POSOutletFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$POSOutletPayload>
          }
          findFirst: {
            args: Prisma.POSOutletFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$POSOutletPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.POSOutletFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$POSOutletPayload>
          }
          findMany: {
            args: Prisma.POSOutletFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$POSOutletPayload>[]
          }
          create: {
            args: Prisma.POSOutletCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$POSOutletPayload>
          }
          createMany: {
            args: Prisma.POSOutletCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.POSOutletCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$POSOutletPayload>[]
          }
          delete: {
            args: Prisma.POSOutletDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$POSOutletPayload>
          }
          update: {
            args: Prisma.POSOutletUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$POSOutletPayload>
          }
          deleteMany: {
            args: Prisma.POSOutletDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.POSOutletUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.POSOutletUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$POSOutletPayload>[]
          }
          upsert: {
            args: Prisma.POSOutletUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$POSOutletPayload>
          }
          aggregate: {
            args: Prisma.POSOutletAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePOSOutlet>
          }
          groupBy: {
            args: Prisma.POSOutletGroupByArgs<ExtArgs>
            result: $Utils.Optional<POSOutletGroupByOutputType>[]
          }
          count: {
            args: Prisma.POSOutletCountArgs<ExtArgs>
            result: $Utils.Optional<POSOutletCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    tenant?: TenantOmit
    hotel?: HotelOmit
    user?: UserOmit
    role?: RoleOmit
    permission?: PermissionOmit
    room?: RoomOmit
    roomType?: RoomTypeOmit
    ratePlan?: RatePlanOmit
    guest?: GuestOmit
    reservation?: ReservationOmit
    folio?: FolioOmit
    pOSOutlet?: POSOutletOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type TenantCountOutputType
   */

  export type TenantCountOutputType = {
    hotels: number
    Users: number
    Role: number
    RoomType: number
    Room: number
    Guest: number
    Reservation: number
    Folio: number
    POSOutlet: number
    RatePlan: number
  }

  export type TenantCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    hotels?: boolean | TenantCountOutputTypeCountHotelsArgs
    Users?: boolean | TenantCountOutputTypeCountUsersArgs
    Role?: boolean | TenantCountOutputTypeCountRoleArgs
    RoomType?: boolean | TenantCountOutputTypeCountRoomTypeArgs
    Room?: boolean | TenantCountOutputTypeCountRoomArgs
    Guest?: boolean | TenantCountOutputTypeCountGuestArgs
    Reservation?: boolean | TenantCountOutputTypeCountReservationArgs
    Folio?: boolean | TenantCountOutputTypeCountFolioArgs
    POSOutlet?: boolean | TenantCountOutputTypeCountPOSOutletArgs
    RatePlan?: boolean | TenantCountOutputTypeCountRatePlanArgs
  }

  // Custom InputTypes
  /**
   * TenantCountOutputType without action
   */
  export type TenantCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TenantCountOutputType
     */
    select?: TenantCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TenantCountOutputType without action
   */
  export type TenantCountOutputTypeCountHotelsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HotelWhereInput
  }

  /**
   * TenantCountOutputType without action
   */
  export type TenantCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }

  /**
   * TenantCountOutputType without action
   */
  export type TenantCountOutputTypeCountRoleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoleWhereInput
  }

  /**
   * TenantCountOutputType without action
   */
  export type TenantCountOutputTypeCountRoomTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoomTypeWhereInput
  }

  /**
   * TenantCountOutputType without action
   */
  export type TenantCountOutputTypeCountRoomArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoomWhereInput
  }

  /**
   * TenantCountOutputType without action
   */
  export type TenantCountOutputTypeCountGuestArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GuestWhereInput
  }

  /**
   * TenantCountOutputType without action
   */
  export type TenantCountOutputTypeCountReservationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReservationWhereInput
  }

  /**
   * TenantCountOutputType without action
   */
  export type TenantCountOutputTypeCountFolioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FolioWhereInput
  }

  /**
   * TenantCountOutputType without action
   */
  export type TenantCountOutputTypeCountPOSOutletArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: POSOutletWhereInput
  }

  /**
   * TenantCountOutputType without action
   */
  export type TenantCountOutputTypeCountRatePlanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RatePlanWhereInput
  }


  /**
   * Count Type HotelCountOutputType
   */

  export type HotelCountOutputType = {
    Guest: number
    RoomType: number
    Room: number
    Role: number
    User: number
    Reservation: number
    Folio: number
    POSOutlet: number
    RatePlan: number
  }

  export type HotelCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Guest?: boolean | HotelCountOutputTypeCountGuestArgs
    RoomType?: boolean | HotelCountOutputTypeCountRoomTypeArgs
    Room?: boolean | HotelCountOutputTypeCountRoomArgs
    Role?: boolean | HotelCountOutputTypeCountRoleArgs
    User?: boolean | HotelCountOutputTypeCountUserArgs
    Reservation?: boolean | HotelCountOutputTypeCountReservationArgs
    Folio?: boolean | HotelCountOutputTypeCountFolioArgs
    POSOutlet?: boolean | HotelCountOutputTypeCountPOSOutletArgs
    RatePlan?: boolean | HotelCountOutputTypeCountRatePlanArgs
  }

  // Custom InputTypes
  /**
   * HotelCountOutputType without action
   */
  export type HotelCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HotelCountOutputType
     */
    select?: HotelCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * HotelCountOutputType without action
   */
  export type HotelCountOutputTypeCountGuestArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GuestWhereInput
  }

  /**
   * HotelCountOutputType without action
   */
  export type HotelCountOutputTypeCountRoomTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoomTypeWhereInput
  }

  /**
   * HotelCountOutputType without action
   */
  export type HotelCountOutputTypeCountRoomArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoomWhereInput
  }

  /**
   * HotelCountOutputType without action
   */
  export type HotelCountOutputTypeCountRoleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoleWhereInput
  }

  /**
   * HotelCountOutputType without action
   */
  export type HotelCountOutputTypeCountUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }

  /**
   * HotelCountOutputType without action
   */
  export type HotelCountOutputTypeCountReservationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReservationWhereInput
  }

  /**
   * HotelCountOutputType without action
   */
  export type HotelCountOutputTypeCountFolioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FolioWhereInput
  }

  /**
   * HotelCountOutputType without action
   */
  export type HotelCountOutputTypeCountPOSOutletArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: POSOutletWhereInput
  }

  /**
   * HotelCountOutputType without action
   */
  export type HotelCountOutputTypeCountRatePlanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RatePlanWhereInput
  }


  /**
   * Count Type RoleCountOutputType
   */

  export type RoleCountOutputType = {
    Users: number
    permissions: number
  }

  export type RoleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Users?: boolean | RoleCountOutputTypeCountUsersArgs
    permissions?: boolean | RoleCountOutputTypeCountPermissionsArgs
  }

  // Custom InputTypes
  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoleCountOutputType
     */
    select?: RoleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }

  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeCountPermissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PermissionWhereInput
  }


  /**
   * Count Type PermissionCountOutputType
   */

  export type PermissionCountOutputType = {
    roles: number
  }

  export type PermissionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    roles?: boolean | PermissionCountOutputTypeCountRolesArgs
  }

  // Custom InputTypes
  /**
   * PermissionCountOutputType without action
   */
  export type PermissionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PermissionCountOutputType
     */
    select?: PermissionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PermissionCountOutputType without action
   */
  export type PermissionCountOutputTypeCountRolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoleWhereInput
  }


  /**
   * Count Type RoomCountOutputType
   */

  export type RoomCountOutputType = {
    Reservation: number
  }

  export type RoomCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Reservation?: boolean | RoomCountOutputTypeCountReservationArgs
  }

  // Custom InputTypes
  /**
   * RoomCountOutputType without action
   */
  export type RoomCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomCountOutputType
     */
    select?: RoomCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RoomCountOutputType without action
   */
  export type RoomCountOutputTypeCountReservationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReservationWhereInput
  }


  /**
   * Count Type RoomTypeCountOutputType
   */

  export type RoomTypeCountOutputType = {
    Room: number
  }

  export type RoomTypeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Room?: boolean | RoomTypeCountOutputTypeCountRoomArgs
  }

  // Custom InputTypes
  /**
   * RoomTypeCountOutputType without action
   */
  export type RoomTypeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomTypeCountOutputType
     */
    select?: RoomTypeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RoomTypeCountOutputType without action
   */
  export type RoomTypeCountOutputTypeCountRoomArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoomWhereInput
  }


  /**
   * Count Type GuestCountOutputType
   */

  export type GuestCountOutputType = {
    Reservation: number
    Folio: number
  }

  export type GuestCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Reservation?: boolean | GuestCountOutputTypeCountReservationArgs
    Folio?: boolean | GuestCountOutputTypeCountFolioArgs
  }

  // Custom InputTypes
  /**
   * GuestCountOutputType without action
   */
  export type GuestCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuestCountOutputType
     */
    select?: GuestCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GuestCountOutputType without action
   */
  export type GuestCountOutputTypeCountReservationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReservationWhereInput
  }

  /**
   * GuestCountOutputType without action
   */
  export type GuestCountOutputTypeCountFolioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FolioWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Tenant
   */

  export type AggregateTenant = {
    _count: TenantCountAggregateOutputType | null
    _min: TenantMinAggregateOutputType | null
    _max: TenantMaxAggregateOutputType | null
  }

  export type TenantMinAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TenantMaxAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TenantCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TenantMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TenantMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TenantCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TenantAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tenant to aggregate.
     */
    where?: TenantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tenants to fetch.
     */
    orderBy?: TenantOrderByWithRelationInput | TenantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TenantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tenants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tenants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tenants
    **/
    _count?: true | TenantCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TenantMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TenantMaxAggregateInputType
  }

  export type GetTenantAggregateType<T extends TenantAggregateArgs> = {
        [P in keyof T & keyof AggregateTenant]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTenant[P]>
      : GetScalarType<T[P], AggregateTenant[P]>
  }




  export type TenantGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TenantWhereInput
    orderBy?: TenantOrderByWithAggregationInput | TenantOrderByWithAggregationInput[]
    by: TenantScalarFieldEnum[] | TenantScalarFieldEnum
    having?: TenantScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TenantCountAggregateInputType | true
    _min?: TenantMinAggregateInputType
    _max?: TenantMaxAggregateInputType
  }

  export type TenantGroupByOutputType = {
    id: string
    name: string
    createdAt: Date
    updatedAt: Date
    _count: TenantCountAggregateOutputType | null
    _min: TenantMinAggregateOutputType | null
    _max: TenantMaxAggregateOutputType | null
  }

  type GetTenantGroupByPayload<T extends TenantGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TenantGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TenantGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TenantGroupByOutputType[P]>
            : GetScalarType<T[P], TenantGroupByOutputType[P]>
        }
      >
    >


  export type TenantSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    hotels?: boolean | Tenant$hotelsArgs<ExtArgs>
    Users?: boolean | Tenant$UsersArgs<ExtArgs>
    Role?: boolean | Tenant$RoleArgs<ExtArgs>
    RoomType?: boolean | Tenant$RoomTypeArgs<ExtArgs>
    Room?: boolean | Tenant$RoomArgs<ExtArgs>
    Guest?: boolean | Tenant$GuestArgs<ExtArgs>
    Reservation?: boolean | Tenant$ReservationArgs<ExtArgs>
    Folio?: boolean | Tenant$FolioArgs<ExtArgs>
    POSOutlet?: boolean | Tenant$POSOutletArgs<ExtArgs>
    RatePlan?: boolean | Tenant$RatePlanArgs<ExtArgs>
    _count?: boolean | TenantCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tenant"]>

  export type TenantSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["tenant"]>

  export type TenantSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["tenant"]>

  export type TenantSelectScalar = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TenantOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "createdAt" | "updatedAt", ExtArgs["result"]["tenant"]>
  export type TenantInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    hotels?: boolean | Tenant$hotelsArgs<ExtArgs>
    Users?: boolean | Tenant$UsersArgs<ExtArgs>
    Role?: boolean | Tenant$RoleArgs<ExtArgs>
    RoomType?: boolean | Tenant$RoomTypeArgs<ExtArgs>
    Room?: boolean | Tenant$RoomArgs<ExtArgs>
    Guest?: boolean | Tenant$GuestArgs<ExtArgs>
    Reservation?: boolean | Tenant$ReservationArgs<ExtArgs>
    Folio?: boolean | Tenant$FolioArgs<ExtArgs>
    POSOutlet?: boolean | Tenant$POSOutletArgs<ExtArgs>
    RatePlan?: boolean | Tenant$RatePlanArgs<ExtArgs>
    _count?: boolean | TenantCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TenantIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TenantIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TenantPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Tenant"
    objects: {
      hotels: Prisma.$HotelPayload<ExtArgs>[]
      Users: Prisma.$UserPayload<ExtArgs>[]
      Role: Prisma.$RolePayload<ExtArgs>[]
      RoomType: Prisma.$RoomTypePayload<ExtArgs>[]
      Room: Prisma.$RoomPayload<ExtArgs>[]
      Guest: Prisma.$GuestPayload<ExtArgs>[]
      Reservation: Prisma.$ReservationPayload<ExtArgs>[]
      Folio: Prisma.$FolioPayload<ExtArgs>[]
      POSOutlet: Prisma.$POSOutletPayload<ExtArgs>[]
      RatePlan: Prisma.$RatePlanPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["tenant"]>
    composites: {}
  }

  type TenantGetPayload<S extends boolean | null | undefined | TenantDefaultArgs> = $Result.GetResult<Prisma.$TenantPayload, S>

  type TenantCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TenantFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TenantCountAggregateInputType | true
    }

  export interface TenantDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Tenant'], meta: { name: 'Tenant' } }
    /**
     * Find zero or one Tenant that matches the filter.
     * @param {TenantFindUniqueArgs} args - Arguments to find a Tenant
     * @example
     * // Get one Tenant
     * const tenant = await prisma.tenant.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TenantFindUniqueArgs>(args: SelectSubset<T, TenantFindUniqueArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tenant that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TenantFindUniqueOrThrowArgs} args - Arguments to find a Tenant
     * @example
     * // Get one Tenant
     * const tenant = await prisma.tenant.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TenantFindUniqueOrThrowArgs>(args: SelectSubset<T, TenantFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tenant that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantFindFirstArgs} args - Arguments to find a Tenant
     * @example
     * // Get one Tenant
     * const tenant = await prisma.tenant.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TenantFindFirstArgs>(args?: SelectSubset<T, TenantFindFirstArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tenant that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantFindFirstOrThrowArgs} args - Arguments to find a Tenant
     * @example
     * // Get one Tenant
     * const tenant = await prisma.tenant.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TenantFindFirstOrThrowArgs>(args?: SelectSubset<T, TenantFindFirstOrThrowArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tenants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tenants
     * const tenants = await prisma.tenant.findMany()
     * 
     * // Get first 10 Tenants
     * const tenants = await prisma.tenant.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tenantWithIdOnly = await prisma.tenant.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TenantFindManyArgs>(args?: SelectSubset<T, TenantFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tenant.
     * @param {TenantCreateArgs} args - Arguments to create a Tenant.
     * @example
     * // Create one Tenant
     * const Tenant = await prisma.tenant.create({
     *   data: {
     *     // ... data to create a Tenant
     *   }
     * })
     * 
     */
    create<T extends TenantCreateArgs>(args: SelectSubset<T, TenantCreateArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tenants.
     * @param {TenantCreateManyArgs} args - Arguments to create many Tenants.
     * @example
     * // Create many Tenants
     * const tenant = await prisma.tenant.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TenantCreateManyArgs>(args?: SelectSubset<T, TenantCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tenants and returns the data saved in the database.
     * @param {TenantCreateManyAndReturnArgs} args - Arguments to create many Tenants.
     * @example
     * // Create many Tenants
     * const tenant = await prisma.tenant.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tenants and only return the `id`
     * const tenantWithIdOnly = await prisma.tenant.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TenantCreateManyAndReturnArgs>(args?: SelectSubset<T, TenantCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Tenant.
     * @param {TenantDeleteArgs} args - Arguments to delete one Tenant.
     * @example
     * // Delete one Tenant
     * const Tenant = await prisma.tenant.delete({
     *   where: {
     *     // ... filter to delete one Tenant
     *   }
     * })
     * 
     */
    delete<T extends TenantDeleteArgs>(args: SelectSubset<T, TenantDeleteArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tenant.
     * @param {TenantUpdateArgs} args - Arguments to update one Tenant.
     * @example
     * // Update one Tenant
     * const tenant = await prisma.tenant.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TenantUpdateArgs>(args: SelectSubset<T, TenantUpdateArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tenants.
     * @param {TenantDeleteManyArgs} args - Arguments to filter Tenants to delete.
     * @example
     * // Delete a few Tenants
     * const { count } = await prisma.tenant.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TenantDeleteManyArgs>(args?: SelectSubset<T, TenantDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tenants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tenants
     * const tenant = await prisma.tenant.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TenantUpdateManyArgs>(args: SelectSubset<T, TenantUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tenants and returns the data updated in the database.
     * @param {TenantUpdateManyAndReturnArgs} args - Arguments to update many Tenants.
     * @example
     * // Update many Tenants
     * const tenant = await prisma.tenant.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tenants and only return the `id`
     * const tenantWithIdOnly = await prisma.tenant.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TenantUpdateManyAndReturnArgs>(args: SelectSubset<T, TenantUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Tenant.
     * @param {TenantUpsertArgs} args - Arguments to update or create a Tenant.
     * @example
     * // Update or create a Tenant
     * const tenant = await prisma.tenant.upsert({
     *   create: {
     *     // ... data to create a Tenant
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tenant we want to update
     *   }
     * })
     */
    upsert<T extends TenantUpsertArgs>(args: SelectSubset<T, TenantUpsertArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tenants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantCountArgs} args - Arguments to filter Tenants to count.
     * @example
     * // Count the number of Tenants
     * const count = await prisma.tenant.count({
     *   where: {
     *     // ... the filter for the Tenants we want to count
     *   }
     * })
    **/
    count<T extends TenantCountArgs>(
      args?: Subset<T, TenantCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TenantCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tenant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TenantAggregateArgs>(args: Subset<T, TenantAggregateArgs>): Prisma.PrismaPromise<GetTenantAggregateType<T>>

    /**
     * Group by Tenant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TenantGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TenantGroupByArgs['orderBy'] }
        : { orderBy?: TenantGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TenantGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTenantGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Tenant model
   */
  readonly fields: TenantFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tenant.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TenantClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    hotels<T extends Tenant$hotelsArgs<ExtArgs> = {}>(args?: Subset<T, Tenant$hotelsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HotelPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Users<T extends Tenant$UsersArgs<ExtArgs> = {}>(args?: Subset<T, Tenant$UsersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Role<T extends Tenant$RoleArgs<ExtArgs> = {}>(args?: Subset<T, Tenant$RoleArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    RoomType<T extends Tenant$RoomTypeArgs<ExtArgs> = {}>(args?: Subset<T, Tenant$RoomTypeArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomTypePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Room<T extends Tenant$RoomArgs<ExtArgs> = {}>(args?: Subset<T, Tenant$RoomArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Guest<T extends Tenant$GuestArgs<ExtArgs> = {}>(args?: Subset<T, Tenant$GuestArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GuestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Reservation<T extends Tenant$ReservationArgs<ExtArgs> = {}>(args?: Subset<T, Tenant$ReservationArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Folio<T extends Tenant$FolioArgs<ExtArgs> = {}>(args?: Subset<T, Tenant$FolioArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FolioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    POSOutlet<T extends Tenant$POSOutletArgs<ExtArgs> = {}>(args?: Subset<T, Tenant$POSOutletArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$POSOutletPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    RatePlan<T extends Tenant$RatePlanArgs<ExtArgs> = {}>(args?: Subset<T, Tenant$RatePlanArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RatePlanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Tenant model
   */
  interface TenantFieldRefs {
    readonly id: FieldRef<"Tenant", 'String'>
    readonly name: FieldRef<"Tenant", 'String'>
    readonly createdAt: FieldRef<"Tenant", 'DateTime'>
    readonly updatedAt: FieldRef<"Tenant", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Tenant findUnique
   */
  export type TenantFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * Filter, which Tenant to fetch.
     */
    where: TenantWhereUniqueInput
  }

  /**
   * Tenant findUniqueOrThrow
   */
  export type TenantFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * Filter, which Tenant to fetch.
     */
    where: TenantWhereUniqueInput
  }

  /**
   * Tenant findFirst
   */
  export type TenantFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * Filter, which Tenant to fetch.
     */
    where?: TenantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tenants to fetch.
     */
    orderBy?: TenantOrderByWithRelationInput | TenantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tenants.
     */
    cursor?: TenantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tenants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tenants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tenants.
     */
    distinct?: TenantScalarFieldEnum | TenantScalarFieldEnum[]
  }

  /**
   * Tenant findFirstOrThrow
   */
  export type TenantFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * Filter, which Tenant to fetch.
     */
    where?: TenantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tenants to fetch.
     */
    orderBy?: TenantOrderByWithRelationInput | TenantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tenants.
     */
    cursor?: TenantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tenants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tenants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tenants.
     */
    distinct?: TenantScalarFieldEnum | TenantScalarFieldEnum[]
  }

  /**
   * Tenant findMany
   */
  export type TenantFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * Filter, which Tenants to fetch.
     */
    where?: TenantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tenants to fetch.
     */
    orderBy?: TenantOrderByWithRelationInput | TenantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tenants.
     */
    cursor?: TenantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tenants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tenants.
     */
    skip?: number
    distinct?: TenantScalarFieldEnum | TenantScalarFieldEnum[]
  }

  /**
   * Tenant create
   */
  export type TenantCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * The data needed to create a Tenant.
     */
    data: XOR<TenantCreateInput, TenantUncheckedCreateInput>
  }

  /**
   * Tenant createMany
   */
  export type TenantCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tenants.
     */
    data: TenantCreateManyInput | TenantCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tenant createManyAndReturn
   */
  export type TenantCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * The data used to create many Tenants.
     */
    data: TenantCreateManyInput | TenantCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tenant update
   */
  export type TenantUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * The data needed to update a Tenant.
     */
    data: XOR<TenantUpdateInput, TenantUncheckedUpdateInput>
    /**
     * Choose, which Tenant to update.
     */
    where: TenantWhereUniqueInput
  }

  /**
   * Tenant updateMany
   */
  export type TenantUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tenants.
     */
    data: XOR<TenantUpdateManyMutationInput, TenantUncheckedUpdateManyInput>
    /**
     * Filter which Tenants to update
     */
    where?: TenantWhereInput
    /**
     * Limit how many Tenants to update.
     */
    limit?: number
  }

  /**
   * Tenant updateManyAndReturn
   */
  export type TenantUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * The data used to update Tenants.
     */
    data: XOR<TenantUpdateManyMutationInput, TenantUncheckedUpdateManyInput>
    /**
     * Filter which Tenants to update
     */
    where?: TenantWhereInput
    /**
     * Limit how many Tenants to update.
     */
    limit?: number
  }

  /**
   * Tenant upsert
   */
  export type TenantUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * The filter to search for the Tenant to update in case it exists.
     */
    where: TenantWhereUniqueInput
    /**
     * In case the Tenant found by the `where` argument doesn't exist, create a new Tenant with this data.
     */
    create: XOR<TenantCreateInput, TenantUncheckedCreateInput>
    /**
     * In case the Tenant was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TenantUpdateInput, TenantUncheckedUpdateInput>
  }

  /**
   * Tenant delete
   */
  export type TenantDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * Filter which Tenant to delete.
     */
    where: TenantWhereUniqueInput
  }

  /**
   * Tenant deleteMany
   */
  export type TenantDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tenants to delete
     */
    where?: TenantWhereInput
    /**
     * Limit how many Tenants to delete.
     */
    limit?: number
  }

  /**
   * Tenant.hotels
   */
  export type Tenant$hotelsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hotel
     */
    select?: HotelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hotel
     */
    omit?: HotelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HotelInclude<ExtArgs> | null
    where?: HotelWhereInput
    orderBy?: HotelOrderByWithRelationInput | HotelOrderByWithRelationInput[]
    cursor?: HotelWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HotelScalarFieldEnum | HotelScalarFieldEnum[]
  }

  /**
   * Tenant.Users
   */
  export type Tenant$UsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Tenant.Role
   */
  export type Tenant$RoleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    where?: RoleWhereInput
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    cursor?: RoleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Tenant.RoomType
   */
  export type Tenant$RoomTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomType
     */
    select?: RoomTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomType
     */
    omit?: RoomTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomTypeInclude<ExtArgs> | null
    where?: RoomTypeWhereInput
    orderBy?: RoomTypeOrderByWithRelationInput | RoomTypeOrderByWithRelationInput[]
    cursor?: RoomTypeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RoomTypeScalarFieldEnum | RoomTypeScalarFieldEnum[]
  }

  /**
   * Tenant.Room
   */
  export type Tenant$RoomArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    where?: RoomWhereInput
    orderBy?: RoomOrderByWithRelationInput | RoomOrderByWithRelationInput[]
    cursor?: RoomWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RoomScalarFieldEnum | RoomScalarFieldEnum[]
  }

  /**
   * Tenant.Guest
   */
  export type Tenant$GuestArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guest
     */
    select?: GuestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guest
     */
    omit?: GuestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuestInclude<ExtArgs> | null
    where?: GuestWhereInput
    orderBy?: GuestOrderByWithRelationInput | GuestOrderByWithRelationInput[]
    cursor?: GuestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GuestScalarFieldEnum | GuestScalarFieldEnum[]
  }

  /**
   * Tenant.Reservation
   */
  export type Tenant$ReservationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservation
     */
    omit?: ReservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
    where?: ReservationWhereInput
    orderBy?: ReservationOrderByWithRelationInput | ReservationOrderByWithRelationInput[]
    cursor?: ReservationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReservationScalarFieldEnum | ReservationScalarFieldEnum[]
  }

  /**
   * Tenant.Folio
   */
  export type Tenant$FolioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Folio
     */
    select?: FolioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Folio
     */
    omit?: FolioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FolioInclude<ExtArgs> | null
    where?: FolioWhereInput
    orderBy?: FolioOrderByWithRelationInput | FolioOrderByWithRelationInput[]
    cursor?: FolioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FolioScalarFieldEnum | FolioScalarFieldEnum[]
  }

  /**
   * Tenant.POSOutlet
   */
  export type Tenant$POSOutletArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the POSOutlet
     */
    select?: POSOutletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the POSOutlet
     */
    omit?: POSOutletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: POSOutletInclude<ExtArgs> | null
    where?: POSOutletWhereInput
    orderBy?: POSOutletOrderByWithRelationInput | POSOutletOrderByWithRelationInput[]
    cursor?: POSOutletWhereUniqueInput
    take?: number
    skip?: number
    distinct?: POSOutletScalarFieldEnum | POSOutletScalarFieldEnum[]
  }

  /**
   * Tenant.RatePlan
   */
  export type Tenant$RatePlanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RatePlan
     */
    select?: RatePlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RatePlan
     */
    omit?: RatePlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatePlanInclude<ExtArgs> | null
    where?: RatePlanWhereInput
    orderBy?: RatePlanOrderByWithRelationInput | RatePlanOrderByWithRelationInput[]
    cursor?: RatePlanWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RatePlanScalarFieldEnum | RatePlanScalarFieldEnum[]
  }

  /**
   * Tenant without action
   */
  export type TenantDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
  }


  /**
   * Model Hotel
   */

  export type AggregateHotel = {
    _count: HotelCountAggregateOutputType | null
    _min: HotelMinAggregateOutputType | null
    _max: HotelMaxAggregateOutputType | null
  }

  export type HotelMinAggregateOutputType = {
    id: string | null
    name: string | null
    country: string | null
    city: string | null
    address: string | null
    tenantId: string | null
  }

  export type HotelMaxAggregateOutputType = {
    id: string | null
    name: string | null
    country: string | null
    city: string | null
    address: string | null
    tenantId: string | null
  }

  export type HotelCountAggregateOutputType = {
    id: number
    name: number
    country: number
    city: number
    address: number
    tenantId: number
    _all: number
  }


  export type HotelMinAggregateInputType = {
    id?: true
    name?: true
    country?: true
    city?: true
    address?: true
    tenantId?: true
  }

  export type HotelMaxAggregateInputType = {
    id?: true
    name?: true
    country?: true
    city?: true
    address?: true
    tenantId?: true
  }

  export type HotelCountAggregateInputType = {
    id?: true
    name?: true
    country?: true
    city?: true
    address?: true
    tenantId?: true
    _all?: true
  }

  export type HotelAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Hotel to aggregate.
     */
    where?: HotelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Hotels to fetch.
     */
    orderBy?: HotelOrderByWithRelationInput | HotelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HotelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Hotels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Hotels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Hotels
    **/
    _count?: true | HotelCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HotelMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HotelMaxAggregateInputType
  }

  export type GetHotelAggregateType<T extends HotelAggregateArgs> = {
        [P in keyof T & keyof AggregateHotel]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHotel[P]>
      : GetScalarType<T[P], AggregateHotel[P]>
  }




  export type HotelGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HotelWhereInput
    orderBy?: HotelOrderByWithAggregationInput | HotelOrderByWithAggregationInput[]
    by: HotelScalarFieldEnum[] | HotelScalarFieldEnum
    having?: HotelScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HotelCountAggregateInputType | true
    _min?: HotelMinAggregateInputType
    _max?: HotelMaxAggregateInputType
  }

  export type HotelGroupByOutputType = {
    id: string
    name: string
    country: string
    city: string
    address: string
    tenantId: string
    _count: HotelCountAggregateOutputType | null
    _min: HotelMinAggregateOutputType | null
    _max: HotelMaxAggregateOutputType | null
  }

  type GetHotelGroupByPayload<T extends HotelGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HotelGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HotelGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HotelGroupByOutputType[P]>
            : GetScalarType<T[P], HotelGroupByOutputType[P]>
        }
      >
    >


  export type HotelSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    country?: boolean
    city?: boolean
    address?: boolean
    tenantId?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    Guest?: boolean | Hotel$GuestArgs<ExtArgs>
    RoomType?: boolean | Hotel$RoomTypeArgs<ExtArgs>
    Room?: boolean | Hotel$RoomArgs<ExtArgs>
    Role?: boolean | Hotel$RoleArgs<ExtArgs>
    User?: boolean | Hotel$UserArgs<ExtArgs>
    Reservation?: boolean | Hotel$ReservationArgs<ExtArgs>
    Folio?: boolean | Hotel$FolioArgs<ExtArgs>
    POSOutlet?: boolean | Hotel$POSOutletArgs<ExtArgs>
    RatePlan?: boolean | Hotel$RatePlanArgs<ExtArgs>
    _count?: boolean | HotelCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["hotel"]>

  export type HotelSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    country?: boolean
    city?: boolean
    address?: boolean
    tenantId?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["hotel"]>

  export type HotelSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    country?: boolean
    city?: boolean
    address?: boolean
    tenantId?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["hotel"]>

  export type HotelSelectScalar = {
    id?: boolean
    name?: boolean
    country?: boolean
    city?: boolean
    address?: boolean
    tenantId?: boolean
  }

  export type HotelOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "country" | "city" | "address" | "tenantId", ExtArgs["result"]["hotel"]>
  export type HotelInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    Guest?: boolean | Hotel$GuestArgs<ExtArgs>
    RoomType?: boolean | Hotel$RoomTypeArgs<ExtArgs>
    Room?: boolean | Hotel$RoomArgs<ExtArgs>
    Role?: boolean | Hotel$RoleArgs<ExtArgs>
    User?: boolean | Hotel$UserArgs<ExtArgs>
    Reservation?: boolean | Hotel$ReservationArgs<ExtArgs>
    Folio?: boolean | Hotel$FolioArgs<ExtArgs>
    POSOutlet?: boolean | Hotel$POSOutletArgs<ExtArgs>
    RatePlan?: boolean | Hotel$RatePlanArgs<ExtArgs>
    _count?: boolean | HotelCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type HotelIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }
  export type HotelIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }

  export type $HotelPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Hotel"
    objects: {
      tenant: Prisma.$TenantPayload<ExtArgs>
      Guest: Prisma.$GuestPayload<ExtArgs>[]
      RoomType: Prisma.$RoomTypePayload<ExtArgs>[]
      Room: Prisma.$RoomPayload<ExtArgs>[]
      Role: Prisma.$RolePayload<ExtArgs>[]
      User: Prisma.$UserPayload<ExtArgs>[]
      Reservation: Prisma.$ReservationPayload<ExtArgs>[]
      Folio: Prisma.$FolioPayload<ExtArgs>[]
      POSOutlet: Prisma.$POSOutletPayload<ExtArgs>[]
      RatePlan: Prisma.$RatePlanPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      country: string
      city: string
      address: string
      tenantId: string
    }, ExtArgs["result"]["hotel"]>
    composites: {}
  }

  type HotelGetPayload<S extends boolean | null | undefined | HotelDefaultArgs> = $Result.GetResult<Prisma.$HotelPayload, S>

  type HotelCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<HotelFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HotelCountAggregateInputType | true
    }

  export interface HotelDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Hotel'], meta: { name: 'Hotel' } }
    /**
     * Find zero or one Hotel that matches the filter.
     * @param {HotelFindUniqueArgs} args - Arguments to find a Hotel
     * @example
     * // Get one Hotel
     * const hotel = await prisma.hotel.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HotelFindUniqueArgs>(args: SelectSubset<T, HotelFindUniqueArgs<ExtArgs>>): Prisma__HotelClient<$Result.GetResult<Prisma.$HotelPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Hotel that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HotelFindUniqueOrThrowArgs} args - Arguments to find a Hotel
     * @example
     * // Get one Hotel
     * const hotel = await prisma.hotel.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HotelFindUniqueOrThrowArgs>(args: SelectSubset<T, HotelFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HotelClient<$Result.GetResult<Prisma.$HotelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Hotel that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HotelFindFirstArgs} args - Arguments to find a Hotel
     * @example
     * // Get one Hotel
     * const hotel = await prisma.hotel.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HotelFindFirstArgs>(args?: SelectSubset<T, HotelFindFirstArgs<ExtArgs>>): Prisma__HotelClient<$Result.GetResult<Prisma.$HotelPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Hotel that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HotelFindFirstOrThrowArgs} args - Arguments to find a Hotel
     * @example
     * // Get one Hotel
     * const hotel = await prisma.hotel.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HotelFindFirstOrThrowArgs>(args?: SelectSubset<T, HotelFindFirstOrThrowArgs<ExtArgs>>): Prisma__HotelClient<$Result.GetResult<Prisma.$HotelPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Hotels that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HotelFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Hotels
     * const hotels = await prisma.hotel.findMany()
     * 
     * // Get first 10 Hotels
     * const hotels = await prisma.hotel.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const hotelWithIdOnly = await prisma.hotel.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends HotelFindManyArgs>(args?: SelectSubset<T, HotelFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HotelPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Hotel.
     * @param {HotelCreateArgs} args - Arguments to create a Hotel.
     * @example
     * // Create one Hotel
     * const Hotel = await prisma.hotel.create({
     *   data: {
     *     // ... data to create a Hotel
     *   }
     * })
     * 
     */
    create<T extends HotelCreateArgs>(args: SelectSubset<T, HotelCreateArgs<ExtArgs>>): Prisma__HotelClient<$Result.GetResult<Prisma.$HotelPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Hotels.
     * @param {HotelCreateManyArgs} args - Arguments to create many Hotels.
     * @example
     * // Create many Hotels
     * const hotel = await prisma.hotel.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HotelCreateManyArgs>(args?: SelectSubset<T, HotelCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Hotels and returns the data saved in the database.
     * @param {HotelCreateManyAndReturnArgs} args - Arguments to create many Hotels.
     * @example
     * // Create many Hotels
     * const hotel = await prisma.hotel.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Hotels and only return the `id`
     * const hotelWithIdOnly = await prisma.hotel.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends HotelCreateManyAndReturnArgs>(args?: SelectSubset<T, HotelCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HotelPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Hotel.
     * @param {HotelDeleteArgs} args - Arguments to delete one Hotel.
     * @example
     * // Delete one Hotel
     * const Hotel = await prisma.hotel.delete({
     *   where: {
     *     // ... filter to delete one Hotel
     *   }
     * })
     * 
     */
    delete<T extends HotelDeleteArgs>(args: SelectSubset<T, HotelDeleteArgs<ExtArgs>>): Prisma__HotelClient<$Result.GetResult<Prisma.$HotelPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Hotel.
     * @param {HotelUpdateArgs} args - Arguments to update one Hotel.
     * @example
     * // Update one Hotel
     * const hotel = await prisma.hotel.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HotelUpdateArgs>(args: SelectSubset<T, HotelUpdateArgs<ExtArgs>>): Prisma__HotelClient<$Result.GetResult<Prisma.$HotelPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Hotels.
     * @param {HotelDeleteManyArgs} args - Arguments to filter Hotels to delete.
     * @example
     * // Delete a few Hotels
     * const { count } = await prisma.hotel.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HotelDeleteManyArgs>(args?: SelectSubset<T, HotelDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Hotels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HotelUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Hotels
     * const hotel = await prisma.hotel.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HotelUpdateManyArgs>(args: SelectSubset<T, HotelUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Hotels and returns the data updated in the database.
     * @param {HotelUpdateManyAndReturnArgs} args - Arguments to update many Hotels.
     * @example
     * // Update many Hotels
     * const hotel = await prisma.hotel.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Hotels and only return the `id`
     * const hotelWithIdOnly = await prisma.hotel.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends HotelUpdateManyAndReturnArgs>(args: SelectSubset<T, HotelUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HotelPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Hotel.
     * @param {HotelUpsertArgs} args - Arguments to update or create a Hotel.
     * @example
     * // Update or create a Hotel
     * const hotel = await prisma.hotel.upsert({
     *   create: {
     *     // ... data to create a Hotel
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Hotel we want to update
     *   }
     * })
     */
    upsert<T extends HotelUpsertArgs>(args: SelectSubset<T, HotelUpsertArgs<ExtArgs>>): Prisma__HotelClient<$Result.GetResult<Prisma.$HotelPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Hotels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HotelCountArgs} args - Arguments to filter Hotels to count.
     * @example
     * // Count the number of Hotels
     * const count = await prisma.hotel.count({
     *   where: {
     *     // ... the filter for the Hotels we want to count
     *   }
     * })
    **/
    count<T extends HotelCountArgs>(
      args?: Subset<T, HotelCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HotelCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Hotel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HotelAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends HotelAggregateArgs>(args: Subset<T, HotelAggregateArgs>): Prisma.PrismaPromise<GetHotelAggregateType<T>>

    /**
     * Group by Hotel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HotelGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends HotelGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HotelGroupByArgs['orderBy'] }
        : { orderBy?: HotelGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, HotelGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHotelGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Hotel model
   */
  readonly fields: HotelFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Hotel.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HotelClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tenant<T extends TenantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TenantDefaultArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Guest<T extends Hotel$GuestArgs<ExtArgs> = {}>(args?: Subset<T, Hotel$GuestArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GuestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    RoomType<T extends Hotel$RoomTypeArgs<ExtArgs> = {}>(args?: Subset<T, Hotel$RoomTypeArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomTypePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Room<T extends Hotel$RoomArgs<ExtArgs> = {}>(args?: Subset<T, Hotel$RoomArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Role<T extends Hotel$RoleArgs<ExtArgs> = {}>(args?: Subset<T, Hotel$RoleArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    User<T extends Hotel$UserArgs<ExtArgs> = {}>(args?: Subset<T, Hotel$UserArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Reservation<T extends Hotel$ReservationArgs<ExtArgs> = {}>(args?: Subset<T, Hotel$ReservationArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Folio<T extends Hotel$FolioArgs<ExtArgs> = {}>(args?: Subset<T, Hotel$FolioArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FolioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    POSOutlet<T extends Hotel$POSOutletArgs<ExtArgs> = {}>(args?: Subset<T, Hotel$POSOutletArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$POSOutletPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    RatePlan<T extends Hotel$RatePlanArgs<ExtArgs> = {}>(args?: Subset<T, Hotel$RatePlanArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RatePlanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Hotel model
   */
  interface HotelFieldRefs {
    readonly id: FieldRef<"Hotel", 'String'>
    readonly name: FieldRef<"Hotel", 'String'>
    readonly country: FieldRef<"Hotel", 'String'>
    readonly city: FieldRef<"Hotel", 'String'>
    readonly address: FieldRef<"Hotel", 'String'>
    readonly tenantId: FieldRef<"Hotel", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Hotel findUnique
   */
  export type HotelFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hotel
     */
    select?: HotelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hotel
     */
    omit?: HotelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HotelInclude<ExtArgs> | null
    /**
     * Filter, which Hotel to fetch.
     */
    where: HotelWhereUniqueInput
  }

  /**
   * Hotel findUniqueOrThrow
   */
  export type HotelFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hotel
     */
    select?: HotelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hotel
     */
    omit?: HotelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HotelInclude<ExtArgs> | null
    /**
     * Filter, which Hotel to fetch.
     */
    where: HotelWhereUniqueInput
  }

  /**
   * Hotel findFirst
   */
  export type HotelFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hotel
     */
    select?: HotelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hotel
     */
    omit?: HotelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HotelInclude<ExtArgs> | null
    /**
     * Filter, which Hotel to fetch.
     */
    where?: HotelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Hotels to fetch.
     */
    orderBy?: HotelOrderByWithRelationInput | HotelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Hotels.
     */
    cursor?: HotelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Hotels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Hotels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Hotels.
     */
    distinct?: HotelScalarFieldEnum | HotelScalarFieldEnum[]
  }

  /**
   * Hotel findFirstOrThrow
   */
  export type HotelFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hotel
     */
    select?: HotelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hotel
     */
    omit?: HotelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HotelInclude<ExtArgs> | null
    /**
     * Filter, which Hotel to fetch.
     */
    where?: HotelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Hotels to fetch.
     */
    orderBy?: HotelOrderByWithRelationInput | HotelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Hotels.
     */
    cursor?: HotelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Hotels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Hotels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Hotels.
     */
    distinct?: HotelScalarFieldEnum | HotelScalarFieldEnum[]
  }

  /**
   * Hotel findMany
   */
  export type HotelFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hotel
     */
    select?: HotelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hotel
     */
    omit?: HotelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HotelInclude<ExtArgs> | null
    /**
     * Filter, which Hotels to fetch.
     */
    where?: HotelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Hotels to fetch.
     */
    orderBy?: HotelOrderByWithRelationInput | HotelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Hotels.
     */
    cursor?: HotelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Hotels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Hotels.
     */
    skip?: number
    distinct?: HotelScalarFieldEnum | HotelScalarFieldEnum[]
  }

  /**
   * Hotel create
   */
  export type HotelCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hotel
     */
    select?: HotelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hotel
     */
    omit?: HotelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HotelInclude<ExtArgs> | null
    /**
     * The data needed to create a Hotel.
     */
    data: XOR<HotelCreateInput, HotelUncheckedCreateInput>
  }

  /**
   * Hotel createMany
   */
  export type HotelCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Hotels.
     */
    data: HotelCreateManyInput | HotelCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Hotel createManyAndReturn
   */
  export type HotelCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hotel
     */
    select?: HotelSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Hotel
     */
    omit?: HotelOmit<ExtArgs> | null
    /**
     * The data used to create many Hotels.
     */
    data: HotelCreateManyInput | HotelCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HotelIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Hotel update
   */
  export type HotelUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hotel
     */
    select?: HotelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hotel
     */
    omit?: HotelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HotelInclude<ExtArgs> | null
    /**
     * The data needed to update a Hotel.
     */
    data: XOR<HotelUpdateInput, HotelUncheckedUpdateInput>
    /**
     * Choose, which Hotel to update.
     */
    where: HotelWhereUniqueInput
  }

  /**
   * Hotel updateMany
   */
  export type HotelUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Hotels.
     */
    data: XOR<HotelUpdateManyMutationInput, HotelUncheckedUpdateManyInput>
    /**
     * Filter which Hotels to update
     */
    where?: HotelWhereInput
    /**
     * Limit how many Hotels to update.
     */
    limit?: number
  }

  /**
   * Hotel updateManyAndReturn
   */
  export type HotelUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hotel
     */
    select?: HotelSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Hotel
     */
    omit?: HotelOmit<ExtArgs> | null
    /**
     * The data used to update Hotels.
     */
    data: XOR<HotelUpdateManyMutationInput, HotelUncheckedUpdateManyInput>
    /**
     * Filter which Hotels to update
     */
    where?: HotelWhereInput
    /**
     * Limit how many Hotels to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HotelIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Hotel upsert
   */
  export type HotelUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hotel
     */
    select?: HotelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hotel
     */
    omit?: HotelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HotelInclude<ExtArgs> | null
    /**
     * The filter to search for the Hotel to update in case it exists.
     */
    where: HotelWhereUniqueInput
    /**
     * In case the Hotel found by the `where` argument doesn't exist, create a new Hotel with this data.
     */
    create: XOR<HotelCreateInput, HotelUncheckedCreateInput>
    /**
     * In case the Hotel was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HotelUpdateInput, HotelUncheckedUpdateInput>
  }

  /**
   * Hotel delete
   */
  export type HotelDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hotel
     */
    select?: HotelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hotel
     */
    omit?: HotelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HotelInclude<ExtArgs> | null
    /**
     * Filter which Hotel to delete.
     */
    where: HotelWhereUniqueInput
  }

  /**
   * Hotel deleteMany
   */
  export type HotelDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Hotels to delete
     */
    where?: HotelWhereInput
    /**
     * Limit how many Hotels to delete.
     */
    limit?: number
  }

  /**
   * Hotel.Guest
   */
  export type Hotel$GuestArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guest
     */
    select?: GuestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guest
     */
    omit?: GuestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuestInclude<ExtArgs> | null
    where?: GuestWhereInput
    orderBy?: GuestOrderByWithRelationInput | GuestOrderByWithRelationInput[]
    cursor?: GuestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GuestScalarFieldEnum | GuestScalarFieldEnum[]
  }

  /**
   * Hotel.RoomType
   */
  export type Hotel$RoomTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomType
     */
    select?: RoomTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomType
     */
    omit?: RoomTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomTypeInclude<ExtArgs> | null
    where?: RoomTypeWhereInput
    orderBy?: RoomTypeOrderByWithRelationInput | RoomTypeOrderByWithRelationInput[]
    cursor?: RoomTypeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RoomTypeScalarFieldEnum | RoomTypeScalarFieldEnum[]
  }

  /**
   * Hotel.Room
   */
  export type Hotel$RoomArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    where?: RoomWhereInput
    orderBy?: RoomOrderByWithRelationInput | RoomOrderByWithRelationInput[]
    cursor?: RoomWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RoomScalarFieldEnum | RoomScalarFieldEnum[]
  }

  /**
   * Hotel.Role
   */
  export type Hotel$RoleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    where?: RoleWhereInput
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    cursor?: RoleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Hotel.User
   */
  export type Hotel$UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Hotel.Reservation
   */
  export type Hotel$ReservationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservation
     */
    omit?: ReservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
    where?: ReservationWhereInput
    orderBy?: ReservationOrderByWithRelationInput | ReservationOrderByWithRelationInput[]
    cursor?: ReservationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReservationScalarFieldEnum | ReservationScalarFieldEnum[]
  }

  /**
   * Hotel.Folio
   */
  export type Hotel$FolioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Folio
     */
    select?: FolioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Folio
     */
    omit?: FolioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FolioInclude<ExtArgs> | null
    where?: FolioWhereInput
    orderBy?: FolioOrderByWithRelationInput | FolioOrderByWithRelationInput[]
    cursor?: FolioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FolioScalarFieldEnum | FolioScalarFieldEnum[]
  }

  /**
   * Hotel.POSOutlet
   */
  export type Hotel$POSOutletArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the POSOutlet
     */
    select?: POSOutletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the POSOutlet
     */
    omit?: POSOutletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: POSOutletInclude<ExtArgs> | null
    where?: POSOutletWhereInput
    orderBy?: POSOutletOrderByWithRelationInput | POSOutletOrderByWithRelationInput[]
    cursor?: POSOutletWhereUniqueInput
    take?: number
    skip?: number
    distinct?: POSOutletScalarFieldEnum | POSOutletScalarFieldEnum[]
  }

  /**
   * Hotel.RatePlan
   */
  export type Hotel$RatePlanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RatePlan
     */
    select?: RatePlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RatePlan
     */
    omit?: RatePlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatePlanInclude<ExtArgs> | null
    where?: RatePlanWhereInput
    orderBy?: RatePlanOrderByWithRelationInput | RatePlanOrderByWithRelationInput[]
    cursor?: RatePlanWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RatePlanScalarFieldEnum | RatePlanScalarFieldEnum[]
  }

  /**
   * Hotel without action
   */
  export type HotelDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hotel
     */
    select?: HotelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hotel
     */
    omit?: HotelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HotelInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    passwordHash: string | null
    firstName: string | null
    lastName: string | null
    tenantId: string | null
    isActive: boolean | null
    hotelId: string | null
    roleId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    passwordHash: string | null
    firstName: string | null
    lastName: string | null
    tenantId: string | null
    isActive: boolean | null
    hotelId: string | null
    roleId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    passwordHash: number
    firstName: number
    lastName: number
    tenantId: number
    isActive: number
    hotelId: number
    roleId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    firstName?: true
    lastName?: true
    tenantId?: true
    isActive?: true
    hotelId?: true
    roleId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    firstName?: true
    lastName?: true
    tenantId?: true
    isActive?: true
    hotelId?: true
    roleId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    firstName?: true
    lastName?: true
    tenantId?: true
    isActive?: true
    hotelId?: true
    roleId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    passwordHash: string
    firstName: string
    lastName: string
    tenantId: string
    isActive: boolean
    hotelId: string
    roleId: string
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    firstName?: boolean
    lastName?: boolean
    tenantId?: boolean
    isActive?: boolean
    hotelId?: boolean
    roleId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    hotel?: boolean | HotelDefaultArgs<ExtArgs>
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    firstName?: boolean
    lastName?: boolean
    tenantId?: boolean
    isActive?: boolean
    hotelId?: boolean
    roleId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    hotel?: boolean | HotelDefaultArgs<ExtArgs>
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    firstName?: boolean
    lastName?: boolean
    tenantId?: boolean
    isActive?: boolean
    hotelId?: boolean
    roleId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    hotel?: boolean | HotelDefaultArgs<ExtArgs>
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    firstName?: boolean
    lastName?: boolean
    tenantId?: boolean
    isActive?: boolean
    hotelId?: boolean
    roleId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "passwordHash" | "firstName" | "lastName" | "tenantId" | "isActive" | "hotelId" | "roleId" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    hotel?: boolean | HotelDefaultArgs<ExtArgs>
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    hotel?: boolean | HotelDefaultArgs<ExtArgs>
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    hotel?: boolean | HotelDefaultArgs<ExtArgs>
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      tenant: Prisma.$TenantPayload<ExtArgs>
      hotel: Prisma.$HotelPayload<ExtArgs>
      role: Prisma.$RolePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      passwordHash: string
      firstName: string
      lastName: string
      tenantId: string
      isActive: boolean
      hotelId: string
      roleId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tenant<T extends TenantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TenantDefaultArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    hotel<T extends HotelDefaultArgs<ExtArgs> = {}>(args?: Subset<T, HotelDefaultArgs<ExtArgs>>): Prisma__HotelClient<$Result.GetResult<Prisma.$HotelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    role<T extends RoleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RoleDefaultArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly passwordHash: FieldRef<"User", 'String'>
    readonly firstName: FieldRef<"User", 'String'>
    readonly lastName: FieldRef<"User", 'String'>
    readonly tenantId: FieldRef<"User", 'String'>
    readonly isActive: FieldRef<"User", 'Boolean'>
    readonly hotelId: FieldRef<"User", 'String'>
    readonly roleId: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Role
   */

  export type AggregateRole = {
    _count: RoleCountAggregateOutputType | null
    _min: RoleMinAggregateOutputType | null
    _max: RoleMaxAggregateOutputType | null
  }

  export type RoleMinAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
    tenantId: string | null
    hotelId: string | null
  }

  export type RoleMaxAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
    tenantId: string | null
    hotelId: string | null
  }

  export type RoleCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    updatedAt: number
    tenantId: number
    hotelId: number
    _all: number
  }


  export type RoleMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    tenantId?: true
    hotelId?: true
  }

  export type RoleMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    tenantId?: true
    hotelId?: true
  }

  export type RoleCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    tenantId?: true
    hotelId?: true
    _all?: true
  }

  export type RoleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Role to aggregate.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Roles
    **/
    _count?: true | RoleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoleMaxAggregateInputType
  }

  export type GetRoleAggregateType<T extends RoleAggregateArgs> = {
        [P in keyof T & keyof AggregateRole]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRole[P]>
      : GetScalarType<T[P], AggregateRole[P]>
  }




  export type RoleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoleWhereInput
    orderBy?: RoleOrderByWithAggregationInput | RoleOrderByWithAggregationInput[]
    by: RoleScalarFieldEnum[] | RoleScalarFieldEnum
    having?: RoleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoleCountAggregateInputType | true
    _min?: RoleMinAggregateInputType
    _max?: RoleMaxAggregateInputType
  }

  export type RoleGroupByOutputType = {
    id: string
    name: string
    createdAt: Date
    updatedAt: Date
    tenantId: string
    hotelId: string
    _count: RoleCountAggregateOutputType | null
    _min: RoleMinAggregateOutputType | null
    _max: RoleMaxAggregateOutputType | null
  }

  type GetRoleGroupByPayload<T extends RoleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoleGroupByOutputType[P]>
            : GetScalarType<T[P], RoleGroupByOutputType[P]>
        }
      >
    >


  export type RoleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tenantId?: boolean
    hotelId?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    hotel?: boolean | HotelDefaultArgs<ExtArgs>
    Users?: boolean | Role$UsersArgs<ExtArgs>
    permissions?: boolean | Role$permissionsArgs<ExtArgs>
    _count?: boolean | RoleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["role"]>

  export type RoleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tenantId?: boolean
    hotelId?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    hotel?: boolean | HotelDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["role"]>

  export type RoleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tenantId?: boolean
    hotelId?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    hotel?: boolean | HotelDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["role"]>

  export type RoleSelectScalar = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tenantId?: boolean
    hotelId?: boolean
  }

  export type RoleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "createdAt" | "updatedAt" | "tenantId" | "hotelId", ExtArgs["result"]["role"]>
  export type RoleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    hotel?: boolean | HotelDefaultArgs<ExtArgs>
    Users?: boolean | Role$UsersArgs<ExtArgs>
    permissions?: boolean | Role$permissionsArgs<ExtArgs>
    _count?: boolean | RoleCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RoleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    hotel?: boolean | HotelDefaultArgs<ExtArgs>
  }
  export type RoleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    hotel?: boolean | HotelDefaultArgs<ExtArgs>
  }

  export type $RolePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Role"
    objects: {
      tenant: Prisma.$TenantPayload<ExtArgs>
      hotel: Prisma.$HotelPayload<ExtArgs>
      Users: Prisma.$UserPayload<ExtArgs>[]
      permissions: Prisma.$PermissionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      createdAt: Date
      updatedAt: Date
      tenantId: string
      hotelId: string
    }, ExtArgs["result"]["role"]>
    composites: {}
  }

  type RoleGetPayload<S extends boolean | null | undefined | RoleDefaultArgs> = $Result.GetResult<Prisma.$RolePayload, S>

  type RoleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RoleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RoleCountAggregateInputType | true
    }

  export interface RoleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Role'], meta: { name: 'Role' } }
    /**
     * Find zero or one Role that matches the filter.
     * @param {RoleFindUniqueArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RoleFindUniqueArgs>(args: SelectSubset<T, RoleFindUniqueArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Role that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RoleFindUniqueOrThrowArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RoleFindUniqueOrThrowArgs>(args: SelectSubset<T, RoleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Role that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindFirstArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RoleFindFirstArgs>(args?: SelectSubset<T, RoleFindFirstArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Role that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindFirstOrThrowArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RoleFindFirstOrThrowArgs>(args?: SelectSubset<T, RoleFindFirstOrThrowArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Roles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Roles
     * const roles = await prisma.role.findMany()
     * 
     * // Get first 10 Roles
     * const roles = await prisma.role.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const roleWithIdOnly = await prisma.role.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RoleFindManyArgs>(args?: SelectSubset<T, RoleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Role.
     * @param {RoleCreateArgs} args - Arguments to create a Role.
     * @example
     * // Create one Role
     * const Role = await prisma.role.create({
     *   data: {
     *     // ... data to create a Role
     *   }
     * })
     * 
     */
    create<T extends RoleCreateArgs>(args: SelectSubset<T, RoleCreateArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Roles.
     * @param {RoleCreateManyArgs} args - Arguments to create many Roles.
     * @example
     * // Create many Roles
     * const role = await prisma.role.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RoleCreateManyArgs>(args?: SelectSubset<T, RoleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Roles and returns the data saved in the database.
     * @param {RoleCreateManyAndReturnArgs} args - Arguments to create many Roles.
     * @example
     * // Create many Roles
     * const role = await prisma.role.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Roles and only return the `id`
     * const roleWithIdOnly = await prisma.role.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RoleCreateManyAndReturnArgs>(args?: SelectSubset<T, RoleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Role.
     * @param {RoleDeleteArgs} args - Arguments to delete one Role.
     * @example
     * // Delete one Role
     * const Role = await prisma.role.delete({
     *   where: {
     *     // ... filter to delete one Role
     *   }
     * })
     * 
     */
    delete<T extends RoleDeleteArgs>(args: SelectSubset<T, RoleDeleteArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Role.
     * @param {RoleUpdateArgs} args - Arguments to update one Role.
     * @example
     * // Update one Role
     * const role = await prisma.role.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RoleUpdateArgs>(args: SelectSubset<T, RoleUpdateArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Roles.
     * @param {RoleDeleteManyArgs} args - Arguments to filter Roles to delete.
     * @example
     * // Delete a few Roles
     * const { count } = await prisma.role.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RoleDeleteManyArgs>(args?: SelectSubset<T, RoleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Roles
     * const role = await prisma.role.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RoleUpdateManyArgs>(args: SelectSubset<T, RoleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roles and returns the data updated in the database.
     * @param {RoleUpdateManyAndReturnArgs} args - Arguments to update many Roles.
     * @example
     * // Update many Roles
     * const role = await prisma.role.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Roles and only return the `id`
     * const roleWithIdOnly = await prisma.role.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RoleUpdateManyAndReturnArgs>(args: SelectSubset<T, RoleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Role.
     * @param {RoleUpsertArgs} args - Arguments to update or create a Role.
     * @example
     * // Update or create a Role
     * const role = await prisma.role.upsert({
     *   create: {
     *     // ... data to create a Role
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Role we want to update
     *   }
     * })
     */
    upsert<T extends RoleUpsertArgs>(args: SelectSubset<T, RoleUpsertArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleCountArgs} args - Arguments to filter Roles to count.
     * @example
     * // Count the number of Roles
     * const count = await prisma.role.count({
     *   where: {
     *     // ... the filter for the Roles we want to count
     *   }
     * })
    **/
    count<T extends RoleCountArgs>(
      args?: Subset<T, RoleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RoleAggregateArgs>(args: Subset<T, RoleAggregateArgs>): Prisma.PrismaPromise<GetRoleAggregateType<T>>

    /**
     * Group by Role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RoleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoleGroupByArgs['orderBy'] }
        : { orderBy?: RoleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RoleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Role model
   */
  readonly fields: RoleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Role.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RoleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tenant<T extends TenantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TenantDefaultArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    hotel<T extends HotelDefaultArgs<ExtArgs> = {}>(args?: Subset<T, HotelDefaultArgs<ExtArgs>>): Prisma__HotelClient<$Result.GetResult<Prisma.$HotelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Users<T extends Role$UsersArgs<ExtArgs> = {}>(args?: Subset<T, Role$UsersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    permissions<T extends Role$permissionsArgs<ExtArgs> = {}>(args?: Subset<T, Role$permissionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Role model
   */
  interface RoleFieldRefs {
    readonly id: FieldRef<"Role", 'String'>
    readonly name: FieldRef<"Role", 'String'>
    readonly createdAt: FieldRef<"Role", 'DateTime'>
    readonly updatedAt: FieldRef<"Role", 'DateTime'>
    readonly tenantId: FieldRef<"Role", 'String'>
    readonly hotelId: FieldRef<"Role", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Role findUnique
   */
  export type RoleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role findUniqueOrThrow
   */
  export type RoleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role findFirst
   */
  export type RoleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roles.
     */
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role findFirstOrThrow
   */
  export type RoleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roles.
     */
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role findMany
   */
  export type RoleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Roles to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role create
   */
  export type RoleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The data needed to create a Role.
     */
    data: XOR<RoleCreateInput, RoleUncheckedCreateInput>
  }

  /**
   * Role createMany
   */
  export type RoleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Roles.
     */
    data: RoleCreateManyInput | RoleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Role createManyAndReturn
   */
  export type RoleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * The data used to create many Roles.
     */
    data: RoleCreateManyInput | RoleCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Role update
   */
  export type RoleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The data needed to update a Role.
     */
    data: XOR<RoleUpdateInput, RoleUncheckedUpdateInput>
    /**
     * Choose, which Role to update.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role updateMany
   */
  export type RoleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Roles.
     */
    data: XOR<RoleUpdateManyMutationInput, RoleUncheckedUpdateManyInput>
    /**
     * Filter which Roles to update
     */
    where?: RoleWhereInput
    /**
     * Limit how many Roles to update.
     */
    limit?: number
  }

  /**
   * Role updateManyAndReturn
   */
  export type RoleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * The data used to update Roles.
     */
    data: XOR<RoleUpdateManyMutationInput, RoleUncheckedUpdateManyInput>
    /**
     * Filter which Roles to update
     */
    where?: RoleWhereInput
    /**
     * Limit how many Roles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Role upsert
   */
  export type RoleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The filter to search for the Role to update in case it exists.
     */
    where: RoleWhereUniqueInput
    /**
     * In case the Role found by the `where` argument doesn't exist, create a new Role with this data.
     */
    create: XOR<RoleCreateInput, RoleUncheckedCreateInput>
    /**
     * In case the Role was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoleUpdateInput, RoleUncheckedUpdateInput>
  }

  /**
   * Role delete
   */
  export type RoleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter which Role to delete.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role deleteMany
   */
  export type RoleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Roles to delete
     */
    where?: RoleWhereInput
    /**
     * Limit how many Roles to delete.
     */
    limit?: number
  }

  /**
   * Role.Users
   */
  export type Role$UsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Role.permissions
   */
  export type Role$permissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permission
     */
    omit?: PermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionInclude<ExtArgs> | null
    where?: PermissionWhereInput
    orderBy?: PermissionOrderByWithRelationInput | PermissionOrderByWithRelationInput[]
    cursor?: PermissionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PermissionScalarFieldEnum | PermissionScalarFieldEnum[]
  }

  /**
   * Role without action
   */
  export type RoleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
  }


  /**
   * Model Permission
   */

  export type AggregatePermission = {
    _count: PermissionCountAggregateOutputType | null
    _min: PermissionMinAggregateOutputType | null
    _max: PermissionMaxAggregateOutputType | null
  }

  export type PermissionMinAggregateOutputType = {
    id: string | null
    subject: string | null
    action: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PermissionMaxAggregateOutputType = {
    id: string | null
    subject: string | null
    action: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PermissionCountAggregateOutputType = {
    id: number
    subject: number
    action: number
    conditions: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PermissionMinAggregateInputType = {
    id?: true
    subject?: true
    action?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PermissionMaxAggregateInputType = {
    id?: true
    subject?: true
    action?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PermissionCountAggregateInputType = {
    id?: true
    subject?: true
    action?: true
    conditions?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PermissionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Permission to aggregate.
     */
    where?: PermissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Permissions to fetch.
     */
    orderBy?: PermissionOrderByWithRelationInput | PermissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PermissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Permissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Permissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Permissions
    **/
    _count?: true | PermissionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PermissionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PermissionMaxAggregateInputType
  }

  export type GetPermissionAggregateType<T extends PermissionAggregateArgs> = {
        [P in keyof T & keyof AggregatePermission]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePermission[P]>
      : GetScalarType<T[P], AggregatePermission[P]>
  }




  export type PermissionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PermissionWhereInput
    orderBy?: PermissionOrderByWithAggregationInput | PermissionOrderByWithAggregationInput[]
    by: PermissionScalarFieldEnum[] | PermissionScalarFieldEnum
    having?: PermissionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PermissionCountAggregateInputType | true
    _min?: PermissionMinAggregateInputType
    _max?: PermissionMaxAggregateInputType
  }

  export type PermissionGroupByOutputType = {
    id: string
    subject: string
    action: string
    conditions: JsonValue | null
    createdAt: Date
    updatedAt: Date
    _count: PermissionCountAggregateOutputType | null
    _min: PermissionMinAggregateOutputType | null
    _max: PermissionMaxAggregateOutputType | null
  }

  type GetPermissionGroupByPayload<T extends PermissionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PermissionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PermissionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PermissionGroupByOutputType[P]>
            : GetScalarType<T[P], PermissionGroupByOutputType[P]>
        }
      >
    >


  export type PermissionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    subject?: boolean
    action?: boolean
    conditions?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    roles?: boolean | Permission$rolesArgs<ExtArgs>
    _count?: boolean | PermissionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["permission"]>

  export type PermissionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    subject?: boolean
    action?: boolean
    conditions?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["permission"]>

  export type PermissionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    subject?: boolean
    action?: boolean
    conditions?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["permission"]>

  export type PermissionSelectScalar = {
    id?: boolean
    subject?: boolean
    action?: boolean
    conditions?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PermissionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "subject" | "action" | "conditions" | "createdAt" | "updatedAt", ExtArgs["result"]["permission"]>
  export type PermissionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    roles?: boolean | Permission$rolesArgs<ExtArgs>
    _count?: boolean | PermissionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PermissionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type PermissionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PermissionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Permission"
    objects: {
      roles: Prisma.$RolePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      subject: string
      action: string
      conditions: Prisma.JsonValue | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["permission"]>
    composites: {}
  }

  type PermissionGetPayload<S extends boolean | null | undefined | PermissionDefaultArgs> = $Result.GetResult<Prisma.$PermissionPayload, S>

  type PermissionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PermissionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PermissionCountAggregateInputType | true
    }

  export interface PermissionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Permission'], meta: { name: 'Permission' } }
    /**
     * Find zero or one Permission that matches the filter.
     * @param {PermissionFindUniqueArgs} args - Arguments to find a Permission
     * @example
     * // Get one Permission
     * const permission = await prisma.permission.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PermissionFindUniqueArgs>(args: SelectSubset<T, PermissionFindUniqueArgs<ExtArgs>>): Prisma__PermissionClient<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Permission that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PermissionFindUniqueOrThrowArgs} args - Arguments to find a Permission
     * @example
     * // Get one Permission
     * const permission = await prisma.permission.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PermissionFindUniqueOrThrowArgs>(args: SelectSubset<T, PermissionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PermissionClient<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Permission that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionFindFirstArgs} args - Arguments to find a Permission
     * @example
     * // Get one Permission
     * const permission = await prisma.permission.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PermissionFindFirstArgs>(args?: SelectSubset<T, PermissionFindFirstArgs<ExtArgs>>): Prisma__PermissionClient<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Permission that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionFindFirstOrThrowArgs} args - Arguments to find a Permission
     * @example
     * // Get one Permission
     * const permission = await prisma.permission.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PermissionFindFirstOrThrowArgs>(args?: SelectSubset<T, PermissionFindFirstOrThrowArgs<ExtArgs>>): Prisma__PermissionClient<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Permissions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Permissions
     * const permissions = await prisma.permission.findMany()
     * 
     * // Get first 10 Permissions
     * const permissions = await prisma.permission.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const permissionWithIdOnly = await prisma.permission.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PermissionFindManyArgs>(args?: SelectSubset<T, PermissionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Permission.
     * @param {PermissionCreateArgs} args - Arguments to create a Permission.
     * @example
     * // Create one Permission
     * const Permission = await prisma.permission.create({
     *   data: {
     *     // ... data to create a Permission
     *   }
     * })
     * 
     */
    create<T extends PermissionCreateArgs>(args: SelectSubset<T, PermissionCreateArgs<ExtArgs>>): Prisma__PermissionClient<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Permissions.
     * @param {PermissionCreateManyArgs} args - Arguments to create many Permissions.
     * @example
     * // Create many Permissions
     * const permission = await prisma.permission.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PermissionCreateManyArgs>(args?: SelectSubset<T, PermissionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Permissions and returns the data saved in the database.
     * @param {PermissionCreateManyAndReturnArgs} args - Arguments to create many Permissions.
     * @example
     * // Create many Permissions
     * const permission = await prisma.permission.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Permissions and only return the `id`
     * const permissionWithIdOnly = await prisma.permission.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PermissionCreateManyAndReturnArgs>(args?: SelectSubset<T, PermissionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Permission.
     * @param {PermissionDeleteArgs} args - Arguments to delete one Permission.
     * @example
     * // Delete one Permission
     * const Permission = await prisma.permission.delete({
     *   where: {
     *     // ... filter to delete one Permission
     *   }
     * })
     * 
     */
    delete<T extends PermissionDeleteArgs>(args: SelectSubset<T, PermissionDeleteArgs<ExtArgs>>): Prisma__PermissionClient<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Permission.
     * @param {PermissionUpdateArgs} args - Arguments to update one Permission.
     * @example
     * // Update one Permission
     * const permission = await prisma.permission.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PermissionUpdateArgs>(args: SelectSubset<T, PermissionUpdateArgs<ExtArgs>>): Prisma__PermissionClient<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Permissions.
     * @param {PermissionDeleteManyArgs} args - Arguments to filter Permissions to delete.
     * @example
     * // Delete a few Permissions
     * const { count } = await prisma.permission.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PermissionDeleteManyArgs>(args?: SelectSubset<T, PermissionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Permissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Permissions
     * const permission = await prisma.permission.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PermissionUpdateManyArgs>(args: SelectSubset<T, PermissionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Permissions and returns the data updated in the database.
     * @param {PermissionUpdateManyAndReturnArgs} args - Arguments to update many Permissions.
     * @example
     * // Update many Permissions
     * const permission = await prisma.permission.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Permissions and only return the `id`
     * const permissionWithIdOnly = await prisma.permission.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PermissionUpdateManyAndReturnArgs>(args: SelectSubset<T, PermissionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Permission.
     * @param {PermissionUpsertArgs} args - Arguments to update or create a Permission.
     * @example
     * // Update or create a Permission
     * const permission = await prisma.permission.upsert({
     *   create: {
     *     // ... data to create a Permission
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Permission we want to update
     *   }
     * })
     */
    upsert<T extends PermissionUpsertArgs>(args: SelectSubset<T, PermissionUpsertArgs<ExtArgs>>): Prisma__PermissionClient<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Permissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionCountArgs} args - Arguments to filter Permissions to count.
     * @example
     * // Count the number of Permissions
     * const count = await prisma.permission.count({
     *   where: {
     *     // ... the filter for the Permissions we want to count
     *   }
     * })
    **/
    count<T extends PermissionCountArgs>(
      args?: Subset<T, PermissionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PermissionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Permission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PermissionAggregateArgs>(args: Subset<T, PermissionAggregateArgs>): Prisma.PrismaPromise<GetPermissionAggregateType<T>>

    /**
     * Group by Permission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PermissionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PermissionGroupByArgs['orderBy'] }
        : { orderBy?: PermissionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PermissionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPermissionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Permission model
   */
  readonly fields: PermissionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Permission.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PermissionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    roles<T extends Permission$rolesArgs<ExtArgs> = {}>(args?: Subset<T, Permission$rolesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Permission model
   */
  interface PermissionFieldRefs {
    readonly id: FieldRef<"Permission", 'String'>
    readonly subject: FieldRef<"Permission", 'String'>
    readonly action: FieldRef<"Permission", 'String'>
    readonly conditions: FieldRef<"Permission", 'Json'>
    readonly createdAt: FieldRef<"Permission", 'DateTime'>
    readonly updatedAt: FieldRef<"Permission", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Permission findUnique
   */
  export type PermissionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permission
     */
    omit?: PermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionInclude<ExtArgs> | null
    /**
     * Filter, which Permission to fetch.
     */
    where: PermissionWhereUniqueInput
  }

  /**
   * Permission findUniqueOrThrow
   */
  export type PermissionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permission
     */
    omit?: PermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionInclude<ExtArgs> | null
    /**
     * Filter, which Permission to fetch.
     */
    where: PermissionWhereUniqueInput
  }

  /**
   * Permission findFirst
   */
  export type PermissionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permission
     */
    omit?: PermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionInclude<ExtArgs> | null
    /**
     * Filter, which Permission to fetch.
     */
    where?: PermissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Permissions to fetch.
     */
    orderBy?: PermissionOrderByWithRelationInput | PermissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Permissions.
     */
    cursor?: PermissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Permissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Permissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Permissions.
     */
    distinct?: PermissionScalarFieldEnum | PermissionScalarFieldEnum[]
  }

  /**
   * Permission findFirstOrThrow
   */
  export type PermissionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permission
     */
    omit?: PermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionInclude<ExtArgs> | null
    /**
     * Filter, which Permission to fetch.
     */
    where?: PermissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Permissions to fetch.
     */
    orderBy?: PermissionOrderByWithRelationInput | PermissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Permissions.
     */
    cursor?: PermissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Permissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Permissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Permissions.
     */
    distinct?: PermissionScalarFieldEnum | PermissionScalarFieldEnum[]
  }

  /**
   * Permission findMany
   */
  export type PermissionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permission
     */
    omit?: PermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionInclude<ExtArgs> | null
    /**
     * Filter, which Permissions to fetch.
     */
    where?: PermissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Permissions to fetch.
     */
    orderBy?: PermissionOrderByWithRelationInput | PermissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Permissions.
     */
    cursor?: PermissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Permissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Permissions.
     */
    skip?: number
    distinct?: PermissionScalarFieldEnum | PermissionScalarFieldEnum[]
  }

  /**
   * Permission create
   */
  export type PermissionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permission
     */
    omit?: PermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionInclude<ExtArgs> | null
    /**
     * The data needed to create a Permission.
     */
    data: XOR<PermissionCreateInput, PermissionUncheckedCreateInput>
  }

  /**
   * Permission createMany
   */
  export type PermissionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Permissions.
     */
    data: PermissionCreateManyInput | PermissionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Permission createManyAndReturn
   */
  export type PermissionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Permission
     */
    omit?: PermissionOmit<ExtArgs> | null
    /**
     * The data used to create many Permissions.
     */
    data: PermissionCreateManyInput | PermissionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Permission update
   */
  export type PermissionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permission
     */
    omit?: PermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionInclude<ExtArgs> | null
    /**
     * The data needed to update a Permission.
     */
    data: XOR<PermissionUpdateInput, PermissionUncheckedUpdateInput>
    /**
     * Choose, which Permission to update.
     */
    where: PermissionWhereUniqueInput
  }

  /**
   * Permission updateMany
   */
  export type PermissionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Permissions.
     */
    data: XOR<PermissionUpdateManyMutationInput, PermissionUncheckedUpdateManyInput>
    /**
     * Filter which Permissions to update
     */
    where?: PermissionWhereInput
    /**
     * Limit how many Permissions to update.
     */
    limit?: number
  }

  /**
   * Permission updateManyAndReturn
   */
  export type PermissionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Permission
     */
    omit?: PermissionOmit<ExtArgs> | null
    /**
     * The data used to update Permissions.
     */
    data: XOR<PermissionUpdateManyMutationInput, PermissionUncheckedUpdateManyInput>
    /**
     * Filter which Permissions to update
     */
    where?: PermissionWhereInput
    /**
     * Limit how many Permissions to update.
     */
    limit?: number
  }

  /**
   * Permission upsert
   */
  export type PermissionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permission
     */
    omit?: PermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionInclude<ExtArgs> | null
    /**
     * The filter to search for the Permission to update in case it exists.
     */
    where: PermissionWhereUniqueInput
    /**
     * In case the Permission found by the `where` argument doesn't exist, create a new Permission with this data.
     */
    create: XOR<PermissionCreateInput, PermissionUncheckedCreateInput>
    /**
     * In case the Permission was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PermissionUpdateInput, PermissionUncheckedUpdateInput>
  }

  /**
   * Permission delete
   */
  export type PermissionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permission
     */
    omit?: PermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionInclude<ExtArgs> | null
    /**
     * Filter which Permission to delete.
     */
    where: PermissionWhereUniqueInput
  }

  /**
   * Permission deleteMany
   */
  export type PermissionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Permissions to delete
     */
    where?: PermissionWhereInput
    /**
     * Limit how many Permissions to delete.
     */
    limit?: number
  }

  /**
   * Permission.roles
   */
  export type Permission$rolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    where?: RoleWhereInput
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    cursor?: RoleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Permission without action
   */
  export type PermissionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permission
     */
    omit?: PermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionInclude<ExtArgs> | null
  }


  /**
   * Model Room
   */

  export type AggregateRoom = {
    _count: RoomCountAggregateOutputType | null
    _min: RoomMinAggregateOutputType | null
    _max: RoomMaxAggregateOutputType | null
  }

  export type RoomMinAggregateOutputType = {
    id: string | null
    roomNumber: string | null
    status: $Enums.RoomStatus | null
    roomTypeId: string | null
    tenantId: string | null
    hotelId: string | null
  }

  export type RoomMaxAggregateOutputType = {
    id: string | null
    roomNumber: string | null
    status: $Enums.RoomStatus | null
    roomTypeId: string | null
    tenantId: string | null
    hotelId: string | null
  }

  export type RoomCountAggregateOutputType = {
    id: number
    roomNumber: number
    status: number
    roomTypeId: number
    tenantId: number
    hotelId: number
    _all: number
  }


  export type RoomMinAggregateInputType = {
    id?: true
    roomNumber?: true
    status?: true
    roomTypeId?: true
    tenantId?: true
    hotelId?: true
  }

  export type RoomMaxAggregateInputType = {
    id?: true
    roomNumber?: true
    status?: true
    roomTypeId?: true
    tenantId?: true
    hotelId?: true
  }

  export type RoomCountAggregateInputType = {
    id?: true
    roomNumber?: true
    status?: true
    roomTypeId?: true
    tenantId?: true
    hotelId?: true
    _all?: true
  }

  export type RoomAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Room to aggregate.
     */
    where?: RoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rooms to fetch.
     */
    orderBy?: RoomOrderByWithRelationInput | RoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Rooms
    **/
    _count?: true | RoomCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoomMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoomMaxAggregateInputType
  }

  export type GetRoomAggregateType<T extends RoomAggregateArgs> = {
        [P in keyof T & keyof AggregateRoom]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRoom[P]>
      : GetScalarType<T[P], AggregateRoom[P]>
  }




  export type RoomGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoomWhereInput
    orderBy?: RoomOrderByWithAggregationInput | RoomOrderByWithAggregationInput[]
    by: RoomScalarFieldEnum[] | RoomScalarFieldEnum
    having?: RoomScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoomCountAggregateInputType | true
    _min?: RoomMinAggregateInputType
    _max?: RoomMaxAggregateInputType
  }

  export type RoomGroupByOutputType = {
    id: string
    roomNumber: string
    status: $Enums.RoomStatus
    roomTypeId: string
    tenantId: string
    hotelId: string
    _count: RoomCountAggregateOutputType | null
    _min: RoomMinAggregateOutputType | null
    _max: RoomMaxAggregateOutputType | null
  }

  type GetRoomGroupByPayload<T extends RoomGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoomGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoomGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoomGroupByOutputType[P]>
            : GetScalarType<T[P], RoomGroupByOutputType[P]>
        }
      >
    >


  export type RoomSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    roomNumber?: boolean
    status?: boolean
    roomTypeId?: boolean
    tenantId?: boolean
    hotelId?: boolean
    roomType?: boolean | RoomTypeDefaultArgs<ExtArgs>
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    hotel?: boolean | HotelDefaultArgs<ExtArgs>
    Reservation?: boolean | Room$ReservationArgs<ExtArgs>
    _count?: boolean | RoomCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["room"]>

  export type RoomSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    roomNumber?: boolean
    status?: boolean
    roomTypeId?: boolean
    tenantId?: boolean
    hotelId?: boolean
    roomType?: boolean | RoomTypeDefaultArgs<ExtArgs>
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    hotel?: boolean | HotelDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["room"]>

  export type RoomSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    roomNumber?: boolean
    status?: boolean
    roomTypeId?: boolean
    tenantId?: boolean
    hotelId?: boolean
    roomType?: boolean | RoomTypeDefaultArgs<ExtArgs>
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    hotel?: boolean | HotelDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["room"]>

  export type RoomSelectScalar = {
    id?: boolean
    roomNumber?: boolean
    status?: boolean
    roomTypeId?: boolean
    tenantId?: boolean
    hotelId?: boolean
  }

  export type RoomOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "roomNumber" | "status" | "roomTypeId" | "tenantId" | "hotelId", ExtArgs["result"]["room"]>
  export type RoomInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    roomType?: boolean | RoomTypeDefaultArgs<ExtArgs>
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    hotel?: boolean | HotelDefaultArgs<ExtArgs>
    Reservation?: boolean | Room$ReservationArgs<ExtArgs>
    _count?: boolean | RoomCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RoomIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    roomType?: boolean | RoomTypeDefaultArgs<ExtArgs>
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    hotel?: boolean | HotelDefaultArgs<ExtArgs>
  }
  export type RoomIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    roomType?: boolean | RoomTypeDefaultArgs<ExtArgs>
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    hotel?: boolean | HotelDefaultArgs<ExtArgs>
  }

  export type $RoomPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Room"
    objects: {
      roomType: Prisma.$RoomTypePayload<ExtArgs>
      tenant: Prisma.$TenantPayload<ExtArgs>
      hotel: Prisma.$HotelPayload<ExtArgs>
      Reservation: Prisma.$ReservationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      roomNumber: string
      status: $Enums.RoomStatus
      roomTypeId: string
      tenantId: string
      hotelId: string
    }, ExtArgs["result"]["room"]>
    composites: {}
  }

  type RoomGetPayload<S extends boolean | null | undefined | RoomDefaultArgs> = $Result.GetResult<Prisma.$RoomPayload, S>

  type RoomCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RoomFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RoomCountAggregateInputType | true
    }

  export interface RoomDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Room'], meta: { name: 'Room' } }
    /**
     * Find zero or one Room that matches the filter.
     * @param {RoomFindUniqueArgs} args - Arguments to find a Room
     * @example
     * // Get one Room
     * const room = await prisma.room.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RoomFindUniqueArgs>(args: SelectSubset<T, RoomFindUniqueArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Room that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RoomFindUniqueOrThrowArgs} args - Arguments to find a Room
     * @example
     * // Get one Room
     * const room = await prisma.room.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RoomFindUniqueOrThrowArgs>(args: SelectSubset<T, RoomFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Room that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomFindFirstArgs} args - Arguments to find a Room
     * @example
     * // Get one Room
     * const room = await prisma.room.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RoomFindFirstArgs>(args?: SelectSubset<T, RoomFindFirstArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Room that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomFindFirstOrThrowArgs} args - Arguments to find a Room
     * @example
     * // Get one Room
     * const room = await prisma.room.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RoomFindFirstOrThrowArgs>(args?: SelectSubset<T, RoomFindFirstOrThrowArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Rooms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Rooms
     * const rooms = await prisma.room.findMany()
     * 
     * // Get first 10 Rooms
     * const rooms = await prisma.room.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const roomWithIdOnly = await prisma.room.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RoomFindManyArgs>(args?: SelectSubset<T, RoomFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Room.
     * @param {RoomCreateArgs} args - Arguments to create a Room.
     * @example
     * // Create one Room
     * const Room = await prisma.room.create({
     *   data: {
     *     // ... data to create a Room
     *   }
     * })
     * 
     */
    create<T extends RoomCreateArgs>(args: SelectSubset<T, RoomCreateArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Rooms.
     * @param {RoomCreateManyArgs} args - Arguments to create many Rooms.
     * @example
     * // Create many Rooms
     * const room = await prisma.room.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RoomCreateManyArgs>(args?: SelectSubset<T, RoomCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Rooms and returns the data saved in the database.
     * @param {RoomCreateManyAndReturnArgs} args - Arguments to create many Rooms.
     * @example
     * // Create many Rooms
     * const room = await prisma.room.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Rooms and only return the `id`
     * const roomWithIdOnly = await prisma.room.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RoomCreateManyAndReturnArgs>(args?: SelectSubset<T, RoomCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Room.
     * @param {RoomDeleteArgs} args - Arguments to delete one Room.
     * @example
     * // Delete one Room
     * const Room = await prisma.room.delete({
     *   where: {
     *     // ... filter to delete one Room
     *   }
     * })
     * 
     */
    delete<T extends RoomDeleteArgs>(args: SelectSubset<T, RoomDeleteArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Room.
     * @param {RoomUpdateArgs} args - Arguments to update one Room.
     * @example
     * // Update one Room
     * const room = await prisma.room.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RoomUpdateArgs>(args: SelectSubset<T, RoomUpdateArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Rooms.
     * @param {RoomDeleteManyArgs} args - Arguments to filter Rooms to delete.
     * @example
     * // Delete a few Rooms
     * const { count } = await prisma.room.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RoomDeleteManyArgs>(args?: SelectSubset<T, RoomDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Rooms
     * const room = await prisma.room.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RoomUpdateManyArgs>(args: SelectSubset<T, RoomUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rooms and returns the data updated in the database.
     * @param {RoomUpdateManyAndReturnArgs} args - Arguments to update many Rooms.
     * @example
     * // Update many Rooms
     * const room = await prisma.room.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Rooms and only return the `id`
     * const roomWithIdOnly = await prisma.room.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RoomUpdateManyAndReturnArgs>(args: SelectSubset<T, RoomUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Room.
     * @param {RoomUpsertArgs} args - Arguments to update or create a Room.
     * @example
     * // Update or create a Room
     * const room = await prisma.room.upsert({
     *   create: {
     *     // ... data to create a Room
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Room we want to update
     *   }
     * })
     */
    upsert<T extends RoomUpsertArgs>(args: SelectSubset<T, RoomUpsertArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Rooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomCountArgs} args - Arguments to filter Rooms to count.
     * @example
     * // Count the number of Rooms
     * const count = await prisma.room.count({
     *   where: {
     *     // ... the filter for the Rooms we want to count
     *   }
     * })
    **/
    count<T extends RoomCountArgs>(
      args?: Subset<T, RoomCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoomCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Room.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RoomAggregateArgs>(args: Subset<T, RoomAggregateArgs>): Prisma.PrismaPromise<GetRoomAggregateType<T>>

    /**
     * Group by Room.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RoomGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoomGroupByArgs['orderBy'] }
        : { orderBy?: RoomGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RoomGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoomGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Room model
   */
  readonly fields: RoomFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Room.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RoomClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    roomType<T extends RoomTypeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RoomTypeDefaultArgs<ExtArgs>>): Prisma__RoomTypeClient<$Result.GetResult<Prisma.$RoomTypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tenant<T extends TenantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TenantDefaultArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    hotel<T extends HotelDefaultArgs<ExtArgs> = {}>(args?: Subset<T, HotelDefaultArgs<ExtArgs>>): Prisma__HotelClient<$Result.GetResult<Prisma.$HotelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Reservation<T extends Room$ReservationArgs<ExtArgs> = {}>(args?: Subset<T, Room$ReservationArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Room model
   */
  interface RoomFieldRefs {
    readonly id: FieldRef<"Room", 'String'>
    readonly roomNumber: FieldRef<"Room", 'String'>
    readonly status: FieldRef<"Room", 'RoomStatus'>
    readonly roomTypeId: FieldRef<"Room", 'String'>
    readonly tenantId: FieldRef<"Room", 'String'>
    readonly hotelId: FieldRef<"Room", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Room findUnique
   */
  export type RoomFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter, which Room to fetch.
     */
    where: RoomWhereUniqueInput
  }

  /**
   * Room findUniqueOrThrow
   */
  export type RoomFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter, which Room to fetch.
     */
    where: RoomWhereUniqueInput
  }

  /**
   * Room findFirst
   */
  export type RoomFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter, which Room to fetch.
     */
    where?: RoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rooms to fetch.
     */
    orderBy?: RoomOrderByWithRelationInput | RoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rooms.
     */
    cursor?: RoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rooms.
     */
    distinct?: RoomScalarFieldEnum | RoomScalarFieldEnum[]
  }

  /**
   * Room findFirstOrThrow
   */
  export type RoomFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter, which Room to fetch.
     */
    where?: RoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rooms to fetch.
     */
    orderBy?: RoomOrderByWithRelationInput | RoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rooms.
     */
    cursor?: RoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rooms.
     */
    distinct?: RoomScalarFieldEnum | RoomScalarFieldEnum[]
  }

  /**
   * Room findMany
   */
  export type RoomFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter, which Rooms to fetch.
     */
    where?: RoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rooms to fetch.
     */
    orderBy?: RoomOrderByWithRelationInput | RoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Rooms.
     */
    cursor?: RoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rooms.
     */
    skip?: number
    distinct?: RoomScalarFieldEnum | RoomScalarFieldEnum[]
  }

  /**
   * Room create
   */
  export type RoomCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * The data needed to create a Room.
     */
    data: XOR<RoomCreateInput, RoomUncheckedCreateInput>
  }

  /**
   * Room createMany
   */
  export type RoomCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Rooms.
     */
    data: RoomCreateManyInput | RoomCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Room createManyAndReturn
   */
  export type RoomCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * The data used to create many Rooms.
     */
    data: RoomCreateManyInput | RoomCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Room update
   */
  export type RoomUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * The data needed to update a Room.
     */
    data: XOR<RoomUpdateInput, RoomUncheckedUpdateInput>
    /**
     * Choose, which Room to update.
     */
    where: RoomWhereUniqueInput
  }

  /**
   * Room updateMany
   */
  export type RoomUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Rooms.
     */
    data: XOR<RoomUpdateManyMutationInput, RoomUncheckedUpdateManyInput>
    /**
     * Filter which Rooms to update
     */
    where?: RoomWhereInput
    /**
     * Limit how many Rooms to update.
     */
    limit?: number
  }

  /**
   * Room updateManyAndReturn
   */
  export type RoomUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * The data used to update Rooms.
     */
    data: XOR<RoomUpdateManyMutationInput, RoomUncheckedUpdateManyInput>
    /**
     * Filter which Rooms to update
     */
    where?: RoomWhereInput
    /**
     * Limit how many Rooms to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Room upsert
   */
  export type RoomUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * The filter to search for the Room to update in case it exists.
     */
    where: RoomWhereUniqueInput
    /**
     * In case the Room found by the `where` argument doesn't exist, create a new Room with this data.
     */
    create: XOR<RoomCreateInput, RoomUncheckedCreateInput>
    /**
     * In case the Room was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoomUpdateInput, RoomUncheckedUpdateInput>
  }

  /**
   * Room delete
   */
  export type RoomDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter which Room to delete.
     */
    where: RoomWhereUniqueInput
  }

  /**
   * Room deleteMany
   */
  export type RoomDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Rooms to delete
     */
    where?: RoomWhereInput
    /**
     * Limit how many Rooms to delete.
     */
    limit?: number
  }

  /**
   * Room.Reservation
   */
  export type Room$ReservationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservation
     */
    omit?: ReservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
    where?: ReservationWhereInput
    orderBy?: ReservationOrderByWithRelationInput | ReservationOrderByWithRelationInput[]
    cursor?: ReservationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReservationScalarFieldEnum | ReservationScalarFieldEnum[]
  }

  /**
   * Room without action
   */
  export type RoomDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
  }


  /**
   * Model RoomType
   */

  export type AggregateRoomType = {
    _count: RoomTypeCountAggregateOutputType | null
    _avg: RoomTypeAvgAggregateOutputType | null
    _sum: RoomTypeSumAggregateOutputType | null
    _min: RoomTypeMinAggregateOutputType | null
    _max: RoomTypeMaxAggregateOutputType | null
  }

  export type RoomTypeAvgAggregateOutputType = {
    baseRate: Decimal | null
  }

  export type RoomTypeSumAggregateOutputType = {
    baseRate: Decimal | null
  }

  export type RoomTypeMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    baseRate: Decimal | null
    createdAt: Date | null
    updatedAt: Date | null
    tenantId: string | null
    hotelId: string | null
  }

  export type RoomTypeMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    baseRate: Decimal | null
    createdAt: Date | null
    updatedAt: Date | null
    tenantId: string | null
    hotelId: string | null
  }

  export type RoomTypeCountAggregateOutputType = {
    id: number
    name: number
    description: number
    baseRate: number
    createdAt: number
    updatedAt: number
    tenantId: number
    hotelId: number
    _all: number
  }


  export type RoomTypeAvgAggregateInputType = {
    baseRate?: true
  }

  export type RoomTypeSumAggregateInputType = {
    baseRate?: true
  }

  export type RoomTypeMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    baseRate?: true
    createdAt?: true
    updatedAt?: true
    tenantId?: true
    hotelId?: true
  }

  export type RoomTypeMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    baseRate?: true
    createdAt?: true
    updatedAt?: true
    tenantId?: true
    hotelId?: true
  }

  export type RoomTypeCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    baseRate?: true
    createdAt?: true
    updatedAt?: true
    tenantId?: true
    hotelId?: true
    _all?: true
  }

  export type RoomTypeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RoomType to aggregate.
     */
    where?: RoomTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoomTypes to fetch.
     */
    orderBy?: RoomTypeOrderByWithRelationInput | RoomTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RoomTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoomTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoomTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RoomTypes
    **/
    _count?: true | RoomTypeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RoomTypeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RoomTypeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoomTypeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoomTypeMaxAggregateInputType
  }

  export type GetRoomTypeAggregateType<T extends RoomTypeAggregateArgs> = {
        [P in keyof T & keyof AggregateRoomType]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRoomType[P]>
      : GetScalarType<T[P], AggregateRoomType[P]>
  }




  export type RoomTypeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoomTypeWhereInput
    orderBy?: RoomTypeOrderByWithAggregationInput | RoomTypeOrderByWithAggregationInput[]
    by: RoomTypeScalarFieldEnum[] | RoomTypeScalarFieldEnum
    having?: RoomTypeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoomTypeCountAggregateInputType | true
    _avg?: RoomTypeAvgAggregateInputType
    _sum?: RoomTypeSumAggregateInputType
    _min?: RoomTypeMinAggregateInputType
    _max?: RoomTypeMaxAggregateInputType
  }

  export type RoomTypeGroupByOutputType = {
    id: string
    name: string
    description: string | null
    baseRate: Decimal
    createdAt: Date
    updatedAt: Date
    tenantId: string
    hotelId: string
    _count: RoomTypeCountAggregateOutputType | null
    _avg: RoomTypeAvgAggregateOutputType | null
    _sum: RoomTypeSumAggregateOutputType | null
    _min: RoomTypeMinAggregateOutputType | null
    _max: RoomTypeMaxAggregateOutputType | null
  }

  type GetRoomTypeGroupByPayload<T extends RoomTypeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoomTypeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoomTypeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoomTypeGroupByOutputType[P]>
            : GetScalarType<T[P], RoomTypeGroupByOutputType[P]>
        }
      >
    >


  export type RoomTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    baseRate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tenantId?: boolean
    hotelId?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    hotel?: boolean | HotelDefaultArgs<ExtArgs>
    Room?: boolean | RoomType$RoomArgs<ExtArgs>
    _count?: boolean | RoomTypeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["roomType"]>

  export type RoomTypeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    baseRate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tenantId?: boolean
    hotelId?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    hotel?: boolean | HotelDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["roomType"]>

  export type RoomTypeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    baseRate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tenantId?: boolean
    hotelId?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    hotel?: boolean | HotelDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["roomType"]>

  export type RoomTypeSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    baseRate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tenantId?: boolean
    hotelId?: boolean
  }

  export type RoomTypeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "baseRate" | "createdAt" | "updatedAt" | "tenantId" | "hotelId", ExtArgs["result"]["roomType"]>
  export type RoomTypeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    hotel?: boolean | HotelDefaultArgs<ExtArgs>
    Room?: boolean | RoomType$RoomArgs<ExtArgs>
    _count?: boolean | RoomTypeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RoomTypeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    hotel?: boolean | HotelDefaultArgs<ExtArgs>
  }
  export type RoomTypeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    hotel?: boolean | HotelDefaultArgs<ExtArgs>
  }

  export type $RoomTypePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RoomType"
    objects: {
      tenant: Prisma.$TenantPayload<ExtArgs>
      hotel: Prisma.$HotelPayload<ExtArgs>
      Room: Prisma.$RoomPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      baseRate: Prisma.Decimal
      createdAt: Date
      updatedAt: Date
      tenantId: string
      hotelId: string
    }, ExtArgs["result"]["roomType"]>
    composites: {}
  }

  type RoomTypeGetPayload<S extends boolean | null | undefined | RoomTypeDefaultArgs> = $Result.GetResult<Prisma.$RoomTypePayload, S>

  type RoomTypeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RoomTypeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RoomTypeCountAggregateInputType | true
    }

  export interface RoomTypeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RoomType'], meta: { name: 'RoomType' } }
    /**
     * Find zero or one RoomType that matches the filter.
     * @param {RoomTypeFindUniqueArgs} args - Arguments to find a RoomType
     * @example
     * // Get one RoomType
     * const roomType = await prisma.roomType.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RoomTypeFindUniqueArgs>(args: SelectSubset<T, RoomTypeFindUniqueArgs<ExtArgs>>): Prisma__RoomTypeClient<$Result.GetResult<Prisma.$RoomTypePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RoomType that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RoomTypeFindUniqueOrThrowArgs} args - Arguments to find a RoomType
     * @example
     * // Get one RoomType
     * const roomType = await prisma.roomType.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RoomTypeFindUniqueOrThrowArgs>(args: SelectSubset<T, RoomTypeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RoomTypeClient<$Result.GetResult<Prisma.$RoomTypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RoomType that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomTypeFindFirstArgs} args - Arguments to find a RoomType
     * @example
     * // Get one RoomType
     * const roomType = await prisma.roomType.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RoomTypeFindFirstArgs>(args?: SelectSubset<T, RoomTypeFindFirstArgs<ExtArgs>>): Prisma__RoomTypeClient<$Result.GetResult<Prisma.$RoomTypePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RoomType that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomTypeFindFirstOrThrowArgs} args - Arguments to find a RoomType
     * @example
     * // Get one RoomType
     * const roomType = await prisma.roomType.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RoomTypeFindFirstOrThrowArgs>(args?: SelectSubset<T, RoomTypeFindFirstOrThrowArgs<ExtArgs>>): Prisma__RoomTypeClient<$Result.GetResult<Prisma.$RoomTypePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RoomTypes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomTypeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RoomTypes
     * const roomTypes = await prisma.roomType.findMany()
     * 
     * // Get first 10 RoomTypes
     * const roomTypes = await prisma.roomType.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const roomTypeWithIdOnly = await prisma.roomType.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RoomTypeFindManyArgs>(args?: SelectSubset<T, RoomTypeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomTypePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RoomType.
     * @param {RoomTypeCreateArgs} args - Arguments to create a RoomType.
     * @example
     * // Create one RoomType
     * const RoomType = await prisma.roomType.create({
     *   data: {
     *     // ... data to create a RoomType
     *   }
     * })
     * 
     */
    create<T extends RoomTypeCreateArgs>(args: SelectSubset<T, RoomTypeCreateArgs<ExtArgs>>): Prisma__RoomTypeClient<$Result.GetResult<Prisma.$RoomTypePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RoomTypes.
     * @param {RoomTypeCreateManyArgs} args - Arguments to create many RoomTypes.
     * @example
     * // Create many RoomTypes
     * const roomType = await prisma.roomType.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RoomTypeCreateManyArgs>(args?: SelectSubset<T, RoomTypeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RoomTypes and returns the data saved in the database.
     * @param {RoomTypeCreateManyAndReturnArgs} args - Arguments to create many RoomTypes.
     * @example
     * // Create many RoomTypes
     * const roomType = await prisma.roomType.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RoomTypes and only return the `id`
     * const roomTypeWithIdOnly = await prisma.roomType.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RoomTypeCreateManyAndReturnArgs>(args?: SelectSubset<T, RoomTypeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomTypePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RoomType.
     * @param {RoomTypeDeleteArgs} args - Arguments to delete one RoomType.
     * @example
     * // Delete one RoomType
     * const RoomType = await prisma.roomType.delete({
     *   where: {
     *     // ... filter to delete one RoomType
     *   }
     * })
     * 
     */
    delete<T extends RoomTypeDeleteArgs>(args: SelectSubset<T, RoomTypeDeleteArgs<ExtArgs>>): Prisma__RoomTypeClient<$Result.GetResult<Prisma.$RoomTypePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RoomType.
     * @param {RoomTypeUpdateArgs} args - Arguments to update one RoomType.
     * @example
     * // Update one RoomType
     * const roomType = await prisma.roomType.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RoomTypeUpdateArgs>(args: SelectSubset<T, RoomTypeUpdateArgs<ExtArgs>>): Prisma__RoomTypeClient<$Result.GetResult<Prisma.$RoomTypePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RoomTypes.
     * @param {RoomTypeDeleteManyArgs} args - Arguments to filter RoomTypes to delete.
     * @example
     * // Delete a few RoomTypes
     * const { count } = await prisma.roomType.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RoomTypeDeleteManyArgs>(args?: SelectSubset<T, RoomTypeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RoomTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomTypeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RoomTypes
     * const roomType = await prisma.roomType.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RoomTypeUpdateManyArgs>(args: SelectSubset<T, RoomTypeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RoomTypes and returns the data updated in the database.
     * @param {RoomTypeUpdateManyAndReturnArgs} args - Arguments to update many RoomTypes.
     * @example
     * // Update many RoomTypes
     * const roomType = await prisma.roomType.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RoomTypes and only return the `id`
     * const roomTypeWithIdOnly = await prisma.roomType.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RoomTypeUpdateManyAndReturnArgs>(args: SelectSubset<T, RoomTypeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomTypePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RoomType.
     * @param {RoomTypeUpsertArgs} args - Arguments to update or create a RoomType.
     * @example
     * // Update or create a RoomType
     * const roomType = await prisma.roomType.upsert({
     *   create: {
     *     // ... data to create a RoomType
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RoomType we want to update
     *   }
     * })
     */
    upsert<T extends RoomTypeUpsertArgs>(args: SelectSubset<T, RoomTypeUpsertArgs<ExtArgs>>): Prisma__RoomTypeClient<$Result.GetResult<Prisma.$RoomTypePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RoomTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomTypeCountArgs} args - Arguments to filter RoomTypes to count.
     * @example
     * // Count the number of RoomTypes
     * const count = await prisma.roomType.count({
     *   where: {
     *     // ... the filter for the RoomTypes we want to count
     *   }
     * })
    **/
    count<T extends RoomTypeCountArgs>(
      args?: Subset<T, RoomTypeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoomTypeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RoomType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomTypeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RoomTypeAggregateArgs>(args: Subset<T, RoomTypeAggregateArgs>): Prisma.PrismaPromise<GetRoomTypeAggregateType<T>>

    /**
     * Group by RoomType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomTypeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RoomTypeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoomTypeGroupByArgs['orderBy'] }
        : { orderBy?: RoomTypeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RoomTypeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoomTypeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RoomType model
   */
  readonly fields: RoomTypeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RoomType.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RoomTypeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tenant<T extends TenantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TenantDefaultArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    hotel<T extends HotelDefaultArgs<ExtArgs> = {}>(args?: Subset<T, HotelDefaultArgs<ExtArgs>>): Prisma__HotelClient<$Result.GetResult<Prisma.$HotelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Room<T extends RoomType$RoomArgs<ExtArgs> = {}>(args?: Subset<T, RoomType$RoomArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RoomType model
   */
  interface RoomTypeFieldRefs {
    readonly id: FieldRef<"RoomType", 'String'>
    readonly name: FieldRef<"RoomType", 'String'>
    readonly description: FieldRef<"RoomType", 'String'>
    readonly baseRate: FieldRef<"RoomType", 'Decimal'>
    readonly createdAt: FieldRef<"RoomType", 'DateTime'>
    readonly updatedAt: FieldRef<"RoomType", 'DateTime'>
    readonly tenantId: FieldRef<"RoomType", 'String'>
    readonly hotelId: FieldRef<"RoomType", 'String'>
  }
    

  // Custom InputTypes
  /**
   * RoomType findUnique
   */
  export type RoomTypeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomType
     */
    select?: RoomTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomType
     */
    omit?: RoomTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomTypeInclude<ExtArgs> | null
    /**
     * Filter, which RoomType to fetch.
     */
    where: RoomTypeWhereUniqueInput
  }

  /**
   * RoomType findUniqueOrThrow
   */
  export type RoomTypeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomType
     */
    select?: RoomTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomType
     */
    omit?: RoomTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomTypeInclude<ExtArgs> | null
    /**
     * Filter, which RoomType to fetch.
     */
    where: RoomTypeWhereUniqueInput
  }

  /**
   * RoomType findFirst
   */
  export type RoomTypeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomType
     */
    select?: RoomTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomType
     */
    omit?: RoomTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomTypeInclude<ExtArgs> | null
    /**
     * Filter, which RoomType to fetch.
     */
    where?: RoomTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoomTypes to fetch.
     */
    orderBy?: RoomTypeOrderByWithRelationInput | RoomTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RoomTypes.
     */
    cursor?: RoomTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoomTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoomTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RoomTypes.
     */
    distinct?: RoomTypeScalarFieldEnum | RoomTypeScalarFieldEnum[]
  }

  /**
   * RoomType findFirstOrThrow
   */
  export type RoomTypeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomType
     */
    select?: RoomTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomType
     */
    omit?: RoomTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomTypeInclude<ExtArgs> | null
    /**
     * Filter, which RoomType to fetch.
     */
    where?: RoomTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoomTypes to fetch.
     */
    orderBy?: RoomTypeOrderByWithRelationInput | RoomTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RoomTypes.
     */
    cursor?: RoomTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoomTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoomTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RoomTypes.
     */
    distinct?: RoomTypeScalarFieldEnum | RoomTypeScalarFieldEnum[]
  }

  /**
   * RoomType findMany
   */
  export type RoomTypeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomType
     */
    select?: RoomTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomType
     */
    omit?: RoomTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomTypeInclude<ExtArgs> | null
    /**
     * Filter, which RoomTypes to fetch.
     */
    where?: RoomTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoomTypes to fetch.
     */
    orderBy?: RoomTypeOrderByWithRelationInput | RoomTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RoomTypes.
     */
    cursor?: RoomTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoomTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoomTypes.
     */
    skip?: number
    distinct?: RoomTypeScalarFieldEnum | RoomTypeScalarFieldEnum[]
  }

  /**
   * RoomType create
   */
  export type RoomTypeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomType
     */
    select?: RoomTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomType
     */
    omit?: RoomTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomTypeInclude<ExtArgs> | null
    /**
     * The data needed to create a RoomType.
     */
    data: XOR<RoomTypeCreateInput, RoomTypeUncheckedCreateInput>
  }

  /**
   * RoomType createMany
   */
  export type RoomTypeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RoomTypes.
     */
    data: RoomTypeCreateManyInput | RoomTypeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RoomType createManyAndReturn
   */
  export type RoomTypeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomType
     */
    select?: RoomTypeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RoomType
     */
    omit?: RoomTypeOmit<ExtArgs> | null
    /**
     * The data used to create many RoomTypes.
     */
    data: RoomTypeCreateManyInput | RoomTypeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomTypeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RoomType update
   */
  export type RoomTypeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomType
     */
    select?: RoomTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomType
     */
    omit?: RoomTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomTypeInclude<ExtArgs> | null
    /**
     * The data needed to update a RoomType.
     */
    data: XOR<RoomTypeUpdateInput, RoomTypeUncheckedUpdateInput>
    /**
     * Choose, which RoomType to update.
     */
    where: RoomTypeWhereUniqueInput
  }

  /**
   * RoomType updateMany
   */
  export type RoomTypeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RoomTypes.
     */
    data: XOR<RoomTypeUpdateManyMutationInput, RoomTypeUncheckedUpdateManyInput>
    /**
     * Filter which RoomTypes to update
     */
    where?: RoomTypeWhereInput
    /**
     * Limit how many RoomTypes to update.
     */
    limit?: number
  }

  /**
   * RoomType updateManyAndReturn
   */
  export type RoomTypeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomType
     */
    select?: RoomTypeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RoomType
     */
    omit?: RoomTypeOmit<ExtArgs> | null
    /**
     * The data used to update RoomTypes.
     */
    data: XOR<RoomTypeUpdateManyMutationInput, RoomTypeUncheckedUpdateManyInput>
    /**
     * Filter which RoomTypes to update
     */
    where?: RoomTypeWhereInput
    /**
     * Limit how many RoomTypes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomTypeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RoomType upsert
   */
  export type RoomTypeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomType
     */
    select?: RoomTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomType
     */
    omit?: RoomTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomTypeInclude<ExtArgs> | null
    /**
     * The filter to search for the RoomType to update in case it exists.
     */
    where: RoomTypeWhereUniqueInput
    /**
     * In case the RoomType found by the `where` argument doesn't exist, create a new RoomType with this data.
     */
    create: XOR<RoomTypeCreateInput, RoomTypeUncheckedCreateInput>
    /**
     * In case the RoomType was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoomTypeUpdateInput, RoomTypeUncheckedUpdateInput>
  }

  /**
   * RoomType delete
   */
  export type RoomTypeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomType
     */
    select?: RoomTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomType
     */
    omit?: RoomTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomTypeInclude<ExtArgs> | null
    /**
     * Filter which RoomType to delete.
     */
    where: RoomTypeWhereUniqueInput
  }

  /**
   * RoomType deleteMany
   */
  export type RoomTypeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RoomTypes to delete
     */
    where?: RoomTypeWhereInput
    /**
     * Limit how many RoomTypes to delete.
     */
    limit?: number
  }

  /**
   * RoomType.Room
   */
  export type RoomType$RoomArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    where?: RoomWhereInput
    orderBy?: RoomOrderByWithRelationInput | RoomOrderByWithRelationInput[]
    cursor?: RoomWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RoomScalarFieldEnum | RoomScalarFieldEnum[]
  }

  /**
   * RoomType without action
   */
  export type RoomTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomType
     */
    select?: RoomTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomType
     */
    omit?: RoomTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomTypeInclude<ExtArgs> | null
  }


  /**
   * Model RatePlan
   */

  export type AggregateRatePlan = {
    _count: RatePlanCountAggregateOutputType | null
    _avg: RatePlanAvgAggregateOutputType | null
    _sum: RatePlanSumAggregateOutputType | null
    _min: RatePlanMinAggregateOutputType | null
    _max: RatePlanMaxAggregateOutputType | null
  }

  export type RatePlanAvgAggregateOutputType = {
    baseAdjVal: Decimal | null
  }

  export type RatePlanSumAggregateOutputType = {
    baseAdjVal: Decimal | null
  }

  export type RatePlanMinAggregateOutputType = {
    id: string | null
    tenantId: string | null
    hotelId: string | null
    code: string | null
    name: string | null
    baseAdjType: $Enums.AdjType | null
    baseAdjVal: Decimal | null
    currency: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RatePlanMaxAggregateOutputType = {
    id: string | null
    tenantId: string | null
    hotelId: string | null
    code: string | null
    name: string | null
    baseAdjType: $Enums.AdjType | null
    baseAdjVal: Decimal | null
    currency: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RatePlanCountAggregateOutputType = {
    id: number
    tenantId: number
    hotelId: number
    code: number
    name: number
    baseAdjType: number
    baseAdjVal: number
    currency: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type RatePlanAvgAggregateInputType = {
    baseAdjVal?: true
  }

  export type RatePlanSumAggregateInputType = {
    baseAdjVal?: true
  }

  export type RatePlanMinAggregateInputType = {
    id?: true
    tenantId?: true
    hotelId?: true
    code?: true
    name?: true
    baseAdjType?: true
    baseAdjVal?: true
    currency?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RatePlanMaxAggregateInputType = {
    id?: true
    tenantId?: true
    hotelId?: true
    code?: true
    name?: true
    baseAdjType?: true
    baseAdjVal?: true
    currency?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RatePlanCountAggregateInputType = {
    id?: true
    tenantId?: true
    hotelId?: true
    code?: true
    name?: true
    baseAdjType?: true
    baseAdjVal?: true
    currency?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type RatePlanAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RatePlan to aggregate.
     */
    where?: RatePlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RatePlans to fetch.
     */
    orderBy?: RatePlanOrderByWithRelationInput | RatePlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RatePlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RatePlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RatePlans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RatePlans
    **/
    _count?: true | RatePlanCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RatePlanAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RatePlanSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RatePlanMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RatePlanMaxAggregateInputType
  }

  export type GetRatePlanAggregateType<T extends RatePlanAggregateArgs> = {
        [P in keyof T & keyof AggregateRatePlan]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRatePlan[P]>
      : GetScalarType<T[P], AggregateRatePlan[P]>
  }




  export type RatePlanGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RatePlanWhereInput
    orderBy?: RatePlanOrderByWithAggregationInput | RatePlanOrderByWithAggregationInput[]
    by: RatePlanScalarFieldEnum[] | RatePlanScalarFieldEnum
    having?: RatePlanScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RatePlanCountAggregateInputType | true
    _avg?: RatePlanAvgAggregateInputType
    _sum?: RatePlanSumAggregateInputType
    _min?: RatePlanMinAggregateInputType
    _max?: RatePlanMaxAggregateInputType
  }

  export type RatePlanGroupByOutputType = {
    id: string
    tenantId: string
    hotelId: string
    code: string
    name: string
    baseAdjType: $Enums.AdjType
    baseAdjVal: Decimal
    currency: string
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: RatePlanCountAggregateOutputType | null
    _avg: RatePlanAvgAggregateOutputType | null
    _sum: RatePlanSumAggregateOutputType | null
    _min: RatePlanMinAggregateOutputType | null
    _max: RatePlanMaxAggregateOutputType | null
  }

  type GetRatePlanGroupByPayload<T extends RatePlanGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RatePlanGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RatePlanGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RatePlanGroupByOutputType[P]>
            : GetScalarType<T[P], RatePlanGroupByOutputType[P]>
        }
      >
    >


  export type RatePlanSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    hotelId?: boolean
    code?: boolean
    name?: boolean
    baseAdjType?: boolean
    baseAdjVal?: boolean
    currency?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Tenant?: boolean | TenantDefaultArgs<ExtArgs>
    Hotel?: boolean | HotelDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ratePlan"]>

  export type RatePlanSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    hotelId?: boolean
    code?: boolean
    name?: boolean
    baseAdjType?: boolean
    baseAdjVal?: boolean
    currency?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Tenant?: boolean | TenantDefaultArgs<ExtArgs>
    Hotel?: boolean | HotelDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ratePlan"]>

  export type RatePlanSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    hotelId?: boolean
    code?: boolean
    name?: boolean
    baseAdjType?: boolean
    baseAdjVal?: boolean
    currency?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Tenant?: boolean | TenantDefaultArgs<ExtArgs>
    Hotel?: boolean | HotelDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ratePlan"]>

  export type RatePlanSelectScalar = {
    id?: boolean
    tenantId?: boolean
    hotelId?: boolean
    code?: boolean
    name?: boolean
    baseAdjType?: boolean
    baseAdjVal?: boolean
    currency?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type RatePlanOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tenantId" | "hotelId" | "code" | "name" | "baseAdjType" | "baseAdjVal" | "currency" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["ratePlan"]>
  export type RatePlanInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Tenant?: boolean | TenantDefaultArgs<ExtArgs>
    Hotel?: boolean | HotelDefaultArgs<ExtArgs>
  }
  export type RatePlanIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Tenant?: boolean | TenantDefaultArgs<ExtArgs>
    Hotel?: boolean | HotelDefaultArgs<ExtArgs>
  }
  export type RatePlanIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Tenant?: boolean | TenantDefaultArgs<ExtArgs>
    Hotel?: boolean | HotelDefaultArgs<ExtArgs>
  }

  export type $RatePlanPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RatePlan"
    objects: {
      Tenant: Prisma.$TenantPayload<ExtArgs>
      Hotel: Prisma.$HotelPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tenantId: string
      hotelId: string
      code: string
      name: string
      baseAdjType: $Enums.AdjType
      baseAdjVal: Prisma.Decimal
      currency: string
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["ratePlan"]>
    composites: {}
  }

  type RatePlanGetPayload<S extends boolean | null | undefined | RatePlanDefaultArgs> = $Result.GetResult<Prisma.$RatePlanPayload, S>

  type RatePlanCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RatePlanFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RatePlanCountAggregateInputType | true
    }

  export interface RatePlanDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RatePlan'], meta: { name: 'RatePlan' } }
    /**
     * Find zero or one RatePlan that matches the filter.
     * @param {RatePlanFindUniqueArgs} args - Arguments to find a RatePlan
     * @example
     * // Get one RatePlan
     * const ratePlan = await prisma.ratePlan.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RatePlanFindUniqueArgs>(args: SelectSubset<T, RatePlanFindUniqueArgs<ExtArgs>>): Prisma__RatePlanClient<$Result.GetResult<Prisma.$RatePlanPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RatePlan that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RatePlanFindUniqueOrThrowArgs} args - Arguments to find a RatePlan
     * @example
     * // Get one RatePlan
     * const ratePlan = await prisma.ratePlan.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RatePlanFindUniqueOrThrowArgs>(args: SelectSubset<T, RatePlanFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RatePlanClient<$Result.GetResult<Prisma.$RatePlanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RatePlan that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RatePlanFindFirstArgs} args - Arguments to find a RatePlan
     * @example
     * // Get one RatePlan
     * const ratePlan = await prisma.ratePlan.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RatePlanFindFirstArgs>(args?: SelectSubset<T, RatePlanFindFirstArgs<ExtArgs>>): Prisma__RatePlanClient<$Result.GetResult<Prisma.$RatePlanPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RatePlan that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RatePlanFindFirstOrThrowArgs} args - Arguments to find a RatePlan
     * @example
     * // Get one RatePlan
     * const ratePlan = await prisma.ratePlan.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RatePlanFindFirstOrThrowArgs>(args?: SelectSubset<T, RatePlanFindFirstOrThrowArgs<ExtArgs>>): Prisma__RatePlanClient<$Result.GetResult<Prisma.$RatePlanPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RatePlans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RatePlanFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RatePlans
     * const ratePlans = await prisma.ratePlan.findMany()
     * 
     * // Get first 10 RatePlans
     * const ratePlans = await prisma.ratePlan.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ratePlanWithIdOnly = await prisma.ratePlan.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RatePlanFindManyArgs>(args?: SelectSubset<T, RatePlanFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RatePlanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RatePlan.
     * @param {RatePlanCreateArgs} args - Arguments to create a RatePlan.
     * @example
     * // Create one RatePlan
     * const RatePlan = await prisma.ratePlan.create({
     *   data: {
     *     // ... data to create a RatePlan
     *   }
     * })
     * 
     */
    create<T extends RatePlanCreateArgs>(args: SelectSubset<T, RatePlanCreateArgs<ExtArgs>>): Prisma__RatePlanClient<$Result.GetResult<Prisma.$RatePlanPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RatePlans.
     * @param {RatePlanCreateManyArgs} args - Arguments to create many RatePlans.
     * @example
     * // Create many RatePlans
     * const ratePlan = await prisma.ratePlan.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RatePlanCreateManyArgs>(args?: SelectSubset<T, RatePlanCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RatePlans and returns the data saved in the database.
     * @param {RatePlanCreateManyAndReturnArgs} args - Arguments to create many RatePlans.
     * @example
     * // Create many RatePlans
     * const ratePlan = await prisma.ratePlan.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RatePlans and only return the `id`
     * const ratePlanWithIdOnly = await prisma.ratePlan.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RatePlanCreateManyAndReturnArgs>(args?: SelectSubset<T, RatePlanCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RatePlanPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RatePlan.
     * @param {RatePlanDeleteArgs} args - Arguments to delete one RatePlan.
     * @example
     * // Delete one RatePlan
     * const RatePlan = await prisma.ratePlan.delete({
     *   where: {
     *     // ... filter to delete one RatePlan
     *   }
     * })
     * 
     */
    delete<T extends RatePlanDeleteArgs>(args: SelectSubset<T, RatePlanDeleteArgs<ExtArgs>>): Prisma__RatePlanClient<$Result.GetResult<Prisma.$RatePlanPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RatePlan.
     * @param {RatePlanUpdateArgs} args - Arguments to update one RatePlan.
     * @example
     * // Update one RatePlan
     * const ratePlan = await prisma.ratePlan.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RatePlanUpdateArgs>(args: SelectSubset<T, RatePlanUpdateArgs<ExtArgs>>): Prisma__RatePlanClient<$Result.GetResult<Prisma.$RatePlanPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RatePlans.
     * @param {RatePlanDeleteManyArgs} args - Arguments to filter RatePlans to delete.
     * @example
     * // Delete a few RatePlans
     * const { count } = await prisma.ratePlan.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RatePlanDeleteManyArgs>(args?: SelectSubset<T, RatePlanDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RatePlans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RatePlanUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RatePlans
     * const ratePlan = await prisma.ratePlan.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RatePlanUpdateManyArgs>(args: SelectSubset<T, RatePlanUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RatePlans and returns the data updated in the database.
     * @param {RatePlanUpdateManyAndReturnArgs} args - Arguments to update many RatePlans.
     * @example
     * // Update many RatePlans
     * const ratePlan = await prisma.ratePlan.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RatePlans and only return the `id`
     * const ratePlanWithIdOnly = await prisma.ratePlan.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RatePlanUpdateManyAndReturnArgs>(args: SelectSubset<T, RatePlanUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RatePlanPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RatePlan.
     * @param {RatePlanUpsertArgs} args - Arguments to update or create a RatePlan.
     * @example
     * // Update or create a RatePlan
     * const ratePlan = await prisma.ratePlan.upsert({
     *   create: {
     *     // ... data to create a RatePlan
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RatePlan we want to update
     *   }
     * })
     */
    upsert<T extends RatePlanUpsertArgs>(args: SelectSubset<T, RatePlanUpsertArgs<ExtArgs>>): Prisma__RatePlanClient<$Result.GetResult<Prisma.$RatePlanPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RatePlans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RatePlanCountArgs} args - Arguments to filter RatePlans to count.
     * @example
     * // Count the number of RatePlans
     * const count = await prisma.ratePlan.count({
     *   where: {
     *     // ... the filter for the RatePlans we want to count
     *   }
     * })
    **/
    count<T extends RatePlanCountArgs>(
      args?: Subset<T, RatePlanCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RatePlanCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RatePlan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RatePlanAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RatePlanAggregateArgs>(args: Subset<T, RatePlanAggregateArgs>): Prisma.PrismaPromise<GetRatePlanAggregateType<T>>

    /**
     * Group by RatePlan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RatePlanGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RatePlanGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RatePlanGroupByArgs['orderBy'] }
        : { orderBy?: RatePlanGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RatePlanGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRatePlanGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RatePlan model
   */
  readonly fields: RatePlanFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RatePlan.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RatePlanClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Tenant<T extends TenantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TenantDefaultArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Hotel<T extends HotelDefaultArgs<ExtArgs> = {}>(args?: Subset<T, HotelDefaultArgs<ExtArgs>>): Prisma__HotelClient<$Result.GetResult<Prisma.$HotelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RatePlan model
   */
  interface RatePlanFieldRefs {
    readonly id: FieldRef<"RatePlan", 'String'>
    readonly tenantId: FieldRef<"RatePlan", 'String'>
    readonly hotelId: FieldRef<"RatePlan", 'String'>
    readonly code: FieldRef<"RatePlan", 'String'>
    readonly name: FieldRef<"RatePlan", 'String'>
    readonly baseAdjType: FieldRef<"RatePlan", 'AdjType'>
    readonly baseAdjVal: FieldRef<"RatePlan", 'Decimal'>
    readonly currency: FieldRef<"RatePlan", 'String'>
    readonly isActive: FieldRef<"RatePlan", 'Boolean'>
    readonly createdAt: FieldRef<"RatePlan", 'DateTime'>
    readonly updatedAt: FieldRef<"RatePlan", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RatePlan findUnique
   */
  export type RatePlanFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RatePlan
     */
    select?: RatePlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RatePlan
     */
    omit?: RatePlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatePlanInclude<ExtArgs> | null
    /**
     * Filter, which RatePlan to fetch.
     */
    where: RatePlanWhereUniqueInput
  }

  /**
   * RatePlan findUniqueOrThrow
   */
  export type RatePlanFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RatePlan
     */
    select?: RatePlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RatePlan
     */
    omit?: RatePlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatePlanInclude<ExtArgs> | null
    /**
     * Filter, which RatePlan to fetch.
     */
    where: RatePlanWhereUniqueInput
  }

  /**
   * RatePlan findFirst
   */
  export type RatePlanFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RatePlan
     */
    select?: RatePlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RatePlan
     */
    omit?: RatePlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatePlanInclude<ExtArgs> | null
    /**
     * Filter, which RatePlan to fetch.
     */
    where?: RatePlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RatePlans to fetch.
     */
    orderBy?: RatePlanOrderByWithRelationInput | RatePlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RatePlans.
     */
    cursor?: RatePlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RatePlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RatePlans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RatePlans.
     */
    distinct?: RatePlanScalarFieldEnum | RatePlanScalarFieldEnum[]
  }

  /**
   * RatePlan findFirstOrThrow
   */
  export type RatePlanFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RatePlan
     */
    select?: RatePlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RatePlan
     */
    omit?: RatePlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatePlanInclude<ExtArgs> | null
    /**
     * Filter, which RatePlan to fetch.
     */
    where?: RatePlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RatePlans to fetch.
     */
    orderBy?: RatePlanOrderByWithRelationInput | RatePlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RatePlans.
     */
    cursor?: RatePlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RatePlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RatePlans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RatePlans.
     */
    distinct?: RatePlanScalarFieldEnum | RatePlanScalarFieldEnum[]
  }

  /**
   * RatePlan findMany
   */
  export type RatePlanFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RatePlan
     */
    select?: RatePlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RatePlan
     */
    omit?: RatePlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatePlanInclude<ExtArgs> | null
    /**
     * Filter, which RatePlans to fetch.
     */
    where?: RatePlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RatePlans to fetch.
     */
    orderBy?: RatePlanOrderByWithRelationInput | RatePlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RatePlans.
     */
    cursor?: RatePlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RatePlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RatePlans.
     */
    skip?: number
    distinct?: RatePlanScalarFieldEnum | RatePlanScalarFieldEnum[]
  }

  /**
   * RatePlan create
   */
  export type RatePlanCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RatePlan
     */
    select?: RatePlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RatePlan
     */
    omit?: RatePlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatePlanInclude<ExtArgs> | null
    /**
     * The data needed to create a RatePlan.
     */
    data: XOR<RatePlanCreateInput, RatePlanUncheckedCreateInput>
  }

  /**
   * RatePlan createMany
   */
  export type RatePlanCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RatePlans.
     */
    data: RatePlanCreateManyInput | RatePlanCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RatePlan createManyAndReturn
   */
  export type RatePlanCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RatePlan
     */
    select?: RatePlanSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RatePlan
     */
    omit?: RatePlanOmit<ExtArgs> | null
    /**
     * The data used to create many RatePlans.
     */
    data: RatePlanCreateManyInput | RatePlanCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatePlanIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RatePlan update
   */
  export type RatePlanUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RatePlan
     */
    select?: RatePlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RatePlan
     */
    omit?: RatePlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatePlanInclude<ExtArgs> | null
    /**
     * The data needed to update a RatePlan.
     */
    data: XOR<RatePlanUpdateInput, RatePlanUncheckedUpdateInput>
    /**
     * Choose, which RatePlan to update.
     */
    where: RatePlanWhereUniqueInput
  }

  /**
   * RatePlan updateMany
   */
  export type RatePlanUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RatePlans.
     */
    data: XOR<RatePlanUpdateManyMutationInput, RatePlanUncheckedUpdateManyInput>
    /**
     * Filter which RatePlans to update
     */
    where?: RatePlanWhereInput
    /**
     * Limit how many RatePlans to update.
     */
    limit?: number
  }

  /**
   * RatePlan updateManyAndReturn
   */
  export type RatePlanUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RatePlan
     */
    select?: RatePlanSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RatePlan
     */
    omit?: RatePlanOmit<ExtArgs> | null
    /**
     * The data used to update RatePlans.
     */
    data: XOR<RatePlanUpdateManyMutationInput, RatePlanUncheckedUpdateManyInput>
    /**
     * Filter which RatePlans to update
     */
    where?: RatePlanWhereInput
    /**
     * Limit how many RatePlans to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatePlanIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RatePlan upsert
   */
  export type RatePlanUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RatePlan
     */
    select?: RatePlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RatePlan
     */
    omit?: RatePlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatePlanInclude<ExtArgs> | null
    /**
     * The filter to search for the RatePlan to update in case it exists.
     */
    where: RatePlanWhereUniqueInput
    /**
     * In case the RatePlan found by the `where` argument doesn't exist, create a new RatePlan with this data.
     */
    create: XOR<RatePlanCreateInput, RatePlanUncheckedCreateInput>
    /**
     * In case the RatePlan was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RatePlanUpdateInput, RatePlanUncheckedUpdateInput>
  }

  /**
   * RatePlan delete
   */
  export type RatePlanDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RatePlan
     */
    select?: RatePlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RatePlan
     */
    omit?: RatePlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatePlanInclude<ExtArgs> | null
    /**
     * Filter which RatePlan to delete.
     */
    where: RatePlanWhereUniqueInput
  }

  /**
   * RatePlan deleteMany
   */
  export type RatePlanDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RatePlans to delete
     */
    where?: RatePlanWhereInput
    /**
     * Limit how many RatePlans to delete.
     */
    limit?: number
  }

  /**
   * RatePlan without action
   */
  export type RatePlanDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RatePlan
     */
    select?: RatePlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RatePlan
     */
    omit?: RatePlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatePlanInclude<ExtArgs> | null
  }


  /**
   * Model Guest
   */

  export type AggregateGuest = {
    _count: GuestCountAggregateOutputType | null
    _min: GuestMinAggregateOutputType | null
    _max: GuestMaxAggregateOutputType | null
  }

  export type GuestMinAggregateOutputType = {
    id: string | null
    firstName: string | null
    lastName: string | null
    email: string | null
    phoneNumber: string | null
    createdAt: Date | null
    updatedAt: Date | null
    tenantId: string | null
    hotelId: string | null
  }

  export type GuestMaxAggregateOutputType = {
    id: string | null
    firstName: string | null
    lastName: string | null
    email: string | null
    phoneNumber: string | null
    createdAt: Date | null
    updatedAt: Date | null
    tenantId: string | null
    hotelId: string | null
  }

  export type GuestCountAggregateOutputType = {
    id: number
    firstName: number
    lastName: number
    email: number
    phoneNumber: number
    createdAt: number
    updatedAt: number
    tenantId: number
    hotelId: number
    _all: number
  }


  export type GuestMinAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    phoneNumber?: true
    createdAt?: true
    updatedAt?: true
    tenantId?: true
    hotelId?: true
  }

  export type GuestMaxAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    phoneNumber?: true
    createdAt?: true
    updatedAt?: true
    tenantId?: true
    hotelId?: true
  }

  export type GuestCountAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    phoneNumber?: true
    createdAt?: true
    updatedAt?: true
    tenantId?: true
    hotelId?: true
    _all?: true
  }

  export type GuestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Guest to aggregate.
     */
    where?: GuestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Guests to fetch.
     */
    orderBy?: GuestOrderByWithRelationInput | GuestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GuestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Guests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Guests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Guests
    **/
    _count?: true | GuestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GuestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GuestMaxAggregateInputType
  }

  export type GetGuestAggregateType<T extends GuestAggregateArgs> = {
        [P in keyof T & keyof AggregateGuest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGuest[P]>
      : GetScalarType<T[P], AggregateGuest[P]>
  }




  export type GuestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GuestWhereInput
    orderBy?: GuestOrderByWithAggregationInput | GuestOrderByWithAggregationInput[]
    by: GuestScalarFieldEnum[] | GuestScalarFieldEnum
    having?: GuestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GuestCountAggregateInputType | true
    _min?: GuestMinAggregateInputType
    _max?: GuestMaxAggregateInputType
  }

  export type GuestGroupByOutputType = {
    id: string
    firstName: string
    lastName: string
    email: string | null
    phoneNumber: string | null
    createdAt: Date
    updatedAt: Date
    tenantId: string
    hotelId: string
    _count: GuestCountAggregateOutputType | null
    _min: GuestMinAggregateOutputType | null
    _max: GuestMaxAggregateOutputType | null
  }

  type GetGuestGroupByPayload<T extends GuestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GuestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GuestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GuestGroupByOutputType[P]>
            : GetScalarType<T[P], GuestGroupByOutputType[P]>
        }
      >
    >


  export type GuestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    phoneNumber?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tenantId?: boolean
    hotelId?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    hotel?: boolean | HotelDefaultArgs<ExtArgs>
    Reservation?: boolean | Guest$ReservationArgs<ExtArgs>
    Folio?: boolean | Guest$FolioArgs<ExtArgs>
    _count?: boolean | GuestCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["guest"]>

  export type GuestSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    phoneNumber?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tenantId?: boolean
    hotelId?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    hotel?: boolean | HotelDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["guest"]>

  export type GuestSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    phoneNumber?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tenantId?: boolean
    hotelId?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    hotel?: boolean | HotelDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["guest"]>

  export type GuestSelectScalar = {
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    phoneNumber?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tenantId?: boolean
    hotelId?: boolean
  }

  export type GuestOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "firstName" | "lastName" | "email" | "phoneNumber" | "createdAt" | "updatedAt" | "tenantId" | "hotelId", ExtArgs["result"]["guest"]>
  export type GuestInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    hotel?: boolean | HotelDefaultArgs<ExtArgs>
    Reservation?: boolean | Guest$ReservationArgs<ExtArgs>
    Folio?: boolean | Guest$FolioArgs<ExtArgs>
    _count?: boolean | GuestCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type GuestIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    hotel?: boolean | HotelDefaultArgs<ExtArgs>
  }
  export type GuestIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    hotel?: boolean | HotelDefaultArgs<ExtArgs>
  }

  export type $GuestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Guest"
    objects: {
      tenant: Prisma.$TenantPayload<ExtArgs>
      hotel: Prisma.$HotelPayload<ExtArgs>
      Reservation: Prisma.$ReservationPayload<ExtArgs>[]
      Folio: Prisma.$FolioPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      firstName: string
      lastName: string
      email: string | null
      phoneNumber: string | null
      createdAt: Date
      updatedAt: Date
      tenantId: string
      hotelId: string
    }, ExtArgs["result"]["guest"]>
    composites: {}
  }

  type GuestGetPayload<S extends boolean | null | undefined | GuestDefaultArgs> = $Result.GetResult<Prisma.$GuestPayload, S>

  type GuestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GuestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GuestCountAggregateInputType | true
    }

  export interface GuestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Guest'], meta: { name: 'Guest' } }
    /**
     * Find zero or one Guest that matches the filter.
     * @param {GuestFindUniqueArgs} args - Arguments to find a Guest
     * @example
     * // Get one Guest
     * const guest = await prisma.guest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GuestFindUniqueArgs>(args: SelectSubset<T, GuestFindUniqueArgs<ExtArgs>>): Prisma__GuestClient<$Result.GetResult<Prisma.$GuestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Guest that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GuestFindUniqueOrThrowArgs} args - Arguments to find a Guest
     * @example
     * // Get one Guest
     * const guest = await prisma.guest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GuestFindUniqueOrThrowArgs>(args: SelectSubset<T, GuestFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GuestClient<$Result.GetResult<Prisma.$GuestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Guest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuestFindFirstArgs} args - Arguments to find a Guest
     * @example
     * // Get one Guest
     * const guest = await prisma.guest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GuestFindFirstArgs>(args?: SelectSubset<T, GuestFindFirstArgs<ExtArgs>>): Prisma__GuestClient<$Result.GetResult<Prisma.$GuestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Guest that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuestFindFirstOrThrowArgs} args - Arguments to find a Guest
     * @example
     * // Get one Guest
     * const guest = await prisma.guest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GuestFindFirstOrThrowArgs>(args?: SelectSubset<T, GuestFindFirstOrThrowArgs<ExtArgs>>): Prisma__GuestClient<$Result.GetResult<Prisma.$GuestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Guests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Guests
     * const guests = await prisma.guest.findMany()
     * 
     * // Get first 10 Guests
     * const guests = await prisma.guest.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const guestWithIdOnly = await prisma.guest.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GuestFindManyArgs>(args?: SelectSubset<T, GuestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GuestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Guest.
     * @param {GuestCreateArgs} args - Arguments to create a Guest.
     * @example
     * // Create one Guest
     * const Guest = await prisma.guest.create({
     *   data: {
     *     // ... data to create a Guest
     *   }
     * })
     * 
     */
    create<T extends GuestCreateArgs>(args: SelectSubset<T, GuestCreateArgs<ExtArgs>>): Prisma__GuestClient<$Result.GetResult<Prisma.$GuestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Guests.
     * @param {GuestCreateManyArgs} args - Arguments to create many Guests.
     * @example
     * // Create many Guests
     * const guest = await prisma.guest.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GuestCreateManyArgs>(args?: SelectSubset<T, GuestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Guests and returns the data saved in the database.
     * @param {GuestCreateManyAndReturnArgs} args - Arguments to create many Guests.
     * @example
     * // Create many Guests
     * const guest = await prisma.guest.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Guests and only return the `id`
     * const guestWithIdOnly = await prisma.guest.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GuestCreateManyAndReturnArgs>(args?: SelectSubset<T, GuestCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GuestPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Guest.
     * @param {GuestDeleteArgs} args - Arguments to delete one Guest.
     * @example
     * // Delete one Guest
     * const Guest = await prisma.guest.delete({
     *   where: {
     *     // ... filter to delete one Guest
     *   }
     * })
     * 
     */
    delete<T extends GuestDeleteArgs>(args: SelectSubset<T, GuestDeleteArgs<ExtArgs>>): Prisma__GuestClient<$Result.GetResult<Prisma.$GuestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Guest.
     * @param {GuestUpdateArgs} args - Arguments to update one Guest.
     * @example
     * // Update one Guest
     * const guest = await prisma.guest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GuestUpdateArgs>(args: SelectSubset<T, GuestUpdateArgs<ExtArgs>>): Prisma__GuestClient<$Result.GetResult<Prisma.$GuestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Guests.
     * @param {GuestDeleteManyArgs} args - Arguments to filter Guests to delete.
     * @example
     * // Delete a few Guests
     * const { count } = await prisma.guest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GuestDeleteManyArgs>(args?: SelectSubset<T, GuestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Guests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Guests
     * const guest = await prisma.guest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GuestUpdateManyArgs>(args: SelectSubset<T, GuestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Guests and returns the data updated in the database.
     * @param {GuestUpdateManyAndReturnArgs} args - Arguments to update many Guests.
     * @example
     * // Update many Guests
     * const guest = await prisma.guest.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Guests and only return the `id`
     * const guestWithIdOnly = await prisma.guest.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends GuestUpdateManyAndReturnArgs>(args: SelectSubset<T, GuestUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GuestPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Guest.
     * @param {GuestUpsertArgs} args - Arguments to update or create a Guest.
     * @example
     * // Update or create a Guest
     * const guest = await prisma.guest.upsert({
     *   create: {
     *     // ... data to create a Guest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Guest we want to update
     *   }
     * })
     */
    upsert<T extends GuestUpsertArgs>(args: SelectSubset<T, GuestUpsertArgs<ExtArgs>>): Prisma__GuestClient<$Result.GetResult<Prisma.$GuestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Guests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuestCountArgs} args - Arguments to filter Guests to count.
     * @example
     * // Count the number of Guests
     * const count = await prisma.guest.count({
     *   where: {
     *     // ... the filter for the Guests we want to count
     *   }
     * })
    **/
    count<T extends GuestCountArgs>(
      args?: Subset<T, GuestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GuestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Guest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GuestAggregateArgs>(args: Subset<T, GuestAggregateArgs>): Prisma.PrismaPromise<GetGuestAggregateType<T>>

    /**
     * Group by Guest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuestGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GuestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GuestGroupByArgs['orderBy'] }
        : { orderBy?: GuestGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GuestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGuestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Guest model
   */
  readonly fields: GuestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Guest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GuestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tenant<T extends TenantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TenantDefaultArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    hotel<T extends HotelDefaultArgs<ExtArgs> = {}>(args?: Subset<T, HotelDefaultArgs<ExtArgs>>): Prisma__HotelClient<$Result.GetResult<Prisma.$HotelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Reservation<T extends Guest$ReservationArgs<ExtArgs> = {}>(args?: Subset<T, Guest$ReservationArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Folio<T extends Guest$FolioArgs<ExtArgs> = {}>(args?: Subset<T, Guest$FolioArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FolioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Guest model
   */
  interface GuestFieldRefs {
    readonly id: FieldRef<"Guest", 'String'>
    readonly firstName: FieldRef<"Guest", 'String'>
    readonly lastName: FieldRef<"Guest", 'String'>
    readonly email: FieldRef<"Guest", 'String'>
    readonly phoneNumber: FieldRef<"Guest", 'String'>
    readonly createdAt: FieldRef<"Guest", 'DateTime'>
    readonly updatedAt: FieldRef<"Guest", 'DateTime'>
    readonly tenantId: FieldRef<"Guest", 'String'>
    readonly hotelId: FieldRef<"Guest", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Guest findUnique
   */
  export type GuestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guest
     */
    select?: GuestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guest
     */
    omit?: GuestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuestInclude<ExtArgs> | null
    /**
     * Filter, which Guest to fetch.
     */
    where: GuestWhereUniqueInput
  }

  /**
   * Guest findUniqueOrThrow
   */
  export type GuestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guest
     */
    select?: GuestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guest
     */
    omit?: GuestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuestInclude<ExtArgs> | null
    /**
     * Filter, which Guest to fetch.
     */
    where: GuestWhereUniqueInput
  }

  /**
   * Guest findFirst
   */
  export type GuestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guest
     */
    select?: GuestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guest
     */
    omit?: GuestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuestInclude<ExtArgs> | null
    /**
     * Filter, which Guest to fetch.
     */
    where?: GuestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Guests to fetch.
     */
    orderBy?: GuestOrderByWithRelationInput | GuestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Guests.
     */
    cursor?: GuestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Guests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Guests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Guests.
     */
    distinct?: GuestScalarFieldEnum | GuestScalarFieldEnum[]
  }

  /**
   * Guest findFirstOrThrow
   */
  export type GuestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guest
     */
    select?: GuestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guest
     */
    omit?: GuestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuestInclude<ExtArgs> | null
    /**
     * Filter, which Guest to fetch.
     */
    where?: GuestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Guests to fetch.
     */
    orderBy?: GuestOrderByWithRelationInput | GuestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Guests.
     */
    cursor?: GuestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Guests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Guests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Guests.
     */
    distinct?: GuestScalarFieldEnum | GuestScalarFieldEnum[]
  }

  /**
   * Guest findMany
   */
  export type GuestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guest
     */
    select?: GuestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guest
     */
    omit?: GuestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuestInclude<ExtArgs> | null
    /**
     * Filter, which Guests to fetch.
     */
    where?: GuestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Guests to fetch.
     */
    orderBy?: GuestOrderByWithRelationInput | GuestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Guests.
     */
    cursor?: GuestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Guests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Guests.
     */
    skip?: number
    distinct?: GuestScalarFieldEnum | GuestScalarFieldEnum[]
  }

  /**
   * Guest create
   */
  export type GuestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guest
     */
    select?: GuestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guest
     */
    omit?: GuestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuestInclude<ExtArgs> | null
    /**
     * The data needed to create a Guest.
     */
    data: XOR<GuestCreateInput, GuestUncheckedCreateInput>
  }

  /**
   * Guest createMany
   */
  export type GuestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Guests.
     */
    data: GuestCreateManyInput | GuestCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Guest createManyAndReturn
   */
  export type GuestCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guest
     */
    select?: GuestSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Guest
     */
    omit?: GuestOmit<ExtArgs> | null
    /**
     * The data used to create many Guests.
     */
    data: GuestCreateManyInput | GuestCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuestIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Guest update
   */
  export type GuestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guest
     */
    select?: GuestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guest
     */
    omit?: GuestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuestInclude<ExtArgs> | null
    /**
     * The data needed to update a Guest.
     */
    data: XOR<GuestUpdateInput, GuestUncheckedUpdateInput>
    /**
     * Choose, which Guest to update.
     */
    where: GuestWhereUniqueInput
  }

  /**
   * Guest updateMany
   */
  export type GuestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Guests.
     */
    data: XOR<GuestUpdateManyMutationInput, GuestUncheckedUpdateManyInput>
    /**
     * Filter which Guests to update
     */
    where?: GuestWhereInput
    /**
     * Limit how many Guests to update.
     */
    limit?: number
  }

  /**
   * Guest updateManyAndReturn
   */
  export type GuestUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guest
     */
    select?: GuestSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Guest
     */
    omit?: GuestOmit<ExtArgs> | null
    /**
     * The data used to update Guests.
     */
    data: XOR<GuestUpdateManyMutationInput, GuestUncheckedUpdateManyInput>
    /**
     * Filter which Guests to update
     */
    where?: GuestWhereInput
    /**
     * Limit how many Guests to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuestIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Guest upsert
   */
  export type GuestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guest
     */
    select?: GuestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guest
     */
    omit?: GuestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuestInclude<ExtArgs> | null
    /**
     * The filter to search for the Guest to update in case it exists.
     */
    where: GuestWhereUniqueInput
    /**
     * In case the Guest found by the `where` argument doesn't exist, create a new Guest with this data.
     */
    create: XOR<GuestCreateInput, GuestUncheckedCreateInput>
    /**
     * In case the Guest was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GuestUpdateInput, GuestUncheckedUpdateInput>
  }

  /**
   * Guest delete
   */
  export type GuestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guest
     */
    select?: GuestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guest
     */
    omit?: GuestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuestInclude<ExtArgs> | null
    /**
     * Filter which Guest to delete.
     */
    where: GuestWhereUniqueInput
  }

  /**
   * Guest deleteMany
   */
  export type GuestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Guests to delete
     */
    where?: GuestWhereInput
    /**
     * Limit how many Guests to delete.
     */
    limit?: number
  }

  /**
   * Guest.Reservation
   */
  export type Guest$ReservationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservation
     */
    omit?: ReservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
    where?: ReservationWhereInput
    orderBy?: ReservationOrderByWithRelationInput | ReservationOrderByWithRelationInput[]
    cursor?: ReservationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReservationScalarFieldEnum | ReservationScalarFieldEnum[]
  }

  /**
   * Guest.Folio
   */
  export type Guest$FolioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Folio
     */
    select?: FolioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Folio
     */
    omit?: FolioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FolioInclude<ExtArgs> | null
    where?: FolioWhereInput
    orderBy?: FolioOrderByWithRelationInput | FolioOrderByWithRelationInput[]
    cursor?: FolioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FolioScalarFieldEnum | FolioScalarFieldEnum[]
  }

  /**
   * Guest without action
   */
  export type GuestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guest
     */
    select?: GuestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guest
     */
    omit?: GuestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuestInclude<ExtArgs> | null
  }


  /**
   * Model Reservation
   */

  export type AggregateReservation = {
    _count: ReservationCountAggregateOutputType | null
    _min: ReservationMinAggregateOutputType | null
    _max: ReservationMaxAggregateOutputType | null
  }

  export type ReservationMinAggregateOutputType = {
    id: string | null
    checkIn: Date | null
    checkOut: Date | null
    status: $Enums.ReservationStatus | null
    guestId: string | null
    roomId: string | null
    tenantId: string | null
    hotelId: string | null
  }

  export type ReservationMaxAggregateOutputType = {
    id: string | null
    checkIn: Date | null
    checkOut: Date | null
    status: $Enums.ReservationStatus | null
    guestId: string | null
    roomId: string | null
    tenantId: string | null
    hotelId: string | null
  }

  export type ReservationCountAggregateOutputType = {
    id: number
    checkIn: number
    checkOut: number
    status: number
    guestId: number
    roomId: number
    tenantId: number
    hotelId: number
    _all: number
  }


  export type ReservationMinAggregateInputType = {
    id?: true
    checkIn?: true
    checkOut?: true
    status?: true
    guestId?: true
    roomId?: true
    tenantId?: true
    hotelId?: true
  }

  export type ReservationMaxAggregateInputType = {
    id?: true
    checkIn?: true
    checkOut?: true
    status?: true
    guestId?: true
    roomId?: true
    tenantId?: true
    hotelId?: true
  }

  export type ReservationCountAggregateInputType = {
    id?: true
    checkIn?: true
    checkOut?: true
    status?: true
    guestId?: true
    roomId?: true
    tenantId?: true
    hotelId?: true
    _all?: true
  }

  export type ReservationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reservation to aggregate.
     */
    where?: ReservationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reservations to fetch.
     */
    orderBy?: ReservationOrderByWithRelationInput | ReservationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReservationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reservations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reservations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Reservations
    **/
    _count?: true | ReservationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReservationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReservationMaxAggregateInputType
  }

  export type GetReservationAggregateType<T extends ReservationAggregateArgs> = {
        [P in keyof T & keyof AggregateReservation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReservation[P]>
      : GetScalarType<T[P], AggregateReservation[P]>
  }




  export type ReservationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReservationWhereInput
    orderBy?: ReservationOrderByWithAggregationInput | ReservationOrderByWithAggregationInput[]
    by: ReservationScalarFieldEnum[] | ReservationScalarFieldEnum
    having?: ReservationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReservationCountAggregateInputType | true
    _min?: ReservationMinAggregateInputType
    _max?: ReservationMaxAggregateInputType
  }

  export type ReservationGroupByOutputType = {
    id: string
    checkIn: Date
    checkOut: Date
    status: $Enums.ReservationStatus
    guestId: string
    roomId: string
    tenantId: string
    hotelId: string
    _count: ReservationCountAggregateOutputType | null
    _min: ReservationMinAggregateOutputType | null
    _max: ReservationMaxAggregateOutputType | null
  }

  type GetReservationGroupByPayload<T extends ReservationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReservationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReservationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReservationGroupByOutputType[P]>
            : GetScalarType<T[P], ReservationGroupByOutputType[P]>
        }
      >
    >


  export type ReservationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    checkIn?: boolean
    checkOut?: boolean
    status?: boolean
    guestId?: boolean
    roomId?: boolean
    tenantId?: boolean
    hotelId?: boolean
    guest?: boolean | GuestDefaultArgs<ExtArgs>
    room?: boolean | RoomDefaultArgs<ExtArgs>
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    hotel?: boolean | HotelDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reservation"]>

  export type ReservationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    checkIn?: boolean
    checkOut?: boolean
    status?: boolean
    guestId?: boolean
    roomId?: boolean
    tenantId?: boolean
    hotelId?: boolean
    guest?: boolean | GuestDefaultArgs<ExtArgs>
    room?: boolean | RoomDefaultArgs<ExtArgs>
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    hotel?: boolean | HotelDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reservation"]>

  export type ReservationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    checkIn?: boolean
    checkOut?: boolean
    status?: boolean
    guestId?: boolean
    roomId?: boolean
    tenantId?: boolean
    hotelId?: boolean
    guest?: boolean | GuestDefaultArgs<ExtArgs>
    room?: boolean | RoomDefaultArgs<ExtArgs>
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    hotel?: boolean | HotelDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reservation"]>

  export type ReservationSelectScalar = {
    id?: boolean
    checkIn?: boolean
    checkOut?: boolean
    status?: boolean
    guestId?: boolean
    roomId?: boolean
    tenantId?: boolean
    hotelId?: boolean
  }

  export type ReservationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "checkIn" | "checkOut" | "status" | "guestId" | "roomId" | "tenantId" | "hotelId", ExtArgs["result"]["reservation"]>
  export type ReservationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    guest?: boolean | GuestDefaultArgs<ExtArgs>
    room?: boolean | RoomDefaultArgs<ExtArgs>
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    hotel?: boolean | HotelDefaultArgs<ExtArgs>
  }
  export type ReservationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    guest?: boolean | GuestDefaultArgs<ExtArgs>
    room?: boolean | RoomDefaultArgs<ExtArgs>
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    hotel?: boolean | HotelDefaultArgs<ExtArgs>
  }
  export type ReservationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    guest?: boolean | GuestDefaultArgs<ExtArgs>
    room?: boolean | RoomDefaultArgs<ExtArgs>
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    hotel?: boolean | HotelDefaultArgs<ExtArgs>
  }

  export type $ReservationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Reservation"
    objects: {
      guest: Prisma.$GuestPayload<ExtArgs>
      room: Prisma.$RoomPayload<ExtArgs>
      tenant: Prisma.$TenantPayload<ExtArgs>
      hotel: Prisma.$HotelPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      checkIn: Date
      checkOut: Date
      status: $Enums.ReservationStatus
      guestId: string
      roomId: string
      tenantId: string
      hotelId: string
    }, ExtArgs["result"]["reservation"]>
    composites: {}
  }

  type ReservationGetPayload<S extends boolean | null | undefined | ReservationDefaultArgs> = $Result.GetResult<Prisma.$ReservationPayload, S>

  type ReservationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReservationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReservationCountAggregateInputType | true
    }

  export interface ReservationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Reservation'], meta: { name: 'Reservation' } }
    /**
     * Find zero or one Reservation that matches the filter.
     * @param {ReservationFindUniqueArgs} args - Arguments to find a Reservation
     * @example
     * // Get one Reservation
     * const reservation = await prisma.reservation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReservationFindUniqueArgs>(args: SelectSubset<T, ReservationFindUniqueArgs<ExtArgs>>): Prisma__ReservationClient<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Reservation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReservationFindUniqueOrThrowArgs} args - Arguments to find a Reservation
     * @example
     * // Get one Reservation
     * const reservation = await prisma.reservation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReservationFindUniqueOrThrowArgs>(args: SelectSubset<T, ReservationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReservationClient<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reservation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationFindFirstArgs} args - Arguments to find a Reservation
     * @example
     * // Get one Reservation
     * const reservation = await prisma.reservation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReservationFindFirstArgs>(args?: SelectSubset<T, ReservationFindFirstArgs<ExtArgs>>): Prisma__ReservationClient<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reservation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationFindFirstOrThrowArgs} args - Arguments to find a Reservation
     * @example
     * // Get one Reservation
     * const reservation = await prisma.reservation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReservationFindFirstOrThrowArgs>(args?: SelectSubset<T, ReservationFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReservationClient<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Reservations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reservations
     * const reservations = await prisma.reservation.findMany()
     * 
     * // Get first 10 Reservations
     * const reservations = await prisma.reservation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reservationWithIdOnly = await prisma.reservation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReservationFindManyArgs>(args?: SelectSubset<T, ReservationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Reservation.
     * @param {ReservationCreateArgs} args - Arguments to create a Reservation.
     * @example
     * // Create one Reservation
     * const Reservation = await prisma.reservation.create({
     *   data: {
     *     // ... data to create a Reservation
     *   }
     * })
     * 
     */
    create<T extends ReservationCreateArgs>(args: SelectSubset<T, ReservationCreateArgs<ExtArgs>>): Prisma__ReservationClient<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Reservations.
     * @param {ReservationCreateManyArgs} args - Arguments to create many Reservations.
     * @example
     * // Create many Reservations
     * const reservation = await prisma.reservation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReservationCreateManyArgs>(args?: SelectSubset<T, ReservationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Reservations and returns the data saved in the database.
     * @param {ReservationCreateManyAndReturnArgs} args - Arguments to create many Reservations.
     * @example
     * // Create many Reservations
     * const reservation = await prisma.reservation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Reservations and only return the `id`
     * const reservationWithIdOnly = await prisma.reservation.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReservationCreateManyAndReturnArgs>(args?: SelectSubset<T, ReservationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Reservation.
     * @param {ReservationDeleteArgs} args - Arguments to delete one Reservation.
     * @example
     * // Delete one Reservation
     * const Reservation = await prisma.reservation.delete({
     *   where: {
     *     // ... filter to delete one Reservation
     *   }
     * })
     * 
     */
    delete<T extends ReservationDeleteArgs>(args: SelectSubset<T, ReservationDeleteArgs<ExtArgs>>): Prisma__ReservationClient<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Reservation.
     * @param {ReservationUpdateArgs} args - Arguments to update one Reservation.
     * @example
     * // Update one Reservation
     * const reservation = await prisma.reservation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReservationUpdateArgs>(args: SelectSubset<T, ReservationUpdateArgs<ExtArgs>>): Prisma__ReservationClient<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Reservations.
     * @param {ReservationDeleteManyArgs} args - Arguments to filter Reservations to delete.
     * @example
     * // Delete a few Reservations
     * const { count } = await prisma.reservation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReservationDeleteManyArgs>(args?: SelectSubset<T, ReservationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reservations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reservations
     * const reservation = await prisma.reservation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReservationUpdateManyArgs>(args: SelectSubset<T, ReservationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reservations and returns the data updated in the database.
     * @param {ReservationUpdateManyAndReturnArgs} args - Arguments to update many Reservations.
     * @example
     * // Update many Reservations
     * const reservation = await prisma.reservation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Reservations and only return the `id`
     * const reservationWithIdOnly = await prisma.reservation.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ReservationUpdateManyAndReturnArgs>(args: SelectSubset<T, ReservationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Reservation.
     * @param {ReservationUpsertArgs} args - Arguments to update or create a Reservation.
     * @example
     * // Update or create a Reservation
     * const reservation = await prisma.reservation.upsert({
     *   create: {
     *     // ... data to create a Reservation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Reservation we want to update
     *   }
     * })
     */
    upsert<T extends ReservationUpsertArgs>(args: SelectSubset<T, ReservationUpsertArgs<ExtArgs>>): Prisma__ReservationClient<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Reservations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationCountArgs} args - Arguments to filter Reservations to count.
     * @example
     * // Count the number of Reservations
     * const count = await prisma.reservation.count({
     *   where: {
     *     // ... the filter for the Reservations we want to count
     *   }
     * })
    **/
    count<T extends ReservationCountArgs>(
      args?: Subset<T, ReservationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReservationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Reservation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ReservationAggregateArgs>(args: Subset<T, ReservationAggregateArgs>): Prisma.PrismaPromise<GetReservationAggregateType<T>>

    /**
     * Group by Reservation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ReservationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReservationGroupByArgs['orderBy'] }
        : { orderBy?: ReservationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ReservationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReservationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Reservation model
   */
  readonly fields: ReservationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Reservation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReservationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    guest<T extends GuestDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GuestDefaultArgs<ExtArgs>>): Prisma__GuestClient<$Result.GetResult<Prisma.$GuestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    room<T extends RoomDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RoomDefaultArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tenant<T extends TenantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TenantDefaultArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    hotel<T extends HotelDefaultArgs<ExtArgs> = {}>(args?: Subset<T, HotelDefaultArgs<ExtArgs>>): Prisma__HotelClient<$Result.GetResult<Prisma.$HotelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Reservation model
   */
  interface ReservationFieldRefs {
    readonly id: FieldRef<"Reservation", 'String'>
    readonly checkIn: FieldRef<"Reservation", 'DateTime'>
    readonly checkOut: FieldRef<"Reservation", 'DateTime'>
    readonly status: FieldRef<"Reservation", 'ReservationStatus'>
    readonly guestId: FieldRef<"Reservation", 'String'>
    readonly roomId: FieldRef<"Reservation", 'String'>
    readonly tenantId: FieldRef<"Reservation", 'String'>
    readonly hotelId: FieldRef<"Reservation", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Reservation findUnique
   */
  export type ReservationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservation
     */
    omit?: ReservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
    /**
     * Filter, which Reservation to fetch.
     */
    where: ReservationWhereUniqueInput
  }

  /**
   * Reservation findUniqueOrThrow
   */
  export type ReservationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservation
     */
    omit?: ReservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
    /**
     * Filter, which Reservation to fetch.
     */
    where: ReservationWhereUniqueInput
  }

  /**
   * Reservation findFirst
   */
  export type ReservationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservation
     */
    omit?: ReservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
    /**
     * Filter, which Reservation to fetch.
     */
    where?: ReservationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reservations to fetch.
     */
    orderBy?: ReservationOrderByWithRelationInput | ReservationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reservations.
     */
    cursor?: ReservationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reservations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reservations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reservations.
     */
    distinct?: ReservationScalarFieldEnum | ReservationScalarFieldEnum[]
  }

  /**
   * Reservation findFirstOrThrow
   */
  export type ReservationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservation
     */
    omit?: ReservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
    /**
     * Filter, which Reservation to fetch.
     */
    where?: ReservationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reservations to fetch.
     */
    orderBy?: ReservationOrderByWithRelationInput | ReservationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reservations.
     */
    cursor?: ReservationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reservations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reservations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reservations.
     */
    distinct?: ReservationScalarFieldEnum | ReservationScalarFieldEnum[]
  }

  /**
   * Reservation findMany
   */
  export type ReservationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservation
     */
    omit?: ReservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
    /**
     * Filter, which Reservations to fetch.
     */
    where?: ReservationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reservations to fetch.
     */
    orderBy?: ReservationOrderByWithRelationInput | ReservationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Reservations.
     */
    cursor?: ReservationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reservations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reservations.
     */
    skip?: number
    distinct?: ReservationScalarFieldEnum | ReservationScalarFieldEnum[]
  }

  /**
   * Reservation create
   */
  export type ReservationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservation
     */
    omit?: ReservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
    /**
     * The data needed to create a Reservation.
     */
    data: XOR<ReservationCreateInput, ReservationUncheckedCreateInput>
  }

  /**
   * Reservation createMany
   */
  export type ReservationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Reservations.
     */
    data: ReservationCreateManyInput | ReservationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Reservation createManyAndReturn
   */
  export type ReservationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Reservation
     */
    omit?: ReservationOmit<ExtArgs> | null
    /**
     * The data used to create many Reservations.
     */
    data: ReservationCreateManyInput | ReservationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Reservation update
   */
  export type ReservationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservation
     */
    omit?: ReservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
    /**
     * The data needed to update a Reservation.
     */
    data: XOR<ReservationUpdateInput, ReservationUncheckedUpdateInput>
    /**
     * Choose, which Reservation to update.
     */
    where: ReservationWhereUniqueInput
  }

  /**
   * Reservation updateMany
   */
  export type ReservationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Reservations.
     */
    data: XOR<ReservationUpdateManyMutationInput, ReservationUncheckedUpdateManyInput>
    /**
     * Filter which Reservations to update
     */
    where?: ReservationWhereInput
    /**
     * Limit how many Reservations to update.
     */
    limit?: number
  }

  /**
   * Reservation updateManyAndReturn
   */
  export type ReservationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Reservation
     */
    omit?: ReservationOmit<ExtArgs> | null
    /**
     * The data used to update Reservations.
     */
    data: XOR<ReservationUpdateManyMutationInput, ReservationUncheckedUpdateManyInput>
    /**
     * Filter which Reservations to update
     */
    where?: ReservationWhereInput
    /**
     * Limit how many Reservations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Reservation upsert
   */
  export type ReservationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservation
     */
    omit?: ReservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
    /**
     * The filter to search for the Reservation to update in case it exists.
     */
    where: ReservationWhereUniqueInput
    /**
     * In case the Reservation found by the `where` argument doesn't exist, create a new Reservation with this data.
     */
    create: XOR<ReservationCreateInput, ReservationUncheckedCreateInput>
    /**
     * In case the Reservation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReservationUpdateInput, ReservationUncheckedUpdateInput>
  }

  /**
   * Reservation delete
   */
  export type ReservationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservation
     */
    omit?: ReservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
    /**
     * Filter which Reservation to delete.
     */
    where: ReservationWhereUniqueInput
  }

  /**
   * Reservation deleteMany
   */
  export type ReservationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reservations to delete
     */
    where?: ReservationWhereInput
    /**
     * Limit how many Reservations to delete.
     */
    limit?: number
  }

  /**
   * Reservation without action
   */
  export type ReservationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservation
     */
    omit?: ReservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
  }


  /**
   * Model Folio
   */

  export type AggregateFolio = {
    _count: FolioCountAggregateOutputType | null
    _avg: FolioAvgAggregateOutputType | null
    _sum: FolioSumAggregateOutputType | null
    _min: FolioMinAggregateOutputType | null
    _max: FolioMaxAggregateOutputType | null
  }

  export type FolioAvgAggregateOutputType = {
    balance: Decimal | null
  }

  export type FolioSumAggregateOutputType = {
    balance: Decimal | null
  }

  export type FolioMinAggregateOutputType = {
    id: string | null
    guestId: string | null
    balance: Decimal | null
    status: $Enums.FolioStatus | null
    tenantId: string | null
    hotelId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FolioMaxAggregateOutputType = {
    id: string | null
    guestId: string | null
    balance: Decimal | null
    status: $Enums.FolioStatus | null
    tenantId: string | null
    hotelId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FolioCountAggregateOutputType = {
    id: number
    guestId: number
    balance: number
    status: number
    tenantId: number
    hotelId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type FolioAvgAggregateInputType = {
    balance?: true
  }

  export type FolioSumAggregateInputType = {
    balance?: true
  }

  export type FolioMinAggregateInputType = {
    id?: true
    guestId?: true
    balance?: true
    status?: true
    tenantId?: true
    hotelId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FolioMaxAggregateInputType = {
    id?: true
    guestId?: true
    balance?: true
    status?: true
    tenantId?: true
    hotelId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FolioCountAggregateInputType = {
    id?: true
    guestId?: true
    balance?: true
    status?: true
    tenantId?: true
    hotelId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type FolioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Folio to aggregate.
     */
    where?: FolioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Folios to fetch.
     */
    orderBy?: FolioOrderByWithRelationInput | FolioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FolioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Folios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Folios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Folios
    **/
    _count?: true | FolioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FolioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FolioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FolioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FolioMaxAggregateInputType
  }

  export type GetFolioAggregateType<T extends FolioAggregateArgs> = {
        [P in keyof T & keyof AggregateFolio]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFolio[P]>
      : GetScalarType<T[P], AggregateFolio[P]>
  }




  export type FolioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FolioWhereInput
    orderBy?: FolioOrderByWithAggregationInput | FolioOrderByWithAggregationInput[]
    by: FolioScalarFieldEnum[] | FolioScalarFieldEnum
    having?: FolioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FolioCountAggregateInputType | true
    _avg?: FolioAvgAggregateInputType
    _sum?: FolioSumAggregateInputType
    _min?: FolioMinAggregateInputType
    _max?: FolioMaxAggregateInputType
  }

  export type FolioGroupByOutputType = {
    id: string
    guestId: string
    balance: Decimal
    status: $Enums.FolioStatus
    tenantId: string
    hotelId: string
    createdAt: Date
    updatedAt: Date
    _count: FolioCountAggregateOutputType | null
    _avg: FolioAvgAggregateOutputType | null
    _sum: FolioSumAggregateOutputType | null
    _min: FolioMinAggregateOutputType | null
    _max: FolioMaxAggregateOutputType | null
  }

  type GetFolioGroupByPayload<T extends FolioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FolioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FolioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FolioGroupByOutputType[P]>
            : GetScalarType<T[P], FolioGroupByOutputType[P]>
        }
      >
    >


  export type FolioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    guestId?: boolean
    balance?: boolean
    status?: boolean
    tenantId?: boolean
    hotelId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    guest?: boolean | GuestDefaultArgs<ExtArgs>
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    hotel?: boolean | HotelDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["folio"]>

  export type FolioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    guestId?: boolean
    balance?: boolean
    status?: boolean
    tenantId?: boolean
    hotelId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    guest?: boolean | GuestDefaultArgs<ExtArgs>
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    hotel?: boolean | HotelDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["folio"]>

  export type FolioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    guestId?: boolean
    balance?: boolean
    status?: boolean
    tenantId?: boolean
    hotelId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    guest?: boolean | GuestDefaultArgs<ExtArgs>
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    hotel?: boolean | HotelDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["folio"]>

  export type FolioSelectScalar = {
    id?: boolean
    guestId?: boolean
    balance?: boolean
    status?: boolean
    tenantId?: boolean
    hotelId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type FolioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "guestId" | "balance" | "status" | "tenantId" | "hotelId" | "createdAt" | "updatedAt", ExtArgs["result"]["folio"]>
  export type FolioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    guest?: boolean | GuestDefaultArgs<ExtArgs>
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    hotel?: boolean | HotelDefaultArgs<ExtArgs>
  }
  export type FolioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    guest?: boolean | GuestDefaultArgs<ExtArgs>
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    hotel?: boolean | HotelDefaultArgs<ExtArgs>
  }
  export type FolioIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    guest?: boolean | GuestDefaultArgs<ExtArgs>
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    hotel?: boolean | HotelDefaultArgs<ExtArgs>
  }

  export type $FolioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Folio"
    objects: {
      guest: Prisma.$GuestPayload<ExtArgs>
      tenant: Prisma.$TenantPayload<ExtArgs>
      hotel: Prisma.$HotelPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      guestId: string
      balance: Prisma.Decimal
      status: $Enums.FolioStatus
      tenantId: string
      hotelId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["folio"]>
    composites: {}
  }

  type FolioGetPayload<S extends boolean | null | undefined | FolioDefaultArgs> = $Result.GetResult<Prisma.$FolioPayload, S>

  type FolioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FolioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FolioCountAggregateInputType | true
    }

  export interface FolioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Folio'], meta: { name: 'Folio' } }
    /**
     * Find zero or one Folio that matches the filter.
     * @param {FolioFindUniqueArgs} args - Arguments to find a Folio
     * @example
     * // Get one Folio
     * const folio = await prisma.folio.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FolioFindUniqueArgs>(args: SelectSubset<T, FolioFindUniqueArgs<ExtArgs>>): Prisma__FolioClient<$Result.GetResult<Prisma.$FolioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Folio that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FolioFindUniqueOrThrowArgs} args - Arguments to find a Folio
     * @example
     * // Get one Folio
     * const folio = await prisma.folio.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FolioFindUniqueOrThrowArgs>(args: SelectSubset<T, FolioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FolioClient<$Result.GetResult<Prisma.$FolioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Folio that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FolioFindFirstArgs} args - Arguments to find a Folio
     * @example
     * // Get one Folio
     * const folio = await prisma.folio.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FolioFindFirstArgs>(args?: SelectSubset<T, FolioFindFirstArgs<ExtArgs>>): Prisma__FolioClient<$Result.GetResult<Prisma.$FolioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Folio that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FolioFindFirstOrThrowArgs} args - Arguments to find a Folio
     * @example
     * // Get one Folio
     * const folio = await prisma.folio.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FolioFindFirstOrThrowArgs>(args?: SelectSubset<T, FolioFindFirstOrThrowArgs<ExtArgs>>): Prisma__FolioClient<$Result.GetResult<Prisma.$FolioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Folios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FolioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Folios
     * const folios = await prisma.folio.findMany()
     * 
     * // Get first 10 Folios
     * const folios = await prisma.folio.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const folioWithIdOnly = await prisma.folio.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FolioFindManyArgs>(args?: SelectSubset<T, FolioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FolioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Folio.
     * @param {FolioCreateArgs} args - Arguments to create a Folio.
     * @example
     * // Create one Folio
     * const Folio = await prisma.folio.create({
     *   data: {
     *     // ... data to create a Folio
     *   }
     * })
     * 
     */
    create<T extends FolioCreateArgs>(args: SelectSubset<T, FolioCreateArgs<ExtArgs>>): Prisma__FolioClient<$Result.GetResult<Prisma.$FolioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Folios.
     * @param {FolioCreateManyArgs} args - Arguments to create many Folios.
     * @example
     * // Create many Folios
     * const folio = await prisma.folio.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FolioCreateManyArgs>(args?: SelectSubset<T, FolioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Folios and returns the data saved in the database.
     * @param {FolioCreateManyAndReturnArgs} args - Arguments to create many Folios.
     * @example
     * // Create many Folios
     * const folio = await prisma.folio.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Folios and only return the `id`
     * const folioWithIdOnly = await prisma.folio.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FolioCreateManyAndReturnArgs>(args?: SelectSubset<T, FolioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FolioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Folio.
     * @param {FolioDeleteArgs} args - Arguments to delete one Folio.
     * @example
     * // Delete one Folio
     * const Folio = await prisma.folio.delete({
     *   where: {
     *     // ... filter to delete one Folio
     *   }
     * })
     * 
     */
    delete<T extends FolioDeleteArgs>(args: SelectSubset<T, FolioDeleteArgs<ExtArgs>>): Prisma__FolioClient<$Result.GetResult<Prisma.$FolioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Folio.
     * @param {FolioUpdateArgs} args - Arguments to update one Folio.
     * @example
     * // Update one Folio
     * const folio = await prisma.folio.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FolioUpdateArgs>(args: SelectSubset<T, FolioUpdateArgs<ExtArgs>>): Prisma__FolioClient<$Result.GetResult<Prisma.$FolioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Folios.
     * @param {FolioDeleteManyArgs} args - Arguments to filter Folios to delete.
     * @example
     * // Delete a few Folios
     * const { count } = await prisma.folio.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FolioDeleteManyArgs>(args?: SelectSubset<T, FolioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Folios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FolioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Folios
     * const folio = await prisma.folio.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FolioUpdateManyArgs>(args: SelectSubset<T, FolioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Folios and returns the data updated in the database.
     * @param {FolioUpdateManyAndReturnArgs} args - Arguments to update many Folios.
     * @example
     * // Update many Folios
     * const folio = await prisma.folio.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Folios and only return the `id`
     * const folioWithIdOnly = await prisma.folio.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FolioUpdateManyAndReturnArgs>(args: SelectSubset<T, FolioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FolioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Folio.
     * @param {FolioUpsertArgs} args - Arguments to update or create a Folio.
     * @example
     * // Update or create a Folio
     * const folio = await prisma.folio.upsert({
     *   create: {
     *     // ... data to create a Folio
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Folio we want to update
     *   }
     * })
     */
    upsert<T extends FolioUpsertArgs>(args: SelectSubset<T, FolioUpsertArgs<ExtArgs>>): Prisma__FolioClient<$Result.GetResult<Prisma.$FolioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Folios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FolioCountArgs} args - Arguments to filter Folios to count.
     * @example
     * // Count the number of Folios
     * const count = await prisma.folio.count({
     *   where: {
     *     // ... the filter for the Folios we want to count
     *   }
     * })
    **/
    count<T extends FolioCountArgs>(
      args?: Subset<T, FolioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FolioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Folio.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FolioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FolioAggregateArgs>(args: Subset<T, FolioAggregateArgs>): Prisma.PrismaPromise<GetFolioAggregateType<T>>

    /**
     * Group by Folio.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FolioGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FolioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FolioGroupByArgs['orderBy'] }
        : { orderBy?: FolioGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FolioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFolioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Folio model
   */
  readonly fields: FolioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Folio.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FolioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    guest<T extends GuestDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GuestDefaultArgs<ExtArgs>>): Prisma__GuestClient<$Result.GetResult<Prisma.$GuestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tenant<T extends TenantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TenantDefaultArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    hotel<T extends HotelDefaultArgs<ExtArgs> = {}>(args?: Subset<T, HotelDefaultArgs<ExtArgs>>): Prisma__HotelClient<$Result.GetResult<Prisma.$HotelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Folio model
   */
  interface FolioFieldRefs {
    readonly id: FieldRef<"Folio", 'String'>
    readonly guestId: FieldRef<"Folio", 'String'>
    readonly balance: FieldRef<"Folio", 'Decimal'>
    readonly status: FieldRef<"Folio", 'FolioStatus'>
    readonly tenantId: FieldRef<"Folio", 'String'>
    readonly hotelId: FieldRef<"Folio", 'String'>
    readonly createdAt: FieldRef<"Folio", 'DateTime'>
    readonly updatedAt: FieldRef<"Folio", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Folio findUnique
   */
  export type FolioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Folio
     */
    select?: FolioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Folio
     */
    omit?: FolioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FolioInclude<ExtArgs> | null
    /**
     * Filter, which Folio to fetch.
     */
    where: FolioWhereUniqueInput
  }

  /**
   * Folio findUniqueOrThrow
   */
  export type FolioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Folio
     */
    select?: FolioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Folio
     */
    omit?: FolioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FolioInclude<ExtArgs> | null
    /**
     * Filter, which Folio to fetch.
     */
    where: FolioWhereUniqueInput
  }

  /**
   * Folio findFirst
   */
  export type FolioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Folio
     */
    select?: FolioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Folio
     */
    omit?: FolioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FolioInclude<ExtArgs> | null
    /**
     * Filter, which Folio to fetch.
     */
    where?: FolioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Folios to fetch.
     */
    orderBy?: FolioOrderByWithRelationInput | FolioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Folios.
     */
    cursor?: FolioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Folios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Folios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Folios.
     */
    distinct?: FolioScalarFieldEnum | FolioScalarFieldEnum[]
  }

  /**
   * Folio findFirstOrThrow
   */
  export type FolioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Folio
     */
    select?: FolioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Folio
     */
    omit?: FolioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FolioInclude<ExtArgs> | null
    /**
     * Filter, which Folio to fetch.
     */
    where?: FolioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Folios to fetch.
     */
    orderBy?: FolioOrderByWithRelationInput | FolioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Folios.
     */
    cursor?: FolioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Folios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Folios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Folios.
     */
    distinct?: FolioScalarFieldEnum | FolioScalarFieldEnum[]
  }

  /**
   * Folio findMany
   */
  export type FolioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Folio
     */
    select?: FolioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Folio
     */
    omit?: FolioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FolioInclude<ExtArgs> | null
    /**
     * Filter, which Folios to fetch.
     */
    where?: FolioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Folios to fetch.
     */
    orderBy?: FolioOrderByWithRelationInput | FolioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Folios.
     */
    cursor?: FolioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Folios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Folios.
     */
    skip?: number
    distinct?: FolioScalarFieldEnum | FolioScalarFieldEnum[]
  }

  /**
   * Folio create
   */
  export type FolioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Folio
     */
    select?: FolioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Folio
     */
    omit?: FolioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FolioInclude<ExtArgs> | null
    /**
     * The data needed to create a Folio.
     */
    data: XOR<FolioCreateInput, FolioUncheckedCreateInput>
  }

  /**
   * Folio createMany
   */
  export type FolioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Folios.
     */
    data: FolioCreateManyInput | FolioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Folio createManyAndReturn
   */
  export type FolioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Folio
     */
    select?: FolioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Folio
     */
    omit?: FolioOmit<ExtArgs> | null
    /**
     * The data used to create many Folios.
     */
    data: FolioCreateManyInput | FolioCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FolioIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Folio update
   */
  export type FolioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Folio
     */
    select?: FolioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Folio
     */
    omit?: FolioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FolioInclude<ExtArgs> | null
    /**
     * The data needed to update a Folio.
     */
    data: XOR<FolioUpdateInput, FolioUncheckedUpdateInput>
    /**
     * Choose, which Folio to update.
     */
    where: FolioWhereUniqueInput
  }

  /**
   * Folio updateMany
   */
  export type FolioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Folios.
     */
    data: XOR<FolioUpdateManyMutationInput, FolioUncheckedUpdateManyInput>
    /**
     * Filter which Folios to update
     */
    where?: FolioWhereInput
    /**
     * Limit how many Folios to update.
     */
    limit?: number
  }

  /**
   * Folio updateManyAndReturn
   */
  export type FolioUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Folio
     */
    select?: FolioSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Folio
     */
    omit?: FolioOmit<ExtArgs> | null
    /**
     * The data used to update Folios.
     */
    data: XOR<FolioUpdateManyMutationInput, FolioUncheckedUpdateManyInput>
    /**
     * Filter which Folios to update
     */
    where?: FolioWhereInput
    /**
     * Limit how many Folios to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FolioIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Folio upsert
   */
  export type FolioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Folio
     */
    select?: FolioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Folio
     */
    omit?: FolioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FolioInclude<ExtArgs> | null
    /**
     * The filter to search for the Folio to update in case it exists.
     */
    where: FolioWhereUniqueInput
    /**
     * In case the Folio found by the `where` argument doesn't exist, create a new Folio with this data.
     */
    create: XOR<FolioCreateInput, FolioUncheckedCreateInput>
    /**
     * In case the Folio was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FolioUpdateInput, FolioUncheckedUpdateInput>
  }

  /**
   * Folio delete
   */
  export type FolioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Folio
     */
    select?: FolioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Folio
     */
    omit?: FolioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FolioInclude<ExtArgs> | null
    /**
     * Filter which Folio to delete.
     */
    where: FolioWhereUniqueInput
  }

  /**
   * Folio deleteMany
   */
  export type FolioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Folios to delete
     */
    where?: FolioWhereInput
    /**
     * Limit how many Folios to delete.
     */
    limit?: number
  }

  /**
   * Folio without action
   */
  export type FolioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Folio
     */
    select?: FolioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Folio
     */
    omit?: FolioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FolioInclude<ExtArgs> | null
  }


  /**
   * Model POSOutlet
   */

  export type AggregatePOSOutlet = {
    _count: POSOutletCountAggregateOutputType | null
    _min: POSOutletMinAggregateOutputType | null
    _max: POSOutletMaxAggregateOutputType | null
  }

  export type POSOutletMinAggregateOutputType = {
    id: string | null
    name: string | null
    tenantId: string | null
    hotelId: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type POSOutletMaxAggregateOutputType = {
    id: string | null
    name: string | null
    tenantId: string | null
    hotelId: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type POSOutletCountAggregateOutputType = {
    id: number
    name: number
    tenantId: number
    hotelId: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type POSOutletMinAggregateInputType = {
    id?: true
    name?: true
    tenantId?: true
    hotelId?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type POSOutletMaxAggregateInputType = {
    id?: true
    name?: true
    tenantId?: true
    hotelId?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type POSOutletCountAggregateInputType = {
    id?: true
    name?: true
    tenantId?: true
    hotelId?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type POSOutletAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which POSOutlet to aggregate.
     */
    where?: POSOutletWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of POSOutlets to fetch.
     */
    orderBy?: POSOutletOrderByWithRelationInput | POSOutletOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: POSOutletWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` POSOutlets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` POSOutlets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned POSOutlets
    **/
    _count?: true | POSOutletCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: POSOutletMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: POSOutletMaxAggregateInputType
  }

  export type GetPOSOutletAggregateType<T extends POSOutletAggregateArgs> = {
        [P in keyof T & keyof AggregatePOSOutlet]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePOSOutlet[P]>
      : GetScalarType<T[P], AggregatePOSOutlet[P]>
  }




  export type POSOutletGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: POSOutletWhereInput
    orderBy?: POSOutletOrderByWithAggregationInput | POSOutletOrderByWithAggregationInput[]
    by: POSOutletScalarFieldEnum[] | POSOutletScalarFieldEnum
    having?: POSOutletScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: POSOutletCountAggregateInputType | true
    _min?: POSOutletMinAggregateInputType
    _max?: POSOutletMaxAggregateInputType
  }

  export type POSOutletGroupByOutputType = {
    id: string
    name: string
    tenantId: string
    hotelId: string
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: POSOutletCountAggregateOutputType | null
    _min: POSOutletMinAggregateOutputType | null
    _max: POSOutletMaxAggregateOutputType | null
  }

  type GetPOSOutletGroupByPayload<T extends POSOutletGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<POSOutletGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof POSOutletGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], POSOutletGroupByOutputType[P]>
            : GetScalarType<T[P], POSOutletGroupByOutputType[P]>
        }
      >
    >


  export type POSOutletSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    tenantId?: boolean
    hotelId?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    hotel?: boolean | HotelDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pOSOutlet"]>

  export type POSOutletSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    tenantId?: boolean
    hotelId?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    hotel?: boolean | HotelDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pOSOutlet"]>

  export type POSOutletSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    tenantId?: boolean
    hotelId?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    hotel?: boolean | HotelDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pOSOutlet"]>

  export type POSOutletSelectScalar = {
    id?: boolean
    name?: boolean
    tenantId?: boolean
    hotelId?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type POSOutletOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "tenantId" | "hotelId" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["pOSOutlet"]>
  export type POSOutletInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    hotel?: boolean | HotelDefaultArgs<ExtArgs>
  }
  export type POSOutletIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    hotel?: boolean | HotelDefaultArgs<ExtArgs>
  }
  export type POSOutletIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    hotel?: boolean | HotelDefaultArgs<ExtArgs>
  }

  export type $POSOutletPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "POSOutlet"
    objects: {
      tenant: Prisma.$TenantPayload<ExtArgs>
      hotel: Prisma.$HotelPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      tenantId: string
      hotelId: string
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["pOSOutlet"]>
    composites: {}
  }

  type POSOutletGetPayload<S extends boolean | null | undefined | POSOutletDefaultArgs> = $Result.GetResult<Prisma.$POSOutletPayload, S>

  type POSOutletCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<POSOutletFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: POSOutletCountAggregateInputType | true
    }

  export interface POSOutletDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['POSOutlet'], meta: { name: 'POSOutlet' } }
    /**
     * Find zero or one POSOutlet that matches the filter.
     * @param {POSOutletFindUniqueArgs} args - Arguments to find a POSOutlet
     * @example
     * // Get one POSOutlet
     * const pOSOutlet = await prisma.pOSOutlet.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends POSOutletFindUniqueArgs>(args: SelectSubset<T, POSOutletFindUniqueArgs<ExtArgs>>): Prisma__POSOutletClient<$Result.GetResult<Prisma.$POSOutletPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one POSOutlet that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {POSOutletFindUniqueOrThrowArgs} args - Arguments to find a POSOutlet
     * @example
     * // Get one POSOutlet
     * const pOSOutlet = await prisma.pOSOutlet.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends POSOutletFindUniqueOrThrowArgs>(args: SelectSubset<T, POSOutletFindUniqueOrThrowArgs<ExtArgs>>): Prisma__POSOutletClient<$Result.GetResult<Prisma.$POSOutletPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first POSOutlet that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {POSOutletFindFirstArgs} args - Arguments to find a POSOutlet
     * @example
     * // Get one POSOutlet
     * const pOSOutlet = await prisma.pOSOutlet.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends POSOutletFindFirstArgs>(args?: SelectSubset<T, POSOutletFindFirstArgs<ExtArgs>>): Prisma__POSOutletClient<$Result.GetResult<Prisma.$POSOutletPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first POSOutlet that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {POSOutletFindFirstOrThrowArgs} args - Arguments to find a POSOutlet
     * @example
     * // Get one POSOutlet
     * const pOSOutlet = await prisma.pOSOutlet.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends POSOutletFindFirstOrThrowArgs>(args?: SelectSubset<T, POSOutletFindFirstOrThrowArgs<ExtArgs>>): Prisma__POSOutletClient<$Result.GetResult<Prisma.$POSOutletPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more POSOutlets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {POSOutletFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all POSOutlets
     * const pOSOutlets = await prisma.pOSOutlet.findMany()
     * 
     * // Get first 10 POSOutlets
     * const pOSOutlets = await prisma.pOSOutlet.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pOSOutletWithIdOnly = await prisma.pOSOutlet.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends POSOutletFindManyArgs>(args?: SelectSubset<T, POSOutletFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$POSOutletPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a POSOutlet.
     * @param {POSOutletCreateArgs} args - Arguments to create a POSOutlet.
     * @example
     * // Create one POSOutlet
     * const POSOutlet = await prisma.pOSOutlet.create({
     *   data: {
     *     // ... data to create a POSOutlet
     *   }
     * })
     * 
     */
    create<T extends POSOutletCreateArgs>(args: SelectSubset<T, POSOutletCreateArgs<ExtArgs>>): Prisma__POSOutletClient<$Result.GetResult<Prisma.$POSOutletPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many POSOutlets.
     * @param {POSOutletCreateManyArgs} args - Arguments to create many POSOutlets.
     * @example
     * // Create many POSOutlets
     * const pOSOutlet = await prisma.pOSOutlet.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends POSOutletCreateManyArgs>(args?: SelectSubset<T, POSOutletCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many POSOutlets and returns the data saved in the database.
     * @param {POSOutletCreateManyAndReturnArgs} args - Arguments to create many POSOutlets.
     * @example
     * // Create many POSOutlets
     * const pOSOutlet = await prisma.pOSOutlet.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many POSOutlets and only return the `id`
     * const pOSOutletWithIdOnly = await prisma.pOSOutlet.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends POSOutletCreateManyAndReturnArgs>(args?: SelectSubset<T, POSOutletCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$POSOutletPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a POSOutlet.
     * @param {POSOutletDeleteArgs} args - Arguments to delete one POSOutlet.
     * @example
     * // Delete one POSOutlet
     * const POSOutlet = await prisma.pOSOutlet.delete({
     *   where: {
     *     // ... filter to delete one POSOutlet
     *   }
     * })
     * 
     */
    delete<T extends POSOutletDeleteArgs>(args: SelectSubset<T, POSOutletDeleteArgs<ExtArgs>>): Prisma__POSOutletClient<$Result.GetResult<Prisma.$POSOutletPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one POSOutlet.
     * @param {POSOutletUpdateArgs} args - Arguments to update one POSOutlet.
     * @example
     * // Update one POSOutlet
     * const pOSOutlet = await prisma.pOSOutlet.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends POSOutletUpdateArgs>(args: SelectSubset<T, POSOutletUpdateArgs<ExtArgs>>): Prisma__POSOutletClient<$Result.GetResult<Prisma.$POSOutletPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more POSOutlets.
     * @param {POSOutletDeleteManyArgs} args - Arguments to filter POSOutlets to delete.
     * @example
     * // Delete a few POSOutlets
     * const { count } = await prisma.pOSOutlet.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends POSOutletDeleteManyArgs>(args?: SelectSubset<T, POSOutletDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more POSOutlets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {POSOutletUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many POSOutlets
     * const pOSOutlet = await prisma.pOSOutlet.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends POSOutletUpdateManyArgs>(args: SelectSubset<T, POSOutletUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more POSOutlets and returns the data updated in the database.
     * @param {POSOutletUpdateManyAndReturnArgs} args - Arguments to update many POSOutlets.
     * @example
     * // Update many POSOutlets
     * const pOSOutlet = await prisma.pOSOutlet.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more POSOutlets and only return the `id`
     * const pOSOutletWithIdOnly = await prisma.pOSOutlet.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends POSOutletUpdateManyAndReturnArgs>(args: SelectSubset<T, POSOutletUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$POSOutletPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one POSOutlet.
     * @param {POSOutletUpsertArgs} args - Arguments to update or create a POSOutlet.
     * @example
     * // Update or create a POSOutlet
     * const pOSOutlet = await prisma.pOSOutlet.upsert({
     *   create: {
     *     // ... data to create a POSOutlet
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the POSOutlet we want to update
     *   }
     * })
     */
    upsert<T extends POSOutletUpsertArgs>(args: SelectSubset<T, POSOutletUpsertArgs<ExtArgs>>): Prisma__POSOutletClient<$Result.GetResult<Prisma.$POSOutletPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of POSOutlets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {POSOutletCountArgs} args - Arguments to filter POSOutlets to count.
     * @example
     * // Count the number of POSOutlets
     * const count = await prisma.pOSOutlet.count({
     *   where: {
     *     // ... the filter for the POSOutlets we want to count
     *   }
     * })
    **/
    count<T extends POSOutletCountArgs>(
      args?: Subset<T, POSOutletCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], POSOutletCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a POSOutlet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {POSOutletAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends POSOutletAggregateArgs>(args: Subset<T, POSOutletAggregateArgs>): Prisma.PrismaPromise<GetPOSOutletAggregateType<T>>

    /**
     * Group by POSOutlet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {POSOutletGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends POSOutletGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: POSOutletGroupByArgs['orderBy'] }
        : { orderBy?: POSOutletGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, POSOutletGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPOSOutletGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the POSOutlet model
   */
  readonly fields: POSOutletFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for POSOutlet.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__POSOutletClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tenant<T extends TenantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TenantDefaultArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    hotel<T extends HotelDefaultArgs<ExtArgs> = {}>(args?: Subset<T, HotelDefaultArgs<ExtArgs>>): Prisma__HotelClient<$Result.GetResult<Prisma.$HotelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the POSOutlet model
   */
  interface POSOutletFieldRefs {
    readonly id: FieldRef<"POSOutlet", 'String'>
    readonly name: FieldRef<"POSOutlet", 'String'>
    readonly tenantId: FieldRef<"POSOutlet", 'String'>
    readonly hotelId: FieldRef<"POSOutlet", 'String'>
    readonly isActive: FieldRef<"POSOutlet", 'Boolean'>
    readonly createdAt: FieldRef<"POSOutlet", 'DateTime'>
    readonly updatedAt: FieldRef<"POSOutlet", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * POSOutlet findUnique
   */
  export type POSOutletFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the POSOutlet
     */
    select?: POSOutletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the POSOutlet
     */
    omit?: POSOutletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: POSOutletInclude<ExtArgs> | null
    /**
     * Filter, which POSOutlet to fetch.
     */
    where: POSOutletWhereUniqueInput
  }

  /**
   * POSOutlet findUniqueOrThrow
   */
  export type POSOutletFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the POSOutlet
     */
    select?: POSOutletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the POSOutlet
     */
    omit?: POSOutletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: POSOutletInclude<ExtArgs> | null
    /**
     * Filter, which POSOutlet to fetch.
     */
    where: POSOutletWhereUniqueInput
  }

  /**
   * POSOutlet findFirst
   */
  export type POSOutletFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the POSOutlet
     */
    select?: POSOutletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the POSOutlet
     */
    omit?: POSOutletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: POSOutletInclude<ExtArgs> | null
    /**
     * Filter, which POSOutlet to fetch.
     */
    where?: POSOutletWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of POSOutlets to fetch.
     */
    orderBy?: POSOutletOrderByWithRelationInput | POSOutletOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for POSOutlets.
     */
    cursor?: POSOutletWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` POSOutlets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` POSOutlets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of POSOutlets.
     */
    distinct?: POSOutletScalarFieldEnum | POSOutletScalarFieldEnum[]
  }

  /**
   * POSOutlet findFirstOrThrow
   */
  export type POSOutletFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the POSOutlet
     */
    select?: POSOutletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the POSOutlet
     */
    omit?: POSOutletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: POSOutletInclude<ExtArgs> | null
    /**
     * Filter, which POSOutlet to fetch.
     */
    where?: POSOutletWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of POSOutlets to fetch.
     */
    orderBy?: POSOutletOrderByWithRelationInput | POSOutletOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for POSOutlets.
     */
    cursor?: POSOutletWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` POSOutlets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` POSOutlets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of POSOutlets.
     */
    distinct?: POSOutletScalarFieldEnum | POSOutletScalarFieldEnum[]
  }

  /**
   * POSOutlet findMany
   */
  export type POSOutletFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the POSOutlet
     */
    select?: POSOutletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the POSOutlet
     */
    omit?: POSOutletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: POSOutletInclude<ExtArgs> | null
    /**
     * Filter, which POSOutlets to fetch.
     */
    where?: POSOutletWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of POSOutlets to fetch.
     */
    orderBy?: POSOutletOrderByWithRelationInput | POSOutletOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing POSOutlets.
     */
    cursor?: POSOutletWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` POSOutlets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` POSOutlets.
     */
    skip?: number
    distinct?: POSOutletScalarFieldEnum | POSOutletScalarFieldEnum[]
  }

  /**
   * POSOutlet create
   */
  export type POSOutletCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the POSOutlet
     */
    select?: POSOutletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the POSOutlet
     */
    omit?: POSOutletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: POSOutletInclude<ExtArgs> | null
    /**
     * The data needed to create a POSOutlet.
     */
    data: XOR<POSOutletCreateInput, POSOutletUncheckedCreateInput>
  }

  /**
   * POSOutlet createMany
   */
  export type POSOutletCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many POSOutlets.
     */
    data: POSOutletCreateManyInput | POSOutletCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * POSOutlet createManyAndReturn
   */
  export type POSOutletCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the POSOutlet
     */
    select?: POSOutletSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the POSOutlet
     */
    omit?: POSOutletOmit<ExtArgs> | null
    /**
     * The data used to create many POSOutlets.
     */
    data: POSOutletCreateManyInput | POSOutletCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: POSOutletIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * POSOutlet update
   */
  export type POSOutletUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the POSOutlet
     */
    select?: POSOutletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the POSOutlet
     */
    omit?: POSOutletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: POSOutletInclude<ExtArgs> | null
    /**
     * The data needed to update a POSOutlet.
     */
    data: XOR<POSOutletUpdateInput, POSOutletUncheckedUpdateInput>
    /**
     * Choose, which POSOutlet to update.
     */
    where: POSOutletWhereUniqueInput
  }

  /**
   * POSOutlet updateMany
   */
  export type POSOutletUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update POSOutlets.
     */
    data: XOR<POSOutletUpdateManyMutationInput, POSOutletUncheckedUpdateManyInput>
    /**
     * Filter which POSOutlets to update
     */
    where?: POSOutletWhereInput
    /**
     * Limit how many POSOutlets to update.
     */
    limit?: number
  }

  /**
   * POSOutlet updateManyAndReturn
   */
  export type POSOutletUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the POSOutlet
     */
    select?: POSOutletSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the POSOutlet
     */
    omit?: POSOutletOmit<ExtArgs> | null
    /**
     * The data used to update POSOutlets.
     */
    data: XOR<POSOutletUpdateManyMutationInput, POSOutletUncheckedUpdateManyInput>
    /**
     * Filter which POSOutlets to update
     */
    where?: POSOutletWhereInput
    /**
     * Limit how many POSOutlets to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: POSOutletIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * POSOutlet upsert
   */
  export type POSOutletUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the POSOutlet
     */
    select?: POSOutletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the POSOutlet
     */
    omit?: POSOutletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: POSOutletInclude<ExtArgs> | null
    /**
     * The filter to search for the POSOutlet to update in case it exists.
     */
    where: POSOutletWhereUniqueInput
    /**
     * In case the POSOutlet found by the `where` argument doesn't exist, create a new POSOutlet with this data.
     */
    create: XOR<POSOutletCreateInput, POSOutletUncheckedCreateInput>
    /**
     * In case the POSOutlet was found with the provided `where` argument, update it with this data.
     */
    update: XOR<POSOutletUpdateInput, POSOutletUncheckedUpdateInput>
  }

  /**
   * POSOutlet delete
   */
  export type POSOutletDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the POSOutlet
     */
    select?: POSOutletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the POSOutlet
     */
    omit?: POSOutletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: POSOutletInclude<ExtArgs> | null
    /**
     * Filter which POSOutlet to delete.
     */
    where: POSOutletWhereUniqueInput
  }

  /**
   * POSOutlet deleteMany
   */
  export type POSOutletDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which POSOutlets to delete
     */
    where?: POSOutletWhereInput
    /**
     * Limit how many POSOutlets to delete.
     */
    limit?: number
  }

  /**
   * POSOutlet without action
   */
  export type POSOutletDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the POSOutlet
     */
    select?: POSOutletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the POSOutlet
     */
    omit?: POSOutletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: POSOutletInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const TenantScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TenantScalarFieldEnum = (typeof TenantScalarFieldEnum)[keyof typeof TenantScalarFieldEnum]


  export const HotelScalarFieldEnum: {
    id: 'id',
    name: 'name',
    country: 'country',
    city: 'city',
    address: 'address',
    tenantId: 'tenantId'
  };

  export type HotelScalarFieldEnum = (typeof HotelScalarFieldEnum)[keyof typeof HotelScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    passwordHash: 'passwordHash',
    firstName: 'firstName',
    lastName: 'lastName',
    tenantId: 'tenantId',
    isActive: 'isActive',
    hotelId: 'hotelId',
    roleId: 'roleId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const RoleScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    tenantId: 'tenantId',
    hotelId: 'hotelId'
  };

  export type RoleScalarFieldEnum = (typeof RoleScalarFieldEnum)[keyof typeof RoleScalarFieldEnum]


  export const PermissionScalarFieldEnum: {
    id: 'id',
    subject: 'subject',
    action: 'action',
    conditions: 'conditions',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PermissionScalarFieldEnum = (typeof PermissionScalarFieldEnum)[keyof typeof PermissionScalarFieldEnum]


  export const RoomScalarFieldEnum: {
    id: 'id',
    roomNumber: 'roomNumber',
    status: 'status',
    roomTypeId: 'roomTypeId',
    tenantId: 'tenantId',
    hotelId: 'hotelId'
  };

  export type RoomScalarFieldEnum = (typeof RoomScalarFieldEnum)[keyof typeof RoomScalarFieldEnum]


  export const RoomTypeScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    baseRate: 'baseRate',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    tenantId: 'tenantId',
    hotelId: 'hotelId'
  };

  export type RoomTypeScalarFieldEnum = (typeof RoomTypeScalarFieldEnum)[keyof typeof RoomTypeScalarFieldEnum]


  export const RatePlanScalarFieldEnum: {
    id: 'id',
    tenantId: 'tenantId',
    hotelId: 'hotelId',
    code: 'code',
    name: 'name',
    baseAdjType: 'baseAdjType',
    baseAdjVal: 'baseAdjVal',
    currency: 'currency',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type RatePlanScalarFieldEnum = (typeof RatePlanScalarFieldEnum)[keyof typeof RatePlanScalarFieldEnum]


  export const GuestScalarFieldEnum: {
    id: 'id',
    firstName: 'firstName',
    lastName: 'lastName',
    email: 'email',
    phoneNumber: 'phoneNumber',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    tenantId: 'tenantId',
    hotelId: 'hotelId'
  };

  export type GuestScalarFieldEnum = (typeof GuestScalarFieldEnum)[keyof typeof GuestScalarFieldEnum]


  export const ReservationScalarFieldEnum: {
    id: 'id',
    checkIn: 'checkIn',
    checkOut: 'checkOut',
    status: 'status',
    guestId: 'guestId',
    roomId: 'roomId',
    tenantId: 'tenantId',
    hotelId: 'hotelId'
  };

  export type ReservationScalarFieldEnum = (typeof ReservationScalarFieldEnum)[keyof typeof ReservationScalarFieldEnum]


  export const FolioScalarFieldEnum: {
    id: 'id',
    guestId: 'guestId',
    balance: 'balance',
    status: 'status',
    tenantId: 'tenantId',
    hotelId: 'hotelId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type FolioScalarFieldEnum = (typeof FolioScalarFieldEnum)[keyof typeof FolioScalarFieldEnum]


  export const POSOutletScalarFieldEnum: {
    id: 'id',
    name: 'name',
    tenantId: 'tenantId',
    hotelId: 'hotelId',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type POSOutletScalarFieldEnum = (typeof POSOutletScalarFieldEnum)[keyof typeof POSOutletScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'RoomStatus'
   */
  export type EnumRoomStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RoomStatus'>
    


  /**
   * Reference to a field of type 'RoomStatus[]'
   */
  export type ListEnumRoomStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RoomStatus[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'AdjType'
   */
  export type EnumAdjTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AdjType'>
    


  /**
   * Reference to a field of type 'AdjType[]'
   */
  export type ListEnumAdjTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AdjType[]'>
    


  /**
   * Reference to a field of type 'ReservationStatus'
   */
  export type EnumReservationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ReservationStatus'>
    


  /**
   * Reference to a field of type 'ReservationStatus[]'
   */
  export type ListEnumReservationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ReservationStatus[]'>
    


  /**
   * Reference to a field of type 'FolioStatus'
   */
  export type EnumFolioStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FolioStatus'>
    


  /**
   * Reference to a field of type 'FolioStatus[]'
   */
  export type ListEnumFolioStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FolioStatus[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type TenantWhereInput = {
    AND?: TenantWhereInput | TenantWhereInput[]
    OR?: TenantWhereInput[]
    NOT?: TenantWhereInput | TenantWhereInput[]
    id?: StringFilter<"Tenant"> | string
    name?: StringFilter<"Tenant"> | string
    createdAt?: DateTimeFilter<"Tenant"> | Date | string
    updatedAt?: DateTimeFilter<"Tenant"> | Date | string
    hotels?: HotelListRelationFilter
    Users?: UserListRelationFilter
    Role?: RoleListRelationFilter
    RoomType?: RoomTypeListRelationFilter
    Room?: RoomListRelationFilter
    Guest?: GuestListRelationFilter
    Reservation?: ReservationListRelationFilter
    Folio?: FolioListRelationFilter
    POSOutlet?: POSOutletListRelationFilter
    RatePlan?: RatePlanListRelationFilter
  }

  export type TenantOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    hotels?: HotelOrderByRelationAggregateInput
    Users?: UserOrderByRelationAggregateInput
    Role?: RoleOrderByRelationAggregateInput
    RoomType?: RoomTypeOrderByRelationAggregateInput
    Room?: RoomOrderByRelationAggregateInput
    Guest?: GuestOrderByRelationAggregateInput
    Reservation?: ReservationOrderByRelationAggregateInput
    Folio?: FolioOrderByRelationAggregateInput
    POSOutlet?: POSOutletOrderByRelationAggregateInput
    RatePlan?: RatePlanOrderByRelationAggregateInput
  }

  export type TenantWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TenantWhereInput | TenantWhereInput[]
    OR?: TenantWhereInput[]
    NOT?: TenantWhereInput | TenantWhereInput[]
    name?: StringFilter<"Tenant"> | string
    createdAt?: DateTimeFilter<"Tenant"> | Date | string
    updatedAt?: DateTimeFilter<"Tenant"> | Date | string
    hotels?: HotelListRelationFilter
    Users?: UserListRelationFilter
    Role?: RoleListRelationFilter
    RoomType?: RoomTypeListRelationFilter
    Room?: RoomListRelationFilter
    Guest?: GuestListRelationFilter
    Reservation?: ReservationListRelationFilter
    Folio?: FolioListRelationFilter
    POSOutlet?: POSOutletListRelationFilter
    RatePlan?: RatePlanListRelationFilter
  }, "id">

  export type TenantOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TenantCountOrderByAggregateInput
    _max?: TenantMaxOrderByAggregateInput
    _min?: TenantMinOrderByAggregateInput
  }

  export type TenantScalarWhereWithAggregatesInput = {
    AND?: TenantScalarWhereWithAggregatesInput | TenantScalarWhereWithAggregatesInput[]
    OR?: TenantScalarWhereWithAggregatesInput[]
    NOT?: TenantScalarWhereWithAggregatesInput | TenantScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Tenant"> | string
    name?: StringWithAggregatesFilter<"Tenant"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Tenant"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Tenant"> | Date | string
  }

  export type HotelWhereInput = {
    AND?: HotelWhereInput | HotelWhereInput[]
    OR?: HotelWhereInput[]
    NOT?: HotelWhereInput | HotelWhereInput[]
    id?: StringFilter<"Hotel"> | string
    name?: StringFilter<"Hotel"> | string
    country?: StringFilter<"Hotel"> | string
    city?: StringFilter<"Hotel"> | string
    address?: StringFilter<"Hotel"> | string
    tenantId?: StringFilter<"Hotel"> | string
    tenant?: XOR<TenantScalarRelationFilter, TenantWhereInput>
    Guest?: GuestListRelationFilter
    RoomType?: RoomTypeListRelationFilter
    Room?: RoomListRelationFilter
    Role?: RoleListRelationFilter
    User?: UserListRelationFilter
    Reservation?: ReservationListRelationFilter
    Folio?: FolioListRelationFilter
    POSOutlet?: POSOutletListRelationFilter
    RatePlan?: RatePlanListRelationFilter
  }

  export type HotelOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    country?: SortOrder
    city?: SortOrder
    address?: SortOrder
    tenantId?: SortOrder
    tenant?: TenantOrderByWithRelationInput
    Guest?: GuestOrderByRelationAggregateInput
    RoomType?: RoomTypeOrderByRelationAggregateInput
    Room?: RoomOrderByRelationAggregateInput
    Role?: RoleOrderByRelationAggregateInput
    User?: UserOrderByRelationAggregateInput
    Reservation?: ReservationOrderByRelationAggregateInput
    Folio?: FolioOrderByRelationAggregateInput
    POSOutlet?: POSOutletOrderByRelationAggregateInput
    RatePlan?: RatePlanOrderByRelationAggregateInput
  }

  export type HotelWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: HotelWhereInput | HotelWhereInput[]
    OR?: HotelWhereInput[]
    NOT?: HotelWhereInput | HotelWhereInput[]
    name?: StringFilter<"Hotel"> | string
    country?: StringFilter<"Hotel"> | string
    city?: StringFilter<"Hotel"> | string
    address?: StringFilter<"Hotel"> | string
    tenantId?: StringFilter<"Hotel"> | string
    tenant?: XOR<TenantScalarRelationFilter, TenantWhereInput>
    Guest?: GuestListRelationFilter
    RoomType?: RoomTypeListRelationFilter
    Room?: RoomListRelationFilter
    Role?: RoleListRelationFilter
    User?: UserListRelationFilter
    Reservation?: ReservationListRelationFilter
    Folio?: FolioListRelationFilter
    POSOutlet?: POSOutletListRelationFilter
    RatePlan?: RatePlanListRelationFilter
  }, "id">

  export type HotelOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    country?: SortOrder
    city?: SortOrder
    address?: SortOrder
    tenantId?: SortOrder
    _count?: HotelCountOrderByAggregateInput
    _max?: HotelMaxOrderByAggregateInput
    _min?: HotelMinOrderByAggregateInput
  }

  export type HotelScalarWhereWithAggregatesInput = {
    AND?: HotelScalarWhereWithAggregatesInput | HotelScalarWhereWithAggregatesInput[]
    OR?: HotelScalarWhereWithAggregatesInput[]
    NOT?: HotelScalarWhereWithAggregatesInput | HotelScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Hotel"> | string
    name?: StringWithAggregatesFilter<"Hotel"> | string
    country?: StringWithAggregatesFilter<"Hotel"> | string
    city?: StringWithAggregatesFilter<"Hotel"> | string
    address?: StringWithAggregatesFilter<"Hotel"> | string
    tenantId?: StringWithAggregatesFilter<"Hotel"> | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    passwordHash?: StringFilter<"User"> | string
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    tenantId?: StringFilter<"User"> | string
    isActive?: BoolFilter<"User"> | boolean
    hotelId?: StringFilter<"User"> | string
    roleId?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    tenant?: XOR<TenantScalarRelationFilter, TenantWhereInput>
    hotel?: XOR<HotelScalarRelationFilter, HotelWhereInput>
    role?: XOR<RoleScalarRelationFilter, RoleWhereInput>
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    tenantId?: SortOrder
    isActive?: SortOrder
    hotelId?: SortOrder
    roleId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tenant?: TenantOrderByWithRelationInput
    hotel?: HotelOrderByWithRelationInput
    role?: RoleOrderByWithRelationInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    tenantId_email?: UserTenantIdEmailCompoundUniqueInput
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    email?: StringFilter<"User"> | string
    passwordHash?: StringFilter<"User"> | string
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    tenantId?: StringFilter<"User"> | string
    isActive?: BoolFilter<"User"> | boolean
    hotelId?: StringFilter<"User"> | string
    roleId?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    tenant?: XOR<TenantScalarRelationFilter, TenantWhereInput>
    hotel?: XOR<HotelScalarRelationFilter, HotelWhereInput>
    role?: XOR<RoleScalarRelationFilter, RoleWhereInput>
  }, "id" | "tenantId_email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    tenantId?: SortOrder
    isActive?: SortOrder
    hotelId?: SortOrder
    roleId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    passwordHash?: StringWithAggregatesFilter<"User"> | string
    firstName?: StringWithAggregatesFilter<"User"> | string
    lastName?: StringWithAggregatesFilter<"User"> | string
    tenantId?: StringWithAggregatesFilter<"User"> | string
    isActive?: BoolWithAggregatesFilter<"User"> | boolean
    hotelId?: StringWithAggregatesFilter<"User"> | string
    roleId?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type RoleWhereInput = {
    AND?: RoleWhereInput | RoleWhereInput[]
    OR?: RoleWhereInput[]
    NOT?: RoleWhereInput | RoleWhereInput[]
    id?: StringFilter<"Role"> | string
    name?: StringFilter<"Role"> | string
    createdAt?: DateTimeFilter<"Role"> | Date | string
    updatedAt?: DateTimeFilter<"Role"> | Date | string
    tenantId?: StringFilter<"Role"> | string
    hotelId?: StringFilter<"Role"> | string
    tenant?: XOR<TenantScalarRelationFilter, TenantWhereInput>
    hotel?: XOR<HotelScalarRelationFilter, HotelWhereInput>
    Users?: UserListRelationFilter
    permissions?: PermissionListRelationFilter
  }

  export type RoleOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tenantId?: SortOrder
    hotelId?: SortOrder
    tenant?: TenantOrderByWithRelationInput
    hotel?: HotelOrderByWithRelationInput
    Users?: UserOrderByRelationAggregateInput
    permissions?: PermissionOrderByRelationAggregateInput
  }

  export type RoleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    tenantId_hotelId_name?: RoleTenantIdHotelIdNameCompoundUniqueInput
    AND?: RoleWhereInput | RoleWhereInput[]
    OR?: RoleWhereInput[]
    NOT?: RoleWhereInput | RoleWhereInput[]
    name?: StringFilter<"Role"> | string
    createdAt?: DateTimeFilter<"Role"> | Date | string
    updatedAt?: DateTimeFilter<"Role"> | Date | string
    tenantId?: StringFilter<"Role"> | string
    hotelId?: StringFilter<"Role"> | string
    tenant?: XOR<TenantScalarRelationFilter, TenantWhereInput>
    hotel?: XOR<HotelScalarRelationFilter, HotelWhereInput>
    Users?: UserListRelationFilter
    permissions?: PermissionListRelationFilter
  }, "id" | "tenantId_hotelId_name">

  export type RoleOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tenantId?: SortOrder
    hotelId?: SortOrder
    _count?: RoleCountOrderByAggregateInput
    _max?: RoleMaxOrderByAggregateInput
    _min?: RoleMinOrderByAggregateInput
  }

  export type RoleScalarWhereWithAggregatesInput = {
    AND?: RoleScalarWhereWithAggregatesInput | RoleScalarWhereWithAggregatesInput[]
    OR?: RoleScalarWhereWithAggregatesInput[]
    NOT?: RoleScalarWhereWithAggregatesInput | RoleScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Role"> | string
    name?: StringWithAggregatesFilter<"Role"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Role"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Role"> | Date | string
    tenantId?: StringWithAggregatesFilter<"Role"> | string
    hotelId?: StringWithAggregatesFilter<"Role"> | string
  }

  export type PermissionWhereInput = {
    AND?: PermissionWhereInput | PermissionWhereInput[]
    OR?: PermissionWhereInput[]
    NOT?: PermissionWhereInput | PermissionWhereInput[]
    id?: StringFilter<"Permission"> | string
    subject?: StringFilter<"Permission"> | string
    action?: StringFilter<"Permission"> | string
    conditions?: JsonNullableFilter<"Permission">
    createdAt?: DateTimeFilter<"Permission"> | Date | string
    updatedAt?: DateTimeFilter<"Permission"> | Date | string
    roles?: RoleListRelationFilter
  }

  export type PermissionOrderByWithRelationInput = {
    id?: SortOrder
    subject?: SortOrder
    action?: SortOrder
    conditions?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    roles?: RoleOrderByRelationAggregateInput
  }

  export type PermissionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PermissionWhereInput | PermissionWhereInput[]
    OR?: PermissionWhereInput[]
    NOT?: PermissionWhereInput | PermissionWhereInput[]
    subject?: StringFilter<"Permission"> | string
    action?: StringFilter<"Permission"> | string
    conditions?: JsonNullableFilter<"Permission">
    createdAt?: DateTimeFilter<"Permission"> | Date | string
    updatedAt?: DateTimeFilter<"Permission"> | Date | string
    roles?: RoleListRelationFilter
  }, "id">

  export type PermissionOrderByWithAggregationInput = {
    id?: SortOrder
    subject?: SortOrder
    action?: SortOrder
    conditions?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PermissionCountOrderByAggregateInput
    _max?: PermissionMaxOrderByAggregateInput
    _min?: PermissionMinOrderByAggregateInput
  }

  export type PermissionScalarWhereWithAggregatesInput = {
    AND?: PermissionScalarWhereWithAggregatesInput | PermissionScalarWhereWithAggregatesInput[]
    OR?: PermissionScalarWhereWithAggregatesInput[]
    NOT?: PermissionScalarWhereWithAggregatesInput | PermissionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Permission"> | string
    subject?: StringWithAggregatesFilter<"Permission"> | string
    action?: StringWithAggregatesFilter<"Permission"> | string
    conditions?: JsonNullableWithAggregatesFilter<"Permission">
    createdAt?: DateTimeWithAggregatesFilter<"Permission"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Permission"> | Date | string
  }

  export type RoomWhereInput = {
    AND?: RoomWhereInput | RoomWhereInput[]
    OR?: RoomWhereInput[]
    NOT?: RoomWhereInput | RoomWhereInput[]
    id?: StringFilter<"Room"> | string
    roomNumber?: StringFilter<"Room"> | string
    status?: EnumRoomStatusFilter<"Room"> | $Enums.RoomStatus
    roomTypeId?: StringFilter<"Room"> | string
    tenantId?: StringFilter<"Room"> | string
    hotelId?: StringFilter<"Room"> | string
    roomType?: XOR<RoomTypeScalarRelationFilter, RoomTypeWhereInput>
    tenant?: XOR<TenantScalarRelationFilter, TenantWhereInput>
    hotel?: XOR<HotelScalarRelationFilter, HotelWhereInput>
    Reservation?: ReservationListRelationFilter
  }

  export type RoomOrderByWithRelationInput = {
    id?: SortOrder
    roomNumber?: SortOrder
    status?: SortOrder
    roomTypeId?: SortOrder
    tenantId?: SortOrder
    hotelId?: SortOrder
    roomType?: RoomTypeOrderByWithRelationInput
    tenant?: TenantOrderByWithRelationInput
    hotel?: HotelOrderByWithRelationInput
    Reservation?: ReservationOrderByRelationAggregateInput
  }

  export type RoomWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    tenantId_hotelId_roomNumber?: RoomTenantIdHotelIdRoomNumberCompoundUniqueInput
    AND?: RoomWhereInput | RoomWhereInput[]
    OR?: RoomWhereInput[]
    NOT?: RoomWhereInput | RoomWhereInput[]
    roomNumber?: StringFilter<"Room"> | string
    status?: EnumRoomStatusFilter<"Room"> | $Enums.RoomStatus
    roomTypeId?: StringFilter<"Room"> | string
    tenantId?: StringFilter<"Room"> | string
    hotelId?: StringFilter<"Room"> | string
    roomType?: XOR<RoomTypeScalarRelationFilter, RoomTypeWhereInput>
    tenant?: XOR<TenantScalarRelationFilter, TenantWhereInput>
    hotel?: XOR<HotelScalarRelationFilter, HotelWhereInput>
    Reservation?: ReservationListRelationFilter
  }, "id" | "tenantId_hotelId_roomNumber">

  export type RoomOrderByWithAggregationInput = {
    id?: SortOrder
    roomNumber?: SortOrder
    status?: SortOrder
    roomTypeId?: SortOrder
    tenantId?: SortOrder
    hotelId?: SortOrder
    _count?: RoomCountOrderByAggregateInput
    _max?: RoomMaxOrderByAggregateInput
    _min?: RoomMinOrderByAggregateInput
  }

  export type RoomScalarWhereWithAggregatesInput = {
    AND?: RoomScalarWhereWithAggregatesInput | RoomScalarWhereWithAggregatesInput[]
    OR?: RoomScalarWhereWithAggregatesInput[]
    NOT?: RoomScalarWhereWithAggregatesInput | RoomScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Room"> | string
    roomNumber?: StringWithAggregatesFilter<"Room"> | string
    status?: EnumRoomStatusWithAggregatesFilter<"Room"> | $Enums.RoomStatus
    roomTypeId?: StringWithAggregatesFilter<"Room"> | string
    tenantId?: StringWithAggregatesFilter<"Room"> | string
    hotelId?: StringWithAggregatesFilter<"Room"> | string
  }

  export type RoomTypeWhereInput = {
    AND?: RoomTypeWhereInput | RoomTypeWhereInput[]
    OR?: RoomTypeWhereInput[]
    NOT?: RoomTypeWhereInput | RoomTypeWhereInput[]
    id?: StringFilter<"RoomType"> | string
    name?: StringFilter<"RoomType"> | string
    description?: StringNullableFilter<"RoomType"> | string | null
    baseRate?: DecimalFilter<"RoomType"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"RoomType"> | Date | string
    updatedAt?: DateTimeFilter<"RoomType"> | Date | string
    tenantId?: StringFilter<"RoomType"> | string
    hotelId?: StringFilter<"RoomType"> | string
    tenant?: XOR<TenantScalarRelationFilter, TenantWhereInput>
    hotel?: XOR<HotelScalarRelationFilter, HotelWhereInput>
    Room?: RoomListRelationFilter
  }

  export type RoomTypeOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    baseRate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tenantId?: SortOrder
    hotelId?: SortOrder
    tenant?: TenantOrderByWithRelationInput
    hotel?: HotelOrderByWithRelationInput
    Room?: RoomOrderByRelationAggregateInput
  }

  export type RoomTypeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RoomTypeWhereInput | RoomTypeWhereInput[]
    OR?: RoomTypeWhereInput[]
    NOT?: RoomTypeWhereInput | RoomTypeWhereInput[]
    name?: StringFilter<"RoomType"> | string
    description?: StringNullableFilter<"RoomType"> | string | null
    baseRate?: DecimalFilter<"RoomType"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"RoomType"> | Date | string
    updatedAt?: DateTimeFilter<"RoomType"> | Date | string
    tenantId?: StringFilter<"RoomType"> | string
    hotelId?: StringFilter<"RoomType"> | string
    tenant?: XOR<TenantScalarRelationFilter, TenantWhereInput>
    hotel?: XOR<HotelScalarRelationFilter, HotelWhereInput>
    Room?: RoomListRelationFilter
  }, "id">

  export type RoomTypeOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    baseRate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tenantId?: SortOrder
    hotelId?: SortOrder
    _count?: RoomTypeCountOrderByAggregateInput
    _avg?: RoomTypeAvgOrderByAggregateInput
    _max?: RoomTypeMaxOrderByAggregateInput
    _min?: RoomTypeMinOrderByAggregateInput
    _sum?: RoomTypeSumOrderByAggregateInput
  }

  export type RoomTypeScalarWhereWithAggregatesInput = {
    AND?: RoomTypeScalarWhereWithAggregatesInput | RoomTypeScalarWhereWithAggregatesInput[]
    OR?: RoomTypeScalarWhereWithAggregatesInput[]
    NOT?: RoomTypeScalarWhereWithAggregatesInput | RoomTypeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"RoomType"> | string
    name?: StringWithAggregatesFilter<"RoomType"> | string
    description?: StringNullableWithAggregatesFilter<"RoomType"> | string | null
    baseRate?: DecimalWithAggregatesFilter<"RoomType"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeWithAggregatesFilter<"RoomType"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"RoomType"> | Date | string
    tenantId?: StringWithAggregatesFilter<"RoomType"> | string
    hotelId?: StringWithAggregatesFilter<"RoomType"> | string
  }

  export type RatePlanWhereInput = {
    AND?: RatePlanWhereInput | RatePlanWhereInput[]
    OR?: RatePlanWhereInput[]
    NOT?: RatePlanWhereInput | RatePlanWhereInput[]
    id?: StringFilter<"RatePlan"> | string
    tenantId?: StringFilter<"RatePlan"> | string
    hotelId?: StringFilter<"RatePlan"> | string
    code?: StringFilter<"RatePlan"> | string
    name?: StringFilter<"RatePlan"> | string
    baseAdjType?: EnumAdjTypeFilter<"RatePlan"> | $Enums.AdjType
    baseAdjVal?: DecimalFilter<"RatePlan"> | Decimal | DecimalJsLike | number | string
    currency?: StringFilter<"RatePlan"> | string
    isActive?: BoolFilter<"RatePlan"> | boolean
    createdAt?: DateTimeFilter<"RatePlan"> | Date | string
    updatedAt?: DateTimeFilter<"RatePlan"> | Date | string
    Tenant?: XOR<TenantScalarRelationFilter, TenantWhereInput>
    Hotel?: XOR<HotelScalarRelationFilter, HotelWhereInput>
  }

  export type RatePlanOrderByWithRelationInput = {
    id?: SortOrder
    tenantId?: SortOrder
    hotelId?: SortOrder
    code?: SortOrder
    name?: SortOrder
    baseAdjType?: SortOrder
    baseAdjVal?: SortOrder
    currency?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    Tenant?: TenantOrderByWithRelationInput
    Hotel?: HotelOrderByWithRelationInput
  }

  export type RatePlanWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    tenantId_hotelId_code?: RatePlanTenantIdHotelIdCodeCompoundUniqueInput
    AND?: RatePlanWhereInput | RatePlanWhereInput[]
    OR?: RatePlanWhereInput[]
    NOT?: RatePlanWhereInput | RatePlanWhereInput[]
    tenantId?: StringFilter<"RatePlan"> | string
    hotelId?: StringFilter<"RatePlan"> | string
    code?: StringFilter<"RatePlan"> | string
    name?: StringFilter<"RatePlan"> | string
    baseAdjType?: EnumAdjTypeFilter<"RatePlan"> | $Enums.AdjType
    baseAdjVal?: DecimalFilter<"RatePlan"> | Decimal | DecimalJsLike | number | string
    currency?: StringFilter<"RatePlan"> | string
    isActive?: BoolFilter<"RatePlan"> | boolean
    createdAt?: DateTimeFilter<"RatePlan"> | Date | string
    updatedAt?: DateTimeFilter<"RatePlan"> | Date | string
    Tenant?: XOR<TenantScalarRelationFilter, TenantWhereInput>
    Hotel?: XOR<HotelScalarRelationFilter, HotelWhereInput>
  }, "id" | "tenantId_hotelId_code">

  export type RatePlanOrderByWithAggregationInput = {
    id?: SortOrder
    tenantId?: SortOrder
    hotelId?: SortOrder
    code?: SortOrder
    name?: SortOrder
    baseAdjType?: SortOrder
    baseAdjVal?: SortOrder
    currency?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: RatePlanCountOrderByAggregateInput
    _avg?: RatePlanAvgOrderByAggregateInput
    _max?: RatePlanMaxOrderByAggregateInput
    _min?: RatePlanMinOrderByAggregateInput
    _sum?: RatePlanSumOrderByAggregateInput
  }

  export type RatePlanScalarWhereWithAggregatesInput = {
    AND?: RatePlanScalarWhereWithAggregatesInput | RatePlanScalarWhereWithAggregatesInput[]
    OR?: RatePlanScalarWhereWithAggregatesInput[]
    NOT?: RatePlanScalarWhereWithAggregatesInput | RatePlanScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"RatePlan"> | string
    tenantId?: StringWithAggregatesFilter<"RatePlan"> | string
    hotelId?: StringWithAggregatesFilter<"RatePlan"> | string
    code?: StringWithAggregatesFilter<"RatePlan"> | string
    name?: StringWithAggregatesFilter<"RatePlan"> | string
    baseAdjType?: EnumAdjTypeWithAggregatesFilter<"RatePlan"> | $Enums.AdjType
    baseAdjVal?: DecimalWithAggregatesFilter<"RatePlan"> | Decimal | DecimalJsLike | number | string
    currency?: StringWithAggregatesFilter<"RatePlan"> | string
    isActive?: BoolWithAggregatesFilter<"RatePlan"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"RatePlan"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"RatePlan"> | Date | string
  }

  export type GuestWhereInput = {
    AND?: GuestWhereInput | GuestWhereInput[]
    OR?: GuestWhereInput[]
    NOT?: GuestWhereInput | GuestWhereInput[]
    id?: StringFilter<"Guest"> | string
    firstName?: StringFilter<"Guest"> | string
    lastName?: StringFilter<"Guest"> | string
    email?: StringNullableFilter<"Guest"> | string | null
    phoneNumber?: StringNullableFilter<"Guest"> | string | null
    createdAt?: DateTimeFilter<"Guest"> | Date | string
    updatedAt?: DateTimeFilter<"Guest"> | Date | string
    tenantId?: StringFilter<"Guest"> | string
    hotelId?: StringFilter<"Guest"> | string
    tenant?: XOR<TenantScalarRelationFilter, TenantWhereInput>
    hotel?: XOR<HotelScalarRelationFilter, HotelWhereInput>
    Reservation?: ReservationListRelationFilter
    Folio?: FolioListRelationFilter
  }

  export type GuestOrderByWithRelationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrderInput | SortOrder
    phoneNumber?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tenantId?: SortOrder
    hotelId?: SortOrder
    tenant?: TenantOrderByWithRelationInput
    hotel?: HotelOrderByWithRelationInput
    Reservation?: ReservationOrderByRelationAggregateInput
    Folio?: FolioOrderByRelationAggregateInput
  }

  export type GuestWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    tenantId_email?: GuestTenantIdEmailCompoundUniqueInput
    AND?: GuestWhereInput | GuestWhereInput[]
    OR?: GuestWhereInput[]
    NOT?: GuestWhereInput | GuestWhereInput[]
    firstName?: StringFilter<"Guest"> | string
    lastName?: StringFilter<"Guest"> | string
    email?: StringNullableFilter<"Guest"> | string | null
    phoneNumber?: StringNullableFilter<"Guest"> | string | null
    createdAt?: DateTimeFilter<"Guest"> | Date | string
    updatedAt?: DateTimeFilter<"Guest"> | Date | string
    tenantId?: StringFilter<"Guest"> | string
    hotelId?: StringFilter<"Guest"> | string
    tenant?: XOR<TenantScalarRelationFilter, TenantWhereInput>
    hotel?: XOR<HotelScalarRelationFilter, HotelWhereInput>
    Reservation?: ReservationListRelationFilter
    Folio?: FolioListRelationFilter
  }, "id" | "tenantId_email">

  export type GuestOrderByWithAggregationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrderInput | SortOrder
    phoneNumber?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tenantId?: SortOrder
    hotelId?: SortOrder
    _count?: GuestCountOrderByAggregateInput
    _max?: GuestMaxOrderByAggregateInput
    _min?: GuestMinOrderByAggregateInput
  }

  export type GuestScalarWhereWithAggregatesInput = {
    AND?: GuestScalarWhereWithAggregatesInput | GuestScalarWhereWithAggregatesInput[]
    OR?: GuestScalarWhereWithAggregatesInput[]
    NOT?: GuestScalarWhereWithAggregatesInput | GuestScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Guest"> | string
    firstName?: StringWithAggregatesFilter<"Guest"> | string
    lastName?: StringWithAggregatesFilter<"Guest"> | string
    email?: StringNullableWithAggregatesFilter<"Guest"> | string | null
    phoneNumber?: StringNullableWithAggregatesFilter<"Guest"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Guest"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Guest"> | Date | string
    tenantId?: StringWithAggregatesFilter<"Guest"> | string
    hotelId?: StringWithAggregatesFilter<"Guest"> | string
  }

  export type ReservationWhereInput = {
    AND?: ReservationWhereInput | ReservationWhereInput[]
    OR?: ReservationWhereInput[]
    NOT?: ReservationWhereInput | ReservationWhereInput[]
    id?: StringFilter<"Reservation"> | string
    checkIn?: DateTimeFilter<"Reservation"> | Date | string
    checkOut?: DateTimeFilter<"Reservation"> | Date | string
    status?: EnumReservationStatusFilter<"Reservation"> | $Enums.ReservationStatus
    guestId?: StringFilter<"Reservation"> | string
    roomId?: StringFilter<"Reservation"> | string
    tenantId?: StringFilter<"Reservation"> | string
    hotelId?: StringFilter<"Reservation"> | string
    guest?: XOR<GuestScalarRelationFilter, GuestWhereInput>
    room?: XOR<RoomScalarRelationFilter, RoomWhereInput>
    tenant?: XOR<TenantScalarRelationFilter, TenantWhereInput>
    hotel?: XOR<HotelScalarRelationFilter, HotelWhereInput>
  }

  export type ReservationOrderByWithRelationInput = {
    id?: SortOrder
    checkIn?: SortOrder
    checkOut?: SortOrder
    status?: SortOrder
    guestId?: SortOrder
    roomId?: SortOrder
    tenantId?: SortOrder
    hotelId?: SortOrder
    guest?: GuestOrderByWithRelationInput
    room?: RoomOrderByWithRelationInput
    tenant?: TenantOrderByWithRelationInput
    hotel?: HotelOrderByWithRelationInput
  }

  export type ReservationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ReservationWhereInput | ReservationWhereInput[]
    OR?: ReservationWhereInput[]
    NOT?: ReservationWhereInput | ReservationWhereInput[]
    checkIn?: DateTimeFilter<"Reservation"> | Date | string
    checkOut?: DateTimeFilter<"Reservation"> | Date | string
    status?: EnumReservationStatusFilter<"Reservation"> | $Enums.ReservationStatus
    guestId?: StringFilter<"Reservation"> | string
    roomId?: StringFilter<"Reservation"> | string
    tenantId?: StringFilter<"Reservation"> | string
    hotelId?: StringFilter<"Reservation"> | string
    guest?: XOR<GuestScalarRelationFilter, GuestWhereInput>
    room?: XOR<RoomScalarRelationFilter, RoomWhereInput>
    tenant?: XOR<TenantScalarRelationFilter, TenantWhereInput>
    hotel?: XOR<HotelScalarRelationFilter, HotelWhereInput>
  }, "id">

  export type ReservationOrderByWithAggregationInput = {
    id?: SortOrder
    checkIn?: SortOrder
    checkOut?: SortOrder
    status?: SortOrder
    guestId?: SortOrder
    roomId?: SortOrder
    tenantId?: SortOrder
    hotelId?: SortOrder
    _count?: ReservationCountOrderByAggregateInput
    _max?: ReservationMaxOrderByAggregateInput
    _min?: ReservationMinOrderByAggregateInput
  }

  export type ReservationScalarWhereWithAggregatesInput = {
    AND?: ReservationScalarWhereWithAggregatesInput | ReservationScalarWhereWithAggregatesInput[]
    OR?: ReservationScalarWhereWithAggregatesInput[]
    NOT?: ReservationScalarWhereWithAggregatesInput | ReservationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Reservation"> | string
    checkIn?: DateTimeWithAggregatesFilter<"Reservation"> | Date | string
    checkOut?: DateTimeWithAggregatesFilter<"Reservation"> | Date | string
    status?: EnumReservationStatusWithAggregatesFilter<"Reservation"> | $Enums.ReservationStatus
    guestId?: StringWithAggregatesFilter<"Reservation"> | string
    roomId?: StringWithAggregatesFilter<"Reservation"> | string
    tenantId?: StringWithAggregatesFilter<"Reservation"> | string
    hotelId?: StringWithAggregatesFilter<"Reservation"> | string
  }

  export type FolioWhereInput = {
    AND?: FolioWhereInput | FolioWhereInput[]
    OR?: FolioWhereInput[]
    NOT?: FolioWhereInput | FolioWhereInput[]
    id?: StringFilter<"Folio"> | string
    guestId?: StringFilter<"Folio"> | string
    balance?: DecimalFilter<"Folio"> | Decimal | DecimalJsLike | number | string
    status?: EnumFolioStatusFilter<"Folio"> | $Enums.FolioStatus
    tenantId?: StringFilter<"Folio"> | string
    hotelId?: StringFilter<"Folio"> | string
    createdAt?: DateTimeFilter<"Folio"> | Date | string
    updatedAt?: DateTimeFilter<"Folio"> | Date | string
    guest?: XOR<GuestScalarRelationFilter, GuestWhereInput>
    tenant?: XOR<TenantScalarRelationFilter, TenantWhereInput>
    hotel?: XOR<HotelScalarRelationFilter, HotelWhereInput>
  }

  export type FolioOrderByWithRelationInput = {
    id?: SortOrder
    guestId?: SortOrder
    balance?: SortOrder
    status?: SortOrder
    tenantId?: SortOrder
    hotelId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    guest?: GuestOrderByWithRelationInput
    tenant?: TenantOrderByWithRelationInput
    hotel?: HotelOrderByWithRelationInput
  }

  export type FolioWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FolioWhereInput | FolioWhereInput[]
    OR?: FolioWhereInput[]
    NOT?: FolioWhereInput | FolioWhereInput[]
    guestId?: StringFilter<"Folio"> | string
    balance?: DecimalFilter<"Folio"> | Decimal | DecimalJsLike | number | string
    status?: EnumFolioStatusFilter<"Folio"> | $Enums.FolioStatus
    tenantId?: StringFilter<"Folio"> | string
    hotelId?: StringFilter<"Folio"> | string
    createdAt?: DateTimeFilter<"Folio"> | Date | string
    updatedAt?: DateTimeFilter<"Folio"> | Date | string
    guest?: XOR<GuestScalarRelationFilter, GuestWhereInput>
    tenant?: XOR<TenantScalarRelationFilter, TenantWhereInput>
    hotel?: XOR<HotelScalarRelationFilter, HotelWhereInput>
  }, "id">

  export type FolioOrderByWithAggregationInput = {
    id?: SortOrder
    guestId?: SortOrder
    balance?: SortOrder
    status?: SortOrder
    tenantId?: SortOrder
    hotelId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: FolioCountOrderByAggregateInput
    _avg?: FolioAvgOrderByAggregateInput
    _max?: FolioMaxOrderByAggregateInput
    _min?: FolioMinOrderByAggregateInput
    _sum?: FolioSumOrderByAggregateInput
  }

  export type FolioScalarWhereWithAggregatesInput = {
    AND?: FolioScalarWhereWithAggregatesInput | FolioScalarWhereWithAggregatesInput[]
    OR?: FolioScalarWhereWithAggregatesInput[]
    NOT?: FolioScalarWhereWithAggregatesInput | FolioScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Folio"> | string
    guestId?: StringWithAggregatesFilter<"Folio"> | string
    balance?: DecimalWithAggregatesFilter<"Folio"> | Decimal | DecimalJsLike | number | string
    status?: EnumFolioStatusWithAggregatesFilter<"Folio"> | $Enums.FolioStatus
    tenantId?: StringWithAggregatesFilter<"Folio"> | string
    hotelId?: StringWithAggregatesFilter<"Folio"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Folio"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Folio"> | Date | string
  }

  export type POSOutletWhereInput = {
    AND?: POSOutletWhereInput | POSOutletWhereInput[]
    OR?: POSOutletWhereInput[]
    NOT?: POSOutletWhereInput | POSOutletWhereInput[]
    id?: StringFilter<"POSOutlet"> | string
    name?: StringFilter<"POSOutlet"> | string
    tenantId?: StringFilter<"POSOutlet"> | string
    hotelId?: StringFilter<"POSOutlet"> | string
    isActive?: BoolFilter<"POSOutlet"> | boolean
    createdAt?: DateTimeFilter<"POSOutlet"> | Date | string
    updatedAt?: DateTimeFilter<"POSOutlet"> | Date | string
    tenant?: XOR<TenantScalarRelationFilter, TenantWhereInput>
    hotel?: XOR<HotelScalarRelationFilter, HotelWhereInput>
  }

  export type POSOutletOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    tenantId?: SortOrder
    hotelId?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tenant?: TenantOrderByWithRelationInput
    hotel?: HotelOrderByWithRelationInput
  }

  export type POSOutletWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: POSOutletWhereInput | POSOutletWhereInput[]
    OR?: POSOutletWhereInput[]
    NOT?: POSOutletWhereInput | POSOutletWhereInput[]
    name?: StringFilter<"POSOutlet"> | string
    tenantId?: StringFilter<"POSOutlet"> | string
    hotelId?: StringFilter<"POSOutlet"> | string
    isActive?: BoolFilter<"POSOutlet"> | boolean
    createdAt?: DateTimeFilter<"POSOutlet"> | Date | string
    updatedAt?: DateTimeFilter<"POSOutlet"> | Date | string
    tenant?: XOR<TenantScalarRelationFilter, TenantWhereInput>
    hotel?: XOR<HotelScalarRelationFilter, HotelWhereInput>
  }, "id">

  export type POSOutletOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    tenantId?: SortOrder
    hotelId?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: POSOutletCountOrderByAggregateInput
    _max?: POSOutletMaxOrderByAggregateInput
    _min?: POSOutletMinOrderByAggregateInput
  }

  export type POSOutletScalarWhereWithAggregatesInput = {
    AND?: POSOutletScalarWhereWithAggregatesInput | POSOutletScalarWhereWithAggregatesInput[]
    OR?: POSOutletScalarWhereWithAggregatesInput[]
    NOT?: POSOutletScalarWhereWithAggregatesInput | POSOutletScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"POSOutlet"> | string
    name?: StringWithAggregatesFilter<"POSOutlet"> | string
    tenantId?: StringWithAggregatesFilter<"POSOutlet"> | string
    hotelId?: StringWithAggregatesFilter<"POSOutlet"> | string
    isActive?: BoolWithAggregatesFilter<"POSOutlet"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"POSOutlet"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"POSOutlet"> | Date | string
  }

  export type TenantCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    hotels?: HotelCreateNestedManyWithoutTenantInput
    Users?: UserCreateNestedManyWithoutTenantInput
    Role?: RoleCreateNestedManyWithoutTenantInput
    RoomType?: RoomTypeCreateNestedManyWithoutTenantInput
    Room?: RoomCreateNestedManyWithoutTenantInput
    Guest?: GuestCreateNestedManyWithoutTenantInput
    Reservation?: ReservationCreateNestedManyWithoutTenantInput
    Folio?: FolioCreateNestedManyWithoutTenantInput
    POSOutlet?: POSOutletCreateNestedManyWithoutTenantInput
    RatePlan?: RatePlanCreateNestedManyWithoutTenantInput
  }

  export type TenantUncheckedCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    hotels?: HotelUncheckedCreateNestedManyWithoutTenantInput
    Users?: UserUncheckedCreateNestedManyWithoutTenantInput
    Role?: RoleUncheckedCreateNestedManyWithoutTenantInput
    RoomType?: RoomTypeUncheckedCreateNestedManyWithoutTenantInput
    Room?: RoomUncheckedCreateNestedManyWithoutTenantInput
    Guest?: GuestUncheckedCreateNestedManyWithoutTenantInput
    Reservation?: ReservationUncheckedCreateNestedManyWithoutTenantInput
    Folio?: FolioUncheckedCreateNestedManyWithoutTenantInput
    POSOutlet?: POSOutletUncheckedCreateNestedManyWithoutTenantInput
    RatePlan?: RatePlanUncheckedCreateNestedManyWithoutTenantInput
  }

  export type TenantUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hotels?: HotelUpdateManyWithoutTenantNestedInput
    Users?: UserUpdateManyWithoutTenantNestedInput
    Role?: RoleUpdateManyWithoutTenantNestedInput
    RoomType?: RoomTypeUpdateManyWithoutTenantNestedInput
    Room?: RoomUpdateManyWithoutTenantNestedInput
    Guest?: GuestUpdateManyWithoutTenantNestedInput
    Reservation?: ReservationUpdateManyWithoutTenantNestedInput
    Folio?: FolioUpdateManyWithoutTenantNestedInput
    POSOutlet?: POSOutletUpdateManyWithoutTenantNestedInput
    RatePlan?: RatePlanUpdateManyWithoutTenantNestedInput
  }

  export type TenantUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hotels?: HotelUncheckedUpdateManyWithoutTenantNestedInput
    Users?: UserUncheckedUpdateManyWithoutTenantNestedInput
    Role?: RoleUncheckedUpdateManyWithoutTenantNestedInput
    RoomType?: RoomTypeUncheckedUpdateManyWithoutTenantNestedInput
    Room?: RoomUncheckedUpdateManyWithoutTenantNestedInput
    Guest?: GuestUncheckedUpdateManyWithoutTenantNestedInput
    Reservation?: ReservationUncheckedUpdateManyWithoutTenantNestedInput
    Folio?: FolioUncheckedUpdateManyWithoutTenantNestedInput
    POSOutlet?: POSOutletUncheckedUpdateManyWithoutTenantNestedInput
    RatePlan?: RatePlanUncheckedUpdateManyWithoutTenantNestedInput
  }

  export type TenantCreateManyInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TenantUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TenantUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HotelCreateInput = {
    id?: string
    name: string
    country: string
    city: string
    address: string
    tenant: TenantCreateNestedOneWithoutHotelsInput
    Guest?: GuestCreateNestedManyWithoutHotelInput
    RoomType?: RoomTypeCreateNestedManyWithoutHotelInput
    Room?: RoomCreateNestedManyWithoutHotelInput
    Role?: RoleCreateNestedManyWithoutHotelInput
    User?: UserCreateNestedManyWithoutHotelInput
    Reservation?: ReservationCreateNestedManyWithoutHotelInput
    Folio?: FolioCreateNestedManyWithoutHotelInput
    POSOutlet?: POSOutletCreateNestedManyWithoutHotelInput
    RatePlan?: RatePlanCreateNestedManyWithoutHotelInput
  }

  export type HotelUncheckedCreateInput = {
    id?: string
    name: string
    country: string
    city: string
    address: string
    tenantId: string
    Guest?: GuestUncheckedCreateNestedManyWithoutHotelInput
    RoomType?: RoomTypeUncheckedCreateNestedManyWithoutHotelInput
    Room?: RoomUncheckedCreateNestedManyWithoutHotelInput
    Role?: RoleUncheckedCreateNestedManyWithoutHotelInput
    User?: UserUncheckedCreateNestedManyWithoutHotelInput
    Reservation?: ReservationUncheckedCreateNestedManyWithoutHotelInput
    Folio?: FolioUncheckedCreateNestedManyWithoutHotelInput
    POSOutlet?: POSOutletUncheckedCreateNestedManyWithoutHotelInput
    RatePlan?: RatePlanUncheckedCreateNestedManyWithoutHotelInput
  }

  export type HotelUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    tenant?: TenantUpdateOneRequiredWithoutHotelsNestedInput
    Guest?: GuestUpdateManyWithoutHotelNestedInput
    RoomType?: RoomTypeUpdateManyWithoutHotelNestedInput
    Room?: RoomUpdateManyWithoutHotelNestedInput
    Role?: RoleUpdateManyWithoutHotelNestedInput
    User?: UserUpdateManyWithoutHotelNestedInput
    Reservation?: ReservationUpdateManyWithoutHotelNestedInput
    Folio?: FolioUpdateManyWithoutHotelNestedInput
    POSOutlet?: POSOutletUpdateManyWithoutHotelNestedInput
    RatePlan?: RatePlanUpdateManyWithoutHotelNestedInput
  }

  export type HotelUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    Guest?: GuestUncheckedUpdateManyWithoutHotelNestedInput
    RoomType?: RoomTypeUncheckedUpdateManyWithoutHotelNestedInput
    Room?: RoomUncheckedUpdateManyWithoutHotelNestedInput
    Role?: RoleUncheckedUpdateManyWithoutHotelNestedInput
    User?: UserUncheckedUpdateManyWithoutHotelNestedInput
    Reservation?: ReservationUncheckedUpdateManyWithoutHotelNestedInput
    Folio?: FolioUncheckedUpdateManyWithoutHotelNestedInput
    POSOutlet?: POSOutletUncheckedUpdateManyWithoutHotelNestedInput
    RatePlan?: RatePlanUncheckedUpdateManyWithoutHotelNestedInput
  }

  export type HotelCreateManyInput = {
    id?: string
    name: string
    country: string
    city: string
    address: string
    tenantId: string
  }

  export type HotelUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
  }

  export type HotelUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    passwordHash: string
    firstName: string
    lastName: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    tenant: TenantCreateNestedOneWithoutUsersInput
    hotel: HotelCreateNestedOneWithoutUserInput
    role: RoleCreateNestedOneWithoutUsersInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    passwordHash: string
    firstName: string
    lastName: string
    tenantId: string
    isActive?: boolean
    hotelId: string
    roleId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: TenantUpdateOneRequiredWithoutUsersNestedInput
    hotel?: HotelUpdateOneRequiredWithoutUserNestedInput
    role?: RoleUpdateOneRequiredWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    hotelId?: StringFieldUpdateOperationsInput | string
    roleId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    passwordHash: string
    firstName: string
    lastName: string
    tenantId: string
    isActive?: boolean
    hotelId: string
    roleId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    hotelId?: StringFieldUpdateOperationsInput | string
    roleId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoleCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    tenant: TenantCreateNestedOneWithoutRoleInput
    hotel: HotelCreateNestedOneWithoutRoleInput
    Users?: UserCreateNestedManyWithoutRoleInput
    permissions?: PermissionCreateNestedManyWithoutRolesInput
  }

  export type RoleUncheckedCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    tenantId: string
    hotelId: string
    Users?: UserUncheckedCreateNestedManyWithoutRoleInput
    permissions?: PermissionUncheckedCreateNestedManyWithoutRolesInput
  }

  export type RoleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: TenantUpdateOneRequiredWithoutRoleNestedInput
    hotel?: HotelUpdateOneRequiredWithoutRoleNestedInput
    Users?: UserUpdateManyWithoutRoleNestedInput
    permissions?: PermissionUpdateManyWithoutRolesNestedInput
  }

  export type RoleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenantId?: StringFieldUpdateOperationsInput | string
    hotelId?: StringFieldUpdateOperationsInput | string
    Users?: UserUncheckedUpdateManyWithoutRoleNestedInput
    permissions?: PermissionUncheckedUpdateManyWithoutRolesNestedInput
  }

  export type RoleCreateManyInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    tenantId: string
    hotelId: string
  }

  export type RoleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenantId?: StringFieldUpdateOperationsInput | string
    hotelId?: StringFieldUpdateOperationsInput | string
  }

  export type PermissionCreateInput = {
    id?: string
    subject: string
    action: string
    conditions?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    roles?: RoleCreateNestedManyWithoutPermissionsInput
  }

  export type PermissionUncheckedCreateInput = {
    id?: string
    subject: string
    action: string
    conditions?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    roles?: RoleUncheckedCreateNestedManyWithoutPermissionsInput
  }

  export type PermissionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    conditions?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roles?: RoleUpdateManyWithoutPermissionsNestedInput
  }

  export type PermissionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    conditions?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roles?: RoleUncheckedUpdateManyWithoutPermissionsNestedInput
  }

  export type PermissionCreateManyInput = {
    id?: string
    subject: string
    action: string
    conditions?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PermissionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    conditions?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PermissionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    conditions?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomCreateInput = {
    id?: string
    roomNumber: string
    status?: $Enums.RoomStatus
    roomType: RoomTypeCreateNestedOneWithoutRoomInput
    tenant: TenantCreateNestedOneWithoutRoomInput
    hotel: HotelCreateNestedOneWithoutRoomInput
    Reservation?: ReservationCreateNestedManyWithoutRoomInput
  }

  export type RoomUncheckedCreateInput = {
    id?: string
    roomNumber: string
    status?: $Enums.RoomStatus
    roomTypeId: string
    tenantId: string
    hotelId: string
    Reservation?: ReservationUncheckedCreateNestedManyWithoutRoomInput
  }

  export type RoomUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    roomNumber?: StringFieldUpdateOperationsInput | string
    status?: EnumRoomStatusFieldUpdateOperationsInput | $Enums.RoomStatus
    roomType?: RoomTypeUpdateOneRequiredWithoutRoomNestedInput
    tenant?: TenantUpdateOneRequiredWithoutRoomNestedInput
    hotel?: HotelUpdateOneRequiredWithoutRoomNestedInput
    Reservation?: ReservationUpdateManyWithoutRoomNestedInput
  }

  export type RoomUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    roomNumber?: StringFieldUpdateOperationsInput | string
    status?: EnumRoomStatusFieldUpdateOperationsInput | $Enums.RoomStatus
    roomTypeId?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    hotelId?: StringFieldUpdateOperationsInput | string
    Reservation?: ReservationUncheckedUpdateManyWithoutRoomNestedInput
  }

  export type RoomCreateManyInput = {
    id?: string
    roomNumber: string
    status?: $Enums.RoomStatus
    roomTypeId: string
    tenantId: string
    hotelId: string
  }

  export type RoomUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    roomNumber?: StringFieldUpdateOperationsInput | string
    status?: EnumRoomStatusFieldUpdateOperationsInput | $Enums.RoomStatus
  }

  export type RoomUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    roomNumber?: StringFieldUpdateOperationsInput | string
    status?: EnumRoomStatusFieldUpdateOperationsInput | $Enums.RoomStatus
    roomTypeId?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    hotelId?: StringFieldUpdateOperationsInput | string
  }

  export type RoomTypeCreateInput = {
    id?: string
    name: string
    description?: string | null
    baseRate?: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    tenant: TenantCreateNestedOneWithoutRoomTypeInput
    hotel: HotelCreateNestedOneWithoutRoomTypeInput
    Room?: RoomCreateNestedManyWithoutRoomTypeInput
  }

  export type RoomTypeUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    baseRate?: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    tenantId: string
    hotelId: string
    Room?: RoomUncheckedCreateNestedManyWithoutRoomTypeInput
  }

  export type RoomTypeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    baseRate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: TenantUpdateOneRequiredWithoutRoomTypeNestedInput
    hotel?: HotelUpdateOneRequiredWithoutRoomTypeNestedInput
    Room?: RoomUpdateManyWithoutRoomTypeNestedInput
  }

  export type RoomTypeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    baseRate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenantId?: StringFieldUpdateOperationsInput | string
    hotelId?: StringFieldUpdateOperationsInput | string
    Room?: RoomUncheckedUpdateManyWithoutRoomTypeNestedInput
  }

  export type RoomTypeCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    baseRate?: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    tenantId: string
    hotelId: string
  }

  export type RoomTypeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    baseRate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomTypeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    baseRate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenantId?: StringFieldUpdateOperationsInput | string
    hotelId?: StringFieldUpdateOperationsInput | string
  }

  export type RatePlanCreateInput = {
    id?: string
    code: string
    name: string
    baseAdjType: $Enums.AdjType
    baseAdjVal: Decimal | DecimalJsLike | number | string
    currency: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    Tenant: TenantCreateNestedOneWithoutRatePlanInput
    Hotel: HotelCreateNestedOneWithoutRatePlanInput
  }

  export type RatePlanUncheckedCreateInput = {
    id?: string
    tenantId: string
    hotelId: string
    code: string
    name: string
    baseAdjType: $Enums.AdjType
    baseAdjVal: Decimal | DecimalJsLike | number | string
    currency: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RatePlanUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    baseAdjType?: EnumAdjTypeFieldUpdateOperationsInput | $Enums.AdjType
    baseAdjVal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Tenant?: TenantUpdateOneRequiredWithoutRatePlanNestedInput
    Hotel?: HotelUpdateOneRequiredWithoutRatePlanNestedInput
  }

  export type RatePlanUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    hotelId?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    baseAdjType?: EnumAdjTypeFieldUpdateOperationsInput | $Enums.AdjType
    baseAdjVal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RatePlanCreateManyInput = {
    id?: string
    tenantId: string
    hotelId: string
    code: string
    name: string
    baseAdjType: $Enums.AdjType
    baseAdjVal: Decimal | DecimalJsLike | number | string
    currency: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RatePlanUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    baseAdjType?: EnumAdjTypeFieldUpdateOperationsInput | $Enums.AdjType
    baseAdjVal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RatePlanUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    hotelId?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    baseAdjType?: EnumAdjTypeFieldUpdateOperationsInput | $Enums.AdjType
    baseAdjVal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GuestCreateInput = {
    id?: string
    firstName: string
    lastName: string
    email?: string | null
    phoneNumber?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tenant: TenantCreateNestedOneWithoutGuestInput
    hotel: HotelCreateNestedOneWithoutGuestInput
    Reservation?: ReservationCreateNestedManyWithoutGuestInput
    Folio?: FolioCreateNestedManyWithoutGuestInput
  }

  export type GuestUncheckedCreateInput = {
    id?: string
    firstName: string
    lastName: string
    email?: string | null
    phoneNumber?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tenantId: string
    hotelId: string
    Reservation?: ReservationUncheckedCreateNestedManyWithoutGuestInput
    Folio?: FolioUncheckedCreateNestedManyWithoutGuestInput
  }

  export type GuestUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: TenantUpdateOneRequiredWithoutGuestNestedInput
    hotel?: HotelUpdateOneRequiredWithoutGuestNestedInput
    Reservation?: ReservationUpdateManyWithoutGuestNestedInput
    Folio?: FolioUpdateManyWithoutGuestNestedInput
  }

  export type GuestUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenantId?: StringFieldUpdateOperationsInput | string
    hotelId?: StringFieldUpdateOperationsInput | string
    Reservation?: ReservationUncheckedUpdateManyWithoutGuestNestedInput
    Folio?: FolioUncheckedUpdateManyWithoutGuestNestedInput
  }

  export type GuestCreateManyInput = {
    id?: string
    firstName: string
    lastName: string
    email?: string | null
    phoneNumber?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tenantId: string
    hotelId: string
  }

  export type GuestUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GuestUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenantId?: StringFieldUpdateOperationsInput | string
    hotelId?: StringFieldUpdateOperationsInput | string
  }

  export type ReservationCreateInput = {
    id?: string
    checkIn: Date | string
    checkOut: Date | string
    status?: $Enums.ReservationStatus
    guest: GuestCreateNestedOneWithoutReservationInput
    room: RoomCreateNestedOneWithoutReservationInput
    tenant: TenantCreateNestedOneWithoutReservationInput
    hotel: HotelCreateNestedOneWithoutReservationInput
  }

  export type ReservationUncheckedCreateInput = {
    id?: string
    checkIn: Date | string
    checkOut: Date | string
    status?: $Enums.ReservationStatus
    guestId: string
    roomId: string
    tenantId: string
    hotelId: string
  }

  export type ReservationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumReservationStatusFieldUpdateOperationsInput | $Enums.ReservationStatus
    guest?: GuestUpdateOneRequiredWithoutReservationNestedInput
    room?: RoomUpdateOneRequiredWithoutReservationNestedInput
    tenant?: TenantUpdateOneRequiredWithoutReservationNestedInput
    hotel?: HotelUpdateOneRequiredWithoutReservationNestedInput
  }

  export type ReservationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumReservationStatusFieldUpdateOperationsInput | $Enums.ReservationStatus
    guestId?: StringFieldUpdateOperationsInput | string
    roomId?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    hotelId?: StringFieldUpdateOperationsInput | string
  }

  export type ReservationCreateManyInput = {
    id?: string
    checkIn: Date | string
    checkOut: Date | string
    status?: $Enums.ReservationStatus
    guestId: string
    roomId: string
    tenantId: string
    hotelId: string
  }

  export type ReservationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumReservationStatusFieldUpdateOperationsInput | $Enums.ReservationStatus
  }

  export type ReservationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumReservationStatusFieldUpdateOperationsInput | $Enums.ReservationStatus
    guestId?: StringFieldUpdateOperationsInput | string
    roomId?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    hotelId?: StringFieldUpdateOperationsInput | string
  }

  export type FolioCreateInput = {
    id?: string
    balance?: Decimal | DecimalJsLike | number | string
    status?: $Enums.FolioStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    guest: GuestCreateNestedOneWithoutFolioInput
    tenant: TenantCreateNestedOneWithoutFolioInput
    hotel: HotelCreateNestedOneWithoutFolioInput
  }

  export type FolioUncheckedCreateInput = {
    id?: string
    guestId: string
    balance?: Decimal | DecimalJsLike | number | string
    status?: $Enums.FolioStatus
    tenantId: string
    hotelId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FolioUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumFolioStatusFieldUpdateOperationsInput | $Enums.FolioStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    guest?: GuestUpdateOneRequiredWithoutFolioNestedInput
    tenant?: TenantUpdateOneRequiredWithoutFolioNestedInput
    hotel?: HotelUpdateOneRequiredWithoutFolioNestedInput
  }

  export type FolioUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    guestId?: StringFieldUpdateOperationsInput | string
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumFolioStatusFieldUpdateOperationsInput | $Enums.FolioStatus
    tenantId?: StringFieldUpdateOperationsInput | string
    hotelId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FolioCreateManyInput = {
    id?: string
    guestId: string
    balance?: Decimal | DecimalJsLike | number | string
    status?: $Enums.FolioStatus
    tenantId: string
    hotelId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FolioUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumFolioStatusFieldUpdateOperationsInput | $Enums.FolioStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FolioUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    guestId?: StringFieldUpdateOperationsInput | string
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumFolioStatusFieldUpdateOperationsInput | $Enums.FolioStatus
    tenantId?: StringFieldUpdateOperationsInput | string
    hotelId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type POSOutletCreateInput = {
    id?: string
    name: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    tenant: TenantCreateNestedOneWithoutPOSOutletInput
    hotel: HotelCreateNestedOneWithoutPOSOutletInput
  }

  export type POSOutletUncheckedCreateInput = {
    id?: string
    name: string
    tenantId: string
    hotelId: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type POSOutletUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: TenantUpdateOneRequiredWithoutPOSOutletNestedInput
    hotel?: HotelUpdateOneRequiredWithoutPOSOutletNestedInput
  }

  export type POSOutletUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    hotelId?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type POSOutletCreateManyInput = {
    id?: string
    name: string
    tenantId: string
    hotelId: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type POSOutletUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type POSOutletUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    hotelId?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type HotelListRelationFilter = {
    every?: HotelWhereInput
    some?: HotelWhereInput
    none?: HotelWhereInput
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type RoleListRelationFilter = {
    every?: RoleWhereInput
    some?: RoleWhereInput
    none?: RoleWhereInput
  }

  export type RoomTypeListRelationFilter = {
    every?: RoomTypeWhereInput
    some?: RoomTypeWhereInput
    none?: RoomTypeWhereInput
  }

  export type RoomListRelationFilter = {
    every?: RoomWhereInput
    some?: RoomWhereInput
    none?: RoomWhereInput
  }

  export type GuestListRelationFilter = {
    every?: GuestWhereInput
    some?: GuestWhereInput
    none?: GuestWhereInput
  }

  export type ReservationListRelationFilter = {
    every?: ReservationWhereInput
    some?: ReservationWhereInput
    none?: ReservationWhereInput
  }

  export type FolioListRelationFilter = {
    every?: FolioWhereInput
    some?: FolioWhereInput
    none?: FolioWhereInput
  }

  export type POSOutletListRelationFilter = {
    every?: POSOutletWhereInput
    some?: POSOutletWhereInput
    none?: POSOutletWhereInput
  }

  export type RatePlanListRelationFilter = {
    every?: RatePlanWhereInput
    some?: RatePlanWhereInput
    none?: RatePlanWhereInput
  }

  export type HotelOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RoleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RoomTypeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RoomOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GuestOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReservationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FolioOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type POSOutletOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RatePlanOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TenantCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TenantMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TenantMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type TenantScalarRelationFilter = {
    is?: TenantWhereInput
    isNot?: TenantWhereInput
  }

  export type HotelCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    country?: SortOrder
    city?: SortOrder
    address?: SortOrder
    tenantId?: SortOrder
  }

  export type HotelMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    country?: SortOrder
    city?: SortOrder
    address?: SortOrder
    tenantId?: SortOrder
  }

  export type HotelMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    country?: SortOrder
    city?: SortOrder
    address?: SortOrder
    tenantId?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type HotelScalarRelationFilter = {
    is?: HotelWhereInput
    isNot?: HotelWhereInput
  }

  export type RoleScalarRelationFilter = {
    is?: RoleWhereInput
    isNot?: RoleWhereInput
  }

  export type UserTenantIdEmailCompoundUniqueInput = {
    tenantId: string
    email: string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    tenantId?: SortOrder
    isActive?: SortOrder
    hotelId?: SortOrder
    roleId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    tenantId?: SortOrder
    isActive?: SortOrder
    hotelId?: SortOrder
    roleId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    tenantId?: SortOrder
    isActive?: SortOrder
    hotelId?: SortOrder
    roleId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type PermissionListRelationFilter = {
    every?: PermissionWhereInput
    some?: PermissionWhereInput
    none?: PermissionWhereInput
  }

  export type PermissionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RoleTenantIdHotelIdNameCompoundUniqueInput = {
    tenantId: string
    hotelId: string
    name: string
  }

  export type RoleCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tenantId?: SortOrder
    hotelId?: SortOrder
  }

  export type RoleMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tenantId?: SortOrder
    hotelId?: SortOrder
  }

  export type RoleMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tenantId?: SortOrder
    hotelId?: SortOrder
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type PermissionCountOrderByAggregateInput = {
    id?: SortOrder
    subject?: SortOrder
    action?: SortOrder
    conditions?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PermissionMaxOrderByAggregateInput = {
    id?: SortOrder
    subject?: SortOrder
    action?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PermissionMinOrderByAggregateInput = {
    id?: SortOrder
    subject?: SortOrder
    action?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type EnumRoomStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.RoomStatus | EnumRoomStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RoomStatus[] | ListEnumRoomStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RoomStatus[] | ListEnumRoomStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRoomStatusFilter<$PrismaModel> | $Enums.RoomStatus
  }

  export type RoomTypeScalarRelationFilter = {
    is?: RoomTypeWhereInput
    isNot?: RoomTypeWhereInput
  }

  export type RoomTenantIdHotelIdRoomNumberCompoundUniqueInput = {
    tenantId: string
    hotelId: string
    roomNumber: string
  }

  export type RoomCountOrderByAggregateInput = {
    id?: SortOrder
    roomNumber?: SortOrder
    status?: SortOrder
    roomTypeId?: SortOrder
    tenantId?: SortOrder
    hotelId?: SortOrder
  }

  export type RoomMaxOrderByAggregateInput = {
    id?: SortOrder
    roomNumber?: SortOrder
    status?: SortOrder
    roomTypeId?: SortOrder
    tenantId?: SortOrder
    hotelId?: SortOrder
  }

  export type RoomMinOrderByAggregateInput = {
    id?: SortOrder
    roomNumber?: SortOrder
    status?: SortOrder
    roomTypeId?: SortOrder
    tenantId?: SortOrder
    hotelId?: SortOrder
  }

  export type EnumRoomStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RoomStatus | EnumRoomStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RoomStatus[] | ListEnumRoomStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RoomStatus[] | ListEnumRoomStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRoomStatusWithAggregatesFilter<$PrismaModel> | $Enums.RoomStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoomStatusFilter<$PrismaModel>
    _max?: NestedEnumRoomStatusFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type RoomTypeCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    baseRate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tenantId?: SortOrder
    hotelId?: SortOrder
  }

  export type RoomTypeAvgOrderByAggregateInput = {
    baseRate?: SortOrder
  }

  export type RoomTypeMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    baseRate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tenantId?: SortOrder
    hotelId?: SortOrder
  }

  export type RoomTypeMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    baseRate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tenantId?: SortOrder
    hotelId?: SortOrder
  }

  export type RoomTypeSumOrderByAggregateInput = {
    baseRate?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type EnumAdjTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.AdjType | EnumAdjTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AdjType[] | ListEnumAdjTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AdjType[] | ListEnumAdjTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAdjTypeFilter<$PrismaModel> | $Enums.AdjType
  }

  export type RatePlanTenantIdHotelIdCodeCompoundUniqueInput = {
    tenantId: string
    hotelId: string
    code: string
  }

  export type RatePlanCountOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    hotelId?: SortOrder
    code?: SortOrder
    name?: SortOrder
    baseAdjType?: SortOrder
    baseAdjVal?: SortOrder
    currency?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RatePlanAvgOrderByAggregateInput = {
    baseAdjVal?: SortOrder
  }

  export type RatePlanMaxOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    hotelId?: SortOrder
    code?: SortOrder
    name?: SortOrder
    baseAdjType?: SortOrder
    baseAdjVal?: SortOrder
    currency?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RatePlanMinOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    hotelId?: SortOrder
    code?: SortOrder
    name?: SortOrder
    baseAdjType?: SortOrder
    baseAdjVal?: SortOrder
    currency?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RatePlanSumOrderByAggregateInput = {
    baseAdjVal?: SortOrder
  }

  export type EnumAdjTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AdjType | EnumAdjTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AdjType[] | ListEnumAdjTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AdjType[] | ListEnumAdjTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAdjTypeWithAggregatesFilter<$PrismaModel> | $Enums.AdjType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAdjTypeFilter<$PrismaModel>
    _max?: NestedEnumAdjTypeFilter<$PrismaModel>
  }

  export type GuestTenantIdEmailCompoundUniqueInput = {
    tenantId: string
    email: string
  }

  export type GuestCountOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tenantId?: SortOrder
    hotelId?: SortOrder
  }

  export type GuestMaxOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tenantId?: SortOrder
    hotelId?: SortOrder
  }

  export type GuestMinOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tenantId?: SortOrder
    hotelId?: SortOrder
  }

  export type EnumReservationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ReservationStatus | EnumReservationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ReservationStatus[] | ListEnumReservationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ReservationStatus[] | ListEnumReservationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumReservationStatusFilter<$PrismaModel> | $Enums.ReservationStatus
  }

  export type GuestScalarRelationFilter = {
    is?: GuestWhereInput
    isNot?: GuestWhereInput
  }

  export type RoomScalarRelationFilter = {
    is?: RoomWhereInput
    isNot?: RoomWhereInput
  }

  export type ReservationCountOrderByAggregateInput = {
    id?: SortOrder
    checkIn?: SortOrder
    checkOut?: SortOrder
    status?: SortOrder
    guestId?: SortOrder
    roomId?: SortOrder
    tenantId?: SortOrder
    hotelId?: SortOrder
  }

  export type ReservationMaxOrderByAggregateInput = {
    id?: SortOrder
    checkIn?: SortOrder
    checkOut?: SortOrder
    status?: SortOrder
    guestId?: SortOrder
    roomId?: SortOrder
    tenantId?: SortOrder
    hotelId?: SortOrder
  }

  export type ReservationMinOrderByAggregateInput = {
    id?: SortOrder
    checkIn?: SortOrder
    checkOut?: SortOrder
    status?: SortOrder
    guestId?: SortOrder
    roomId?: SortOrder
    tenantId?: SortOrder
    hotelId?: SortOrder
  }

  export type EnumReservationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ReservationStatus | EnumReservationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ReservationStatus[] | ListEnumReservationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ReservationStatus[] | ListEnumReservationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumReservationStatusWithAggregatesFilter<$PrismaModel> | $Enums.ReservationStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumReservationStatusFilter<$PrismaModel>
    _max?: NestedEnumReservationStatusFilter<$PrismaModel>
  }

  export type EnumFolioStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.FolioStatus | EnumFolioStatusFieldRefInput<$PrismaModel>
    in?: $Enums.FolioStatus[] | ListEnumFolioStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.FolioStatus[] | ListEnumFolioStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumFolioStatusFilter<$PrismaModel> | $Enums.FolioStatus
  }

  export type FolioCountOrderByAggregateInput = {
    id?: SortOrder
    guestId?: SortOrder
    balance?: SortOrder
    status?: SortOrder
    tenantId?: SortOrder
    hotelId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FolioAvgOrderByAggregateInput = {
    balance?: SortOrder
  }

  export type FolioMaxOrderByAggregateInput = {
    id?: SortOrder
    guestId?: SortOrder
    balance?: SortOrder
    status?: SortOrder
    tenantId?: SortOrder
    hotelId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FolioMinOrderByAggregateInput = {
    id?: SortOrder
    guestId?: SortOrder
    balance?: SortOrder
    status?: SortOrder
    tenantId?: SortOrder
    hotelId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FolioSumOrderByAggregateInput = {
    balance?: SortOrder
  }

  export type EnumFolioStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FolioStatus | EnumFolioStatusFieldRefInput<$PrismaModel>
    in?: $Enums.FolioStatus[] | ListEnumFolioStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.FolioStatus[] | ListEnumFolioStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumFolioStatusWithAggregatesFilter<$PrismaModel> | $Enums.FolioStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumFolioStatusFilter<$PrismaModel>
    _max?: NestedEnumFolioStatusFilter<$PrismaModel>
  }

  export type POSOutletCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    tenantId?: SortOrder
    hotelId?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type POSOutletMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    tenantId?: SortOrder
    hotelId?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type POSOutletMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    tenantId?: SortOrder
    hotelId?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HotelCreateNestedManyWithoutTenantInput = {
    create?: XOR<HotelCreateWithoutTenantInput, HotelUncheckedCreateWithoutTenantInput> | HotelCreateWithoutTenantInput[] | HotelUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: HotelCreateOrConnectWithoutTenantInput | HotelCreateOrConnectWithoutTenantInput[]
    createMany?: HotelCreateManyTenantInputEnvelope
    connect?: HotelWhereUniqueInput | HotelWhereUniqueInput[]
  }

  export type UserCreateNestedManyWithoutTenantInput = {
    create?: XOR<UserCreateWithoutTenantInput, UserUncheckedCreateWithoutTenantInput> | UserCreateWithoutTenantInput[] | UserUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: UserCreateOrConnectWithoutTenantInput | UserCreateOrConnectWithoutTenantInput[]
    createMany?: UserCreateManyTenantInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type RoleCreateNestedManyWithoutTenantInput = {
    create?: XOR<RoleCreateWithoutTenantInput, RoleUncheckedCreateWithoutTenantInput> | RoleCreateWithoutTenantInput[] | RoleUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: RoleCreateOrConnectWithoutTenantInput | RoleCreateOrConnectWithoutTenantInput[]
    createMany?: RoleCreateManyTenantInputEnvelope
    connect?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
  }

  export type RoomTypeCreateNestedManyWithoutTenantInput = {
    create?: XOR<RoomTypeCreateWithoutTenantInput, RoomTypeUncheckedCreateWithoutTenantInput> | RoomTypeCreateWithoutTenantInput[] | RoomTypeUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: RoomTypeCreateOrConnectWithoutTenantInput | RoomTypeCreateOrConnectWithoutTenantInput[]
    createMany?: RoomTypeCreateManyTenantInputEnvelope
    connect?: RoomTypeWhereUniqueInput | RoomTypeWhereUniqueInput[]
  }

  export type RoomCreateNestedManyWithoutTenantInput = {
    create?: XOR<RoomCreateWithoutTenantInput, RoomUncheckedCreateWithoutTenantInput> | RoomCreateWithoutTenantInput[] | RoomUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: RoomCreateOrConnectWithoutTenantInput | RoomCreateOrConnectWithoutTenantInput[]
    createMany?: RoomCreateManyTenantInputEnvelope
    connect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
  }

  export type GuestCreateNestedManyWithoutTenantInput = {
    create?: XOR<GuestCreateWithoutTenantInput, GuestUncheckedCreateWithoutTenantInput> | GuestCreateWithoutTenantInput[] | GuestUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: GuestCreateOrConnectWithoutTenantInput | GuestCreateOrConnectWithoutTenantInput[]
    createMany?: GuestCreateManyTenantInputEnvelope
    connect?: GuestWhereUniqueInput | GuestWhereUniqueInput[]
  }

  export type ReservationCreateNestedManyWithoutTenantInput = {
    create?: XOR<ReservationCreateWithoutTenantInput, ReservationUncheckedCreateWithoutTenantInput> | ReservationCreateWithoutTenantInput[] | ReservationUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: ReservationCreateOrConnectWithoutTenantInput | ReservationCreateOrConnectWithoutTenantInput[]
    createMany?: ReservationCreateManyTenantInputEnvelope
    connect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
  }

  export type FolioCreateNestedManyWithoutTenantInput = {
    create?: XOR<FolioCreateWithoutTenantInput, FolioUncheckedCreateWithoutTenantInput> | FolioCreateWithoutTenantInput[] | FolioUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: FolioCreateOrConnectWithoutTenantInput | FolioCreateOrConnectWithoutTenantInput[]
    createMany?: FolioCreateManyTenantInputEnvelope
    connect?: FolioWhereUniqueInput | FolioWhereUniqueInput[]
  }

  export type POSOutletCreateNestedManyWithoutTenantInput = {
    create?: XOR<POSOutletCreateWithoutTenantInput, POSOutletUncheckedCreateWithoutTenantInput> | POSOutletCreateWithoutTenantInput[] | POSOutletUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: POSOutletCreateOrConnectWithoutTenantInput | POSOutletCreateOrConnectWithoutTenantInput[]
    createMany?: POSOutletCreateManyTenantInputEnvelope
    connect?: POSOutletWhereUniqueInput | POSOutletWhereUniqueInput[]
  }

  export type RatePlanCreateNestedManyWithoutTenantInput = {
    create?: XOR<RatePlanCreateWithoutTenantInput, RatePlanUncheckedCreateWithoutTenantInput> | RatePlanCreateWithoutTenantInput[] | RatePlanUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: RatePlanCreateOrConnectWithoutTenantInput | RatePlanCreateOrConnectWithoutTenantInput[]
    createMany?: RatePlanCreateManyTenantInputEnvelope
    connect?: RatePlanWhereUniqueInput | RatePlanWhereUniqueInput[]
  }

  export type HotelUncheckedCreateNestedManyWithoutTenantInput = {
    create?: XOR<HotelCreateWithoutTenantInput, HotelUncheckedCreateWithoutTenantInput> | HotelCreateWithoutTenantInput[] | HotelUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: HotelCreateOrConnectWithoutTenantInput | HotelCreateOrConnectWithoutTenantInput[]
    createMany?: HotelCreateManyTenantInputEnvelope
    connect?: HotelWhereUniqueInput | HotelWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutTenantInput = {
    create?: XOR<UserCreateWithoutTenantInput, UserUncheckedCreateWithoutTenantInput> | UserCreateWithoutTenantInput[] | UserUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: UserCreateOrConnectWithoutTenantInput | UserCreateOrConnectWithoutTenantInput[]
    createMany?: UserCreateManyTenantInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type RoleUncheckedCreateNestedManyWithoutTenantInput = {
    create?: XOR<RoleCreateWithoutTenantInput, RoleUncheckedCreateWithoutTenantInput> | RoleCreateWithoutTenantInput[] | RoleUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: RoleCreateOrConnectWithoutTenantInput | RoleCreateOrConnectWithoutTenantInput[]
    createMany?: RoleCreateManyTenantInputEnvelope
    connect?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
  }

  export type RoomTypeUncheckedCreateNestedManyWithoutTenantInput = {
    create?: XOR<RoomTypeCreateWithoutTenantInput, RoomTypeUncheckedCreateWithoutTenantInput> | RoomTypeCreateWithoutTenantInput[] | RoomTypeUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: RoomTypeCreateOrConnectWithoutTenantInput | RoomTypeCreateOrConnectWithoutTenantInput[]
    createMany?: RoomTypeCreateManyTenantInputEnvelope
    connect?: RoomTypeWhereUniqueInput | RoomTypeWhereUniqueInput[]
  }

  export type RoomUncheckedCreateNestedManyWithoutTenantInput = {
    create?: XOR<RoomCreateWithoutTenantInput, RoomUncheckedCreateWithoutTenantInput> | RoomCreateWithoutTenantInput[] | RoomUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: RoomCreateOrConnectWithoutTenantInput | RoomCreateOrConnectWithoutTenantInput[]
    createMany?: RoomCreateManyTenantInputEnvelope
    connect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
  }

  export type GuestUncheckedCreateNestedManyWithoutTenantInput = {
    create?: XOR<GuestCreateWithoutTenantInput, GuestUncheckedCreateWithoutTenantInput> | GuestCreateWithoutTenantInput[] | GuestUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: GuestCreateOrConnectWithoutTenantInput | GuestCreateOrConnectWithoutTenantInput[]
    createMany?: GuestCreateManyTenantInputEnvelope
    connect?: GuestWhereUniqueInput | GuestWhereUniqueInput[]
  }

  export type ReservationUncheckedCreateNestedManyWithoutTenantInput = {
    create?: XOR<ReservationCreateWithoutTenantInput, ReservationUncheckedCreateWithoutTenantInput> | ReservationCreateWithoutTenantInput[] | ReservationUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: ReservationCreateOrConnectWithoutTenantInput | ReservationCreateOrConnectWithoutTenantInput[]
    createMany?: ReservationCreateManyTenantInputEnvelope
    connect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
  }

  export type FolioUncheckedCreateNestedManyWithoutTenantInput = {
    create?: XOR<FolioCreateWithoutTenantInput, FolioUncheckedCreateWithoutTenantInput> | FolioCreateWithoutTenantInput[] | FolioUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: FolioCreateOrConnectWithoutTenantInput | FolioCreateOrConnectWithoutTenantInput[]
    createMany?: FolioCreateManyTenantInputEnvelope
    connect?: FolioWhereUniqueInput | FolioWhereUniqueInput[]
  }

  export type POSOutletUncheckedCreateNestedManyWithoutTenantInput = {
    create?: XOR<POSOutletCreateWithoutTenantInput, POSOutletUncheckedCreateWithoutTenantInput> | POSOutletCreateWithoutTenantInput[] | POSOutletUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: POSOutletCreateOrConnectWithoutTenantInput | POSOutletCreateOrConnectWithoutTenantInput[]
    createMany?: POSOutletCreateManyTenantInputEnvelope
    connect?: POSOutletWhereUniqueInput | POSOutletWhereUniqueInput[]
  }

  export type RatePlanUncheckedCreateNestedManyWithoutTenantInput = {
    create?: XOR<RatePlanCreateWithoutTenantInput, RatePlanUncheckedCreateWithoutTenantInput> | RatePlanCreateWithoutTenantInput[] | RatePlanUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: RatePlanCreateOrConnectWithoutTenantInput | RatePlanCreateOrConnectWithoutTenantInput[]
    createMany?: RatePlanCreateManyTenantInputEnvelope
    connect?: RatePlanWhereUniqueInput | RatePlanWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type HotelUpdateManyWithoutTenantNestedInput = {
    create?: XOR<HotelCreateWithoutTenantInput, HotelUncheckedCreateWithoutTenantInput> | HotelCreateWithoutTenantInput[] | HotelUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: HotelCreateOrConnectWithoutTenantInput | HotelCreateOrConnectWithoutTenantInput[]
    upsert?: HotelUpsertWithWhereUniqueWithoutTenantInput | HotelUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: HotelCreateManyTenantInputEnvelope
    set?: HotelWhereUniqueInput | HotelWhereUniqueInput[]
    disconnect?: HotelWhereUniqueInput | HotelWhereUniqueInput[]
    delete?: HotelWhereUniqueInput | HotelWhereUniqueInput[]
    connect?: HotelWhereUniqueInput | HotelWhereUniqueInput[]
    update?: HotelUpdateWithWhereUniqueWithoutTenantInput | HotelUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: HotelUpdateManyWithWhereWithoutTenantInput | HotelUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: HotelScalarWhereInput | HotelScalarWhereInput[]
  }

  export type UserUpdateManyWithoutTenantNestedInput = {
    create?: XOR<UserCreateWithoutTenantInput, UserUncheckedCreateWithoutTenantInput> | UserCreateWithoutTenantInput[] | UserUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: UserCreateOrConnectWithoutTenantInput | UserCreateOrConnectWithoutTenantInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutTenantInput | UserUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: UserCreateManyTenantInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutTenantInput | UserUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: UserUpdateManyWithWhereWithoutTenantInput | UserUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type RoleUpdateManyWithoutTenantNestedInput = {
    create?: XOR<RoleCreateWithoutTenantInput, RoleUncheckedCreateWithoutTenantInput> | RoleCreateWithoutTenantInput[] | RoleUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: RoleCreateOrConnectWithoutTenantInput | RoleCreateOrConnectWithoutTenantInput[]
    upsert?: RoleUpsertWithWhereUniqueWithoutTenantInput | RoleUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: RoleCreateManyTenantInputEnvelope
    set?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    disconnect?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    delete?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    connect?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    update?: RoleUpdateWithWhereUniqueWithoutTenantInput | RoleUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: RoleUpdateManyWithWhereWithoutTenantInput | RoleUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: RoleScalarWhereInput | RoleScalarWhereInput[]
  }

  export type RoomTypeUpdateManyWithoutTenantNestedInput = {
    create?: XOR<RoomTypeCreateWithoutTenantInput, RoomTypeUncheckedCreateWithoutTenantInput> | RoomTypeCreateWithoutTenantInput[] | RoomTypeUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: RoomTypeCreateOrConnectWithoutTenantInput | RoomTypeCreateOrConnectWithoutTenantInput[]
    upsert?: RoomTypeUpsertWithWhereUniqueWithoutTenantInput | RoomTypeUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: RoomTypeCreateManyTenantInputEnvelope
    set?: RoomTypeWhereUniqueInput | RoomTypeWhereUniqueInput[]
    disconnect?: RoomTypeWhereUniqueInput | RoomTypeWhereUniqueInput[]
    delete?: RoomTypeWhereUniqueInput | RoomTypeWhereUniqueInput[]
    connect?: RoomTypeWhereUniqueInput | RoomTypeWhereUniqueInput[]
    update?: RoomTypeUpdateWithWhereUniqueWithoutTenantInput | RoomTypeUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: RoomTypeUpdateManyWithWhereWithoutTenantInput | RoomTypeUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: RoomTypeScalarWhereInput | RoomTypeScalarWhereInput[]
  }

  export type RoomUpdateManyWithoutTenantNestedInput = {
    create?: XOR<RoomCreateWithoutTenantInput, RoomUncheckedCreateWithoutTenantInput> | RoomCreateWithoutTenantInput[] | RoomUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: RoomCreateOrConnectWithoutTenantInput | RoomCreateOrConnectWithoutTenantInput[]
    upsert?: RoomUpsertWithWhereUniqueWithoutTenantInput | RoomUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: RoomCreateManyTenantInputEnvelope
    set?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    disconnect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    delete?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    connect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    update?: RoomUpdateWithWhereUniqueWithoutTenantInput | RoomUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: RoomUpdateManyWithWhereWithoutTenantInput | RoomUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: RoomScalarWhereInput | RoomScalarWhereInput[]
  }

  export type GuestUpdateManyWithoutTenantNestedInput = {
    create?: XOR<GuestCreateWithoutTenantInput, GuestUncheckedCreateWithoutTenantInput> | GuestCreateWithoutTenantInput[] | GuestUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: GuestCreateOrConnectWithoutTenantInput | GuestCreateOrConnectWithoutTenantInput[]
    upsert?: GuestUpsertWithWhereUniqueWithoutTenantInput | GuestUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: GuestCreateManyTenantInputEnvelope
    set?: GuestWhereUniqueInput | GuestWhereUniqueInput[]
    disconnect?: GuestWhereUniqueInput | GuestWhereUniqueInput[]
    delete?: GuestWhereUniqueInput | GuestWhereUniqueInput[]
    connect?: GuestWhereUniqueInput | GuestWhereUniqueInput[]
    update?: GuestUpdateWithWhereUniqueWithoutTenantInput | GuestUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: GuestUpdateManyWithWhereWithoutTenantInput | GuestUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: GuestScalarWhereInput | GuestScalarWhereInput[]
  }

  export type ReservationUpdateManyWithoutTenantNestedInput = {
    create?: XOR<ReservationCreateWithoutTenantInput, ReservationUncheckedCreateWithoutTenantInput> | ReservationCreateWithoutTenantInput[] | ReservationUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: ReservationCreateOrConnectWithoutTenantInput | ReservationCreateOrConnectWithoutTenantInput[]
    upsert?: ReservationUpsertWithWhereUniqueWithoutTenantInput | ReservationUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: ReservationCreateManyTenantInputEnvelope
    set?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    disconnect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    delete?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    connect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    update?: ReservationUpdateWithWhereUniqueWithoutTenantInput | ReservationUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: ReservationUpdateManyWithWhereWithoutTenantInput | ReservationUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: ReservationScalarWhereInput | ReservationScalarWhereInput[]
  }

  export type FolioUpdateManyWithoutTenantNestedInput = {
    create?: XOR<FolioCreateWithoutTenantInput, FolioUncheckedCreateWithoutTenantInput> | FolioCreateWithoutTenantInput[] | FolioUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: FolioCreateOrConnectWithoutTenantInput | FolioCreateOrConnectWithoutTenantInput[]
    upsert?: FolioUpsertWithWhereUniqueWithoutTenantInput | FolioUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: FolioCreateManyTenantInputEnvelope
    set?: FolioWhereUniqueInput | FolioWhereUniqueInput[]
    disconnect?: FolioWhereUniqueInput | FolioWhereUniqueInput[]
    delete?: FolioWhereUniqueInput | FolioWhereUniqueInput[]
    connect?: FolioWhereUniqueInput | FolioWhereUniqueInput[]
    update?: FolioUpdateWithWhereUniqueWithoutTenantInput | FolioUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: FolioUpdateManyWithWhereWithoutTenantInput | FolioUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: FolioScalarWhereInput | FolioScalarWhereInput[]
  }

  export type POSOutletUpdateManyWithoutTenantNestedInput = {
    create?: XOR<POSOutletCreateWithoutTenantInput, POSOutletUncheckedCreateWithoutTenantInput> | POSOutletCreateWithoutTenantInput[] | POSOutletUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: POSOutletCreateOrConnectWithoutTenantInput | POSOutletCreateOrConnectWithoutTenantInput[]
    upsert?: POSOutletUpsertWithWhereUniqueWithoutTenantInput | POSOutletUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: POSOutletCreateManyTenantInputEnvelope
    set?: POSOutletWhereUniqueInput | POSOutletWhereUniqueInput[]
    disconnect?: POSOutletWhereUniqueInput | POSOutletWhereUniqueInput[]
    delete?: POSOutletWhereUniqueInput | POSOutletWhereUniqueInput[]
    connect?: POSOutletWhereUniqueInput | POSOutletWhereUniqueInput[]
    update?: POSOutletUpdateWithWhereUniqueWithoutTenantInput | POSOutletUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: POSOutletUpdateManyWithWhereWithoutTenantInput | POSOutletUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: POSOutletScalarWhereInput | POSOutletScalarWhereInput[]
  }

  export type RatePlanUpdateManyWithoutTenantNestedInput = {
    create?: XOR<RatePlanCreateWithoutTenantInput, RatePlanUncheckedCreateWithoutTenantInput> | RatePlanCreateWithoutTenantInput[] | RatePlanUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: RatePlanCreateOrConnectWithoutTenantInput | RatePlanCreateOrConnectWithoutTenantInput[]
    upsert?: RatePlanUpsertWithWhereUniqueWithoutTenantInput | RatePlanUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: RatePlanCreateManyTenantInputEnvelope
    set?: RatePlanWhereUniqueInput | RatePlanWhereUniqueInput[]
    disconnect?: RatePlanWhereUniqueInput | RatePlanWhereUniqueInput[]
    delete?: RatePlanWhereUniqueInput | RatePlanWhereUniqueInput[]
    connect?: RatePlanWhereUniqueInput | RatePlanWhereUniqueInput[]
    update?: RatePlanUpdateWithWhereUniqueWithoutTenantInput | RatePlanUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: RatePlanUpdateManyWithWhereWithoutTenantInput | RatePlanUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: RatePlanScalarWhereInput | RatePlanScalarWhereInput[]
  }

  export type HotelUncheckedUpdateManyWithoutTenantNestedInput = {
    create?: XOR<HotelCreateWithoutTenantInput, HotelUncheckedCreateWithoutTenantInput> | HotelCreateWithoutTenantInput[] | HotelUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: HotelCreateOrConnectWithoutTenantInput | HotelCreateOrConnectWithoutTenantInput[]
    upsert?: HotelUpsertWithWhereUniqueWithoutTenantInput | HotelUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: HotelCreateManyTenantInputEnvelope
    set?: HotelWhereUniqueInput | HotelWhereUniqueInput[]
    disconnect?: HotelWhereUniqueInput | HotelWhereUniqueInput[]
    delete?: HotelWhereUniqueInput | HotelWhereUniqueInput[]
    connect?: HotelWhereUniqueInput | HotelWhereUniqueInput[]
    update?: HotelUpdateWithWhereUniqueWithoutTenantInput | HotelUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: HotelUpdateManyWithWhereWithoutTenantInput | HotelUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: HotelScalarWhereInput | HotelScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutTenantNestedInput = {
    create?: XOR<UserCreateWithoutTenantInput, UserUncheckedCreateWithoutTenantInput> | UserCreateWithoutTenantInput[] | UserUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: UserCreateOrConnectWithoutTenantInput | UserCreateOrConnectWithoutTenantInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutTenantInput | UserUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: UserCreateManyTenantInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutTenantInput | UserUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: UserUpdateManyWithWhereWithoutTenantInput | UserUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type RoleUncheckedUpdateManyWithoutTenantNestedInput = {
    create?: XOR<RoleCreateWithoutTenantInput, RoleUncheckedCreateWithoutTenantInput> | RoleCreateWithoutTenantInput[] | RoleUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: RoleCreateOrConnectWithoutTenantInput | RoleCreateOrConnectWithoutTenantInput[]
    upsert?: RoleUpsertWithWhereUniqueWithoutTenantInput | RoleUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: RoleCreateManyTenantInputEnvelope
    set?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    disconnect?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    delete?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    connect?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    update?: RoleUpdateWithWhereUniqueWithoutTenantInput | RoleUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: RoleUpdateManyWithWhereWithoutTenantInput | RoleUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: RoleScalarWhereInput | RoleScalarWhereInput[]
  }

  export type RoomTypeUncheckedUpdateManyWithoutTenantNestedInput = {
    create?: XOR<RoomTypeCreateWithoutTenantInput, RoomTypeUncheckedCreateWithoutTenantInput> | RoomTypeCreateWithoutTenantInput[] | RoomTypeUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: RoomTypeCreateOrConnectWithoutTenantInput | RoomTypeCreateOrConnectWithoutTenantInput[]
    upsert?: RoomTypeUpsertWithWhereUniqueWithoutTenantInput | RoomTypeUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: RoomTypeCreateManyTenantInputEnvelope
    set?: RoomTypeWhereUniqueInput | RoomTypeWhereUniqueInput[]
    disconnect?: RoomTypeWhereUniqueInput | RoomTypeWhereUniqueInput[]
    delete?: RoomTypeWhereUniqueInput | RoomTypeWhereUniqueInput[]
    connect?: RoomTypeWhereUniqueInput | RoomTypeWhereUniqueInput[]
    update?: RoomTypeUpdateWithWhereUniqueWithoutTenantInput | RoomTypeUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: RoomTypeUpdateManyWithWhereWithoutTenantInput | RoomTypeUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: RoomTypeScalarWhereInput | RoomTypeScalarWhereInput[]
  }

  export type RoomUncheckedUpdateManyWithoutTenantNestedInput = {
    create?: XOR<RoomCreateWithoutTenantInput, RoomUncheckedCreateWithoutTenantInput> | RoomCreateWithoutTenantInput[] | RoomUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: RoomCreateOrConnectWithoutTenantInput | RoomCreateOrConnectWithoutTenantInput[]
    upsert?: RoomUpsertWithWhereUniqueWithoutTenantInput | RoomUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: RoomCreateManyTenantInputEnvelope
    set?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    disconnect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    delete?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    connect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    update?: RoomUpdateWithWhereUniqueWithoutTenantInput | RoomUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: RoomUpdateManyWithWhereWithoutTenantInput | RoomUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: RoomScalarWhereInput | RoomScalarWhereInput[]
  }

  export type GuestUncheckedUpdateManyWithoutTenantNestedInput = {
    create?: XOR<GuestCreateWithoutTenantInput, GuestUncheckedCreateWithoutTenantInput> | GuestCreateWithoutTenantInput[] | GuestUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: GuestCreateOrConnectWithoutTenantInput | GuestCreateOrConnectWithoutTenantInput[]
    upsert?: GuestUpsertWithWhereUniqueWithoutTenantInput | GuestUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: GuestCreateManyTenantInputEnvelope
    set?: GuestWhereUniqueInput | GuestWhereUniqueInput[]
    disconnect?: GuestWhereUniqueInput | GuestWhereUniqueInput[]
    delete?: GuestWhereUniqueInput | GuestWhereUniqueInput[]
    connect?: GuestWhereUniqueInput | GuestWhereUniqueInput[]
    update?: GuestUpdateWithWhereUniqueWithoutTenantInput | GuestUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: GuestUpdateManyWithWhereWithoutTenantInput | GuestUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: GuestScalarWhereInput | GuestScalarWhereInput[]
  }

  export type ReservationUncheckedUpdateManyWithoutTenantNestedInput = {
    create?: XOR<ReservationCreateWithoutTenantInput, ReservationUncheckedCreateWithoutTenantInput> | ReservationCreateWithoutTenantInput[] | ReservationUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: ReservationCreateOrConnectWithoutTenantInput | ReservationCreateOrConnectWithoutTenantInput[]
    upsert?: ReservationUpsertWithWhereUniqueWithoutTenantInput | ReservationUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: ReservationCreateManyTenantInputEnvelope
    set?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    disconnect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    delete?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    connect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    update?: ReservationUpdateWithWhereUniqueWithoutTenantInput | ReservationUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: ReservationUpdateManyWithWhereWithoutTenantInput | ReservationUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: ReservationScalarWhereInput | ReservationScalarWhereInput[]
  }

  export type FolioUncheckedUpdateManyWithoutTenantNestedInput = {
    create?: XOR<FolioCreateWithoutTenantInput, FolioUncheckedCreateWithoutTenantInput> | FolioCreateWithoutTenantInput[] | FolioUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: FolioCreateOrConnectWithoutTenantInput | FolioCreateOrConnectWithoutTenantInput[]
    upsert?: FolioUpsertWithWhereUniqueWithoutTenantInput | FolioUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: FolioCreateManyTenantInputEnvelope
    set?: FolioWhereUniqueInput | FolioWhereUniqueInput[]
    disconnect?: FolioWhereUniqueInput | FolioWhereUniqueInput[]
    delete?: FolioWhereUniqueInput | FolioWhereUniqueInput[]
    connect?: FolioWhereUniqueInput | FolioWhereUniqueInput[]
    update?: FolioUpdateWithWhereUniqueWithoutTenantInput | FolioUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: FolioUpdateManyWithWhereWithoutTenantInput | FolioUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: FolioScalarWhereInput | FolioScalarWhereInput[]
  }

  export type POSOutletUncheckedUpdateManyWithoutTenantNestedInput = {
    create?: XOR<POSOutletCreateWithoutTenantInput, POSOutletUncheckedCreateWithoutTenantInput> | POSOutletCreateWithoutTenantInput[] | POSOutletUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: POSOutletCreateOrConnectWithoutTenantInput | POSOutletCreateOrConnectWithoutTenantInput[]
    upsert?: POSOutletUpsertWithWhereUniqueWithoutTenantInput | POSOutletUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: POSOutletCreateManyTenantInputEnvelope
    set?: POSOutletWhereUniqueInput | POSOutletWhereUniqueInput[]
    disconnect?: POSOutletWhereUniqueInput | POSOutletWhereUniqueInput[]
    delete?: POSOutletWhereUniqueInput | POSOutletWhereUniqueInput[]
    connect?: POSOutletWhereUniqueInput | POSOutletWhereUniqueInput[]
    update?: POSOutletUpdateWithWhereUniqueWithoutTenantInput | POSOutletUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: POSOutletUpdateManyWithWhereWithoutTenantInput | POSOutletUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: POSOutletScalarWhereInput | POSOutletScalarWhereInput[]
  }

  export type RatePlanUncheckedUpdateManyWithoutTenantNestedInput = {
    create?: XOR<RatePlanCreateWithoutTenantInput, RatePlanUncheckedCreateWithoutTenantInput> | RatePlanCreateWithoutTenantInput[] | RatePlanUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: RatePlanCreateOrConnectWithoutTenantInput | RatePlanCreateOrConnectWithoutTenantInput[]
    upsert?: RatePlanUpsertWithWhereUniqueWithoutTenantInput | RatePlanUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: RatePlanCreateManyTenantInputEnvelope
    set?: RatePlanWhereUniqueInput | RatePlanWhereUniqueInput[]
    disconnect?: RatePlanWhereUniqueInput | RatePlanWhereUniqueInput[]
    delete?: RatePlanWhereUniqueInput | RatePlanWhereUniqueInput[]
    connect?: RatePlanWhereUniqueInput | RatePlanWhereUniqueInput[]
    update?: RatePlanUpdateWithWhereUniqueWithoutTenantInput | RatePlanUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: RatePlanUpdateManyWithWhereWithoutTenantInput | RatePlanUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: RatePlanScalarWhereInput | RatePlanScalarWhereInput[]
  }

  export type TenantCreateNestedOneWithoutHotelsInput = {
    create?: XOR<TenantCreateWithoutHotelsInput, TenantUncheckedCreateWithoutHotelsInput>
    connectOrCreate?: TenantCreateOrConnectWithoutHotelsInput
    connect?: TenantWhereUniqueInput
  }

  export type GuestCreateNestedManyWithoutHotelInput = {
    create?: XOR<GuestCreateWithoutHotelInput, GuestUncheckedCreateWithoutHotelInput> | GuestCreateWithoutHotelInput[] | GuestUncheckedCreateWithoutHotelInput[]
    connectOrCreate?: GuestCreateOrConnectWithoutHotelInput | GuestCreateOrConnectWithoutHotelInput[]
    createMany?: GuestCreateManyHotelInputEnvelope
    connect?: GuestWhereUniqueInput | GuestWhereUniqueInput[]
  }

  export type RoomTypeCreateNestedManyWithoutHotelInput = {
    create?: XOR<RoomTypeCreateWithoutHotelInput, RoomTypeUncheckedCreateWithoutHotelInput> | RoomTypeCreateWithoutHotelInput[] | RoomTypeUncheckedCreateWithoutHotelInput[]
    connectOrCreate?: RoomTypeCreateOrConnectWithoutHotelInput | RoomTypeCreateOrConnectWithoutHotelInput[]
    createMany?: RoomTypeCreateManyHotelInputEnvelope
    connect?: RoomTypeWhereUniqueInput | RoomTypeWhereUniqueInput[]
  }

  export type RoomCreateNestedManyWithoutHotelInput = {
    create?: XOR<RoomCreateWithoutHotelInput, RoomUncheckedCreateWithoutHotelInput> | RoomCreateWithoutHotelInput[] | RoomUncheckedCreateWithoutHotelInput[]
    connectOrCreate?: RoomCreateOrConnectWithoutHotelInput | RoomCreateOrConnectWithoutHotelInput[]
    createMany?: RoomCreateManyHotelInputEnvelope
    connect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
  }

  export type RoleCreateNestedManyWithoutHotelInput = {
    create?: XOR<RoleCreateWithoutHotelInput, RoleUncheckedCreateWithoutHotelInput> | RoleCreateWithoutHotelInput[] | RoleUncheckedCreateWithoutHotelInput[]
    connectOrCreate?: RoleCreateOrConnectWithoutHotelInput | RoleCreateOrConnectWithoutHotelInput[]
    createMany?: RoleCreateManyHotelInputEnvelope
    connect?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
  }

  export type UserCreateNestedManyWithoutHotelInput = {
    create?: XOR<UserCreateWithoutHotelInput, UserUncheckedCreateWithoutHotelInput> | UserCreateWithoutHotelInput[] | UserUncheckedCreateWithoutHotelInput[]
    connectOrCreate?: UserCreateOrConnectWithoutHotelInput | UserCreateOrConnectWithoutHotelInput[]
    createMany?: UserCreateManyHotelInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type ReservationCreateNestedManyWithoutHotelInput = {
    create?: XOR<ReservationCreateWithoutHotelInput, ReservationUncheckedCreateWithoutHotelInput> | ReservationCreateWithoutHotelInput[] | ReservationUncheckedCreateWithoutHotelInput[]
    connectOrCreate?: ReservationCreateOrConnectWithoutHotelInput | ReservationCreateOrConnectWithoutHotelInput[]
    createMany?: ReservationCreateManyHotelInputEnvelope
    connect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
  }

  export type FolioCreateNestedManyWithoutHotelInput = {
    create?: XOR<FolioCreateWithoutHotelInput, FolioUncheckedCreateWithoutHotelInput> | FolioCreateWithoutHotelInput[] | FolioUncheckedCreateWithoutHotelInput[]
    connectOrCreate?: FolioCreateOrConnectWithoutHotelInput | FolioCreateOrConnectWithoutHotelInput[]
    createMany?: FolioCreateManyHotelInputEnvelope
    connect?: FolioWhereUniqueInput | FolioWhereUniqueInput[]
  }

  export type POSOutletCreateNestedManyWithoutHotelInput = {
    create?: XOR<POSOutletCreateWithoutHotelInput, POSOutletUncheckedCreateWithoutHotelInput> | POSOutletCreateWithoutHotelInput[] | POSOutletUncheckedCreateWithoutHotelInput[]
    connectOrCreate?: POSOutletCreateOrConnectWithoutHotelInput | POSOutletCreateOrConnectWithoutHotelInput[]
    createMany?: POSOutletCreateManyHotelInputEnvelope
    connect?: POSOutletWhereUniqueInput | POSOutletWhereUniqueInput[]
  }

  export type RatePlanCreateNestedManyWithoutHotelInput = {
    create?: XOR<RatePlanCreateWithoutHotelInput, RatePlanUncheckedCreateWithoutHotelInput> | RatePlanCreateWithoutHotelInput[] | RatePlanUncheckedCreateWithoutHotelInput[]
    connectOrCreate?: RatePlanCreateOrConnectWithoutHotelInput | RatePlanCreateOrConnectWithoutHotelInput[]
    createMany?: RatePlanCreateManyHotelInputEnvelope
    connect?: RatePlanWhereUniqueInput | RatePlanWhereUniqueInput[]
  }

  export type GuestUncheckedCreateNestedManyWithoutHotelInput = {
    create?: XOR<GuestCreateWithoutHotelInput, GuestUncheckedCreateWithoutHotelInput> | GuestCreateWithoutHotelInput[] | GuestUncheckedCreateWithoutHotelInput[]
    connectOrCreate?: GuestCreateOrConnectWithoutHotelInput | GuestCreateOrConnectWithoutHotelInput[]
    createMany?: GuestCreateManyHotelInputEnvelope
    connect?: GuestWhereUniqueInput | GuestWhereUniqueInput[]
  }

  export type RoomTypeUncheckedCreateNestedManyWithoutHotelInput = {
    create?: XOR<RoomTypeCreateWithoutHotelInput, RoomTypeUncheckedCreateWithoutHotelInput> | RoomTypeCreateWithoutHotelInput[] | RoomTypeUncheckedCreateWithoutHotelInput[]
    connectOrCreate?: RoomTypeCreateOrConnectWithoutHotelInput | RoomTypeCreateOrConnectWithoutHotelInput[]
    createMany?: RoomTypeCreateManyHotelInputEnvelope
    connect?: RoomTypeWhereUniqueInput | RoomTypeWhereUniqueInput[]
  }

  export type RoomUncheckedCreateNestedManyWithoutHotelInput = {
    create?: XOR<RoomCreateWithoutHotelInput, RoomUncheckedCreateWithoutHotelInput> | RoomCreateWithoutHotelInput[] | RoomUncheckedCreateWithoutHotelInput[]
    connectOrCreate?: RoomCreateOrConnectWithoutHotelInput | RoomCreateOrConnectWithoutHotelInput[]
    createMany?: RoomCreateManyHotelInputEnvelope
    connect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
  }

  export type RoleUncheckedCreateNestedManyWithoutHotelInput = {
    create?: XOR<RoleCreateWithoutHotelInput, RoleUncheckedCreateWithoutHotelInput> | RoleCreateWithoutHotelInput[] | RoleUncheckedCreateWithoutHotelInput[]
    connectOrCreate?: RoleCreateOrConnectWithoutHotelInput | RoleCreateOrConnectWithoutHotelInput[]
    createMany?: RoleCreateManyHotelInputEnvelope
    connect?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutHotelInput = {
    create?: XOR<UserCreateWithoutHotelInput, UserUncheckedCreateWithoutHotelInput> | UserCreateWithoutHotelInput[] | UserUncheckedCreateWithoutHotelInput[]
    connectOrCreate?: UserCreateOrConnectWithoutHotelInput | UserCreateOrConnectWithoutHotelInput[]
    createMany?: UserCreateManyHotelInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type ReservationUncheckedCreateNestedManyWithoutHotelInput = {
    create?: XOR<ReservationCreateWithoutHotelInput, ReservationUncheckedCreateWithoutHotelInput> | ReservationCreateWithoutHotelInput[] | ReservationUncheckedCreateWithoutHotelInput[]
    connectOrCreate?: ReservationCreateOrConnectWithoutHotelInput | ReservationCreateOrConnectWithoutHotelInput[]
    createMany?: ReservationCreateManyHotelInputEnvelope
    connect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
  }

  export type FolioUncheckedCreateNestedManyWithoutHotelInput = {
    create?: XOR<FolioCreateWithoutHotelInput, FolioUncheckedCreateWithoutHotelInput> | FolioCreateWithoutHotelInput[] | FolioUncheckedCreateWithoutHotelInput[]
    connectOrCreate?: FolioCreateOrConnectWithoutHotelInput | FolioCreateOrConnectWithoutHotelInput[]
    createMany?: FolioCreateManyHotelInputEnvelope
    connect?: FolioWhereUniqueInput | FolioWhereUniqueInput[]
  }

  export type POSOutletUncheckedCreateNestedManyWithoutHotelInput = {
    create?: XOR<POSOutletCreateWithoutHotelInput, POSOutletUncheckedCreateWithoutHotelInput> | POSOutletCreateWithoutHotelInput[] | POSOutletUncheckedCreateWithoutHotelInput[]
    connectOrCreate?: POSOutletCreateOrConnectWithoutHotelInput | POSOutletCreateOrConnectWithoutHotelInput[]
    createMany?: POSOutletCreateManyHotelInputEnvelope
    connect?: POSOutletWhereUniqueInput | POSOutletWhereUniqueInput[]
  }

  export type RatePlanUncheckedCreateNestedManyWithoutHotelInput = {
    create?: XOR<RatePlanCreateWithoutHotelInput, RatePlanUncheckedCreateWithoutHotelInput> | RatePlanCreateWithoutHotelInput[] | RatePlanUncheckedCreateWithoutHotelInput[]
    connectOrCreate?: RatePlanCreateOrConnectWithoutHotelInput | RatePlanCreateOrConnectWithoutHotelInput[]
    createMany?: RatePlanCreateManyHotelInputEnvelope
    connect?: RatePlanWhereUniqueInput | RatePlanWhereUniqueInput[]
  }

  export type TenantUpdateOneRequiredWithoutHotelsNestedInput = {
    create?: XOR<TenantCreateWithoutHotelsInput, TenantUncheckedCreateWithoutHotelsInput>
    connectOrCreate?: TenantCreateOrConnectWithoutHotelsInput
    upsert?: TenantUpsertWithoutHotelsInput
    connect?: TenantWhereUniqueInput
    update?: XOR<XOR<TenantUpdateToOneWithWhereWithoutHotelsInput, TenantUpdateWithoutHotelsInput>, TenantUncheckedUpdateWithoutHotelsInput>
  }

  export type GuestUpdateManyWithoutHotelNestedInput = {
    create?: XOR<GuestCreateWithoutHotelInput, GuestUncheckedCreateWithoutHotelInput> | GuestCreateWithoutHotelInput[] | GuestUncheckedCreateWithoutHotelInput[]
    connectOrCreate?: GuestCreateOrConnectWithoutHotelInput | GuestCreateOrConnectWithoutHotelInput[]
    upsert?: GuestUpsertWithWhereUniqueWithoutHotelInput | GuestUpsertWithWhereUniqueWithoutHotelInput[]
    createMany?: GuestCreateManyHotelInputEnvelope
    set?: GuestWhereUniqueInput | GuestWhereUniqueInput[]
    disconnect?: GuestWhereUniqueInput | GuestWhereUniqueInput[]
    delete?: GuestWhereUniqueInput | GuestWhereUniqueInput[]
    connect?: GuestWhereUniqueInput | GuestWhereUniqueInput[]
    update?: GuestUpdateWithWhereUniqueWithoutHotelInput | GuestUpdateWithWhereUniqueWithoutHotelInput[]
    updateMany?: GuestUpdateManyWithWhereWithoutHotelInput | GuestUpdateManyWithWhereWithoutHotelInput[]
    deleteMany?: GuestScalarWhereInput | GuestScalarWhereInput[]
  }

  export type RoomTypeUpdateManyWithoutHotelNestedInput = {
    create?: XOR<RoomTypeCreateWithoutHotelInput, RoomTypeUncheckedCreateWithoutHotelInput> | RoomTypeCreateWithoutHotelInput[] | RoomTypeUncheckedCreateWithoutHotelInput[]
    connectOrCreate?: RoomTypeCreateOrConnectWithoutHotelInput | RoomTypeCreateOrConnectWithoutHotelInput[]
    upsert?: RoomTypeUpsertWithWhereUniqueWithoutHotelInput | RoomTypeUpsertWithWhereUniqueWithoutHotelInput[]
    createMany?: RoomTypeCreateManyHotelInputEnvelope
    set?: RoomTypeWhereUniqueInput | RoomTypeWhereUniqueInput[]
    disconnect?: RoomTypeWhereUniqueInput | RoomTypeWhereUniqueInput[]
    delete?: RoomTypeWhereUniqueInput | RoomTypeWhereUniqueInput[]
    connect?: RoomTypeWhereUniqueInput | RoomTypeWhereUniqueInput[]
    update?: RoomTypeUpdateWithWhereUniqueWithoutHotelInput | RoomTypeUpdateWithWhereUniqueWithoutHotelInput[]
    updateMany?: RoomTypeUpdateManyWithWhereWithoutHotelInput | RoomTypeUpdateManyWithWhereWithoutHotelInput[]
    deleteMany?: RoomTypeScalarWhereInput | RoomTypeScalarWhereInput[]
  }

  export type RoomUpdateManyWithoutHotelNestedInput = {
    create?: XOR<RoomCreateWithoutHotelInput, RoomUncheckedCreateWithoutHotelInput> | RoomCreateWithoutHotelInput[] | RoomUncheckedCreateWithoutHotelInput[]
    connectOrCreate?: RoomCreateOrConnectWithoutHotelInput | RoomCreateOrConnectWithoutHotelInput[]
    upsert?: RoomUpsertWithWhereUniqueWithoutHotelInput | RoomUpsertWithWhereUniqueWithoutHotelInput[]
    createMany?: RoomCreateManyHotelInputEnvelope
    set?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    disconnect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    delete?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    connect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    update?: RoomUpdateWithWhereUniqueWithoutHotelInput | RoomUpdateWithWhereUniqueWithoutHotelInput[]
    updateMany?: RoomUpdateManyWithWhereWithoutHotelInput | RoomUpdateManyWithWhereWithoutHotelInput[]
    deleteMany?: RoomScalarWhereInput | RoomScalarWhereInput[]
  }

  export type RoleUpdateManyWithoutHotelNestedInput = {
    create?: XOR<RoleCreateWithoutHotelInput, RoleUncheckedCreateWithoutHotelInput> | RoleCreateWithoutHotelInput[] | RoleUncheckedCreateWithoutHotelInput[]
    connectOrCreate?: RoleCreateOrConnectWithoutHotelInput | RoleCreateOrConnectWithoutHotelInput[]
    upsert?: RoleUpsertWithWhereUniqueWithoutHotelInput | RoleUpsertWithWhereUniqueWithoutHotelInput[]
    createMany?: RoleCreateManyHotelInputEnvelope
    set?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    disconnect?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    delete?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    connect?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    update?: RoleUpdateWithWhereUniqueWithoutHotelInput | RoleUpdateWithWhereUniqueWithoutHotelInput[]
    updateMany?: RoleUpdateManyWithWhereWithoutHotelInput | RoleUpdateManyWithWhereWithoutHotelInput[]
    deleteMany?: RoleScalarWhereInput | RoleScalarWhereInput[]
  }

  export type UserUpdateManyWithoutHotelNestedInput = {
    create?: XOR<UserCreateWithoutHotelInput, UserUncheckedCreateWithoutHotelInput> | UserCreateWithoutHotelInput[] | UserUncheckedCreateWithoutHotelInput[]
    connectOrCreate?: UserCreateOrConnectWithoutHotelInput | UserCreateOrConnectWithoutHotelInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutHotelInput | UserUpsertWithWhereUniqueWithoutHotelInput[]
    createMany?: UserCreateManyHotelInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutHotelInput | UserUpdateWithWhereUniqueWithoutHotelInput[]
    updateMany?: UserUpdateManyWithWhereWithoutHotelInput | UserUpdateManyWithWhereWithoutHotelInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type ReservationUpdateManyWithoutHotelNestedInput = {
    create?: XOR<ReservationCreateWithoutHotelInput, ReservationUncheckedCreateWithoutHotelInput> | ReservationCreateWithoutHotelInput[] | ReservationUncheckedCreateWithoutHotelInput[]
    connectOrCreate?: ReservationCreateOrConnectWithoutHotelInput | ReservationCreateOrConnectWithoutHotelInput[]
    upsert?: ReservationUpsertWithWhereUniqueWithoutHotelInput | ReservationUpsertWithWhereUniqueWithoutHotelInput[]
    createMany?: ReservationCreateManyHotelInputEnvelope
    set?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    disconnect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    delete?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    connect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    update?: ReservationUpdateWithWhereUniqueWithoutHotelInput | ReservationUpdateWithWhereUniqueWithoutHotelInput[]
    updateMany?: ReservationUpdateManyWithWhereWithoutHotelInput | ReservationUpdateManyWithWhereWithoutHotelInput[]
    deleteMany?: ReservationScalarWhereInput | ReservationScalarWhereInput[]
  }

  export type FolioUpdateManyWithoutHotelNestedInput = {
    create?: XOR<FolioCreateWithoutHotelInput, FolioUncheckedCreateWithoutHotelInput> | FolioCreateWithoutHotelInput[] | FolioUncheckedCreateWithoutHotelInput[]
    connectOrCreate?: FolioCreateOrConnectWithoutHotelInput | FolioCreateOrConnectWithoutHotelInput[]
    upsert?: FolioUpsertWithWhereUniqueWithoutHotelInput | FolioUpsertWithWhereUniqueWithoutHotelInput[]
    createMany?: FolioCreateManyHotelInputEnvelope
    set?: FolioWhereUniqueInput | FolioWhereUniqueInput[]
    disconnect?: FolioWhereUniqueInput | FolioWhereUniqueInput[]
    delete?: FolioWhereUniqueInput | FolioWhereUniqueInput[]
    connect?: FolioWhereUniqueInput | FolioWhereUniqueInput[]
    update?: FolioUpdateWithWhereUniqueWithoutHotelInput | FolioUpdateWithWhereUniqueWithoutHotelInput[]
    updateMany?: FolioUpdateManyWithWhereWithoutHotelInput | FolioUpdateManyWithWhereWithoutHotelInput[]
    deleteMany?: FolioScalarWhereInput | FolioScalarWhereInput[]
  }

  export type POSOutletUpdateManyWithoutHotelNestedInput = {
    create?: XOR<POSOutletCreateWithoutHotelInput, POSOutletUncheckedCreateWithoutHotelInput> | POSOutletCreateWithoutHotelInput[] | POSOutletUncheckedCreateWithoutHotelInput[]
    connectOrCreate?: POSOutletCreateOrConnectWithoutHotelInput | POSOutletCreateOrConnectWithoutHotelInput[]
    upsert?: POSOutletUpsertWithWhereUniqueWithoutHotelInput | POSOutletUpsertWithWhereUniqueWithoutHotelInput[]
    createMany?: POSOutletCreateManyHotelInputEnvelope
    set?: POSOutletWhereUniqueInput | POSOutletWhereUniqueInput[]
    disconnect?: POSOutletWhereUniqueInput | POSOutletWhereUniqueInput[]
    delete?: POSOutletWhereUniqueInput | POSOutletWhereUniqueInput[]
    connect?: POSOutletWhereUniqueInput | POSOutletWhereUniqueInput[]
    update?: POSOutletUpdateWithWhereUniqueWithoutHotelInput | POSOutletUpdateWithWhereUniqueWithoutHotelInput[]
    updateMany?: POSOutletUpdateManyWithWhereWithoutHotelInput | POSOutletUpdateManyWithWhereWithoutHotelInput[]
    deleteMany?: POSOutletScalarWhereInput | POSOutletScalarWhereInput[]
  }

  export type RatePlanUpdateManyWithoutHotelNestedInput = {
    create?: XOR<RatePlanCreateWithoutHotelInput, RatePlanUncheckedCreateWithoutHotelInput> | RatePlanCreateWithoutHotelInput[] | RatePlanUncheckedCreateWithoutHotelInput[]
    connectOrCreate?: RatePlanCreateOrConnectWithoutHotelInput | RatePlanCreateOrConnectWithoutHotelInput[]
    upsert?: RatePlanUpsertWithWhereUniqueWithoutHotelInput | RatePlanUpsertWithWhereUniqueWithoutHotelInput[]
    createMany?: RatePlanCreateManyHotelInputEnvelope
    set?: RatePlanWhereUniqueInput | RatePlanWhereUniqueInput[]
    disconnect?: RatePlanWhereUniqueInput | RatePlanWhereUniqueInput[]
    delete?: RatePlanWhereUniqueInput | RatePlanWhereUniqueInput[]
    connect?: RatePlanWhereUniqueInput | RatePlanWhereUniqueInput[]
    update?: RatePlanUpdateWithWhereUniqueWithoutHotelInput | RatePlanUpdateWithWhereUniqueWithoutHotelInput[]
    updateMany?: RatePlanUpdateManyWithWhereWithoutHotelInput | RatePlanUpdateManyWithWhereWithoutHotelInput[]
    deleteMany?: RatePlanScalarWhereInput | RatePlanScalarWhereInput[]
  }

  export type GuestUncheckedUpdateManyWithoutHotelNestedInput = {
    create?: XOR<GuestCreateWithoutHotelInput, GuestUncheckedCreateWithoutHotelInput> | GuestCreateWithoutHotelInput[] | GuestUncheckedCreateWithoutHotelInput[]
    connectOrCreate?: GuestCreateOrConnectWithoutHotelInput | GuestCreateOrConnectWithoutHotelInput[]
    upsert?: GuestUpsertWithWhereUniqueWithoutHotelInput | GuestUpsertWithWhereUniqueWithoutHotelInput[]
    createMany?: GuestCreateManyHotelInputEnvelope
    set?: GuestWhereUniqueInput | GuestWhereUniqueInput[]
    disconnect?: GuestWhereUniqueInput | GuestWhereUniqueInput[]
    delete?: GuestWhereUniqueInput | GuestWhereUniqueInput[]
    connect?: GuestWhereUniqueInput | GuestWhereUniqueInput[]
    update?: GuestUpdateWithWhereUniqueWithoutHotelInput | GuestUpdateWithWhereUniqueWithoutHotelInput[]
    updateMany?: GuestUpdateManyWithWhereWithoutHotelInput | GuestUpdateManyWithWhereWithoutHotelInput[]
    deleteMany?: GuestScalarWhereInput | GuestScalarWhereInput[]
  }

  export type RoomTypeUncheckedUpdateManyWithoutHotelNestedInput = {
    create?: XOR<RoomTypeCreateWithoutHotelInput, RoomTypeUncheckedCreateWithoutHotelInput> | RoomTypeCreateWithoutHotelInput[] | RoomTypeUncheckedCreateWithoutHotelInput[]
    connectOrCreate?: RoomTypeCreateOrConnectWithoutHotelInput | RoomTypeCreateOrConnectWithoutHotelInput[]
    upsert?: RoomTypeUpsertWithWhereUniqueWithoutHotelInput | RoomTypeUpsertWithWhereUniqueWithoutHotelInput[]
    createMany?: RoomTypeCreateManyHotelInputEnvelope
    set?: RoomTypeWhereUniqueInput | RoomTypeWhereUniqueInput[]
    disconnect?: RoomTypeWhereUniqueInput | RoomTypeWhereUniqueInput[]
    delete?: RoomTypeWhereUniqueInput | RoomTypeWhereUniqueInput[]
    connect?: RoomTypeWhereUniqueInput | RoomTypeWhereUniqueInput[]
    update?: RoomTypeUpdateWithWhereUniqueWithoutHotelInput | RoomTypeUpdateWithWhereUniqueWithoutHotelInput[]
    updateMany?: RoomTypeUpdateManyWithWhereWithoutHotelInput | RoomTypeUpdateManyWithWhereWithoutHotelInput[]
    deleteMany?: RoomTypeScalarWhereInput | RoomTypeScalarWhereInput[]
  }

  export type RoomUncheckedUpdateManyWithoutHotelNestedInput = {
    create?: XOR<RoomCreateWithoutHotelInput, RoomUncheckedCreateWithoutHotelInput> | RoomCreateWithoutHotelInput[] | RoomUncheckedCreateWithoutHotelInput[]
    connectOrCreate?: RoomCreateOrConnectWithoutHotelInput | RoomCreateOrConnectWithoutHotelInput[]
    upsert?: RoomUpsertWithWhereUniqueWithoutHotelInput | RoomUpsertWithWhereUniqueWithoutHotelInput[]
    createMany?: RoomCreateManyHotelInputEnvelope
    set?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    disconnect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    delete?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    connect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    update?: RoomUpdateWithWhereUniqueWithoutHotelInput | RoomUpdateWithWhereUniqueWithoutHotelInput[]
    updateMany?: RoomUpdateManyWithWhereWithoutHotelInput | RoomUpdateManyWithWhereWithoutHotelInput[]
    deleteMany?: RoomScalarWhereInput | RoomScalarWhereInput[]
  }

  export type RoleUncheckedUpdateManyWithoutHotelNestedInput = {
    create?: XOR<RoleCreateWithoutHotelInput, RoleUncheckedCreateWithoutHotelInput> | RoleCreateWithoutHotelInput[] | RoleUncheckedCreateWithoutHotelInput[]
    connectOrCreate?: RoleCreateOrConnectWithoutHotelInput | RoleCreateOrConnectWithoutHotelInput[]
    upsert?: RoleUpsertWithWhereUniqueWithoutHotelInput | RoleUpsertWithWhereUniqueWithoutHotelInput[]
    createMany?: RoleCreateManyHotelInputEnvelope
    set?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    disconnect?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    delete?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    connect?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    update?: RoleUpdateWithWhereUniqueWithoutHotelInput | RoleUpdateWithWhereUniqueWithoutHotelInput[]
    updateMany?: RoleUpdateManyWithWhereWithoutHotelInput | RoleUpdateManyWithWhereWithoutHotelInput[]
    deleteMany?: RoleScalarWhereInput | RoleScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutHotelNestedInput = {
    create?: XOR<UserCreateWithoutHotelInput, UserUncheckedCreateWithoutHotelInput> | UserCreateWithoutHotelInput[] | UserUncheckedCreateWithoutHotelInput[]
    connectOrCreate?: UserCreateOrConnectWithoutHotelInput | UserCreateOrConnectWithoutHotelInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutHotelInput | UserUpsertWithWhereUniqueWithoutHotelInput[]
    createMany?: UserCreateManyHotelInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutHotelInput | UserUpdateWithWhereUniqueWithoutHotelInput[]
    updateMany?: UserUpdateManyWithWhereWithoutHotelInput | UserUpdateManyWithWhereWithoutHotelInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type ReservationUncheckedUpdateManyWithoutHotelNestedInput = {
    create?: XOR<ReservationCreateWithoutHotelInput, ReservationUncheckedCreateWithoutHotelInput> | ReservationCreateWithoutHotelInput[] | ReservationUncheckedCreateWithoutHotelInput[]
    connectOrCreate?: ReservationCreateOrConnectWithoutHotelInput | ReservationCreateOrConnectWithoutHotelInput[]
    upsert?: ReservationUpsertWithWhereUniqueWithoutHotelInput | ReservationUpsertWithWhereUniqueWithoutHotelInput[]
    createMany?: ReservationCreateManyHotelInputEnvelope
    set?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    disconnect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    delete?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    connect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    update?: ReservationUpdateWithWhereUniqueWithoutHotelInput | ReservationUpdateWithWhereUniqueWithoutHotelInput[]
    updateMany?: ReservationUpdateManyWithWhereWithoutHotelInput | ReservationUpdateManyWithWhereWithoutHotelInput[]
    deleteMany?: ReservationScalarWhereInput | ReservationScalarWhereInput[]
  }

  export type FolioUncheckedUpdateManyWithoutHotelNestedInput = {
    create?: XOR<FolioCreateWithoutHotelInput, FolioUncheckedCreateWithoutHotelInput> | FolioCreateWithoutHotelInput[] | FolioUncheckedCreateWithoutHotelInput[]
    connectOrCreate?: FolioCreateOrConnectWithoutHotelInput | FolioCreateOrConnectWithoutHotelInput[]
    upsert?: FolioUpsertWithWhereUniqueWithoutHotelInput | FolioUpsertWithWhereUniqueWithoutHotelInput[]
    createMany?: FolioCreateManyHotelInputEnvelope
    set?: FolioWhereUniqueInput | FolioWhereUniqueInput[]
    disconnect?: FolioWhereUniqueInput | FolioWhereUniqueInput[]
    delete?: FolioWhereUniqueInput | FolioWhereUniqueInput[]
    connect?: FolioWhereUniqueInput | FolioWhereUniqueInput[]
    update?: FolioUpdateWithWhereUniqueWithoutHotelInput | FolioUpdateWithWhereUniqueWithoutHotelInput[]
    updateMany?: FolioUpdateManyWithWhereWithoutHotelInput | FolioUpdateManyWithWhereWithoutHotelInput[]
    deleteMany?: FolioScalarWhereInput | FolioScalarWhereInput[]
  }

  export type POSOutletUncheckedUpdateManyWithoutHotelNestedInput = {
    create?: XOR<POSOutletCreateWithoutHotelInput, POSOutletUncheckedCreateWithoutHotelInput> | POSOutletCreateWithoutHotelInput[] | POSOutletUncheckedCreateWithoutHotelInput[]
    connectOrCreate?: POSOutletCreateOrConnectWithoutHotelInput | POSOutletCreateOrConnectWithoutHotelInput[]
    upsert?: POSOutletUpsertWithWhereUniqueWithoutHotelInput | POSOutletUpsertWithWhereUniqueWithoutHotelInput[]
    createMany?: POSOutletCreateManyHotelInputEnvelope
    set?: POSOutletWhereUniqueInput | POSOutletWhereUniqueInput[]
    disconnect?: POSOutletWhereUniqueInput | POSOutletWhereUniqueInput[]
    delete?: POSOutletWhereUniqueInput | POSOutletWhereUniqueInput[]
    connect?: POSOutletWhereUniqueInput | POSOutletWhereUniqueInput[]
    update?: POSOutletUpdateWithWhereUniqueWithoutHotelInput | POSOutletUpdateWithWhereUniqueWithoutHotelInput[]
    updateMany?: POSOutletUpdateManyWithWhereWithoutHotelInput | POSOutletUpdateManyWithWhereWithoutHotelInput[]
    deleteMany?: POSOutletScalarWhereInput | POSOutletScalarWhereInput[]
  }

  export type RatePlanUncheckedUpdateManyWithoutHotelNestedInput = {
    create?: XOR<RatePlanCreateWithoutHotelInput, RatePlanUncheckedCreateWithoutHotelInput> | RatePlanCreateWithoutHotelInput[] | RatePlanUncheckedCreateWithoutHotelInput[]
    connectOrCreate?: RatePlanCreateOrConnectWithoutHotelInput | RatePlanCreateOrConnectWithoutHotelInput[]
    upsert?: RatePlanUpsertWithWhereUniqueWithoutHotelInput | RatePlanUpsertWithWhereUniqueWithoutHotelInput[]
    createMany?: RatePlanCreateManyHotelInputEnvelope
    set?: RatePlanWhereUniqueInput | RatePlanWhereUniqueInput[]
    disconnect?: RatePlanWhereUniqueInput | RatePlanWhereUniqueInput[]
    delete?: RatePlanWhereUniqueInput | RatePlanWhereUniqueInput[]
    connect?: RatePlanWhereUniqueInput | RatePlanWhereUniqueInput[]
    update?: RatePlanUpdateWithWhereUniqueWithoutHotelInput | RatePlanUpdateWithWhereUniqueWithoutHotelInput[]
    updateMany?: RatePlanUpdateManyWithWhereWithoutHotelInput | RatePlanUpdateManyWithWhereWithoutHotelInput[]
    deleteMany?: RatePlanScalarWhereInput | RatePlanScalarWhereInput[]
  }

  export type TenantCreateNestedOneWithoutUsersInput = {
    create?: XOR<TenantCreateWithoutUsersInput, TenantUncheckedCreateWithoutUsersInput>
    connectOrCreate?: TenantCreateOrConnectWithoutUsersInput
    connect?: TenantWhereUniqueInput
  }

  export type HotelCreateNestedOneWithoutUserInput = {
    create?: XOR<HotelCreateWithoutUserInput, HotelUncheckedCreateWithoutUserInput>
    connectOrCreate?: HotelCreateOrConnectWithoutUserInput
    connect?: HotelWhereUniqueInput
  }

  export type RoleCreateNestedOneWithoutUsersInput = {
    create?: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput>
    connectOrCreate?: RoleCreateOrConnectWithoutUsersInput
    connect?: RoleWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type TenantUpdateOneRequiredWithoutUsersNestedInput = {
    create?: XOR<TenantCreateWithoutUsersInput, TenantUncheckedCreateWithoutUsersInput>
    connectOrCreate?: TenantCreateOrConnectWithoutUsersInput
    upsert?: TenantUpsertWithoutUsersInput
    connect?: TenantWhereUniqueInput
    update?: XOR<XOR<TenantUpdateToOneWithWhereWithoutUsersInput, TenantUpdateWithoutUsersInput>, TenantUncheckedUpdateWithoutUsersInput>
  }

  export type HotelUpdateOneRequiredWithoutUserNestedInput = {
    create?: XOR<HotelCreateWithoutUserInput, HotelUncheckedCreateWithoutUserInput>
    connectOrCreate?: HotelCreateOrConnectWithoutUserInput
    upsert?: HotelUpsertWithoutUserInput
    connect?: HotelWhereUniqueInput
    update?: XOR<XOR<HotelUpdateToOneWithWhereWithoutUserInput, HotelUpdateWithoutUserInput>, HotelUncheckedUpdateWithoutUserInput>
  }

  export type RoleUpdateOneRequiredWithoutUsersNestedInput = {
    create?: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput>
    connectOrCreate?: RoleCreateOrConnectWithoutUsersInput
    upsert?: RoleUpsertWithoutUsersInput
    connect?: RoleWhereUniqueInput
    update?: XOR<XOR<RoleUpdateToOneWithWhereWithoutUsersInput, RoleUpdateWithoutUsersInput>, RoleUncheckedUpdateWithoutUsersInput>
  }

  export type TenantCreateNestedOneWithoutRoleInput = {
    create?: XOR<TenantCreateWithoutRoleInput, TenantUncheckedCreateWithoutRoleInput>
    connectOrCreate?: TenantCreateOrConnectWithoutRoleInput
    connect?: TenantWhereUniqueInput
  }

  export type HotelCreateNestedOneWithoutRoleInput = {
    create?: XOR<HotelCreateWithoutRoleInput, HotelUncheckedCreateWithoutRoleInput>
    connectOrCreate?: HotelCreateOrConnectWithoutRoleInput
    connect?: HotelWhereUniqueInput
  }

  export type UserCreateNestedManyWithoutRoleInput = {
    create?: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput> | UserCreateWithoutRoleInput[] | UserUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRoleInput | UserCreateOrConnectWithoutRoleInput[]
    createMany?: UserCreateManyRoleInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type PermissionCreateNestedManyWithoutRolesInput = {
    create?: XOR<PermissionCreateWithoutRolesInput, PermissionUncheckedCreateWithoutRolesInput> | PermissionCreateWithoutRolesInput[] | PermissionUncheckedCreateWithoutRolesInput[]
    connectOrCreate?: PermissionCreateOrConnectWithoutRolesInput | PermissionCreateOrConnectWithoutRolesInput[]
    connect?: PermissionWhereUniqueInput | PermissionWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutRoleInput = {
    create?: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput> | UserCreateWithoutRoleInput[] | UserUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRoleInput | UserCreateOrConnectWithoutRoleInput[]
    createMany?: UserCreateManyRoleInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type PermissionUncheckedCreateNestedManyWithoutRolesInput = {
    create?: XOR<PermissionCreateWithoutRolesInput, PermissionUncheckedCreateWithoutRolesInput> | PermissionCreateWithoutRolesInput[] | PermissionUncheckedCreateWithoutRolesInput[]
    connectOrCreate?: PermissionCreateOrConnectWithoutRolesInput | PermissionCreateOrConnectWithoutRolesInput[]
    connect?: PermissionWhereUniqueInput | PermissionWhereUniqueInput[]
  }

  export type TenantUpdateOneRequiredWithoutRoleNestedInput = {
    create?: XOR<TenantCreateWithoutRoleInput, TenantUncheckedCreateWithoutRoleInput>
    connectOrCreate?: TenantCreateOrConnectWithoutRoleInput
    upsert?: TenantUpsertWithoutRoleInput
    connect?: TenantWhereUniqueInput
    update?: XOR<XOR<TenantUpdateToOneWithWhereWithoutRoleInput, TenantUpdateWithoutRoleInput>, TenantUncheckedUpdateWithoutRoleInput>
  }

  export type HotelUpdateOneRequiredWithoutRoleNestedInput = {
    create?: XOR<HotelCreateWithoutRoleInput, HotelUncheckedCreateWithoutRoleInput>
    connectOrCreate?: HotelCreateOrConnectWithoutRoleInput
    upsert?: HotelUpsertWithoutRoleInput
    connect?: HotelWhereUniqueInput
    update?: XOR<XOR<HotelUpdateToOneWithWhereWithoutRoleInput, HotelUpdateWithoutRoleInput>, HotelUncheckedUpdateWithoutRoleInput>
  }

  export type UserUpdateManyWithoutRoleNestedInput = {
    create?: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput> | UserCreateWithoutRoleInput[] | UserUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRoleInput | UserCreateOrConnectWithoutRoleInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutRoleInput | UserUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: UserCreateManyRoleInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutRoleInput | UserUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: UserUpdateManyWithWhereWithoutRoleInput | UserUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type PermissionUpdateManyWithoutRolesNestedInput = {
    create?: XOR<PermissionCreateWithoutRolesInput, PermissionUncheckedCreateWithoutRolesInput> | PermissionCreateWithoutRolesInput[] | PermissionUncheckedCreateWithoutRolesInput[]
    connectOrCreate?: PermissionCreateOrConnectWithoutRolesInput | PermissionCreateOrConnectWithoutRolesInput[]
    upsert?: PermissionUpsertWithWhereUniqueWithoutRolesInput | PermissionUpsertWithWhereUniqueWithoutRolesInput[]
    set?: PermissionWhereUniqueInput | PermissionWhereUniqueInput[]
    disconnect?: PermissionWhereUniqueInput | PermissionWhereUniqueInput[]
    delete?: PermissionWhereUniqueInput | PermissionWhereUniqueInput[]
    connect?: PermissionWhereUniqueInput | PermissionWhereUniqueInput[]
    update?: PermissionUpdateWithWhereUniqueWithoutRolesInput | PermissionUpdateWithWhereUniqueWithoutRolesInput[]
    updateMany?: PermissionUpdateManyWithWhereWithoutRolesInput | PermissionUpdateManyWithWhereWithoutRolesInput[]
    deleteMany?: PermissionScalarWhereInput | PermissionScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutRoleNestedInput = {
    create?: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput> | UserCreateWithoutRoleInput[] | UserUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRoleInput | UserCreateOrConnectWithoutRoleInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutRoleInput | UserUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: UserCreateManyRoleInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutRoleInput | UserUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: UserUpdateManyWithWhereWithoutRoleInput | UserUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type PermissionUncheckedUpdateManyWithoutRolesNestedInput = {
    create?: XOR<PermissionCreateWithoutRolesInput, PermissionUncheckedCreateWithoutRolesInput> | PermissionCreateWithoutRolesInput[] | PermissionUncheckedCreateWithoutRolesInput[]
    connectOrCreate?: PermissionCreateOrConnectWithoutRolesInput | PermissionCreateOrConnectWithoutRolesInput[]
    upsert?: PermissionUpsertWithWhereUniqueWithoutRolesInput | PermissionUpsertWithWhereUniqueWithoutRolesInput[]
    set?: PermissionWhereUniqueInput | PermissionWhereUniqueInput[]
    disconnect?: PermissionWhereUniqueInput | PermissionWhereUniqueInput[]
    delete?: PermissionWhereUniqueInput | PermissionWhereUniqueInput[]
    connect?: PermissionWhereUniqueInput | PermissionWhereUniqueInput[]
    update?: PermissionUpdateWithWhereUniqueWithoutRolesInput | PermissionUpdateWithWhereUniqueWithoutRolesInput[]
    updateMany?: PermissionUpdateManyWithWhereWithoutRolesInput | PermissionUpdateManyWithWhereWithoutRolesInput[]
    deleteMany?: PermissionScalarWhereInput | PermissionScalarWhereInput[]
  }

  export type RoleCreateNestedManyWithoutPermissionsInput = {
    create?: XOR<RoleCreateWithoutPermissionsInput, RoleUncheckedCreateWithoutPermissionsInput> | RoleCreateWithoutPermissionsInput[] | RoleUncheckedCreateWithoutPermissionsInput[]
    connectOrCreate?: RoleCreateOrConnectWithoutPermissionsInput | RoleCreateOrConnectWithoutPermissionsInput[]
    connect?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
  }

  export type RoleUncheckedCreateNestedManyWithoutPermissionsInput = {
    create?: XOR<RoleCreateWithoutPermissionsInput, RoleUncheckedCreateWithoutPermissionsInput> | RoleCreateWithoutPermissionsInput[] | RoleUncheckedCreateWithoutPermissionsInput[]
    connectOrCreate?: RoleCreateOrConnectWithoutPermissionsInput | RoleCreateOrConnectWithoutPermissionsInput[]
    connect?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
  }

  export type RoleUpdateManyWithoutPermissionsNestedInput = {
    create?: XOR<RoleCreateWithoutPermissionsInput, RoleUncheckedCreateWithoutPermissionsInput> | RoleCreateWithoutPermissionsInput[] | RoleUncheckedCreateWithoutPermissionsInput[]
    connectOrCreate?: RoleCreateOrConnectWithoutPermissionsInput | RoleCreateOrConnectWithoutPermissionsInput[]
    upsert?: RoleUpsertWithWhereUniqueWithoutPermissionsInput | RoleUpsertWithWhereUniqueWithoutPermissionsInput[]
    set?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    disconnect?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    delete?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    connect?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    update?: RoleUpdateWithWhereUniqueWithoutPermissionsInput | RoleUpdateWithWhereUniqueWithoutPermissionsInput[]
    updateMany?: RoleUpdateManyWithWhereWithoutPermissionsInput | RoleUpdateManyWithWhereWithoutPermissionsInput[]
    deleteMany?: RoleScalarWhereInput | RoleScalarWhereInput[]
  }

  export type RoleUncheckedUpdateManyWithoutPermissionsNestedInput = {
    create?: XOR<RoleCreateWithoutPermissionsInput, RoleUncheckedCreateWithoutPermissionsInput> | RoleCreateWithoutPermissionsInput[] | RoleUncheckedCreateWithoutPermissionsInput[]
    connectOrCreate?: RoleCreateOrConnectWithoutPermissionsInput | RoleCreateOrConnectWithoutPermissionsInput[]
    upsert?: RoleUpsertWithWhereUniqueWithoutPermissionsInput | RoleUpsertWithWhereUniqueWithoutPermissionsInput[]
    set?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    disconnect?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    delete?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    connect?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    update?: RoleUpdateWithWhereUniqueWithoutPermissionsInput | RoleUpdateWithWhereUniqueWithoutPermissionsInput[]
    updateMany?: RoleUpdateManyWithWhereWithoutPermissionsInput | RoleUpdateManyWithWhereWithoutPermissionsInput[]
    deleteMany?: RoleScalarWhereInput | RoleScalarWhereInput[]
  }

  export type RoomTypeCreateNestedOneWithoutRoomInput = {
    create?: XOR<RoomTypeCreateWithoutRoomInput, RoomTypeUncheckedCreateWithoutRoomInput>
    connectOrCreate?: RoomTypeCreateOrConnectWithoutRoomInput
    connect?: RoomTypeWhereUniqueInput
  }

  export type TenantCreateNestedOneWithoutRoomInput = {
    create?: XOR<TenantCreateWithoutRoomInput, TenantUncheckedCreateWithoutRoomInput>
    connectOrCreate?: TenantCreateOrConnectWithoutRoomInput
    connect?: TenantWhereUniqueInput
  }

  export type HotelCreateNestedOneWithoutRoomInput = {
    create?: XOR<HotelCreateWithoutRoomInput, HotelUncheckedCreateWithoutRoomInput>
    connectOrCreate?: HotelCreateOrConnectWithoutRoomInput
    connect?: HotelWhereUniqueInput
  }

  export type ReservationCreateNestedManyWithoutRoomInput = {
    create?: XOR<ReservationCreateWithoutRoomInput, ReservationUncheckedCreateWithoutRoomInput> | ReservationCreateWithoutRoomInput[] | ReservationUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: ReservationCreateOrConnectWithoutRoomInput | ReservationCreateOrConnectWithoutRoomInput[]
    createMany?: ReservationCreateManyRoomInputEnvelope
    connect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
  }

  export type ReservationUncheckedCreateNestedManyWithoutRoomInput = {
    create?: XOR<ReservationCreateWithoutRoomInput, ReservationUncheckedCreateWithoutRoomInput> | ReservationCreateWithoutRoomInput[] | ReservationUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: ReservationCreateOrConnectWithoutRoomInput | ReservationCreateOrConnectWithoutRoomInput[]
    createMany?: ReservationCreateManyRoomInputEnvelope
    connect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
  }

  export type EnumRoomStatusFieldUpdateOperationsInput = {
    set?: $Enums.RoomStatus
  }

  export type RoomTypeUpdateOneRequiredWithoutRoomNestedInput = {
    create?: XOR<RoomTypeCreateWithoutRoomInput, RoomTypeUncheckedCreateWithoutRoomInput>
    connectOrCreate?: RoomTypeCreateOrConnectWithoutRoomInput
    upsert?: RoomTypeUpsertWithoutRoomInput
    connect?: RoomTypeWhereUniqueInput
    update?: XOR<XOR<RoomTypeUpdateToOneWithWhereWithoutRoomInput, RoomTypeUpdateWithoutRoomInput>, RoomTypeUncheckedUpdateWithoutRoomInput>
  }

  export type TenantUpdateOneRequiredWithoutRoomNestedInput = {
    create?: XOR<TenantCreateWithoutRoomInput, TenantUncheckedCreateWithoutRoomInput>
    connectOrCreate?: TenantCreateOrConnectWithoutRoomInput
    upsert?: TenantUpsertWithoutRoomInput
    connect?: TenantWhereUniqueInput
    update?: XOR<XOR<TenantUpdateToOneWithWhereWithoutRoomInput, TenantUpdateWithoutRoomInput>, TenantUncheckedUpdateWithoutRoomInput>
  }

  export type HotelUpdateOneRequiredWithoutRoomNestedInput = {
    create?: XOR<HotelCreateWithoutRoomInput, HotelUncheckedCreateWithoutRoomInput>
    connectOrCreate?: HotelCreateOrConnectWithoutRoomInput
    upsert?: HotelUpsertWithoutRoomInput
    connect?: HotelWhereUniqueInput
    update?: XOR<XOR<HotelUpdateToOneWithWhereWithoutRoomInput, HotelUpdateWithoutRoomInput>, HotelUncheckedUpdateWithoutRoomInput>
  }

  export type ReservationUpdateManyWithoutRoomNestedInput = {
    create?: XOR<ReservationCreateWithoutRoomInput, ReservationUncheckedCreateWithoutRoomInput> | ReservationCreateWithoutRoomInput[] | ReservationUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: ReservationCreateOrConnectWithoutRoomInput | ReservationCreateOrConnectWithoutRoomInput[]
    upsert?: ReservationUpsertWithWhereUniqueWithoutRoomInput | ReservationUpsertWithWhereUniqueWithoutRoomInput[]
    createMany?: ReservationCreateManyRoomInputEnvelope
    set?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    disconnect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    delete?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    connect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    update?: ReservationUpdateWithWhereUniqueWithoutRoomInput | ReservationUpdateWithWhereUniqueWithoutRoomInput[]
    updateMany?: ReservationUpdateManyWithWhereWithoutRoomInput | ReservationUpdateManyWithWhereWithoutRoomInput[]
    deleteMany?: ReservationScalarWhereInput | ReservationScalarWhereInput[]
  }

  export type ReservationUncheckedUpdateManyWithoutRoomNestedInput = {
    create?: XOR<ReservationCreateWithoutRoomInput, ReservationUncheckedCreateWithoutRoomInput> | ReservationCreateWithoutRoomInput[] | ReservationUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: ReservationCreateOrConnectWithoutRoomInput | ReservationCreateOrConnectWithoutRoomInput[]
    upsert?: ReservationUpsertWithWhereUniqueWithoutRoomInput | ReservationUpsertWithWhereUniqueWithoutRoomInput[]
    createMany?: ReservationCreateManyRoomInputEnvelope
    set?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    disconnect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    delete?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    connect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    update?: ReservationUpdateWithWhereUniqueWithoutRoomInput | ReservationUpdateWithWhereUniqueWithoutRoomInput[]
    updateMany?: ReservationUpdateManyWithWhereWithoutRoomInput | ReservationUpdateManyWithWhereWithoutRoomInput[]
    deleteMany?: ReservationScalarWhereInput | ReservationScalarWhereInput[]
  }

  export type TenantCreateNestedOneWithoutRoomTypeInput = {
    create?: XOR<TenantCreateWithoutRoomTypeInput, TenantUncheckedCreateWithoutRoomTypeInput>
    connectOrCreate?: TenantCreateOrConnectWithoutRoomTypeInput
    connect?: TenantWhereUniqueInput
  }

  export type HotelCreateNestedOneWithoutRoomTypeInput = {
    create?: XOR<HotelCreateWithoutRoomTypeInput, HotelUncheckedCreateWithoutRoomTypeInput>
    connectOrCreate?: HotelCreateOrConnectWithoutRoomTypeInput
    connect?: HotelWhereUniqueInput
  }

  export type RoomCreateNestedManyWithoutRoomTypeInput = {
    create?: XOR<RoomCreateWithoutRoomTypeInput, RoomUncheckedCreateWithoutRoomTypeInput> | RoomCreateWithoutRoomTypeInput[] | RoomUncheckedCreateWithoutRoomTypeInput[]
    connectOrCreate?: RoomCreateOrConnectWithoutRoomTypeInput | RoomCreateOrConnectWithoutRoomTypeInput[]
    createMany?: RoomCreateManyRoomTypeInputEnvelope
    connect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
  }

  export type RoomUncheckedCreateNestedManyWithoutRoomTypeInput = {
    create?: XOR<RoomCreateWithoutRoomTypeInput, RoomUncheckedCreateWithoutRoomTypeInput> | RoomCreateWithoutRoomTypeInput[] | RoomUncheckedCreateWithoutRoomTypeInput[]
    connectOrCreate?: RoomCreateOrConnectWithoutRoomTypeInput | RoomCreateOrConnectWithoutRoomTypeInput[]
    createMany?: RoomCreateManyRoomTypeInputEnvelope
    connect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type TenantUpdateOneRequiredWithoutRoomTypeNestedInput = {
    create?: XOR<TenantCreateWithoutRoomTypeInput, TenantUncheckedCreateWithoutRoomTypeInput>
    connectOrCreate?: TenantCreateOrConnectWithoutRoomTypeInput
    upsert?: TenantUpsertWithoutRoomTypeInput
    connect?: TenantWhereUniqueInput
    update?: XOR<XOR<TenantUpdateToOneWithWhereWithoutRoomTypeInput, TenantUpdateWithoutRoomTypeInput>, TenantUncheckedUpdateWithoutRoomTypeInput>
  }

  export type HotelUpdateOneRequiredWithoutRoomTypeNestedInput = {
    create?: XOR<HotelCreateWithoutRoomTypeInput, HotelUncheckedCreateWithoutRoomTypeInput>
    connectOrCreate?: HotelCreateOrConnectWithoutRoomTypeInput
    upsert?: HotelUpsertWithoutRoomTypeInput
    connect?: HotelWhereUniqueInput
    update?: XOR<XOR<HotelUpdateToOneWithWhereWithoutRoomTypeInput, HotelUpdateWithoutRoomTypeInput>, HotelUncheckedUpdateWithoutRoomTypeInput>
  }

  export type RoomUpdateManyWithoutRoomTypeNestedInput = {
    create?: XOR<RoomCreateWithoutRoomTypeInput, RoomUncheckedCreateWithoutRoomTypeInput> | RoomCreateWithoutRoomTypeInput[] | RoomUncheckedCreateWithoutRoomTypeInput[]
    connectOrCreate?: RoomCreateOrConnectWithoutRoomTypeInput | RoomCreateOrConnectWithoutRoomTypeInput[]
    upsert?: RoomUpsertWithWhereUniqueWithoutRoomTypeInput | RoomUpsertWithWhereUniqueWithoutRoomTypeInput[]
    createMany?: RoomCreateManyRoomTypeInputEnvelope
    set?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    disconnect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    delete?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    connect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    update?: RoomUpdateWithWhereUniqueWithoutRoomTypeInput | RoomUpdateWithWhereUniqueWithoutRoomTypeInput[]
    updateMany?: RoomUpdateManyWithWhereWithoutRoomTypeInput | RoomUpdateManyWithWhereWithoutRoomTypeInput[]
    deleteMany?: RoomScalarWhereInput | RoomScalarWhereInput[]
  }

  export type RoomUncheckedUpdateManyWithoutRoomTypeNestedInput = {
    create?: XOR<RoomCreateWithoutRoomTypeInput, RoomUncheckedCreateWithoutRoomTypeInput> | RoomCreateWithoutRoomTypeInput[] | RoomUncheckedCreateWithoutRoomTypeInput[]
    connectOrCreate?: RoomCreateOrConnectWithoutRoomTypeInput | RoomCreateOrConnectWithoutRoomTypeInput[]
    upsert?: RoomUpsertWithWhereUniqueWithoutRoomTypeInput | RoomUpsertWithWhereUniqueWithoutRoomTypeInput[]
    createMany?: RoomCreateManyRoomTypeInputEnvelope
    set?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    disconnect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    delete?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    connect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    update?: RoomUpdateWithWhereUniqueWithoutRoomTypeInput | RoomUpdateWithWhereUniqueWithoutRoomTypeInput[]
    updateMany?: RoomUpdateManyWithWhereWithoutRoomTypeInput | RoomUpdateManyWithWhereWithoutRoomTypeInput[]
    deleteMany?: RoomScalarWhereInput | RoomScalarWhereInput[]
  }

  export type TenantCreateNestedOneWithoutRatePlanInput = {
    create?: XOR<TenantCreateWithoutRatePlanInput, TenantUncheckedCreateWithoutRatePlanInput>
    connectOrCreate?: TenantCreateOrConnectWithoutRatePlanInput
    connect?: TenantWhereUniqueInput
  }

  export type HotelCreateNestedOneWithoutRatePlanInput = {
    create?: XOR<HotelCreateWithoutRatePlanInput, HotelUncheckedCreateWithoutRatePlanInput>
    connectOrCreate?: HotelCreateOrConnectWithoutRatePlanInput
    connect?: HotelWhereUniqueInput
  }

  export type EnumAdjTypeFieldUpdateOperationsInput = {
    set?: $Enums.AdjType
  }

  export type TenantUpdateOneRequiredWithoutRatePlanNestedInput = {
    create?: XOR<TenantCreateWithoutRatePlanInput, TenantUncheckedCreateWithoutRatePlanInput>
    connectOrCreate?: TenantCreateOrConnectWithoutRatePlanInput
    upsert?: TenantUpsertWithoutRatePlanInput
    connect?: TenantWhereUniqueInput
    update?: XOR<XOR<TenantUpdateToOneWithWhereWithoutRatePlanInput, TenantUpdateWithoutRatePlanInput>, TenantUncheckedUpdateWithoutRatePlanInput>
  }

  export type HotelUpdateOneRequiredWithoutRatePlanNestedInput = {
    create?: XOR<HotelCreateWithoutRatePlanInput, HotelUncheckedCreateWithoutRatePlanInput>
    connectOrCreate?: HotelCreateOrConnectWithoutRatePlanInput
    upsert?: HotelUpsertWithoutRatePlanInput
    connect?: HotelWhereUniqueInput
    update?: XOR<XOR<HotelUpdateToOneWithWhereWithoutRatePlanInput, HotelUpdateWithoutRatePlanInput>, HotelUncheckedUpdateWithoutRatePlanInput>
  }

  export type TenantCreateNestedOneWithoutGuestInput = {
    create?: XOR<TenantCreateWithoutGuestInput, TenantUncheckedCreateWithoutGuestInput>
    connectOrCreate?: TenantCreateOrConnectWithoutGuestInput
    connect?: TenantWhereUniqueInput
  }

  export type HotelCreateNestedOneWithoutGuestInput = {
    create?: XOR<HotelCreateWithoutGuestInput, HotelUncheckedCreateWithoutGuestInput>
    connectOrCreate?: HotelCreateOrConnectWithoutGuestInput
    connect?: HotelWhereUniqueInput
  }

  export type ReservationCreateNestedManyWithoutGuestInput = {
    create?: XOR<ReservationCreateWithoutGuestInput, ReservationUncheckedCreateWithoutGuestInput> | ReservationCreateWithoutGuestInput[] | ReservationUncheckedCreateWithoutGuestInput[]
    connectOrCreate?: ReservationCreateOrConnectWithoutGuestInput | ReservationCreateOrConnectWithoutGuestInput[]
    createMany?: ReservationCreateManyGuestInputEnvelope
    connect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
  }

  export type FolioCreateNestedManyWithoutGuestInput = {
    create?: XOR<FolioCreateWithoutGuestInput, FolioUncheckedCreateWithoutGuestInput> | FolioCreateWithoutGuestInput[] | FolioUncheckedCreateWithoutGuestInput[]
    connectOrCreate?: FolioCreateOrConnectWithoutGuestInput | FolioCreateOrConnectWithoutGuestInput[]
    createMany?: FolioCreateManyGuestInputEnvelope
    connect?: FolioWhereUniqueInput | FolioWhereUniqueInput[]
  }

  export type ReservationUncheckedCreateNestedManyWithoutGuestInput = {
    create?: XOR<ReservationCreateWithoutGuestInput, ReservationUncheckedCreateWithoutGuestInput> | ReservationCreateWithoutGuestInput[] | ReservationUncheckedCreateWithoutGuestInput[]
    connectOrCreate?: ReservationCreateOrConnectWithoutGuestInput | ReservationCreateOrConnectWithoutGuestInput[]
    createMany?: ReservationCreateManyGuestInputEnvelope
    connect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
  }

  export type FolioUncheckedCreateNestedManyWithoutGuestInput = {
    create?: XOR<FolioCreateWithoutGuestInput, FolioUncheckedCreateWithoutGuestInput> | FolioCreateWithoutGuestInput[] | FolioUncheckedCreateWithoutGuestInput[]
    connectOrCreate?: FolioCreateOrConnectWithoutGuestInput | FolioCreateOrConnectWithoutGuestInput[]
    createMany?: FolioCreateManyGuestInputEnvelope
    connect?: FolioWhereUniqueInput | FolioWhereUniqueInput[]
  }

  export type TenantUpdateOneRequiredWithoutGuestNestedInput = {
    create?: XOR<TenantCreateWithoutGuestInput, TenantUncheckedCreateWithoutGuestInput>
    connectOrCreate?: TenantCreateOrConnectWithoutGuestInput
    upsert?: TenantUpsertWithoutGuestInput
    connect?: TenantWhereUniqueInput
    update?: XOR<XOR<TenantUpdateToOneWithWhereWithoutGuestInput, TenantUpdateWithoutGuestInput>, TenantUncheckedUpdateWithoutGuestInput>
  }

  export type HotelUpdateOneRequiredWithoutGuestNestedInput = {
    create?: XOR<HotelCreateWithoutGuestInput, HotelUncheckedCreateWithoutGuestInput>
    connectOrCreate?: HotelCreateOrConnectWithoutGuestInput
    upsert?: HotelUpsertWithoutGuestInput
    connect?: HotelWhereUniqueInput
    update?: XOR<XOR<HotelUpdateToOneWithWhereWithoutGuestInput, HotelUpdateWithoutGuestInput>, HotelUncheckedUpdateWithoutGuestInput>
  }

  export type ReservationUpdateManyWithoutGuestNestedInput = {
    create?: XOR<ReservationCreateWithoutGuestInput, ReservationUncheckedCreateWithoutGuestInput> | ReservationCreateWithoutGuestInput[] | ReservationUncheckedCreateWithoutGuestInput[]
    connectOrCreate?: ReservationCreateOrConnectWithoutGuestInput | ReservationCreateOrConnectWithoutGuestInput[]
    upsert?: ReservationUpsertWithWhereUniqueWithoutGuestInput | ReservationUpsertWithWhereUniqueWithoutGuestInput[]
    createMany?: ReservationCreateManyGuestInputEnvelope
    set?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    disconnect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    delete?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    connect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    update?: ReservationUpdateWithWhereUniqueWithoutGuestInput | ReservationUpdateWithWhereUniqueWithoutGuestInput[]
    updateMany?: ReservationUpdateManyWithWhereWithoutGuestInput | ReservationUpdateManyWithWhereWithoutGuestInput[]
    deleteMany?: ReservationScalarWhereInput | ReservationScalarWhereInput[]
  }

  export type FolioUpdateManyWithoutGuestNestedInput = {
    create?: XOR<FolioCreateWithoutGuestInput, FolioUncheckedCreateWithoutGuestInput> | FolioCreateWithoutGuestInput[] | FolioUncheckedCreateWithoutGuestInput[]
    connectOrCreate?: FolioCreateOrConnectWithoutGuestInput | FolioCreateOrConnectWithoutGuestInput[]
    upsert?: FolioUpsertWithWhereUniqueWithoutGuestInput | FolioUpsertWithWhereUniqueWithoutGuestInput[]
    createMany?: FolioCreateManyGuestInputEnvelope
    set?: FolioWhereUniqueInput | FolioWhereUniqueInput[]
    disconnect?: FolioWhereUniqueInput | FolioWhereUniqueInput[]
    delete?: FolioWhereUniqueInput | FolioWhereUniqueInput[]
    connect?: FolioWhereUniqueInput | FolioWhereUniqueInput[]
    update?: FolioUpdateWithWhereUniqueWithoutGuestInput | FolioUpdateWithWhereUniqueWithoutGuestInput[]
    updateMany?: FolioUpdateManyWithWhereWithoutGuestInput | FolioUpdateManyWithWhereWithoutGuestInput[]
    deleteMany?: FolioScalarWhereInput | FolioScalarWhereInput[]
  }

  export type ReservationUncheckedUpdateManyWithoutGuestNestedInput = {
    create?: XOR<ReservationCreateWithoutGuestInput, ReservationUncheckedCreateWithoutGuestInput> | ReservationCreateWithoutGuestInput[] | ReservationUncheckedCreateWithoutGuestInput[]
    connectOrCreate?: ReservationCreateOrConnectWithoutGuestInput | ReservationCreateOrConnectWithoutGuestInput[]
    upsert?: ReservationUpsertWithWhereUniqueWithoutGuestInput | ReservationUpsertWithWhereUniqueWithoutGuestInput[]
    createMany?: ReservationCreateManyGuestInputEnvelope
    set?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    disconnect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    delete?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    connect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    update?: ReservationUpdateWithWhereUniqueWithoutGuestInput | ReservationUpdateWithWhereUniqueWithoutGuestInput[]
    updateMany?: ReservationUpdateManyWithWhereWithoutGuestInput | ReservationUpdateManyWithWhereWithoutGuestInput[]
    deleteMany?: ReservationScalarWhereInput | ReservationScalarWhereInput[]
  }

  export type FolioUncheckedUpdateManyWithoutGuestNestedInput = {
    create?: XOR<FolioCreateWithoutGuestInput, FolioUncheckedCreateWithoutGuestInput> | FolioCreateWithoutGuestInput[] | FolioUncheckedCreateWithoutGuestInput[]
    connectOrCreate?: FolioCreateOrConnectWithoutGuestInput | FolioCreateOrConnectWithoutGuestInput[]
    upsert?: FolioUpsertWithWhereUniqueWithoutGuestInput | FolioUpsertWithWhereUniqueWithoutGuestInput[]
    createMany?: FolioCreateManyGuestInputEnvelope
    set?: FolioWhereUniqueInput | FolioWhereUniqueInput[]
    disconnect?: FolioWhereUniqueInput | FolioWhereUniqueInput[]
    delete?: FolioWhereUniqueInput | FolioWhereUniqueInput[]
    connect?: FolioWhereUniqueInput | FolioWhereUniqueInput[]
    update?: FolioUpdateWithWhereUniqueWithoutGuestInput | FolioUpdateWithWhereUniqueWithoutGuestInput[]
    updateMany?: FolioUpdateManyWithWhereWithoutGuestInput | FolioUpdateManyWithWhereWithoutGuestInput[]
    deleteMany?: FolioScalarWhereInput | FolioScalarWhereInput[]
  }

  export type GuestCreateNestedOneWithoutReservationInput = {
    create?: XOR<GuestCreateWithoutReservationInput, GuestUncheckedCreateWithoutReservationInput>
    connectOrCreate?: GuestCreateOrConnectWithoutReservationInput
    connect?: GuestWhereUniqueInput
  }

  export type RoomCreateNestedOneWithoutReservationInput = {
    create?: XOR<RoomCreateWithoutReservationInput, RoomUncheckedCreateWithoutReservationInput>
    connectOrCreate?: RoomCreateOrConnectWithoutReservationInput
    connect?: RoomWhereUniqueInput
  }

  export type TenantCreateNestedOneWithoutReservationInput = {
    create?: XOR<TenantCreateWithoutReservationInput, TenantUncheckedCreateWithoutReservationInput>
    connectOrCreate?: TenantCreateOrConnectWithoutReservationInput
    connect?: TenantWhereUniqueInput
  }

  export type HotelCreateNestedOneWithoutReservationInput = {
    create?: XOR<HotelCreateWithoutReservationInput, HotelUncheckedCreateWithoutReservationInput>
    connectOrCreate?: HotelCreateOrConnectWithoutReservationInput
    connect?: HotelWhereUniqueInput
  }

  export type EnumReservationStatusFieldUpdateOperationsInput = {
    set?: $Enums.ReservationStatus
  }

  export type GuestUpdateOneRequiredWithoutReservationNestedInput = {
    create?: XOR<GuestCreateWithoutReservationInput, GuestUncheckedCreateWithoutReservationInput>
    connectOrCreate?: GuestCreateOrConnectWithoutReservationInput
    upsert?: GuestUpsertWithoutReservationInput
    connect?: GuestWhereUniqueInput
    update?: XOR<XOR<GuestUpdateToOneWithWhereWithoutReservationInput, GuestUpdateWithoutReservationInput>, GuestUncheckedUpdateWithoutReservationInput>
  }

  export type RoomUpdateOneRequiredWithoutReservationNestedInput = {
    create?: XOR<RoomCreateWithoutReservationInput, RoomUncheckedCreateWithoutReservationInput>
    connectOrCreate?: RoomCreateOrConnectWithoutReservationInput
    upsert?: RoomUpsertWithoutReservationInput
    connect?: RoomWhereUniqueInput
    update?: XOR<XOR<RoomUpdateToOneWithWhereWithoutReservationInput, RoomUpdateWithoutReservationInput>, RoomUncheckedUpdateWithoutReservationInput>
  }

  export type TenantUpdateOneRequiredWithoutReservationNestedInput = {
    create?: XOR<TenantCreateWithoutReservationInput, TenantUncheckedCreateWithoutReservationInput>
    connectOrCreate?: TenantCreateOrConnectWithoutReservationInput
    upsert?: TenantUpsertWithoutReservationInput
    connect?: TenantWhereUniqueInput
    update?: XOR<XOR<TenantUpdateToOneWithWhereWithoutReservationInput, TenantUpdateWithoutReservationInput>, TenantUncheckedUpdateWithoutReservationInput>
  }

  export type HotelUpdateOneRequiredWithoutReservationNestedInput = {
    create?: XOR<HotelCreateWithoutReservationInput, HotelUncheckedCreateWithoutReservationInput>
    connectOrCreate?: HotelCreateOrConnectWithoutReservationInput
    upsert?: HotelUpsertWithoutReservationInput
    connect?: HotelWhereUniqueInput
    update?: XOR<XOR<HotelUpdateToOneWithWhereWithoutReservationInput, HotelUpdateWithoutReservationInput>, HotelUncheckedUpdateWithoutReservationInput>
  }

  export type GuestCreateNestedOneWithoutFolioInput = {
    create?: XOR<GuestCreateWithoutFolioInput, GuestUncheckedCreateWithoutFolioInput>
    connectOrCreate?: GuestCreateOrConnectWithoutFolioInput
    connect?: GuestWhereUniqueInput
  }

  export type TenantCreateNestedOneWithoutFolioInput = {
    create?: XOR<TenantCreateWithoutFolioInput, TenantUncheckedCreateWithoutFolioInput>
    connectOrCreate?: TenantCreateOrConnectWithoutFolioInput
    connect?: TenantWhereUniqueInput
  }

  export type HotelCreateNestedOneWithoutFolioInput = {
    create?: XOR<HotelCreateWithoutFolioInput, HotelUncheckedCreateWithoutFolioInput>
    connectOrCreate?: HotelCreateOrConnectWithoutFolioInput
    connect?: HotelWhereUniqueInput
  }

  export type EnumFolioStatusFieldUpdateOperationsInput = {
    set?: $Enums.FolioStatus
  }

  export type GuestUpdateOneRequiredWithoutFolioNestedInput = {
    create?: XOR<GuestCreateWithoutFolioInput, GuestUncheckedCreateWithoutFolioInput>
    connectOrCreate?: GuestCreateOrConnectWithoutFolioInput
    upsert?: GuestUpsertWithoutFolioInput
    connect?: GuestWhereUniqueInput
    update?: XOR<XOR<GuestUpdateToOneWithWhereWithoutFolioInput, GuestUpdateWithoutFolioInput>, GuestUncheckedUpdateWithoutFolioInput>
  }

  export type TenantUpdateOneRequiredWithoutFolioNestedInput = {
    create?: XOR<TenantCreateWithoutFolioInput, TenantUncheckedCreateWithoutFolioInput>
    connectOrCreate?: TenantCreateOrConnectWithoutFolioInput
    upsert?: TenantUpsertWithoutFolioInput
    connect?: TenantWhereUniqueInput
    update?: XOR<XOR<TenantUpdateToOneWithWhereWithoutFolioInput, TenantUpdateWithoutFolioInput>, TenantUncheckedUpdateWithoutFolioInput>
  }

  export type HotelUpdateOneRequiredWithoutFolioNestedInput = {
    create?: XOR<HotelCreateWithoutFolioInput, HotelUncheckedCreateWithoutFolioInput>
    connectOrCreate?: HotelCreateOrConnectWithoutFolioInput
    upsert?: HotelUpsertWithoutFolioInput
    connect?: HotelWhereUniqueInput
    update?: XOR<XOR<HotelUpdateToOneWithWhereWithoutFolioInput, HotelUpdateWithoutFolioInput>, HotelUncheckedUpdateWithoutFolioInput>
  }

  export type TenantCreateNestedOneWithoutPOSOutletInput = {
    create?: XOR<TenantCreateWithoutPOSOutletInput, TenantUncheckedCreateWithoutPOSOutletInput>
    connectOrCreate?: TenantCreateOrConnectWithoutPOSOutletInput
    connect?: TenantWhereUniqueInput
  }

  export type HotelCreateNestedOneWithoutPOSOutletInput = {
    create?: XOR<HotelCreateWithoutPOSOutletInput, HotelUncheckedCreateWithoutPOSOutletInput>
    connectOrCreate?: HotelCreateOrConnectWithoutPOSOutletInput
    connect?: HotelWhereUniqueInput
  }

  export type TenantUpdateOneRequiredWithoutPOSOutletNestedInput = {
    create?: XOR<TenantCreateWithoutPOSOutletInput, TenantUncheckedCreateWithoutPOSOutletInput>
    connectOrCreate?: TenantCreateOrConnectWithoutPOSOutletInput
    upsert?: TenantUpsertWithoutPOSOutletInput
    connect?: TenantWhereUniqueInput
    update?: XOR<XOR<TenantUpdateToOneWithWhereWithoutPOSOutletInput, TenantUpdateWithoutPOSOutletInput>, TenantUncheckedUpdateWithoutPOSOutletInput>
  }

  export type HotelUpdateOneRequiredWithoutPOSOutletNestedInput = {
    create?: XOR<HotelCreateWithoutPOSOutletInput, HotelUncheckedCreateWithoutPOSOutletInput>
    connectOrCreate?: HotelCreateOrConnectWithoutPOSOutletInput
    upsert?: HotelUpsertWithoutPOSOutletInput
    connect?: HotelWhereUniqueInput
    update?: XOR<XOR<HotelUpdateToOneWithWhereWithoutPOSOutletInput, HotelUpdateWithoutPOSOutletInput>, HotelUncheckedUpdateWithoutPOSOutletInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedEnumRoomStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.RoomStatus | EnumRoomStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RoomStatus[] | ListEnumRoomStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RoomStatus[] | ListEnumRoomStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRoomStatusFilter<$PrismaModel> | $Enums.RoomStatus
  }

  export type NestedEnumRoomStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RoomStatus | EnumRoomStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RoomStatus[] | ListEnumRoomStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RoomStatus[] | ListEnumRoomStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRoomStatusWithAggregatesFilter<$PrismaModel> | $Enums.RoomStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoomStatusFilter<$PrismaModel>
    _max?: NestedEnumRoomStatusFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedEnumAdjTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.AdjType | EnumAdjTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AdjType[] | ListEnumAdjTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AdjType[] | ListEnumAdjTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAdjTypeFilter<$PrismaModel> | $Enums.AdjType
  }

  export type NestedEnumAdjTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AdjType | EnumAdjTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AdjType[] | ListEnumAdjTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AdjType[] | ListEnumAdjTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAdjTypeWithAggregatesFilter<$PrismaModel> | $Enums.AdjType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAdjTypeFilter<$PrismaModel>
    _max?: NestedEnumAdjTypeFilter<$PrismaModel>
  }

  export type NestedEnumReservationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ReservationStatus | EnumReservationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ReservationStatus[] | ListEnumReservationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ReservationStatus[] | ListEnumReservationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumReservationStatusFilter<$PrismaModel> | $Enums.ReservationStatus
  }

  export type NestedEnumReservationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ReservationStatus | EnumReservationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ReservationStatus[] | ListEnumReservationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ReservationStatus[] | ListEnumReservationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumReservationStatusWithAggregatesFilter<$PrismaModel> | $Enums.ReservationStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumReservationStatusFilter<$PrismaModel>
    _max?: NestedEnumReservationStatusFilter<$PrismaModel>
  }

  export type NestedEnumFolioStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.FolioStatus | EnumFolioStatusFieldRefInput<$PrismaModel>
    in?: $Enums.FolioStatus[] | ListEnumFolioStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.FolioStatus[] | ListEnumFolioStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumFolioStatusFilter<$PrismaModel> | $Enums.FolioStatus
  }

  export type NestedEnumFolioStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FolioStatus | EnumFolioStatusFieldRefInput<$PrismaModel>
    in?: $Enums.FolioStatus[] | ListEnumFolioStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.FolioStatus[] | ListEnumFolioStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumFolioStatusWithAggregatesFilter<$PrismaModel> | $Enums.FolioStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumFolioStatusFilter<$PrismaModel>
    _max?: NestedEnumFolioStatusFilter<$PrismaModel>
  }

  export type HotelCreateWithoutTenantInput = {
    id?: string
    name: string
    country: string
    city: string
    address: string
    Guest?: GuestCreateNestedManyWithoutHotelInput
    RoomType?: RoomTypeCreateNestedManyWithoutHotelInput
    Room?: RoomCreateNestedManyWithoutHotelInput
    Role?: RoleCreateNestedManyWithoutHotelInput
    User?: UserCreateNestedManyWithoutHotelInput
    Reservation?: ReservationCreateNestedManyWithoutHotelInput
    Folio?: FolioCreateNestedManyWithoutHotelInput
    POSOutlet?: POSOutletCreateNestedManyWithoutHotelInput
    RatePlan?: RatePlanCreateNestedManyWithoutHotelInput
  }

  export type HotelUncheckedCreateWithoutTenantInput = {
    id?: string
    name: string
    country: string
    city: string
    address: string
    Guest?: GuestUncheckedCreateNestedManyWithoutHotelInput
    RoomType?: RoomTypeUncheckedCreateNestedManyWithoutHotelInput
    Room?: RoomUncheckedCreateNestedManyWithoutHotelInput
    Role?: RoleUncheckedCreateNestedManyWithoutHotelInput
    User?: UserUncheckedCreateNestedManyWithoutHotelInput
    Reservation?: ReservationUncheckedCreateNestedManyWithoutHotelInput
    Folio?: FolioUncheckedCreateNestedManyWithoutHotelInput
    POSOutlet?: POSOutletUncheckedCreateNestedManyWithoutHotelInput
    RatePlan?: RatePlanUncheckedCreateNestedManyWithoutHotelInput
  }

  export type HotelCreateOrConnectWithoutTenantInput = {
    where: HotelWhereUniqueInput
    create: XOR<HotelCreateWithoutTenantInput, HotelUncheckedCreateWithoutTenantInput>
  }

  export type HotelCreateManyTenantInputEnvelope = {
    data: HotelCreateManyTenantInput | HotelCreateManyTenantInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutTenantInput = {
    id?: string
    email: string
    passwordHash: string
    firstName: string
    lastName: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    hotel: HotelCreateNestedOneWithoutUserInput
    role: RoleCreateNestedOneWithoutUsersInput
  }

  export type UserUncheckedCreateWithoutTenantInput = {
    id?: string
    email: string
    passwordHash: string
    firstName: string
    lastName: string
    isActive?: boolean
    hotelId: string
    roleId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCreateOrConnectWithoutTenantInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTenantInput, UserUncheckedCreateWithoutTenantInput>
  }

  export type UserCreateManyTenantInputEnvelope = {
    data: UserCreateManyTenantInput | UserCreateManyTenantInput[]
    skipDuplicates?: boolean
  }

  export type RoleCreateWithoutTenantInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    hotel: HotelCreateNestedOneWithoutRoleInput
    Users?: UserCreateNestedManyWithoutRoleInput
    permissions?: PermissionCreateNestedManyWithoutRolesInput
  }

  export type RoleUncheckedCreateWithoutTenantInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    hotelId: string
    Users?: UserUncheckedCreateNestedManyWithoutRoleInput
    permissions?: PermissionUncheckedCreateNestedManyWithoutRolesInput
  }

  export type RoleCreateOrConnectWithoutTenantInput = {
    where: RoleWhereUniqueInput
    create: XOR<RoleCreateWithoutTenantInput, RoleUncheckedCreateWithoutTenantInput>
  }

  export type RoleCreateManyTenantInputEnvelope = {
    data: RoleCreateManyTenantInput | RoleCreateManyTenantInput[]
    skipDuplicates?: boolean
  }

  export type RoomTypeCreateWithoutTenantInput = {
    id?: string
    name: string
    description?: string | null
    baseRate?: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    hotel: HotelCreateNestedOneWithoutRoomTypeInput
    Room?: RoomCreateNestedManyWithoutRoomTypeInput
  }

  export type RoomTypeUncheckedCreateWithoutTenantInput = {
    id?: string
    name: string
    description?: string | null
    baseRate?: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    hotelId: string
    Room?: RoomUncheckedCreateNestedManyWithoutRoomTypeInput
  }

  export type RoomTypeCreateOrConnectWithoutTenantInput = {
    where: RoomTypeWhereUniqueInput
    create: XOR<RoomTypeCreateWithoutTenantInput, RoomTypeUncheckedCreateWithoutTenantInput>
  }

  export type RoomTypeCreateManyTenantInputEnvelope = {
    data: RoomTypeCreateManyTenantInput | RoomTypeCreateManyTenantInput[]
    skipDuplicates?: boolean
  }

  export type RoomCreateWithoutTenantInput = {
    id?: string
    roomNumber: string
    status?: $Enums.RoomStatus
    roomType: RoomTypeCreateNestedOneWithoutRoomInput
    hotel: HotelCreateNestedOneWithoutRoomInput
    Reservation?: ReservationCreateNestedManyWithoutRoomInput
  }

  export type RoomUncheckedCreateWithoutTenantInput = {
    id?: string
    roomNumber: string
    status?: $Enums.RoomStatus
    roomTypeId: string
    hotelId: string
    Reservation?: ReservationUncheckedCreateNestedManyWithoutRoomInput
  }

  export type RoomCreateOrConnectWithoutTenantInput = {
    where: RoomWhereUniqueInput
    create: XOR<RoomCreateWithoutTenantInput, RoomUncheckedCreateWithoutTenantInput>
  }

  export type RoomCreateManyTenantInputEnvelope = {
    data: RoomCreateManyTenantInput | RoomCreateManyTenantInput[]
    skipDuplicates?: boolean
  }

  export type GuestCreateWithoutTenantInput = {
    id?: string
    firstName: string
    lastName: string
    email?: string | null
    phoneNumber?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    hotel: HotelCreateNestedOneWithoutGuestInput
    Reservation?: ReservationCreateNestedManyWithoutGuestInput
    Folio?: FolioCreateNestedManyWithoutGuestInput
  }

  export type GuestUncheckedCreateWithoutTenantInput = {
    id?: string
    firstName: string
    lastName: string
    email?: string | null
    phoneNumber?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    hotelId: string
    Reservation?: ReservationUncheckedCreateNestedManyWithoutGuestInput
    Folio?: FolioUncheckedCreateNestedManyWithoutGuestInput
  }

  export type GuestCreateOrConnectWithoutTenantInput = {
    where: GuestWhereUniqueInput
    create: XOR<GuestCreateWithoutTenantInput, GuestUncheckedCreateWithoutTenantInput>
  }

  export type GuestCreateManyTenantInputEnvelope = {
    data: GuestCreateManyTenantInput | GuestCreateManyTenantInput[]
    skipDuplicates?: boolean
  }

  export type ReservationCreateWithoutTenantInput = {
    id?: string
    checkIn: Date | string
    checkOut: Date | string
    status?: $Enums.ReservationStatus
    guest: GuestCreateNestedOneWithoutReservationInput
    room: RoomCreateNestedOneWithoutReservationInput
    hotel: HotelCreateNestedOneWithoutReservationInput
  }

  export type ReservationUncheckedCreateWithoutTenantInput = {
    id?: string
    checkIn: Date | string
    checkOut: Date | string
    status?: $Enums.ReservationStatus
    guestId: string
    roomId: string
    hotelId: string
  }

  export type ReservationCreateOrConnectWithoutTenantInput = {
    where: ReservationWhereUniqueInput
    create: XOR<ReservationCreateWithoutTenantInput, ReservationUncheckedCreateWithoutTenantInput>
  }

  export type ReservationCreateManyTenantInputEnvelope = {
    data: ReservationCreateManyTenantInput | ReservationCreateManyTenantInput[]
    skipDuplicates?: boolean
  }

  export type FolioCreateWithoutTenantInput = {
    id?: string
    balance?: Decimal | DecimalJsLike | number | string
    status?: $Enums.FolioStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    guest: GuestCreateNestedOneWithoutFolioInput
    hotel: HotelCreateNestedOneWithoutFolioInput
  }

  export type FolioUncheckedCreateWithoutTenantInput = {
    id?: string
    guestId: string
    balance?: Decimal | DecimalJsLike | number | string
    status?: $Enums.FolioStatus
    hotelId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FolioCreateOrConnectWithoutTenantInput = {
    where: FolioWhereUniqueInput
    create: XOR<FolioCreateWithoutTenantInput, FolioUncheckedCreateWithoutTenantInput>
  }

  export type FolioCreateManyTenantInputEnvelope = {
    data: FolioCreateManyTenantInput | FolioCreateManyTenantInput[]
    skipDuplicates?: boolean
  }

  export type POSOutletCreateWithoutTenantInput = {
    id?: string
    name: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    hotel: HotelCreateNestedOneWithoutPOSOutletInput
  }

  export type POSOutletUncheckedCreateWithoutTenantInput = {
    id?: string
    name: string
    hotelId: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type POSOutletCreateOrConnectWithoutTenantInput = {
    where: POSOutletWhereUniqueInput
    create: XOR<POSOutletCreateWithoutTenantInput, POSOutletUncheckedCreateWithoutTenantInput>
  }

  export type POSOutletCreateManyTenantInputEnvelope = {
    data: POSOutletCreateManyTenantInput | POSOutletCreateManyTenantInput[]
    skipDuplicates?: boolean
  }

  export type RatePlanCreateWithoutTenantInput = {
    id?: string
    code: string
    name: string
    baseAdjType: $Enums.AdjType
    baseAdjVal: Decimal | DecimalJsLike | number | string
    currency: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    Hotel: HotelCreateNestedOneWithoutRatePlanInput
  }

  export type RatePlanUncheckedCreateWithoutTenantInput = {
    id?: string
    hotelId: string
    code: string
    name: string
    baseAdjType: $Enums.AdjType
    baseAdjVal: Decimal | DecimalJsLike | number | string
    currency: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RatePlanCreateOrConnectWithoutTenantInput = {
    where: RatePlanWhereUniqueInput
    create: XOR<RatePlanCreateWithoutTenantInput, RatePlanUncheckedCreateWithoutTenantInput>
  }

  export type RatePlanCreateManyTenantInputEnvelope = {
    data: RatePlanCreateManyTenantInput | RatePlanCreateManyTenantInput[]
    skipDuplicates?: boolean
  }

  export type HotelUpsertWithWhereUniqueWithoutTenantInput = {
    where: HotelWhereUniqueInput
    update: XOR<HotelUpdateWithoutTenantInput, HotelUncheckedUpdateWithoutTenantInput>
    create: XOR<HotelCreateWithoutTenantInput, HotelUncheckedCreateWithoutTenantInput>
  }

  export type HotelUpdateWithWhereUniqueWithoutTenantInput = {
    where: HotelWhereUniqueInput
    data: XOR<HotelUpdateWithoutTenantInput, HotelUncheckedUpdateWithoutTenantInput>
  }

  export type HotelUpdateManyWithWhereWithoutTenantInput = {
    where: HotelScalarWhereInput
    data: XOR<HotelUpdateManyMutationInput, HotelUncheckedUpdateManyWithoutTenantInput>
  }

  export type HotelScalarWhereInput = {
    AND?: HotelScalarWhereInput | HotelScalarWhereInput[]
    OR?: HotelScalarWhereInput[]
    NOT?: HotelScalarWhereInput | HotelScalarWhereInput[]
    id?: StringFilter<"Hotel"> | string
    name?: StringFilter<"Hotel"> | string
    country?: StringFilter<"Hotel"> | string
    city?: StringFilter<"Hotel"> | string
    address?: StringFilter<"Hotel"> | string
    tenantId?: StringFilter<"Hotel"> | string
  }

  export type UserUpsertWithWhereUniqueWithoutTenantInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutTenantInput, UserUncheckedUpdateWithoutTenantInput>
    create: XOR<UserCreateWithoutTenantInput, UserUncheckedCreateWithoutTenantInput>
  }

  export type UserUpdateWithWhereUniqueWithoutTenantInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutTenantInput, UserUncheckedUpdateWithoutTenantInput>
  }

  export type UserUpdateManyWithWhereWithoutTenantInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutTenantInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    passwordHash?: StringFilter<"User"> | string
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    tenantId?: StringFilter<"User"> | string
    isActive?: BoolFilter<"User"> | boolean
    hotelId?: StringFilter<"User"> | string
    roleId?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }

  export type RoleUpsertWithWhereUniqueWithoutTenantInput = {
    where: RoleWhereUniqueInput
    update: XOR<RoleUpdateWithoutTenantInput, RoleUncheckedUpdateWithoutTenantInput>
    create: XOR<RoleCreateWithoutTenantInput, RoleUncheckedCreateWithoutTenantInput>
  }

  export type RoleUpdateWithWhereUniqueWithoutTenantInput = {
    where: RoleWhereUniqueInput
    data: XOR<RoleUpdateWithoutTenantInput, RoleUncheckedUpdateWithoutTenantInput>
  }

  export type RoleUpdateManyWithWhereWithoutTenantInput = {
    where: RoleScalarWhereInput
    data: XOR<RoleUpdateManyMutationInput, RoleUncheckedUpdateManyWithoutTenantInput>
  }

  export type RoleScalarWhereInput = {
    AND?: RoleScalarWhereInput | RoleScalarWhereInput[]
    OR?: RoleScalarWhereInput[]
    NOT?: RoleScalarWhereInput | RoleScalarWhereInput[]
    id?: StringFilter<"Role"> | string
    name?: StringFilter<"Role"> | string
    createdAt?: DateTimeFilter<"Role"> | Date | string
    updatedAt?: DateTimeFilter<"Role"> | Date | string
    tenantId?: StringFilter<"Role"> | string
    hotelId?: StringFilter<"Role"> | string
  }

  export type RoomTypeUpsertWithWhereUniqueWithoutTenantInput = {
    where: RoomTypeWhereUniqueInput
    update: XOR<RoomTypeUpdateWithoutTenantInput, RoomTypeUncheckedUpdateWithoutTenantInput>
    create: XOR<RoomTypeCreateWithoutTenantInput, RoomTypeUncheckedCreateWithoutTenantInput>
  }

  export type RoomTypeUpdateWithWhereUniqueWithoutTenantInput = {
    where: RoomTypeWhereUniqueInput
    data: XOR<RoomTypeUpdateWithoutTenantInput, RoomTypeUncheckedUpdateWithoutTenantInput>
  }

  export type RoomTypeUpdateManyWithWhereWithoutTenantInput = {
    where: RoomTypeScalarWhereInput
    data: XOR<RoomTypeUpdateManyMutationInput, RoomTypeUncheckedUpdateManyWithoutTenantInput>
  }

  export type RoomTypeScalarWhereInput = {
    AND?: RoomTypeScalarWhereInput | RoomTypeScalarWhereInput[]
    OR?: RoomTypeScalarWhereInput[]
    NOT?: RoomTypeScalarWhereInput | RoomTypeScalarWhereInput[]
    id?: StringFilter<"RoomType"> | string
    name?: StringFilter<"RoomType"> | string
    description?: StringNullableFilter<"RoomType"> | string | null
    baseRate?: DecimalFilter<"RoomType"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"RoomType"> | Date | string
    updatedAt?: DateTimeFilter<"RoomType"> | Date | string
    tenantId?: StringFilter<"RoomType"> | string
    hotelId?: StringFilter<"RoomType"> | string
  }

  export type RoomUpsertWithWhereUniqueWithoutTenantInput = {
    where: RoomWhereUniqueInput
    update: XOR<RoomUpdateWithoutTenantInput, RoomUncheckedUpdateWithoutTenantInput>
    create: XOR<RoomCreateWithoutTenantInput, RoomUncheckedCreateWithoutTenantInput>
  }

  export type RoomUpdateWithWhereUniqueWithoutTenantInput = {
    where: RoomWhereUniqueInput
    data: XOR<RoomUpdateWithoutTenantInput, RoomUncheckedUpdateWithoutTenantInput>
  }

  export type RoomUpdateManyWithWhereWithoutTenantInput = {
    where: RoomScalarWhereInput
    data: XOR<RoomUpdateManyMutationInput, RoomUncheckedUpdateManyWithoutTenantInput>
  }

  export type RoomScalarWhereInput = {
    AND?: RoomScalarWhereInput | RoomScalarWhereInput[]
    OR?: RoomScalarWhereInput[]
    NOT?: RoomScalarWhereInput | RoomScalarWhereInput[]
    id?: StringFilter<"Room"> | string
    roomNumber?: StringFilter<"Room"> | string
    status?: EnumRoomStatusFilter<"Room"> | $Enums.RoomStatus
    roomTypeId?: StringFilter<"Room"> | string
    tenantId?: StringFilter<"Room"> | string
    hotelId?: StringFilter<"Room"> | string
  }

  export type GuestUpsertWithWhereUniqueWithoutTenantInput = {
    where: GuestWhereUniqueInput
    update: XOR<GuestUpdateWithoutTenantInput, GuestUncheckedUpdateWithoutTenantInput>
    create: XOR<GuestCreateWithoutTenantInput, GuestUncheckedCreateWithoutTenantInput>
  }

  export type GuestUpdateWithWhereUniqueWithoutTenantInput = {
    where: GuestWhereUniqueInput
    data: XOR<GuestUpdateWithoutTenantInput, GuestUncheckedUpdateWithoutTenantInput>
  }

  export type GuestUpdateManyWithWhereWithoutTenantInput = {
    where: GuestScalarWhereInput
    data: XOR<GuestUpdateManyMutationInput, GuestUncheckedUpdateManyWithoutTenantInput>
  }

  export type GuestScalarWhereInput = {
    AND?: GuestScalarWhereInput | GuestScalarWhereInput[]
    OR?: GuestScalarWhereInput[]
    NOT?: GuestScalarWhereInput | GuestScalarWhereInput[]
    id?: StringFilter<"Guest"> | string
    firstName?: StringFilter<"Guest"> | string
    lastName?: StringFilter<"Guest"> | string
    email?: StringNullableFilter<"Guest"> | string | null
    phoneNumber?: StringNullableFilter<"Guest"> | string | null
    createdAt?: DateTimeFilter<"Guest"> | Date | string
    updatedAt?: DateTimeFilter<"Guest"> | Date | string
    tenantId?: StringFilter<"Guest"> | string
    hotelId?: StringFilter<"Guest"> | string
  }

  export type ReservationUpsertWithWhereUniqueWithoutTenantInput = {
    where: ReservationWhereUniqueInput
    update: XOR<ReservationUpdateWithoutTenantInput, ReservationUncheckedUpdateWithoutTenantInput>
    create: XOR<ReservationCreateWithoutTenantInput, ReservationUncheckedCreateWithoutTenantInput>
  }

  export type ReservationUpdateWithWhereUniqueWithoutTenantInput = {
    where: ReservationWhereUniqueInput
    data: XOR<ReservationUpdateWithoutTenantInput, ReservationUncheckedUpdateWithoutTenantInput>
  }

  export type ReservationUpdateManyWithWhereWithoutTenantInput = {
    where: ReservationScalarWhereInput
    data: XOR<ReservationUpdateManyMutationInput, ReservationUncheckedUpdateManyWithoutTenantInput>
  }

  export type ReservationScalarWhereInput = {
    AND?: ReservationScalarWhereInput | ReservationScalarWhereInput[]
    OR?: ReservationScalarWhereInput[]
    NOT?: ReservationScalarWhereInput | ReservationScalarWhereInput[]
    id?: StringFilter<"Reservation"> | string
    checkIn?: DateTimeFilter<"Reservation"> | Date | string
    checkOut?: DateTimeFilter<"Reservation"> | Date | string
    status?: EnumReservationStatusFilter<"Reservation"> | $Enums.ReservationStatus
    guestId?: StringFilter<"Reservation"> | string
    roomId?: StringFilter<"Reservation"> | string
    tenantId?: StringFilter<"Reservation"> | string
    hotelId?: StringFilter<"Reservation"> | string
  }

  export type FolioUpsertWithWhereUniqueWithoutTenantInput = {
    where: FolioWhereUniqueInput
    update: XOR<FolioUpdateWithoutTenantInput, FolioUncheckedUpdateWithoutTenantInput>
    create: XOR<FolioCreateWithoutTenantInput, FolioUncheckedCreateWithoutTenantInput>
  }

  export type FolioUpdateWithWhereUniqueWithoutTenantInput = {
    where: FolioWhereUniqueInput
    data: XOR<FolioUpdateWithoutTenantInput, FolioUncheckedUpdateWithoutTenantInput>
  }

  export type FolioUpdateManyWithWhereWithoutTenantInput = {
    where: FolioScalarWhereInput
    data: XOR<FolioUpdateManyMutationInput, FolioUncheckedUpdateManyWithoutTenantInput>
  }

  export type FolioScalarWhereInput = {
    AND?: FolioScalarWhereInput | FolioScalarWhereInput[]
    OR?: FolioScalarWhereInput[]
    NOT?: FolioScalarWhereInput | FolioScalarWhereInput[]
    id?: StringFilter<"Folio"> | string
    guestId?: StringFilter<"Folio"> | string
    balance?: DecimalFilter<"Folio"> | Decimal | DecimalJsLike | number | string
    status?: EnumFolioStatusFilter<"Folio"> | $Enums.FolioStatus
    tenantId?: StringFilter<"Folio"> | string
    hotelId?: StringFilter<"Folio"> | string
    createdAt?: DateTimeFilter<"Folio"> | Date | string
    updatedAt?: DateTimeFilter<"Folio"> | Date | string
  }

  export type POSOutletUpsertWithWhereUniqueWithoutTenantInput = {
    where: POSOutletWhereUniqueInput
    update: XOR<POSOutletUpdateWithoutTenantInput, POSOutletUncheckedUpdateWithoutTenantInput>
    create: XOR<POSOutletCreateWithoutTenantInput, POSOutletUncheckedCreateWithoutTenantInput>
  }

  export type POSOutletUpdateWithWhereUniqueWithoutTenantInput = {
    where: POSOutletWhereUniqueInput
    data: XOR<POSOutletUpdateWithoutTenantInput, POSOutletUncheckedUpdateWithoutTenantInput>
  }

  export type POSOutletUpdateManyWithWhereWithoutTenantInput = {
    where: POSOutletScalarWhereInput
    data: XOR<POSOutletUpdateManyMutationInput, POSOutletUncheckedUpdateManyWithoutTenantInput>
  }

  export type POSOutletScalarWhereInput = {
    AND?: POSOutletScalarWhereInput | POSOutletScalarWhereInput[]
    OR?: POSOutletScalarWhereInput[]
    NOT?: POSOutletScalarWhereInput | POSOutletScalarWhereInput[]
    id?: StringFilter<"POSOutlet"> | string
    name?: StringFilter<"POSOutlet"> | string
    tenantId?: StringFilter<"POSOutlet"> | string
    hotelId?: StringFilter<"POSOutlet"> | string
    isActive?: BoolFilter<"POSOutlet"> | boolean
    createdAt?: DateTimeFilter<"POSOutlet"> | Date | string
    updatedAt?: DateTimeFilter<"POSOutlet"> | Date | string
  }

  export type RatePlanUpsertWithWhereUniqueWithoutTenantInput = {
    where: RatePlanWhereUniqueInput
    update: XOR<RatePlanUpdateWithoutTenantInput, RatePlanUncheckedUpdateWithoutTenantInput>
    create: XOR<RatePlanCreateWithoutTenantInput, RatePlanUncheckedCreateWithoutTenantInput>
  }

  export type RatePlanUpdateWithWhereUniqueWithoutTenantInput = {
    where: RatePlanWhereUniqueInput
    data: XOR<RatePlanUpdateWithoutTenantInput, RatePlanUncheckedUpdateWithoutTenantInput>
  }

  export type RatePlanUpdateManyWithWhereWithoutTenantInput = {
    where: RatePlanScalarWhereInput
    data: XOR<RatePlanUpdateManyMutationInput, RatePlanUncheckedUpdateManyWithoutTenantInput>
  }

  export type RatePlanScalarWhereInput = {
    AND?: RatePlanScalarWhereInput | RatePlanScalarWhereInput[]
    OR?: RatePlanScalarWhereInput[]
    NOT?: RatePlanScalarWhereInput | RatePlanScalarWhereInput[]
    id?: StringFilter<"RatePlan"> | string
    tenantId?: StringFilter<"RatePlan"> | string
    hotelId?: StringFilter<"RatePlan"> | string
    code?: StringFilter<"RatePlan"> | string
    name?: StringFilter<"RatePlan"> | string
    baseAdjType?: EnumAdjTypeFilter<"RatePlan"> | $Enums.AdjType
    baseAdjVal?: DecimalFilter<"RatePlan"> | Decimal | DecimalJsLike | number | string
    currency?: StringFilter<"RatePlan"> | string
    isActive?: BoolFilter<"RatePlan"> | boolean
    createdAt?: DateTimeFilter<"RatePlan"> | Date | string
    updatedAt?: DateTimeFilter<"RatePlan"> | Date | string
  }

  export type TenantCreateWithoutHotelsInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Users?: UserCreateNestedManyWithoutTenantInput
    Role?: RoleCreateNestedManyWithoutTenantInput
    RoomType?: RoomTypeCreateNestedManyWithoutTenantInput
    Room?: RoomCreateNestedManyWithoutTenantInput
    Guest?: GuestCreateNestedManyWithoutTenantInput
    Reservation?: ReservationCreateNestedManyWithoutTenantInput
    Folio?: FolioCreateNestedManyWithoutTenantInput
    POSOutlet?: POSOutletCreateNestedManyWithoutTenantInput
    RatePlan?: RatePlanCreateNestedManyWithoutTenantInput
  }

  export type TenantUncheckedCreateWithoutHotelsInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Users?: UserUncheckedCreateNestedManyWithoutTenantInput
    Role?: RoleUncheckedCreateNestedManyWithoutTenantInput
    RoomType?: RoomTypeUncheckedCreateNestedManyWithoutTenantInput
    Room?: RoomUncheckedCreateNestedManyWithoutTenantInput
    Guest?: GuestUncheckedCreateNestedManyWithoutTenantInput
    Reservation?: ReservationUncheckedCreateNestedManyWithoutTenantInput
    Folio?: FolioUncheckedCreateNestedManyWithoutTenantInput
    POSOutlet?: POSOutletUncheckedCreateNestedManyWithoutTenantInput
    RatePlan?: RatePlanUncheckedCreateNestedManyWithoutTenantInput
  }

  export type TenantCreateOrConnectWithoutHotelsInput = {
    where: TenantWhereUniqueInput
    create: XOR<TenantCreateWithoutHotelsInput, TenantUncheckedCreateWithoutHotelsInput>
  }

  export type GuestCreateWithoutHotelInput = {
    id?: string
    firstName: string
    lastName: string
    email?: string | null
    phoneNumber?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tenant: TenantCreateNestedOneWithoutGuestInput
    Reservation?: ReservationCreateNestedManyWithoutGuestInput
    Folio?: FolioCreateNestedManyWithoutGuestInput
  }

  export type GuestUncheckedCreateWithoutHotelInput = {
    id?: string
    firstName: string
    lastName: string
    email?: string | null
    phoneNumber?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tenantId: string
    Reservation?: ReservationUncheckedCreateNestedManyWithoutGuestInput
    Folio?: FolioUncheckedCreateNestedManyWithoutGuestInput
  }

  export type GuestCreateOrConnectWithoutHotelInput = {
    where: GuestWhereUniqueInput
    create: XOR<GuestCreateWithoutHotelInput, GuestUncheckedCreateWithoutHotelInput>
  }

  export type GuestCreateManyHotelInputEnvelope = {
    data: GuestCreateManyHotelInput | GuestCreateManyHotelInput[]
    skipDuplicates?: boolean
  }

  export type RoomTypeCreateWithoutHotelInput = {
    id?: string
    name: string
    description?: string | null
    baseRate?: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    tenant: TenantCreateNestedOneWithoutRoomTypeInput
    Room?: RoomCreateNestedManyWithoutRoomTypeInput
  }

  export type RoomTypeUncheckedCreateWithoutHotelInput = {
    id?: string
    name: string
    description?: string | null
    baseRate?: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    tenantId: string
    Room?: RoomUncheckedCreateNestedManyWithoutRoomTypeInput
  }

  export type RoomTypeCreateOrConnectWithoutHotelInput = {
    where: RoomTypeWhereUniqueInput
    create: XOR<RoomTypeCreateWithoutHotelInput, RoomTypeUncheckedCreateWithoutHotelInput>
  }

  export type RoomTypeCreateManyHotelInputEnvelope = {
    data: RoomTypeCreateManyHotelInput | RoomTypeCreateManyHotelInput[]
    skipDuplicates?: boolean
  }

  export type RoomCreateWithoutHotelInput = {
    id?: string
    roomNumber: string
    status?: $Enums.RoomStatus
    roomType: RoomTypeCreateNestedOneWithoutRoomInput
    tenant: TenantCreateNestedOneWithoutRoomInput
    Reservation?: ReservationCreateNestedManyWithoutRoomInput
  }

  export type RoomUncheckedCreateWithoutHotelInput = {
    id?: string
    roomNumber: string
    status?: $Enums.RoomStatus
    roomTypeId: string
    tenantId: string
    Reservation?: ReservationUncheckedCreateNestedManyWithoutRoomInput
  }

  export type RoomCreateOrConnectWithoutHotelInput = {
    where: RoomWhereUniqueInput
    create: XOR<RoomCreateWithoutHotelInput, RoomUncheckedCreateWithoutHotelInput>
  }

  export type RoomCreateManyHotelInputEnvelope = {
    data: RoomCreateManyHotelInput | RoomCreateManyHotelInput[]
    skipDuplicates?: boolean
  }

  export type RoleCreateWithoutHotelInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    tenant: TenantCreateNestedOneWithoutRoleInput
    Users?: UserCreateNestedManyWithoutRoleInput
    permissions?: PermissionCreateNestedManyWithoutRolesInput
  }

  export type RoleUncheckedCreateWithoutHotelInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    tenantId: string
    Users?: UserUncheckedCreateNestedManyWithoutRoleInput
    permissions?: PermissionUncheckedCreateNestedManyWithoutRolesInput
  }

  export type RoleCreateOrConnectWithoutHotelInput = {
    where: RoleWhereUniqueInput
    create: XOR<RoleCreateWithoutHotelInput, RoleUncheckedCreateWithoutHotelInput>
  }

  export type RoleCreateManyHotelInputEnvelope = {
    data: RoleCreateManyHotelInput | RoleCreateManyHotelInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutHotelInput = {
    id?: string
    email: string
    passwordHash: string
    firstName: string
    lastName: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    tenant: TenantCreateNestedOneWithoutUsersInput
    role: RoleCreateNestedOneWithoutUsersInput
  }

  export type UserUncheckedCreateWithoutHotelInput = {
    id?: string
    email: string
    passwordHash: string
    firstName: string
    lastName: string
    tenantId: string
    isActive?: boolean
    roleId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCreateOrConnectWithoutHotelInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutHotelInput, UserUncheckedCreateWithoutHotelInput>
  }

  export type UserCreateManyHotelInputEnvelope = {
    data: UserCreateManyHotelInput | UserCreateManyHotelInput[]
    skipDuplicates?: boolean
  }

  export type ReservationCreateWithoutHotelInput = {
    id?: string
    checkIn: Date | string
    checkOut: Date | string
    status?: $Enums.ReservationStatus
    guest: GuestCreateNestedOneWithoutReservationInput
    room: RoomCreateNestedOneWithoutReservationInput
    tenant: TenantCreateNestedOneWithoutReservationInput
  }

  export type ReservationUncheckedCreateWithoutHotelInput = {
    id?: string
    checkIn: Date | string
    checkOut: Date | string
    status?: $Enums.ReservationStatus
    guestId: string
    roomId: string
    tenantId: string
  }

  export type ReservationCreateOrConnectWithoutHotelInput = {
    where: ReservationWhereUniqueInput
    create: XOR<ReservationCreateWithoutHotelInput, ReservationUncheckedCreateWithoutHotelInput>
  }

  export type ReservationCreateManyHotelInputEnvelope = {
    data: ReservationCreateManyHotelInput | ReservationCreateManyHotelInput[]
    skipDuplicates?: boolean
  }

  export type FolioCreateWithoutHotelInput = {
    id?: string
    balance?: Decimal | DecimalJsLike | number | string
    status?: $Enums.FolioStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    guest: GuestCreateNestedOneWithoutFolioInput
    tenant: TenantCreateNestedOneWithoutFolioInput
  }

  export type FolioUncheckedCreateWithoutHotelInput = {
    id?: string
    guestId: string
    balance?: Decimal | DecimalJsLike | number | string
    status?: $Enums.FolioStatus
    tenantId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FolioCreateOrConnectWithoutHotelInput = {
    where: FolioWhereUniqueInput
    create: XOR<FolioCreateWithoutHotelInput, FolioUncheckedCreateWithoutHotelInput>
  }

  export type FolioCreateManyHotelInputEnvelope = {
    data: FolioCreateManyHotelInput | FolioCreateManyHotelInput[]
    skipDuplicates?: boolean
  }

  export type POSOutletCreateWithoutHotelInput = {
    id?: string
    name: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    tenant: TenantCreateNestedOneWithoutPOSOutletInput
  }

  export type POSOutletUncheckedCreateWithoutHotelInput = {
    id?: string
    name: string
    tenantId: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type POSOutletCreateOrConnectWithoutHotelInput = {
    where: POSOutletWhereUniqueInput
    create: XOR<POSOutletCreateWithoutHotelInput, POSOutletUncheckedCreateWithoutHotelInput>
  }

  export type POSOutletCreateManyHotelInputEnvelope = {
    data: POSOutletCreateManyHotelInput | POSOutletCreateManyHotelInput[]
    skipDuplicates?: boolean
  }

  export type RatePlanCreateWithoutHotelInput = {
    id?: string
    code: string
    name: string
    baseAdjType: $Enums.AdjType
    baseAdjVal: Decimal | DecimalJsLike | number | string
    currency: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    Tenant: TenantCreateNestedOneWithoutRatePlanInput
  }

  export type RatePlanUncheckedCreateWithoutHotelInput = {
    id?: string
    tenantId: string
    code: string
    name: string
    baseAdjType: $Enums.AdjType
    baseAdjVal: Decimal | DecimalJsLike | number | string
    currency: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RatePlanCreateOrConnectWithoutHotelInput = {
    where: RatePlanWhereUniqueInput
    create: XOR<RatePlanCreateWithoutHotelInput, RatePlanUncheckedCreateWithoutHotelInput>
  }

  export type RatePlanCreateManyHotelInputEnvelope = {
    data: RatePlanCreateManyHotelInput | RatePlanCreateManyHotelInput[]
    skipDuplicates?: boolean
  }

  export type TenantUpsertWithoutHotelsInput = {
    update: XOR<TenantUpdateWithoutHotelsInput, TenantUncheckedUpdateWithoutHotelsInput>
    create: XOR<TenantCreateWithoutHotelsInput, TenantUncheckedCreateWithoutHotelsInput>
    where?: TenantWhereInput
  }

  export type TenantUpdateToOneWithWhereWithoutHotelsInput = {
    where?: TenantWhereInput
    data: XOR<TenantUpdateWithoutHotelsInput, TenantUncheckedUpdateWithoutHotelsInput>
  }

  export type TenantUpdateWithoutHotelsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Users?: UserUpdateManyWithoutTenantNestedInput
    Role?: RoleUpdateManyWithoutTenantNestedInput
    RoomType?: RoomTypeUpdateManyWithoutTenantNestedInput
    Room?: RoomUpdateManyWithoutTenantNestedInput
    Guest?: GuestUpdateManyWithoutTenantNestedInput
    Reservation?: ReservationUpdateManyWithoutTenantNestedInput
    Folio?: FolioUpdateManyWithoutTenantNestedInput
    POSOutlet?: POSOutletUpdateManyWithoutTenantNestedInput
    RatePlan?: RatePlanUpdateManyWithoutTenantNestedInput
  }

  export type TenantUncheckedUpdateWithoutHotelsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Users?: UserUncheckedUpdateManyWithoutTenantNestedInput
    Role?: RoleUncheckedUpdateManyWithoutTenantNestedInput
    RoomType?: RoomTypeUncheckedUpdateManyWithoutTenantNestedInput
    Room?: RoomUncheckedUpdateManyWithoutTenantNestedInput
    Guest?: GuestUncheckedUpdateManyWithoutTenantNestedInput
    Reservation?: ReservationUncheckedUpdateManyWithoutTenantNestedInput
    Folio?: FolioUncheckedUpdateManyWithoutTenantNestedInput
    POSOutlet?: POSOutletUncheckedUpdateManyWithoutTenantNestedInput
    RatePlan?: RatePlanUncheckedUpdateManyWithoutTenantNestedInput
  }

  export type GuestUpsertWithWhereUniqueWithoutHotelInput = {
    where: GuestWhereUniqueInput
    update: XOR<GuestUpdateWithoutHotelInput, GuestUncheckedUpdateWithoutHotelInput>
    create: XOR<GuestCreateWithoutHotelInput, GuestUncheckedCreateWithoutHotelInput>
  }

  export type GuestUpdateWithWhereUniqueWithoutHotelInput = {
    where: GuestWhereUniqueInput
    data: XOR<GuestUpdateWithoutHotelInput, GuestUncheckedUpdateWithoutHotelInput>
  }

  export type GuestUpdateManyWithWhereWithoutHotelInput = {
    where: GuestScalarWhereInput
    data: XOR<GuestUpdateManyMutationInput, GuestUncheckedUpdateManyWithoutHotelInput>
  }

  export type RoomTypeUpsertWithWhereUniqueWithoutHotelInput = {
    where: RoomTypeWhereUniqueInput
    update: XOR<RoomTypeUpdateWithoutHotelInput, RoomTypeUncheckedUpdateWithoutHotelInput>
    create: XOR<RoomTypeCreateWithoutHotelInput, RoomTypeUncheckedCreateWithoutHotelInput>
  }

  export type RoomTypeUpdateWithWhereUniqueWithoutHotelInput = {
    where: RoomTypeWhereUniqueInput
    data: XOR<RoomTypeUpdateWithoutHotelInput, RoomTypeUncheckedUpdateWithoutHotelInput>
  }

  export type RoomTypeUpdateManyWithWhereWithoutHotelInput = {
    where: RoomTypeScalarWhereInput
    data: XOR<RoomTypeUpdateManyMutationInput, RoomTypeUncheckedUpdateManyWithoutHotelInput>
  }

  export type RoomUpsertWithWhereUniqueWithoutHotelInput = {
    where: RoomWhereUniqueInput
    update: XOR<RoomUpdateWithoutHotelInput, RoomUncheckedUpdateWithoutHotelInput>
    create: XOR<RoomCreateWithoutHotelInput, RoomUncheckedCreateWithoutHotelInput>
  }

  export type RoomUpdateWithWhereUniqueWithoutHotelInput = {
    where: RoomWhereUniqueInput
    data: XOR<RoomUpdateWithoutHotelInput, RoomUncheckedUpdateWithoutHotelInput>
  }

  export type RoomUpdateManyWithWhereWithoutHotelInput = {
    where: RoomScalarWhereInput
    data: XOR<RoomUpdateManyMutationInput, RoomUncheckedUpdateManyWithoutHotelInput>
  }

  export type RoleUpsertWithWhereUniqueWithoutHotelInput = {
    where: RoleWhereUniqueInput
    update: XOR<RoleUpdateWithoutHotelInput, RoleUncheckedUpdateWithoutHotelInput>
    create: XOR<RoleCreateWithoutHotelInput, RoleUncheckedCreateWithoutHotelInput>
  }

  export type RoleUpdateWithWhereUniqueWithoutHotelInput = {
    where: RoleWhereUniqueInput
    data: XOR<RoleUpdateWithoutHotelInput, RoleUncheckedUpdateWithoutHotelInput>
  }

  export type RoleUpdateManyWithWhereWithoutHotelInput = {
    where: RoleScalarWhereInput
    data: XOR<RoleUpdateManyMutationInput, RoleUncheckedUpdateManyWithoutHotelInput>
  }

  export type UserUpsertWithWhereUniqueWithoutHotelInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutHotelInput, UserUncheckedUpdateWithoutHotelInput>
    create: XOR<UserCreateWithoutHotelInput, UserUncheckedCreateWithoutHotelInput>
  }

  export type UserUpdateWithWhereUniqueWithoutHotelInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutHotelInput, UserUncheckedUpdateWithoutHotelInput>
  }

  export type UserUpdateManyWithWhereWithoutHotelInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutHotelInput>
  }

  export type ReservationUpsertWithWhereUniqueWithoutHotelInput = {
    where: ReservationWhereUniqueInput
    update: XOR<ReservationUpdateWithoutHotelInput, ReservationUncheckedUpdateWithoutHotelInput>
    create: XOR<ReservationCreateWithoutHotelInput, ReservationUncheckedCreateWithoutHotelInput>
  }

  export type ReservationUpdateWithWhereUniqueWithoutHotelInput = {
    where: ReservationWhereUniqueInput
    data: XOR<ReservationUpdateWithoutHotelInput, ReservationUncheckedUpdateWithoutHotelInput>
  }

  export type ReservationUpdateManyWithWhereWithoutHotelInput = {
    where: ReservationScalarWhereInput
    data: XOR<ReservationUpdateManyMutationInput, ReservationUncheckedUpdateManyWithoutHotelInput>
  }

  export type FolioUpsertWithWhereUniqueWithoutHotelInput = {
    where: FolioWhereUniqueInput
    update: XOR<FolioUpdateWithoutHotelInput, FolioUncheckedUpdateWithoutHotelInput>
    create: XOR<FolioCreateWithoutHotelInput, FolioUncheckedCreateWithoutHotelInput>
  }

  export type FolioUpdateWithWhereUniqueWithoutHotelInput = {
    where: FolioWhereUniqueInput
    data: XOR<FolioUpdateWithoutHotelInput, FolioUncheckedUpdateWithoutHotelInput>
  }

  export type FolioUpdateManyWithWhereWithoutHotelInput = {
    where: FolioScalarWhereInput
    data: XOR<FolioUpdateManyMutationInput, FolioUncheckedUpdateManyWithoutHotelInput>
  }

  export type POSOutletUpsertWithWhereUniqueWithoutHotelInput = {
    where: POSOutletWhereUniqueInput
    update: XOR<POSOutletUpdateWithoutHotelInput, POSOutletUncheckedUpdateWithoutHotelInput>
    create: XOR<POSOutletCreateWithoutHotelInput, POSOutletUncheckedCreateWithoutHotelInput>
  }

  export type POSOutletUpdateWithWhereUniqueWithoutHotelInput = {
    where: POSOutletWhereUniqueInput
    data: XOR<POSOutletUpdateWithoutHotelInput, POSOutletUncheckedUpdateWithoutHotelInput>
  }

  export type POSOutletUpdateManyWithWhereWithoutHotelInput = {
    where: POSOutletScalarWhereInput
    data: XOR<POSOutletUpdateManyMutationInput, POSOutletUncheckedUpdateManyWithoutHotelInput>
  }

  export type RatePlanUpsertWithWhereUniqueWithoutHotelInput = {
    where: RatePlanWhereUniqueInput
    update: XOR<RatePlanUpdateWithoutHotelInput, RatePlanUncheckedUpdateWithoutHotelInput>
    create: XOR<RatePlanCreateWithoutHotelInput, RatePlanUncheckedCreateWithoutHotelInput>
  }

  export type RatePlanUpdateWithWhereUniqueWithoutHotelInput = {
    where: RatePlanWhereUniqueInput
    data: XOR<RatePlanUpdateWithoutHotelInput, RatePlanUncheckedUpdateWithoutHotelInput>
  }

  export type RatePlanUpdateManyWithWhereWithoutHotelInput = {
    where: RatePlanScalarWhereInput
    data: XOR<RatePlanUpdateManyMutationInput, RatePlanUncheckedUpdateManyWithoutHotelInput>
  }

  export type TenantCreateWithoutUsersInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    hotels?: HotelCreateNestedManyWithoutTenantInput
    Role?: RoleCreateNestedManyWithoutTenantInput
    RoomType?: RoomTypeCreateNestedManyWithoutTenantInput
    Room?: RoomCreateNestedManyWithoutTenantInput
    Guest?: GuestCreateNestedManyWithoutTenantInput
    Reservation?: ReservationCreateNestedManyWithoutTenantInput
    Folio?: FolioCreateNestedManyWithoutTenantInput
    POSOutlet?: POSOutletCreateNestedManyWithoutTenantInput
    RatePlan?: RatePlanCreateNestedManyWithoutTenantInput
  }

  export type TenantUncheckedCreateWithoutUsersInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    hotels?: HotelUncheckedCreateNestedManyWithoutTenantInput
    Role?: RoleUncheckedCreateNestedManyWithoutTenantInput
    RoomType?: RoomTypeUncheckedCreateNestedManyWithoutTenantInput
    Room?: RoomUncheckedCreateNestedManyWithoutTenantInput
    Guest?: GuestUncheckedCreateNestedManyWithoutTenantInput
    Reservation?: ReservationUncheckedCreateNestedManyWithoutTenantInput
    Folio?: FolioUncheckedCreateNestedManyWithoutTenantInput
    POSOutlet?: POSOutletUncheckedCreateNestedManyWithoutTenantInput
    RatePlan?: RatePlanUncheckedCreateNestedManyWithoutTenantInput
  }

  export type TenantCreateOrConnectWithoutUsersInput = {
    where: TenantWhereUniqueInput
    create: XOR<TenantCreateWithoutUsersInput, TenantUncheckedCreateWithoutUsersInput>
  }

  export type HotelCreateWithoutUserInput = {
    id?: string
    name: string
    country: string
    city: string
    address: string
    tenant: TenantCreateNestedOneWithoutHotelsInput
    Guest?: GuestCreateNestedManyWithoutHotelInput
    RoomType?: RoomTypeCreateNestedManyWithoutHotelInput
    Room?: RoomCreateNestedManyWithoutHotelInput
    Role?: RoleCreateNestedManyWithoutHotelInput
    Reservation?: ReservationCreateNestedManyWithoutHotelInput
    Folio?: FolioCreateNestedManyWithoutHotelInput
    POSOutlet?: POSOutletCreateNestedManyWithoutHotelInput
    RatePlan?: RatePlanCreateNestedManyWithoutHotelInput
  }

  export type HotelUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    country: string
    city: string
    address: string
    tenantId: string
    Guest?: GuestUncheckedCreateNestedManyWithoutHotelInput
    RoomType?: RoomTypeUncheckedCreateNestedManyWithoutHotelInput
    Room?: RoomUncheckedCreateNestedManyWithoutHotelInput
    Role?: RoleUncheckedCreateNestedManyWithoutHotelInput
    Reservation?: ReservationUncheckedCreateNestedManyWithoutHotelInput
    Folio?: FolioUncheckedCreateNestedManyWithoutHotelInput
    POSOutlet?: POSOutletUncheckedCreateNestedManyWithoutHotelInput
    RatePlan?: RatePlanUncheckedCreateNestedManyWithoutHotelInput
  }

  export type HotelCreateOrConnectWithoutUserInput = {
    where: HotelWhereUniqueInput
    create: XOR<HotelCreateWithoutUserInput, HotelUncheckedCreateWithoutUserInput>
  }

  export type RoleCreateWithoutUsersInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    tenant: TenantCreateNestedOneWithoutRoleInput
    hotel: HotelCreateNestedOneWithoutRoleInput
    permissions?: PermissionCreateNestedManyWithoutRolesInput
  }

  export type RoleUncheckedCreateWithoutUsersInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    tenantId: string
    hotelId: string
    permissions?: PermissionUncheckedCreateNestedManyWithoutRolesInput
  }

  export type RoleCreateOrConnectWithoutUsersInput = {
    where: RoleWhereUniqueInput
    create: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput>
  }

  export type TenantUpsertWithoutUsersInput = {
    update: XOR<TenantUpdateWithoutUsersInput, TenantUncheckedUpdateWithoutUsersInput>
    create: XOR<TenantCreateWithoutUsersInput, TenantUncheckedCreateWithoutUsersInput>
    where?: TenantWhereInput
  }

  export type TenantUpdateToOneWithWhereWithoutUsersInput = {
    where?: TenantWhereInput
    data: XOR<TenantUpdateWithoutUsersInput, TenantUncheckedUpdateWithoutUsersInput>
  }

  export type TenantUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hotels?: HotelUpdateManyWithoutTenantNestedInput
    Role?: RoleUpdateManyWithoutTenantNestedInput
    RoomType?: RoomTypeUpdateManyWithoutTenantNestedInput
    Room?: RoomUpdateManyWithoutTenantNestedInput
    Guest?: GuestUpdateManyWithoutTenantNestedInput
    Reservation?: ReservationUpdateManyWithoutTenantNestedInput
    Folio?: FolioUpdateManyWithoutTenantNestedInput
    POSOutlet?: POSOutletUpdateManyWithoutTenantNestedInput
    RatePlan?: RatePlanUpdateManyWithoutTenantNestedInput
  }

  export type TenantUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hotels?: HotelUncheckedUpdateManyWithoutTenantNestedInput
    Role?: RoleUncheckedUpdateManyWithoutTenantNestedInput
    RoomType?: RoomTypeUncheckedUpdateManyWithoutTenantNestedInput
    Room?: RoomUncheckedUpdateManyWithoutTenantNestedInput
    Guest?: GuestUncheckedUpdateManyWithoutTenantNestedInput
    Reservation?: ReservationUncheckedUpdateManyWithoutTenantNestedInput
    Folio?: FolioUncheckedUpdateManyWithoutTenantNestedInput
    POSOutlet?: POSOutletUncheckedUpdateManyWithoutTenantNestedInput
    RatePlan?: RatePlanUncheckedUpdateManyWithoutTenantNestedInput
  }

  export type HotelUpsertWithoutUserInput = {
    update: XOR<HotelUpdateWithoutUserInput, HotelUncheckedUpdateWithoutUserInput>
    create: XOR<HotelCreateWithoutUserInput, HotelUncheckedCreateWithoutUserInput>
    where?: HotelWhereInput
  }

  export type HotelUpdateToOneWithWhereWithoutUserInput = {
    where?: HotelWhereInput
    data: XOR<HotelUpdateWithoutUserInput, HotelUncheckedUpdateWithoutUserInput>
  }

  export type HotelUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    tenant?: TenantUpdateOneRequiredWithoutHotelsNestedInput
    Guest?: GuestUpdateManyWithoutHotelNestedInput
    RoomType?: RoomTypeUpdateManyWithoutHotelNestedInput
    Room?: RoomUpdateManyWithoutHotelNestedInput
    Role?: RoleUpdateManyWithoutHotelNestedInput
    Reservation?: ReservationUpdateManyWithoutHotelNestedInput
    Folio?: FolioUpdateManyWithoutHotelNestedInput
    POSOutlet?: POSOutletUpdateManyWithoutHotelNestedInput
    RatePlan?: RatePlanUpdateManyWithoutHotelNestedInput
  }

  export type HotelUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    Guest?: GuestUncheckedUpdateManyWithoutHotelNestedInput
    RoomType?: RoomTypeUncheckedUpdateManyWithoutHotelNestedInput
    Room?: RoomUncheckedUpdateManyWithoutHotelNestedInput
    Role?: RoleUncheckedUpdateManyWithoutHotelNestedInput
    Reservation?: ReservationUncheckedUpdateManyWithoutHotelNestedInput
    Folio?: FolioUncheckedUpdateManyWithoutHotelNestedInput
    POSOutlet?: POSOutletUncheckedUpdateManyWithoutHotelNestedInput
    RatePlan?: RatePlanUncheckedUpdateManyWithoutHotelNestedInput
  }

  export type RoleUpsertWithoutUsersInput = {
    update: XOR<RoleUpdateWithoutUsersInput, RoleUncheckedUpdateWithoutUsersInput>
    create: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput>
    where?: RoleWhereInput
  }

  export type RoleUpdateToOneWithWhereWithoutUsersInput = {
    where?: RoleWhereInput
    data: XOR<RoleUpdateWithoutUsersInput, RoleUncheckedUpdateWithoutUsersInput>
  }

  export type RoleUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: TenantUpdateOneRequiredWithoutRoleNestedInput
    hotel?: HotelUpdateOneRequiredWithoutRoleNestedInput
    permissions?: PermissionUpdateManyWithoutRolesNestedInput
  }

  export type RoleUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenantId?: StringFieldUpdateOperationsInput | string
    hotelId?: StringFieldUpdateOperationsInput | string
    permissions?: PermissionUncheckedUpdateManyWithoutRolesNestedInput
  }

  export type TenantCreateWithoutRoleInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    hotels?: HotelCreateNestedManyWithoutTenantInput
    Users?: UserCreateNestedManyWithoutTenantInput
    RoomType?: RoomTypeCreateNestedManyWithoutTenantInput
    Room?: RoomCreateNestedManyWithoutTenantInput
    Guest?: GuestCreateNestedManyWithoutTenantInput
    Reservation?: ReservationCreateNestedManyWithoutTenantInput
    Folio?: FolioCreateNestedManyWithoutTenantInput
    POSOutlet?: POSOutletCreateNestedManyWithoutTenantInput
    RatePlan?: RatePlanCreateNestedManyWithoutTenantInput
  }

  export type TenantUncheckedCreateWithoutRoleInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    hotels?: HotelUncheckedCreateNestedManyWithoutTenantInput
    Users?: UserUncheckedCreateNestedManyWithoutTenantInput
    RoomType?: RoomTypeUncheckedCreateNestedManyWithoutTenantInput
    Room?: RoomUncheckedCreateNestedManyWithoutTenantInput
    Guest?: GuestUncheckedCreateNestedManyWithoutTenantInput
    Reservation?: ReservationUncheckedCreateNestedManyWithoutTenantInput
    Folio?: FolioUncheckedCreateNestedManyWithoutTenantInput
    POSOutlet?: POSOutletUncheckedCreateNestedManyWithoutTenantInput
    RatePlan?: RatePlanUncheckedCreateNestedManyWithoutTenantInput
  }

  export type TenantCreateOrConnectWithoutRoleInput = {
    where: TenantWhereUniqueInput
    create: XOR<TenantCreateWithoutRoleInput, TenantUncheckedCreateWithoutRoleInput>
  }

  export type HotelCreateWithoutRoleInput = {
    id?: string
    name: string
    country: string
    city: string
    address: string
    tenant: TenantCreateNestedOneWithoutHotelsInput
    Guest?: GuestCreateNestedManyWithoutHotelInput
    RoomType?: RoomTypeCreateNestedManyWithoutHotelInput
    Room?: RoomCreateNestedManyWithoutHotelInput
    User?: UserCreateNestedManyWithoutHotelInput
    Reservation?: ReservationCreateNestedManyWithoutHotelInput
    Folio?: FolioCreateNestedManyWithoutHotelInput
    POSOutlet?: POSOutletCreateNestedManyWithoutHotelInput
    RatePlan?: RatePlanCreateNestedManyWithoutHotelInput
  }

  export type HotelUncheckedCreateWithoutRoleInput = {
    id?: string
    name: string
    country: string
    city: string
    address: string
    tenantId: string
    Guest?: GuestUncheckedCreateNestedManyWithoutHotelInput
    RoomType?: RoomTypeUncheckedCreateNestedManyWithoutHotelInput
    Room?: RoomUncheckedCreateNestedManyWithoutHotelInput
    User?: UserUncheckedCreateNestedManyWithoutHotelInput
    Reservation?: ReservationUncheckedCreateNestedManyWithoutHotelInput
    Folio?: FolioUncheckedCreateNestedManyWithoutHotelInput
    POSOutlet?: POSOutletUncheckedCreateNestedManyWithoutHotelInput
    RatePlan?: RatePlanUncheckedCreateNestedManyWithoutHotelInput
  }

  export type HotelCreateOrConnectWithoutRoleInput = {
    where: HotelWhereUniqueInput
    create: XOR<HotelCreateWithoutRoleInput, HotelUncheckedCreateWithoutRoleInput>
  }

  export type UserCreateWithoutRoleInput = {
    id?: string
    email: string
    passwordHash: string
    firstName: string
    lastName: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    tenant: TenantCreateNestedOneWithoutUsersInput
    hotel: HotelCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutRoleInput = {
    id?: string
    email: string
    passwordHash: string
    firstName: string
    lastName: string
    tenantId: string
    isActive?: boolean
    hotelId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCreateOrConnectWithoutRoleInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput>
  }

  export type UserCreateManyRoleInputEnvelope = {
    data: UserCreateManyRoleInput | UserCreateManyRoleInput[]
    skipDuplicates?: boolean
  }

  export type PermissionCreateWithoutRolesInput = {
    id?: string
    subject: string
    action: string
    conditions?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PermissionUncheckedCreateWithoutRolesInput = {
    id?: string
    subject: string
    action: string
    conditions?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PermissionCreateOrConnectWithoutRolesInput = {
    where: PermissionWhereUniqueInput
    create: XOR<PermissionCreateWithoutRolesInput, PermissionUncheckedCreateWithoutRolesInput>
  }

  export type TenantUpsertWithoutRoleInput = {
    update: XOR<TenantUpdateWithoutRoleInput, TenantUncheckedUpdateWithoutRoleInput>
    create: XOR<TenantCreateWithoutRoleInput, TenantUncheckedCreateWithoutRoleInput>
    where?: TenantWhereInput
  }

  export type TenantUpdateToOneWithWhereWithoutRoleInput = {
    where?: TenantWhereInput
    data: XOR<TenantUpdateWithoutRoleInput, TenantUncheckedUpdateWithoutRoleInput>
  }

  export type TenantUpdateWithoutRoleInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hotels?: HotelUpdateManyWithoutTenantNestedInput
    Users?: UserUpdateManyWithoutTenantNestedInput
    RoomType?: RoomTypeUpdateManyWithoutTenantNestedInput
    Room?: RoomUpdateManyWithoutTenantNestedInput
    Guest?: GuestUpdateManyWithoutTenantNestedInput
    Reservation?: ReservationUpdateManyWithoutTenantNestedInput
    Folio?: FolioUpdateManyWithoutTenantNestedInput
    POSOutlet?: POSOutletUpdateManyWithoutTenantNestedInput
    RatePlan?: RatePlanUpdateManyWithoutTenantNestedInput
  }

  export type TenantUncheckedUpdateWithoutRoleInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hotels?: HotelUncheckedUpdateManyWithoutTenantNestedInput
    Users?: UserUncheckedUpdateManyWithoutTenantNestedInput
    RoomType?: RoomTypeUncheckedUpdateManyWithoutTenantNestedInput
    Room?: RoomUncheckedUpdateManyWithoutTenantNestedInput
    Guest?: GuestUncheckedUpdateManyWithoutTenantNestedInput
    Reservation?: ReservationUncheckedUpdateManyWithoutTenantNestedInput
    Folio?: FolioUncheckedUpdateManyWithoutTenantNestedInput
    POSOutlet?: POSOutletUncheckedUpdateManyWithoutTenantNestedInput
    RatePlan?: RatePlanUncheckedUpdateManyWithoutTenantNestedInput
  }

  export type HotelUpsertWithoutRoleInput = {
    update: XOR<HotelUpdateWithoutRoleInput, HotelUncheckedUpdateWithoutRoleInput>
    create: XOR<HotelCreateWithoutRoleInput, HotelUncheckedCreateWithoutRoleInput>
    where?: HotelWhereInput
  }

  export type HotelUpdateToOneWithWhereWithoutRoleInput = {
    where?: HotelWhereInput
    data: XOR<HotelUpdateWithoutRoleInput, HotelUncheckedUpdateWithoutRoleInput>
  }

  export type HotelUpdateWithoutRoleInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    tenant?: TenantUpdateOneRequiredWithoutHotelsNestedInput
    Guest?: GuestUpdateManyWithoutHotelNestedInput
    RoomType?: RoomTypeUpdateManyWithoutHotelNestedInput
    Room?: RoomUpdateManyWithoutHotelNestedInput
    User?: UserUpdateManyWithoutHotelNestedInput
    Reservation?: ReservationUpdateManyWithoutHotelNestedInput
    Folio?: FolioUpdateManyWithoutHotelNestedInput
    POSOutlet?: POSOutletUpdateManyWithoutHotelNestedInput
    RatePlan?: RatePlanUpdateManyWithoutHotelNestedInput
  }

  export type HotelUncheckedUpdateWithoutRoleInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    Guest?: GuestUncheckedUpdateManyWithoutHotelNestedInput
    RoomType?: RoomTypeUncheckedUpdateManyWithoutHotelNestedInput
    Room?: RoomUncheckedUpdateManyWithoutHotelNestedInput
    User?: UserUncheckedUpdateManyWithoutHotelNestedInput
    Reservation?: ReservationUncheckedUpdateManyWithoutHotelNestedInput
    Folio?: FolioUncheckedUpdateManyWithoutHotelNestedInput
    POSOutlet?: POSOutletUncheckedUpdateManyWithoutHotelNestedInput
    RatePlan?: RatePlanUncheckedUpdateManyWithoutHotelNestedInput
  }

  export type UserUpsertWithWhereUniqueWithoutRoleInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutRoleInput, UserUncheckedUpdateWithoutRoleInput>
    create: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput>
  }

  export type UserUpdateWithWhereUniqueWithoutRoleInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutRoleInput, UserUncheckedUpdateWithoutRoleInput>
  }

  export type UserUpdateManyWithWhereWithoutRoleInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutRoleInput>
  }

  export type PermissionUpsertWithWhereUniqueWithoutRolesInput = {
    where: PermissionWhereUniqueInput
    update: XOR<PermissionUpdateWithoutRolesInput, PermissionUncheckedUpdateWithoutRolesInput>
    create: XOR<PermissionCreateWithoutRolesInput, PermissionUncheckedCreateWithoutRolesInput>
  }

  export type PermissionUpdateWithWhereUniqueWithoutRolesInput = {
    where: PermissionWhereUniqueInput
    data: XOR<PermissionUpdateWithoutRolesInput, PermissionUncheckedUpdateWithoutRolesInput>
  }

  export type PermissionUpdateManyWithWhereWithoutRolesInput = {
    where: PermissionScalarWhereInput
    data: XOR<PermissionUpdateManyMutationInput, PermissionUncheckedUpdateManyWithoutRolesInput>
  }

  export type PermissionScalarWhereInput = {
    AND?: PermissionScalarWhereInput | PermissionScalarWhereInput[]
    OR?: PermissionScalarWhereInput[]
    NOT?: PermissionScalarWhereInput | PermissionScalarWhereInput[]
    id?: StringFilter<"Permission"> | string
    subject?: StringFilter<"Permission"> | string
    action?: StringFilter<"Permission"> | string
    conditions?: JsonNullableFilter<"Permission">
    createdAt?: DateTimeFilter<"Permission"> | Date | string
    updatedAt?: DateTimeFilter<"Permission"> | Date | string
  }

  export type RoleCreateWithoutPermissionsInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    tenant: TenantCreateNestedOneWithoutRoleInput
    hotel: HotelCreateNestedOneWithoutRoleInput
    Users?: UserCreateNestedManyWithoutRoleInput
  }

  export type RoleUncheckedCreateWithoutPermissionsInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    tenantId: string
    hotelId: string
    Users?: UserUncheckedCreateNestedManyWithoutRoleInput
  }

  export type RoleCreateOrConnectWithoutPermissionsInput = {
    where: RoleWhereUniqueInput
    create: XOR<RoleCreateWithoutPermissionsInput, RoleUncheckedCreateWithoutPermissionsInput>
  }

  export type RoleUpsertWithWhereUniqueWithoutPermissionsInput = {
    where: RoleWhereUniqueInput
    update: XOR<RoleUpdateWithoutPermissionsInput, RoleUncheckedUpdateWithoutPermissionsInput>
    create: XOR<RoleCreateWithoutPermissionsInput, RoleUncheckedCreateWithoutPermissionsInput>
  }

  export type RoleUpdateWithWhereUniqueWithoutPermissionsInput = {
    where: RoleWhereUniqueInput
    data: XOR<RoleUpdateWithoutPermissionsInput, RoleUncheckedUpdateWithoutPermissionsInput>
  }

  export type RoleUpdateManyWithWhereWithoutPermissionsInput = {
    where: RoleScalarWhereInput
    data: XOR<RoleUpdateManyMutationInput, RoleUncheckedUpdateManyWithoutPermissionsInput>
  }

  export type RoomTypeCreateWithoutRoomInput = {
    id?: string
    name: string
    description?: string | null
    baseRate?: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    tenant: TenantCreateNestedOneWithoutRoomTypeInput
    hotel: HotelCreateNestedOneWithoutRoomTypeInput
  }

  export type RoomTypeUncheckedCreateWithoutRoomInput = {
    id?: string
    name: string
    description?: string | null
    baseRate?: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    tenantId: string
    hotelId: string
  }

  export type RoomTypeCreateOrConnectWithoutRoomInput = {
    where: RoomTypeWhereUniqueInput
    create: XOR<RoomTypeCreateWithoutRoomInput, RoomTypeUncheckedCreateWithoutRoomInput>
  }

  export type TenantCreateWithoutRoomInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    hotels?: HotelCreateNestedManyWithoutTenantInput
    Users?: UserCreateNestedManyWithoutTenantInput
    Role?: RoleCreateNestedManyWithoutTenantInput
    RoomType?: RoomTypeCreateNestedManyWithoutTenantInput
    Guest?: GuestCreateNestedManyWithoutTenantInput
    Reservation?: ReservationCreateNestedManyWithoutTenantInput
    Folio?: FolioCreateNestedManyWithoutTenantInput
    POSOutlet?: POSOutletCreateNestedManyWithoutTenantInput
    RatePlan?: RatePlanCreateNestedManyWithoutTenantInput
  }

  export type TenantUncheckedCreateWithoutRoomInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    hotels?: HotelUncheckedCreateNestedManyWithoutTenantInput
    Users?: UserUncheckedCreateNestedManyWithoutTenantInput
    Role?: RoleUncheckedCreateNestedManyWithoutTenantInput
    RoomType?: RoomTypeUncheckedCreateNestedManyWithoutTenantInput
    Guest?: GuestUncheckedCreateNestedManyWithoutTenantInput
    Reservation?: ReservationUncheckedCreateNestedManyWithoutTenantInput
    Folio?: FolioUncheckedCreateNestedManyWithoutTenantInput
    POSOutlet?: POSOutletUncheckedCreateNestedManyWithoutTenantInput
    RatePlan?: RatePlanUncheckedCreateNestedManyWithoutTenantInput
  }

  export type TenantCreateOrConnectWithoutRoomInput = {
    where: TenantWhereUniqueInput
    create: XOR<TenantCreateWithoutRoomInput, TenantUncheckedCreateWithoutRoomInput>
  }

  export type HotelCreateWithoutRoomInput = {
    id?: string
    name: string
    country: string
    city: string
    address: string
    tenant: TenantCreateNestedOneWithoutHotelsInput
    Guest?: GuestCreateNestedManyWithoutHotelInput
    RoomType?: RoomTypeCreateNestedManyWithoutHotelInput
    Role?: RoleCreateNestedManyWithoutHotelInput
    User?: UserCreateNestedManyWithoutHotelInput
    Reservation?: ReservationCreateNestedManyWithoutHotelInput
    Folio?: FolioCreateNestedManyWithoutHotelInput
    POSOutlet?: POSOutletCreateNestedManyWithoutHotelInput
    RatePlan?: RatePlanCreateNestedManyWithoutHotelInput
  }

  export type HotelUncheckedCreateWithoutRoomInput = {
    id?: string
    name: string
    country: string
    city: string
    address: string
    tenantId: string
    Guest?: GuestUncheckedCreateNestedManyWithoutHotelInput
    RoomType?: RoomTypeUncheckedCreateNestedManyWithoutHotelInput
    Role?: RoleUncheckedCreateNestedManyWithoutHotelInput
    User?: UserUncheckedCreateNestedManyWithoutHotelInput
    Reservation?: ReservationUncheckedCreateNestedManyWithoutHotelInput
    Folio?: FolioUncheckedCreateNestedManyWithoutHotelInput
    POSOutlet?: POSOutletUncheckedCreateNestedManyWithoutHotelInput
    RatePlan?: RatePlanUncheckedCreateNestedManyWithoutHotelInput
  }

  export type HotelCreateOrConnectWithoutRoomInput = {
    where: HotelWhereUniqueInput
    create: XOR<HotelCreateWithoutRoomInput, HotelUncheckedCreateWithoutRoomInput>
  }

  export type ReservationCreateWithoutRoomInput = {
    id?: string
    checkIn: Date | string
    checkOut: Date | string
    status?: $Enums.ReservationStatus
    guest: GuestCreateNestedOneWithoutReservationInput
    tenant: TenantCreateNestedOneWithoutReservationInput
    hotel: HotelCreateNestedOneWithoutReservationInput
  }

  export type ReservationUncheckedCreateWithoutRoomInput = {
    id?: string
    checkIn: Date | string
    checkOut: Date | string
    status?: $Enums.ReservationStatus
    guestId: string
    tenantId: string
    hotelId: string
  }

  export type ReservationCreateOrConnectWithoutRoomInput = {
    where: ReservationWhereUniqueInput
    create: XOR<ReservationCreateWithoutRoomInput, ReservationUncheckedCreateWithoutRoomInput>
  }

  export type ReservationCreateManyRoomInputEnvelope = {
    data: ReservationCreateManyRoomInput | ReservationCreateManyRoomInput[]
    skipDuplicates?: boolean
  }

  export type RoomTypeUpsertWithoutRoomInput = {
    update: XOR<RoomTypeUpdateWithoutRoomInput, RoomTypeUncheckedUpdateWithoutRoomInput>
    create: XOR<RoomTypeCreateWithoutRoomInput, RoomTypeUncheckedCreateWithoutRoomInput>
    where?: RoomTypeWhereInput
  }

  export type RoomTypeUpdateToOneWithWhereWithoutRoomInput = {
    where?: RoomTypeWhereInput
    data: XOR<RoomTypeUpdateWithoutRoomInput, RoomTypeUncheckedUpdateWithoutRoomInput>
  }

  export type RoomTypeUpdateWithoutRoomInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    baseRate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: TenantUpdateOneRequiredWithoutRoomTypeNestedInput
    hotel?: HotelUpdateOneRequiredWithoutRoomTypeNestedInput
  }

  export type RoomTypeUncheckedUpdateWithoutRoomInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    baseRate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenantId?: StringFieldUpdateOperationsInput | string
    hotelId?: StringFieldUpdateOperationsInput | string
  }

  export type TenantUpsertWithoutRoomInput = {
    update: XOR<TenantUpdateWithoutRoomInput, TenantUncheckedUpdateWithoutRoomInput>
    create: XOR<TenantCreateWithoutRoomInput, TenantUncheckedCreateWithoutRoomInput>
    where?: TenantWhereInput
  }

  export type TenantUpdateToOneWithWhereWithoutRoomInput = {
    where?: TenantWhereInput
    data: XOR<TenantUpdateWithoutRoomInput, TenantUncheckedUpdateWithoutRoomInput>
  }

  export type TenantUpdateWithoutRoomInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hotels?: HotelUpdateManyWithoutTenantNestedInput
    Users?: UserUpdateManyWithoutTenantNestedInput
    Role?: RoleUpdateManyWithoutTenantNestedInput
    RoomType?: RoomTypeUpdateManyWithoutTenantNestedInput
    Guest?: GuestUpdateManyWithoutTenantNestedInput
    Reservation?: ReservationUpdateManyWithoutTenantNestedInput
    Folio?: FolioUpdateManyWithoutTenantNestedInput
    POSOutlet?: POSOutletUpdateManyWithoutTenantNestedInput
    RatePlan?: RatePlanUpdateManyWithoutTenantNestedInput
  }

  export type TenantUncheckedUpdateWithoutRoomInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hotels?: HotelUncheckedUpdateManyWithoutTenantNestedInput
    Users?: UserUncheckedUpdateManyWithoutTenantNestedInput
    Role?: RoleUncheckedUpdateManyWithoutTenantNestedInput
    RoomType?: RoomTypeUncheckedUpdateManyWithoutTenantNestedInput
    Guest?: GuestUncheckedUpdateManyWithoutTenantNestedInput
    Reservation?: ReservationUncheckedUpdateManyWithoutTenantNestedInput
    Folio?: FolioUncheckedUpdateManyWithoutTenantNestedInput
    POSOutlet?: POSOutletUncheckedUpdateManyWithoutTenantNestedInput
    RatePlan?: RatePlanUncheckedUpdateManyWithoutTenantNestedInput
  }

  export type HotelUpsertWithoutRoomInput = {
    update: XOR<HotelUpdateWithoutRoomInput, HotelUncheckedUpdateWithoutRoomInput>
    create: XOR<HotelCreateWithoutRoomInput, HotelUncheckedCreateWithoutRoomInput>
    where?: HotelWhereInput
  }

  export type HotelUpdateToOneWithWhereWithoutRoomInput = {
    where?: HotelWhereInput
    data: XOR<HotelUpdateWithoutRoomInput, HotelUncheckedUpdateWithoutRoomInput>
  }

  export type HotelUpdateWithoutRoomInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    tenant?: TenantUpdateOneRequiredWithoutHotelsNestedInput
    Guest?: GuestUpdateManyWithoutHotelNestedInput
    RoomType?: RoomTypeUpdateManyWithoutHotelNestedInput
    Role?: RoleUpdateManyWithoutHotelNestedInput
    User?: UserUpdateManyWithoutHotelNestedInput
    Reservation?: ReservationUpdateManyWithoutHotelNestedInput
    Folio?: FolioUpdateManyWithoutHotelNestedInput
    POSOutlet?: POSOutletUpdateManyWithoutHotelNestedInput
    RatePlan?: RatePlanUpdateManyWithoutHotelNestedInput
  }

  export type HotelUncheckedUpdateWithoutRoomInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    Guest?: GuestUncheckedUpdateManyWithoutHotelNestedInput
    RoomType?: RoomTypeUncheckedUpdateManyWithoutHotelNestedInput
    Role?: RoleUncheckedUpdateManyWithoutHotelNestedInput
    User?: UserUncheckedUpdateManyWithoutHotelNestedInput
    Reservation?: ReservationUncheckedUpdateManyWithoutHotelNestedInput
    Folio?: FolioUncheckedUpdateManyWithoutHotelNestedInput
    POSOutlet?: POSOutletUncheckedUpdateManyWithoutHotelNestedInput
    RatePlan?: RatePlanUncheckedUpdateManyWithoutHotelNestedInput
  }

  export type ReservationUpsertWithWhereUniqueWithoutRoomInput = {
    where: ReservationWhereUniqueInput
    update: XOR<ReservationUpdateWithoutRoomInput, ReservationUncheckedUpdateWithoutRoomInput>
    create: XOR<ReservationCreateWithoutRoomInput, ReservationUncheckedCreateWithoutRoomInput>
  }

  export type ReservationUpdateWithWhereUniqueWithoutRoomInput = {
    where: ReservationWhereUniqueInput
    data: XOR<ReservationUpdateWithoutRoomInput, ReservationUncheckedUpdateWithoutRoomInput>
  }

  export type ReservationUpdateManyWithWhereWithoutRoomInput = {
    where: ReservationScalarWhereInput
    data: XOR<ReservationUpdateManyMutationInput, ReservationUncheckedUpdateManyWithoutRoomInput>
  }

  export type TenantCreateWithoutRoomTypeInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    hotels?: HotelCreateNestedManyWithoutTenantInput
    Users?: UserCreateNestedManyWithoutTenantInput
    Role?: RoleCreateNestedManyWithoutTenantInput
    Room?: RoomCreateNestedManyWithoutTenantInput
    Guest?: GuestCreateNestedManyWithoutTenantInput
    Reservation?: ReservationCreateNestedManyWithoutTenantInput
    Folio?: FolioCreateNestedManyWithoutTenantInput
    POSOutlet?: POSOutletCreateNestedManyWithoutTenantInput
    RatePlan?: RatePlanCreateNestedManyWithoutTenantInput
  }

  export type TenantUncheckedCreateWithoutRoomTypeInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    hotels?: HotelUncheckedCreateNestedManyWithoutTenantInput
    Users?: UserUncheckedCreateNestedManyWithoutTenantInput
    Role?: RoleUncheckedCreateNestedManyWithoutTenantInput
    Room?: RoomUncheckedCreateNestedManyWithoutTenantInput
    Guest?: GuestUncheckedCreateNestedManyWithoutTenantInput
    Reservation?: ReservationUncheckedCreateNestedManyWithoutTenantInput
    Folio?: FolioUncheckedCreateNestedManyWithoutTenantInput
    POSOutlet?: POSOutletUncheckedCreateNestedManyWithoutTenantInput
    RatePlan?: RatePlanUncheckedCreateNestedManyWithoutTenantInput
  }

  export type TenantCreateOrConnectWithoutRoomTypeInput = {
    where: TenantWhereUniqueInput
    create: XOR<TenantCreateWithoutRoomTypeInput, TenantUncheckedCreateWithoutRoomTypeInput>
  }

  export type HotelCreateWithoutRoomTypeInput = {
    id?: string
    name: string
    country: string
    city: string
    address: string
    tenant: TenantCreateNestedOneWithoutHotelsInput
    Guest?: GuestCreateNestedManyWithoutHotelInput
    Room?: RoomCreateNestedManyWithoutHotelInput
    Role?: RoleCreateNestedManyWithoutHotelInput
    User?: UserCreateNestedManyWithoutHotelInput
    Reservation?: ReservationCreateNestedManyWithoutHotelInput
    Folio?: FolioCreateNestedManyWithoutHotelInput
    POSOutlet?: POSOutletCreateNestedManyWithoutHotelInput
    RatePlan?: RatePlanCreateNestedManyWithoutHotelInput
  }

  export type HotelUncheckedCreateWithoutRoomTypeInput = {
    id?: string
    name: string
    country: string
    city: string
    address: string
    tenantId: string
    Guest?: GuestUncheckedCreateNestedManyWithoutHotelInput
    Room?: RoomUncheckedCreateNestedManyWithoutHotelInput
    Role?: RoleUncheckedCreateNestedManyWithoutHotelInput
    User?: UserUncheckedCreateNestedManyWithoutHotelInput
    Reservation?: ReservationUncheckedCreateNestedManyWithoutHotelInput
    Folio?: FolioUncheckedCreateNestedManyWithoutHotelInput
    POSOutlet?: POSOutletUncheckedCreateNestedManyWithoutHotelInput
    RatePlan?: RatePlanUncheckedCreateNestedManyWithoutHotelInput
  }

  export type HotelCreateOrConnectWithoutRoomTypeInput = {
    where: HotelWhereUniqueInput
    create: XOR<HotelCreateWithoutRoomTypeInput, HotelUncheckedCreateWithoutRoomTypeInput>
  }

  export type RoomCreateWithoutRoomTypeInput = {
    id?: string
    roomNumber: string
    status?: $Enums.RoomStatus
    tenant: TenantCreateNestedOneWithoutRoomInput
    hotel: HotelCreateNestedOneWithoutRoomInput
    Reservation?: ReservationCreateNestedManyWithoutRoomInput
  }

  export type RoomUncheckedCreateWithoutRoomTypeInput = {
    id?: string
    roomNumber: string
    status?: $Enums.RoomStatus
    tenantId: string
    hotelId: string
    Reservation?: ReservationUncheckedCreateNestedManyWithoutRoomInput
  }

  export type RoomCreateOrConnectWithoutRoomTypeInput = {
    where: RoomWhereUniqueInput
    create: XOR<RoomCreateWithoutRoomTypeInput, RoomUncheckedCreateWithoutRoomTypeInput>
  }

  export type RoomCreateManyRoomTypeInputEnvelope = {
    data: RoomCreateManyRoomTypeInput | RoomCreateManyRoomTypeInput[]
    skipDuplicates?: boolean
  }

  export type TenantUpsertWithoutRoomTypeInput = {
    update: XOR<TenantUpdateWithoutRoomTypeInput, TenantUncheckedUpdateWithoutRoomTypeInput>
    create: XOR<TenantCreateWithoutRoomTypeInput, TenantUncheckedCreateWithoutRoomTypeInput>
    where?: TenantWhereInput
  }

  export type TenantUpdateToOneWithWhereWithoutRoomTypeInput = {
    where?: TenantWhereInput
    data: XOR<TenantUpdateWithoutRoomTypeInput, TenantUncheckedUpdateWithoutRoomTypeInput>
  }

  export type TenantUpdateWithoutRoomTypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hotels?: HotelUpdateManyWithoutTenantNestedInput
    Users?: UserUpdateManyWithoutTenantNestedInput
    Role?: RoleUpdateManyWithoutTenantNestedInput
    Room?: RoomUpdateManyWithoutTenantNestedInput
    Guest?: GuestUpdateManyWithoutTenantNestedInput
    Reservation?: ReservationUpdateManyWithoutTenantNestedInput
    Folio?: FolioUpdateManyWithoutTenantNestedInput
    POSOutlet?: POSOutletUpdateManyWithoutTenantNestedInput
    RatePlan?: RatePlanUpdateManyWithoutTenantNestedInput
  }

  export type TenantUncheckedUpdateWithoutRoomTypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hotels?: HotelUncheckedUpdateManyWithoutTenantNestedInput
    Users?: UserUncheckedUpdateManyWithoutTenantNestedInput
    Role?: RoleUncheckedUpdateManyWithoutTenantNestedInput
    Room?: RoomUncheckedUpdateManyWithoutTenantNestedInput
    Guest?: GuestUncheckedUpdateManyWithoutTenantNestedInput
    Reservation?: ReservationUncheckedUpdateManyWithoutTenantNestedInput
    Folio?: FolioUncheckedUpdateManyWithoutTenantNestedInput
    POSOutlet?: POSOutletUncheckedUpdateManyWithoutTenantNestedInput
    RatePlan?: RatePlanUncheckedUpdateManyWithoutTenantNestedInput
  }

  export type HotelUpsertWithoutRoomTypeInput = {
    update: XOR<HotelUpdateWithoutRoomTypeInput, HotelUncheckedUpdateWithoutRoomTypeInput>
    create: XOR<HotelCreateWithoutRoomTypeInput, HotelUncheckedCreateWithoutRoomTypeInput>
    where?: HotelWhereInput
  }

  export type HotelUpdateToOneWithWhereWithoutRoomTypeInput = {
    where?: HotelWhereInput
    data: XOR<HotelUpdateWithoutRoomTypeInput, HotelUncheckedUpdateWithoutRoomTypeInput>
  }

  export type HotelUpdateWithoutRoomTypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    tenant?: TenantUpdateOneRequiredWithoutHotelsNestedInput
    Guest?: GuestUpdateManyWithoutHotelNestedInput
    Room?: RoomUpdateManyWithoutHotelNestedInput
    Role?: RoleUpdateManyWithoutHotelNestedInput
    User?: UserUpdateManyWithoutHotelNestedInput
    Reservation?: ReservationUpdateManyWithoutHotelNestedInput
    Folio?: FolioUpdateManyWithoutHotelNestedInput
    POSOutlet?: POSOutletUpdateManyWithoutHotelNestedInput
    RatePlan?: RatePlanUpdateManyWithoutHotelNestedInput
  }

  export type HotelUncheckedUpdateWithoutRoomTypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    Guest?: GuestUncheckedUpdateManyWithoutHotelNestedInput
    Room?: RoomUncheckedUpdateManyWithoutHotelNestedInput
    Role?: RoleUncheckedUpdateManyWithoutHotelNestedInput
    User?: UserUncheckedUpdateManyWithoutHotelNestedInput
    Reservation?: ReservationUncheckedUpdateManyWithoutHotelNestedInput
    Folio?: FolioUncheckedUpdateManyWithoutHotelNestedInput
    POSOutlet?: POSOutletUncheckedUpdateManyWithoutHotelNestedInput
    RatePlan?: RatePlanUncheckedUpdateManyWithoutHotelNestedInput
  }

  export type RoomUpsertWithWhereUniqueWithoutRoomTypeInput = {
    where: RoomWhereUniqueInput
    update: XOR<RoomUpdateWithoutRoomTypeInput, RoomUncheckedUpdateWithoutRoomTypeInput>
    create: XOR<RoomCreateWithoutRoomTypeInput, RoomUncheckedCreateWithoutRoomTypeInput>
  }

  export type RoomUpdateWithWhereUniqueWithoutRoomTypeInput = {
    where: RoomWhereUniqueInput
    data: XOR<RoomUpdateWithoutRoomTypeInput, RoomUncheckedUpdateWithoutRoomTypeInput>
  }

  export type RoomUpdateManyWithWhereWithoutRoomTypeInput = {
    where: RoomScalarWhereInput
    data: XOR<RoomUpdateManyMutationInput, RoomUncheckedUpdateManyWithoutRoomTypeInput>
  }

  export type TenantCreateWithoutRatePlanInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    hotels?: HotelCreateNestedManyWithoutTenantInput
    Users?: UserCreateNestedManyWithoutTenantInput
    Role?: RoleCreateNestedManyWithoutTenantInput
    RoomType?: RoomTypeCreateNestedManyWithoutTenantInput
    Room?: RoomCreateNestedManyWithoutTenantInput
    Guest?: GuestCreateNestedManyWithoutTenantInput
    Reservation?: ReservationCreateNestedManyWithoutTenantInput
    Folio?: FolioCreateNestedManyWithoutTenantInput
    POSOutlet?: POSOutletCreateNestedManyWithoutTenantInput
  }

  export type TenantUncheckedCreateWithoutRatePlanInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    hotels?: HotelUncheckedCreateNestedManyWithoutTenantInput
    Users?: UserUncheckedCreateNestedManyWithoutTenantInput
    Role?: RoleUncheckedCreateNestedManyWithoutTenantInput
    RoomType?: RoomTypeUncheckedCreateNestedManyWithoutTenantInput
    Room?: RoomUncheckedCreateNestedManyWithoutTenantInput
    Guest?: GuestUncheckedCreateNestedManyWithoutTenantInput
    Reservation?: ReservationUncheckedCreateNestedManyWithoutTenantInput
    Folio?: FolioUncheckedCreateNestedManyWithoutTenantInput
    POSOutlet?: POSOutletUncheckedCreateNestedManyWithoutTenantInput
  }

  export type TenantCreateOrConnectWithoutRatePlanInput = {
    where: TenantWhereUniqueInput
    create: XOR<TenantCreateWithoutRatePlanInput, TenantUncheckedCreateWithoutRatePlanInput>
  }

  export type HotelCreateWithoutRatePlanInput = {
    id?: string
    name: string
    country: string
    city: string
    address: string
    tenant: TenantCreateNestedOneWithoutHotelsInput
    Guest?: GuestCreateNestedManyWithoutHotelInput
    RoomType?: RoomTypeCreateNestedManyWithoutHotelInput
    Room?: RoomCreateNestedManyWithoutHotelInput
    Role?: RoleCreateNestedManyWithoutHotelInput
    User?: UserCreateNestedManyWithoutHotelInput
    Reservation?: ReservationCreateNestedManyWithoutHotelInput
    Folio?: FolioCreateNestedManyWithoutHotelInput
    POSOutlet?: POSOutletCreateNestedManyWithoutHotelInput
  }

  export type HotelUncheckedCreateWithoutRatePlanInput = {
    id?: string
    name: string
    country: string
    city: string
    address: string
    tenantId: string
    Guest?: GuestUncheckedCreateNestedManyWithoutHotelInput
    RoomType?: RoomTypeUncheckedCreateNestedManyWithoutHotelInput
    Room?: RoomUncheckedCreateNestedManyWithoutHotelInput
    Role?: RoleUncheckedCreateNestedManyWithoutHotelInput
    User?: UserUncheckedCreateNestedManyWithoutHotelInput
    Reservation?: ReservationUncheckedCreateNestedManyWithoutHotelInput
    Folio?: FolioUncheckedCreateNestedManyWithoutHotelInput
    POSOutlet?: POSOutletUncheckedCreateNestedManyWithoutHotelInput
  }

  export type HotelCreateOrConnectWithoutRatePlanInput = {
    where: HotelWhereUniqueInput
    create: XOR<HotelCreateWithoutRatePlanInput, HotelUncheckedCreateWithoutRatePlanInput>
  }

  export type TenantUpsertWithoutRatePlanInput = {
    update: XOR<TenantUpdateWithoutRatePlanInput, TenantUncheckedUpdateWithoutRatePlanInput>
    create: XOR<TenantCreateWithoutRatePlanInput, TenantUncheckedCreateWithoutRatePlanInput>
    where?: TenantWhereInput
  }

  export type TenantUpdateToOneWithWhereWithoutRatePlanInput = {
    where?: TenantWhereInput
    data: XOR<TenantUpdateWithoutRatePlanInput, TenantUncheckedUpdateWithoutRatePlanInput>
  }

  export type TenantUpdateWithoutRatePlanInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hotels?: HotelUpdateManyWithoutTenantNestedInput
    Users?: UserUpdateManyWithoutTenantNestedInput
    Role?: RoleUpdateManyWithoutTenantNestedInput
    RoomType?: RoomTypeUpdateManyWithoutTenantNestedInput
    Room?: RoomUpdateManyWithoutTenantNestedInput
    Guest?: GuestUpdateManyWithoutTenantNestedInput
    Reservation?: ReservationUpdateManyWithoutTenantNestedInput
    Folio?: FolioUpdateManyWithoutTenantNestedInput
    POSOutlet?: POSOutletUpdateManyWithoutTenantNestedInput
  }

  export type TenantUncheckedUpdateWithoutRatePlanInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hotels?: HotelUncheckedUpdateManyWithoutTenantNestedInput
    Users?: UserUncheckedUpdateManyWithoutTenantNestedInput
    Role?: RoleUncheckedUpdateManyWithoutTenantNestedInput
    RoomType?: RoomTypeUncheckedUpdateManyWithoutTenantNestedInput
    Room?: RoomUncheckedUpdateManyWithoutTenantNestedInput
    Guest?: GuestUncheckedUpdateManyWithoutTenantNestedInput
    Reservation?: ReservationUncheckedUpdateManyWithoutTenantNestedInput
    Folio?: FolioUncheckedUpdateManyWithoutTenantNestedInput
    POSOutlet?: POSOutletUncheckedUpdateManyWithoutTenantNestedInput
  }

  export type HotelUpsertWithoutRatePlanInput = {
    update: XOR<HotelUpdateWithoutRatePlanInput, HotelUncheckedUpdateWithoutRatePlanInput>
    create: XOR<HotelCreateWithoutRatePlanInput, HotelUncheckedCreateWithoutRatePlanInput>
    where?: HotelWhereInput
  }

  export type HotelUpdateToOneWithWhereWithoutRatePlanInput = {
    where?: HotelWhereInput
    data: XOR<HotelUpdateWithoutRatePlanInput, HotelUncheckedUpdateWithoutRatePlanInput>
  }

  export type HotelUpdateWithoutRatePlanInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    tenant?: TenantUpdateOneRequiredWithoutHotelsNestedInput
    Guest?: GuestUpdateManyWithoutHotelNestedInput
    RoomType?: RoomTypeUpdateManyWithoutHotelNestedInput
    Room?: RoomUpdateManyWithoutHotelNestedInput
    Role?: RoleUpdateManyWithoutHotelNestedInput
    User?: UserUpdateManyWithoutHotelNestedInput
    Reservation?: ReservationUpdateManyWithoutHotelNestedInput
    Folio?: FolioUpdateManyWithoutHotelNestedInput
    POSOutlet?: POSOutletUpdateManyWithoutHotelNestedInput
  }

  export type HotelUncheckedUpdateWithoutRatePlanInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    Guest?: GuestUncheckedUpdateManyWithoutHotelNestedInput
    RoomType?: RoomTypeUncheckedUpdateManyWithoutHotelNestedInput
    Room?: RoomUncheckedUpdateManyWithoutHotelNestedInput
    Role?: RoleUncheckedUpdateManyWithoutHotelNestedInput
    User?: UserUncheckedUpdateManyWithoutHotelNestedInput
    Reservation?: ReservationUncheckedUpdateManyWithoutHotelNestedInput
    Folio?: FolioUncheckedUpdateManyWithoutHotelNestedInput
    POSOutlet?: POSOutletUncheckedUpdateManyWithoutHotelNestedInput
  }

  export type TenantCreateWithoutGuestInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    hotels?: HotelCreateNestedManyWithoutTenantInput
    Users?: UserCreateNestedManyWithoutTenantInput
    Role?: RoleCreateNestedManyWithoutTenantInput
    RoomType?: RoomTypeCreateNestedManyWithoutTenantInput
    Room?: RoomCreateNestedManyWithoutTenantInput
    Reservation?: ReservationCreateNestedManyWithoutTenantInput
    Folio?: FolioCreateNestedManyWithoutTenantInput
    POSOutlet?: POSOutletCreateNestedManyWithoutTenantInput
    RatePlan?: RatePlanCreateNestedManyWithoutTenantInput
  }

  export type TenantUncheckedCreateWithoutGuestInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    hotels?: HotelUncheckedCreateNestedManyWithoutTenantInput
    Users?: UserUncheckedCreateNestedManyWithoutTenantInput
    Role?: RoleUncheckedCreateNestedManyWithoutTenantInput
    RoomType?: RoomTypeUncheckedCreateNestedManyWithoutTenantInput
    Room?: RoomUncheckedCreateNestedManyWithoutTenantInput
    Reservation?: ReservationUncheckedCreateNestedManyWithoutTenantInput
    Folio?: FolioUncheckedCreateNestedManyWithoutTenantInput
    POSOutlet?: POSOutletUncheckedCreateNestedManyWithoutTenantInput
    RatePlan?: RatePlanUncheckedCreateNestedManyWithoutTenantInput
  }

  export type TenantCreateOrConnectWithoutGuestInput = {
    where: TenantWhereUniqueInput
    create: XOR<TenantCreateWithoutGuestInput, TenantUncheckedCreateWithoutGuestInput>
  }

  export type HotelCreateWithoutGuestInput = {
    id?: string
    name: string
    country: string
    city: string
    address: string
    tenant: TenantCreateNestedOneWithoutHotelsInput
    RoomType?: RoomTypeCreateNestedManyWithoutHotelInput
    Room?: RoomCreateNestedManyWithoutHotelInput
    Role?: RoleCreateNestedManyWithoutHotelInput
    User?: UserCreateNestedManyWithoutHotelInput
    Reservation?: ReservationCreateNestedManyWithoutHotelInput
    Folio?: FolioCreateNestedManyWithoutHotelInput
    POSOutlet?: POSOutletCreateNestedManyWithoutHotelInput
    RatePlan?: RatePlanCreateNestedManyWithoutHotelInput
  }

  export type HotelUncheckedCreateWithoutGuestInput = {
    id?: string
    name: string
    country: string
    city: string
    address: string
    tenantId: string
    RoomType?: RoomTypeUncheckedCreateNestedManyWithoutHotelInput
    Room?: RoomUncheckedCreateNestedManyWithoutHotelInput
    Role?: RoleUncheckedCreateNestedManyWithoutHotelInput
    User?: UserUncheckedCreateNestedManyWithoutHotelInput
    Reservation?: ReservationUncheckedCreateNestedManyWithoutHotelInput
    Folio?: FolioUncheckedCreateNestedManyWithoutHotelInput
    POSOutlet?: POSOutletUncheckedCreateNestedManyWithoutHotelInput
    RatePlan?: RatePlanUncheckedCreateNestedManyWithoutHotelInput
  }

  export type HotelCreateOrConnectWithoutGuestInput = {
    where: HotelWhereUniqueInput
    create: XOR<HotelCreateWithoutGuestInput, HotelUncheckedCreateWithoutGuestInput>
  }

  export type ReservationCreateWithoutGuestInput = {
    id?: string
    checkIn: Date | string
    checkOut: Date | string
    status?: $Enums.ReservationStatus
    room: RoomCreateNestedOneWithoutReservationInput
    tenant: TenantCreateNestedOneWithoutReservationInput
    hotel: HotelCreateNestedOneWithoutReservationInput
  }

  export type ReservationUncheckedCreateWithoutGuestInput = {
    id?: string
    checkIn: Date | string
    checkOut: Date | string
    status?: $Enums.ReservationStatus
    roomId: string
    tenantId: string
    hotelId: string
  }

  export type ReservationCreateOrConnectWithoutGuestInput = {
    where: ReservationWhereUniqueInput
    create: XOR<ReservationCreateWithoutGuestInput, ReservationUncheckedCreateWithoutGuestInput>
  }

  export type ReservationCreateManyGuestInputEnvelope = {
    data: ReservationCreateManyGuestInput | ReservationCreateManyGuestInput[]
    skipDuplicates?: boolean
  }

  export type FolioCreateWithoutGuestInput = {
    id?: string
    balance?: Decimal | DecimalJsLike | number | string
    status?: $Enums.FolioStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    tenant: TenantCreateNestedOneWithoutFolioInput
    hotel: HotelCreateNestedOneWithoutFolioInput
  }

  export type FolioUncheckedCreateWithoutGuestInput = {
    id?: string
    balance?: Decimal | DecimalJsLike | number | string
    status?: $Enums.FolioStatus
    tenantId: string
    hotelId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FolioCreateOrConnectWithoutGuestInput = {
    where: FolioWhereUniqueInput
    create: XOR<FolioCreateWithoutGuestInput, FolioUncheckedCreateWithoutGuestInput>
  }

  export type FolioCreateManyGuestInputEnvelope = {
    data: FolioCreateManyGuestInput | FolioCreateManyGuestInput[]
    skipDuplicates?: boolean
  }

  export type TenantUpsertWithoutGuestInput = {
    update: XOR<TenantUpdateWithoutGuestInput, TenantUncheckedUpdateWithoutGuestInput>
    create: XOR<TenantCreateWithoutGuestInput, TenantUncheckedCreateWithoutGuestInput>
    where?: TenantWhereInput
  }

  export type TenantUpdateToOneWithWhereWithoutGuestInput = {
    where?: TenantWhereInput
    data: XOR<TenantUpdateWithoutGuestInput, TenantUncheckedUpdateWithoutGuestInput>
  }

  export type TenantUpdateWithoutGuestInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hotels?: HotelUpdateManyWithoutTenantNestedInput
    Users?: UserUpdateManyWithoutTenantNestedInput
    Role?: RoleUpdateManyWithoutTenantNestedInput
    RoomType?: RoomTypeUpdateManyWithoutTenantNestedInput
    Room?: RoomUpdateManyWithoutTenantNestedInput
    Reservation?: ReservationUpdateManyWithoutTenantNestedInput
    Folio?: FolioUpdateManyWithoutTenantNestedInput
    POSOutlet?: POSOutletUpdateManyWithoutTenantNestedInput
    RatePlan?: RatePlanUpdateManyWithoutTenantNestedInput
  }

  export type TenantUncheckedUpdateWithoutGuestInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hotels?: HotelUncheckedUpdateManyWithoutTenantNestedInput
    Users?: UserUncheckedUpdateManyWithoutTenantNestedInput
    Role?: RoleUncheckedUpdateManyWithoutTenantNestedInput
    RoomType?: RoomTypeUncheckedUpdateManyWithoutTenantNestedInput
    Room?: RoomUncheckedUpdateManyWithoutTenantNestedInput
    Reservation?: ReservationUncheckedUpdateManyWithoutTenantNestedInput
    Folio?: FolioUncheckedUpdateManyWithoutTenantNestedInput
    POSOutlet?: POSOutletUncheckedUpdateManyWithoutTenantNestedInput
    RatePlan?: RatePlanUncheckedUpdateManyWithoutTenantNestedInput
  }

  export type HotelUpsertWithoutGuestInput = {
    update: XOR<HotelUpdateWithoutGuestInput, HotelUncheckedUpdateWithoutGuestInput>
    create: XOR<HotelCreateWithoutGuestInput, HotelUncheckedCreateWithoutGuestInput>
    where?: HotelWhereInput
  }

  export type HotelUpdateToOneWithWhereWithoutGuestInput = {
    where?: HotelWhereInput
    data: XOR<HotelUpdateWithoutGuestInput, HotelUncheckedUpdateWithoutGuestInput>
  }

  export type HotelUpdateWithoutGuestInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    tenant?: TenantUpdateOneRequiredWithoutHotelsNestedInput
    RoomType?: RoomTypeUpdateManyWithoutHotelNestedInput
    Room?: RoomUpdateManyWithoutHotelNestedInput
    Role?: RoleUpdateManyWithoutHotelNestedInput
    User?: UserUpdateManyWithoutHotelNestedInput
    Reservation?: ReservationUpdateManyWithoutHotelNestedInput
    Folio?: FolioUpdateManyWithoutHotelNestedInput
    POSOutlet?: POSOutletUpdateManyWithoutHotelNestedInput
    RatePlan?: RatePlanUpdateManyWithoutHotelNestedInput
  }

  export type HotelUncheckedUpdateWithoutGuestInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    RoomType?: RoomTypeUncheckedUpdateManyWithoutHotelNestedInput
    Room?: RoomUncheckedUpdateManyWithoutHotelNestedInput
    Role?: RoleUncheckedUpdateManyWithoutHotelNestedInput
    User?: UserUncheckedUpdateManyWithoutHotelNestedInput
    Reservation?: ReservationUncheckedUpdateManyWithoutHotelNestedInput
    Folio?: FolioUncheckedUpdateManyWithoutHotelNestedInput
    POSOutlet?: POSOutletUncheckedUpdateManyWithoutHotelNestedInput
    RatePlan?: RatePlanUncheckedUpdateManyWithoutHotelNestedInput
  }

  export type ReservationUpsertWithWhereUniqueWithoutGuestInput = {
    where: ReservationWhereUniqueInput
    update: XOR<ReservationUpdateWithoutGuestInput, ReservationUncheckedUpdateWithoutGuestInput>
    create: XOR<ReservationCreateWithoutGuestInput, ReservationUncheckedCreateWithoutGuestInput>
  }

  export type ReservationUpdateWithWhereUniqueWithoutGuestInput = {
    where: ReservationWhereUniqueInput
    data: XOR<ReservationUpdateWithoutGuestInput, ReservationUncheckedUpdateWithoutGuestInput>
  }

  export type ReservationUpdateManyWithWhereWithoutGuestInput = {
    where: ReservationScalarWhereInput
    data: XOR<ReservationUpdateManyMutationInput, ReservationUncheckedUpdateManyWithoutGuestInput>
  }

  export type FolioUpsertWithWhereUniqueWithoutGuestInput = {
    where: FolioWhereUniqueInput
    update: XOR<FolioUpdateWithoutGuestInput, FolioUncheckedUpdateWithoutGuestInput>
    create: XOR<FolioCreateWithoutGuestInput, FolioUncheckedCreateWithoutGuestInput>
  }

  export type FolioUpdateWithWhereUniqueWithoutGuestInput = {
    where: FolioWhereUniqueInput
    data: XOR<FolioUpdateWithoutGuestInput, FolioUncheckedUpdateWithoutGuestInput>
  }

  export type FolioUpdateManyWithWhereWithoutGuestInput = {
    where: FolioScalarWhereInput
    data: XOR<FolioUpdateManyMutationInput, FolioUncheckedUpdateManyWithoutGuestInput>
  }

  export type GuestCreateWithoutReservationInput = {
    id?: string
    firstName: string
    lastName: string
    email?: string | null
    phoneNumber?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tenant: TenantCreateNestedOneWithoutGuestInput
    hotel: HotelCreateNestedOneWithoutGuestInput
    Folio?: FolioCreateNestedManyWithoutGuestInput
  }

  export type GuestUncheckedCreateWithoutReservationInput = {
    id?: string
    firstName: string
    lastName: string
    email?: string | null
    phoneNumber?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tenantId: string
    hotelId: string
    Folio?: FolioUncheckedCreateNestedManyWithoutGuestInput
  }

  export type GuestCreateOrConnectWithoutReservationInput = {
    where: GuestWhereUniqueInput
    create: XOR<GuestCreateWithoutReservationInput, GuestUncheckedCreateWithoutReservationInput>
  }

  export type RoomCreateWithoutReservationInput = {
    id?: string
    roomNumber: string
    status?: $Enums.RoomStatus
    roomType: RoomTypeCreateNestedOneWithoutRoomInput
    tenant: TenantCreateNestedOneWithoutRoomInput
    hotel: HotelCreateNestedOneWithoutRoomInput
  }

  export type RoomUncheckedCreateWithoutReservationInput = {
    id?: string
    roomNumber: string
    status?: $Enums.RoomStatus
    roomTypeId: string
    tenantId: string
    hotelId: string
  }

  export type RoomCreateOrConnectWithoutReservationInput = {
    where: RoomWhereUniqueInput
    create: XOR<RoomCreateWithoutReservationInput, RoomUncheckedCreateWithoutReservationInput>
  }

  export type TenantCreateWithoutReservationInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    hotels?: HotelCreateNestedManyWithoutTenantInput
    Users?: UserCreateNestedManyWithoutTenantInput
    Role?: RoleCreateNestedManyWithoutTenantInput
    RoomType?: RoomTypeCreateNestedManyWithoutTenantInput
    Room?: RoomCreateNestedManyWithoutTenantInput
    Guest?: GuestCreateNestedManyWithoutTenantInput
    Folio?: FolioCreateNestedManyWithoutTenantInput
    POSOutlet?: POSOutletCreateNestedManyWithoutTenantInput
    RatePlan?: RatePlanCreateNestedManyWithoutTenantInput
  }

  export type TenantUncheckedCreateWithoutReservationInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    hotels?: HotelUncheckedCreateNestedManyWithoutTenantInput
    Users?: UserUncheckedCreateNestedManyWithoutTenantInput
    Role?: RoleUncheckedCreateNestedManyWithoutTenantInput
    RoomType?: RoomTypeUncheckedCreateNestedManyWithoutTenantInput
    Room?: RoomUncheckedCreateNestedManyWithoutTenantInput
    Guest?: GuestUncheckedCreateNestedManyWithoutTenantInput
    Folio?: FolioUncheckedCreateNestedManyWithoutTenantInput
    POSOutlet?: POSOutletUncheckedCreateNestedManyWithoutTenantInput
    RatePlan?: RatePlanUncheckedCreateNestedManyWithoutTenantInput
  }

  export type TenantCreateOrConnectWithoutReservationInput = {
    where: TenantWhereUniqueInput
    create: XOR<TenantCreateWithoutReservationInput, TenantUncheckedCreateWithoutReservationInput>
  }

  export type HotelCreateWithoutReservationInput = {
    id?: string
    name: string
    country: string
    city: string
    address: string
    tenant: TenantCreateNestedOneWithoutHotelsInput
    Guest?: GuestCreateNestedManyWithoutHotelInput
    RoomType?: RoomTypeCreateNestedManyWithoutHotelInput
    Room?: RoomCreateNestedManyWithoutHotelInput
    Role?: RoleCreateNestedManyWithoutHotelInput
    User?: UserCreateNestedManyWithoutHotelInput
    Folio?: FolioCreateNestedManyWithoutHotelInput
    POSOutlet?: POSOutletCreateNestedManyWithoutHotelInput
    RatePlan?: RatePlanCreateNestedManyWithoutHotelInput
  }

  export type HotelUncheckedCreateWithoutReservationInput = {
    id?: string
    name: string
    country: string
    city: string
    address: string
    tenantId: string
    Guest?: GuestUncheckedCreateNestedManyWithoutHotelInput
    RoomType?: RoomTypeUncheckedCreateNestedManyWithoutHotelInput
    Room?: RoomUncheckedCreateNestedManyWithoutHotelInput
    Role?: RoleUncheckedCreateNestedManyWithoutHotelInput
    User?: UserUncheckedCreateNestedManyWithoutHotelInput
    Folio?: FolioUncheckedCreateNestedManyWithoutHotelInput
    POSOutlet?: POSOutletUncheckedCreateNestedManyWithoutHotelInput
    RatePlan?: RatePlanUncheckedCreateNestedManyWithoutHotelInput
  }

  export type HotelCreateOrConnectWithoutReservationInput = {
    where: HotelWhereUniqueInput
    create: XOR<HotelCreateWithoutReservationInput, HotelUncheckedCreateWithoutReservationInput>
  }

  export type GuestUpsertWithoutReservationInput = {
    update: XOR<GuestUpdateWithoutReservationInput, GuestUncheckedUpdateWithoutReservationInput>
    create: XOR<GuestCreateWithoutReservationInput, GuestUncheckedCreateWithoutReservationInput>
    where?: GuestWhereInput
  }

  export type GuestUpdateToOneWithWhereWithoutReservationInput = {
    where?: GuestWhereInput
    data: XOR<GuestUpdateWithoutReservationInput, GuestUncheckedUpdateWithoutReservationInput>
  }

  export type GuestUpdateWithoutReservationInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: TenantUpdateOneRequiredWithoutGuestNestedInput
    hotel?: HotelUpdateOneRequiredWithoutGuestNestedInput
    Folio?: FolioUpdateManyWithoutGuestNestedInput
  }

  export type GuestUncheckedUpdateWithoutReservationInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenantId?: StringFieldUpdateOperationsInput | string
    hotelId?: StringFieldUpdateOperationsInput | string
    Folio?: FolioUncheckedUpdateManyWithoutGuestNestedInput
  }

  export type RoomUpsertWithoutReservationInput = {
    update: XOR<RoomUpdateWithoutReservationInput, RoomUncheckedUpdateWithoutReservationInput>
    create: XOR<RoomCreateWithoutReservationInput, RoomUncheckedCreateWithoutReservationInput>
    where?: RoomWhereInput
  }

  export type RoomUpdateToOneWithWhereWithoutReservationInput = {
    where?: RoomWhereInput
    data: XOR<RoomUpdateWithoutReservationInput, RoomUncheckedUpdateWithoutReservationInput>
  }

  export type RoomUpdateWithoutReservationInput = {
    id?: StringFieldUpdateOperationsInput | string
    roomNumber?: StringFieldUpdateOperationsInput | string
    status?: EnumRoomStatusFieldUpdateOperationsInput | $Enums.RoomStatus
    roomType?: RoomTypeUpdateOneRequiredWithoutRoomNestedInput
    tenant?: TenantUpdateOneRequiredWithoutRoomNestedInput
    hotel?: HotelUpdateOneRequiredWithoutRoomNestedInput
  }

  export type RoomUncheckedUpdateWithoutReservationInput = {
    id?: StringFieldUpdateOperationsInput | string
    roomNumber?: StringFieldUpdateOperationsInput | string
    status?: EnumRoomStatusFieldUpdateOperationsInput | $Enums.RoomStatus
    roomTypeId?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    hotelId?: StringFieldUpdateOperationsInput | string
  }

  export type TenantUpsertWithoutReservationInput = {
    update: XOR<TenantUpdateWithoutReservationInput, TenantUncheckedUpdateWithoutReservationInput>
    create: XOR<TenantCreateWithoutReservationInput, TenantUncheckedCreateWithoutReservationInput>
    where?: TenantWhereInput
  }

  export type TenantUpdateToOneWithWhereWithoutReservationInput = {
    where?: TenantWhereInput
    data: XOR<TenantUpdateWithoutReservationInput, TenantUncheckedUpdateWithoutReservationInput>
  }

  export type TenantUpdateWithoutReservationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hotels?: HotelUpdateManyWithoutTenantNestedInput
    Users?: UserUpdateManyWithoutTenantNestedInput
    Role?: RoleUpdateManyWithoutTenantNestedInput
    RoomType?: RoomTypeUpdateManyWithoutTenantNestedInput
    Room?: RoomUpdateManyWithoutTenantNestedInput
    Guest?: GuestUpdateManyWithoutTenantNestedInput
    Folio?: FolioUpdateManyWithoutTenantNestedInput
    POSOutlet?: POSOutletUpdateManyWithoutTenantNestedInput
    RatePlan?: RatePlanUpdateManyWithoutTenantNestedInput
  }

  export type TenantUncheckedUpdateWithoutReservationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hotels?: HotelUncheckedUpdateManyWithoutTenantNestedInput
    Users?: UserUncheckedUpdateManyWithoutTenantNestedInput
    Role?: RoleUncheckedUpdateManyWithoutTenantNestedInput
    RoomType?: RoomTypeUncheckedUpdateManyWithoutTenantNestedInput
    Room?: RoomUncheckedUpdateManyWithoutTenantNestedInput
    Guest?: GuestUncheckedUpdateManyWithoutTenantNestedInput
    Folio?: FolioUncheckedUpdateManyWithoutTenantNestedInput
    POSOutlet?: POSOutletUncheckedUpdateManyWithoutTenantNestedInput
    RatePlan?: RatePlanUncheckedUpdateManyWithoutTenantNestedInput
  }

  export type HotelUpsertWithoutReservationInput = {
    update: XOR<HotelUpdateWithoutReservationInput, HotelUncheckedUpdateWithoutReservationInput>
    create: XOR<HotelCreateWithoutReservationInput, HotelUncheckedCreateWithoutReservationInput>
    where?: HotelWhereInput
  }

  export type HotelUpdateToOneWithWhereWithoutReservationInput = {
    where?: HotelWhereInput
    data: XOR<HotelUpdateWithoutReservationInput, HotelUncheckedUpdateWithoutReservationInput>
  }

  export type HotelUpdateWithoutReservationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    tenant?: TenantUpdateOneRequiredWithoutHotelsNestedInput
    Guest?: GuestUpdateManyWithoutHotelNestedInput
    RoomType?: RoomTypeUpdateManyWithoutHotelNestedInput
    Room?: RoomUpdateManyWithoutHotelNestedInput
    Role?: RoleUpdateManyWithoutHotelNestedInput
    User?: UserUpdateManyWithoutHotelNestedInput
    Folio?: FolioUpdateManyWithoutHotelNestedInput
    POSOutlet?: POSOutletUpdateManyWithoutHotelNestedInput
    RatePlan?: RatePlanUpdateManyWithoutHotelNestedInput
  }

  export type HotelUncheckedUpdateWithoutReservationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    Guest?: GuestUncheckedUpdateManyWithoutHotelNestedInput
    RoomType?: RoomTypeUncheckedUpdateManyWithoutHotelNestedInput
    Room?: RoomUncheckedUpdateManyWithoutHotelNestedInput
    Role?: RoleUncheckedUpdateManyWithoutHotelNestedInput
    User?: UserUncheckedUpdateManyWithoutHotelNestedInput
    Folio?: FolioUncheckedUpdateManyWithoutHotelNestedInput
    POSOutlet?: POSOutletUncheckedUpdateManyWithoutHotelNestedInput
    RatePlan?: RatePlanUncheckedUpdateManyWithoutHotelNestedInput
  }

  export type GuestCreateWithoutFolioInput = {
    id?: string
    firstName: string
    lastName: string
    email?: string | null
    phoneNumber?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tenant: TenantCreateNestedOneWithoutGuestInput
    hotel: HotelCreateNestedOneWithoutGuestInput
    Reservation?: ReservationCreateNestedManyWithoutGuestInput
  }

  export type GuestUncheckedCreateWithoutFolioInput = {
    id?: string
    firstName: string
    lastName: string
    email?: string | null
    phoneNumber?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tenantId: string
    hotelId: string
    Reservation?: ReservationUncheckedCreateNestedManyWithoutGuestInput
  }

  export type GuestCreateOrConnectWithoutFolioInput = {
    where: GuestWhereUniqueInput
    create: XOR<GuestCreateWithoutFolioInput, GuestUncheckedCreateWithoutFolioInput>
  }

  export type TenantCreateWithoutFolioInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    hotels?: HotelCreateNestedManyWithoutTenantInput
    Users?: UserCreateNestedManyWithoutTenantInput
    Role?: RoleCreateNestedManyWithoutTenantInput
    RoomType?: RoomTypeCreateNestedManyWithoutTenantInput
    Room?: RoomCreateNestedManyWithoutTenantInput
    Guest?: GuestCreateNestedManyWithoutTenantInput
    Reservation?: ReservationCreateNestedManyWithoutTenantInput
    POSOutlet?: POSOutletCreateNestedManyWithoutTenantInput
    RatePlan?: RatePlanCreateNestedManyWithoutTenantInput
  }

  export type TenantUncheckedCreateWithoutFolioInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    hotels?: HotelUncheckedCreateNestedManyWithoutTenantInput
    Users?: UserUncheckedCreateNestedManyWithoutTenantInput
    Role?: RoleUncheckedCreateNestedManyWithoutTenantInput
    RoomType?: RoomTypeUncheckedCreateNestedManyWithoutTenantInput
    Room?: RoomUncheckedCreateNestedManyWithoutTenantInput
    Guest?: GuestUncheckedCreateNestedManyWithoutTenantInput
    Reservation?: ReservationUncheckedCreateNestedManyWithoutTenantInput
    POSOutlet?: POSOutletUncheckedCreateNestedManyWithoutTenantInput
    RatePlan?: RatePlanUncheckedCreateNestedManyWithoutTenantInput
  }

  export type TenantCreateOrConnectWithoutFolioInput = {
    where: TenantWhereUniqueInput
    create: XOR<TenantCreateWithoutFolioInput, TenantUncheckedCreateWithoutFolioInput>
  }

  export type HotelCreateWithoutFolioInput = {
    id?: string
    name: string
    country: string
    city: string
    address: string
    tenant: TenantCreateNestedOneWithoutHotelsInput
    Guest?: GuestCreateNestedManyWithoutHotelInput
    RoomType?: RoomTypeCreateNestedManyWithoutHotelInput
    Room?: RoomCreateNestedManyWithoutHotelInput
    Role?: RoleCreateNestedManyWithoutHotelInput
    User?: UserCreateNestedManyWithoutHotelInput
    Reservation?: ReservationCreateNestedManyWithoutHotelInput
    POSOutlet?: POSOutletCreateNestedManyWithoutHotelInput
    RatePlan?: RatePlanCreateNestedManyWithoutHotelInput
  }

  export type HotelUncheckedCreateWithoutFolioInput = {
    id?: string
    name: string
    country: string
    city: string
    address: string
    tenantId: string
    Guest?: GuestUncheckedCreateNestedManyWithoutHotelInput
    RoomType?: RoomTypeUncheckedCreateNestedManyWithoutHotelInput
    Room?: RoomUncheckedCreateNestedManyWithoutHotelInput
    Role?: RoleUncheckedCreateNestedManyWithoutHotelInput
    User?: UserUncheckedCreateNestedManyWithoutHotelInput
    Reservation?: ReservationUncheckedCreateNestedManyWithoutHotelInput
    POSOutlet?: POSOutletUncheckedCreateNestedManyWithoutHotelInput
    RatePlan?: RatePlanUncheckedCreateNestedManyWithoutHotelInput
  }

  export type HotelCreateOrConnectWithoutFolioInput = {
    where: HotelWhereUniqueInput
    create: XOR<HotelCreateWithoutFolioInput, HotelUncheckedCreateWithoutFolioInput>
  }

  export type GuestUpsertWithoutFolioInput = {
    update: XOR<GuestUpdateWithoutFolioInput, GuestUncheckedUpdateWithoutFolioInput>
    create: XOR<GuestCreateWithoutFolioInput, GuestUncheckedCreateWithoutFolioInput>
    where?: GuestWhereInput
  }

  export type GuestUpdateToOneWithWhereWithoutFolioInput = {
    where?: GuestWhereInput
    data: XOR<GuestUpdateWithoutFolioInput, GuestUncheckedUpdateWithoutFolioInput>
  }

  export type GuestUpdateWithoutFolioInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: TenantUpdateOneRequiredWithoutGuestNestedInput
    hotel?: HotelUpdateOneRequiredWithoutGuestNestedInput
    Reservation?: ReservationUpdateManyWithoutGuestNestedInput
  }

  export type GuestUncheckedUpdateWithoutFolioInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenantId?: StringFieldUpdateOperationsInput | string
    hotelId?: StringFieldUpdateOperationsInput | string
    Reservation?: ReservationUncheckedUpdateManyWithoutGuestNestedInput
  }

  export type TenantUpsertWithoutFolioInput = {
    update: XOR<TenantUpdateWithoutFolioInput, TenantUncheckedUpdateWithoutFolioInput>
    create: XOR<TenantCreateWithoutFolioInput, TenantUncheckedCreateWithoutFolioInput>
    where?: TenantWhereInput
  }

  export type TenantUpdateToOneWithWhereWithoutFolioInput = {
    where?: TenantWhereInput
    data: XOR<TenantUpdateWithoutFolioInput, TenantUncheckedUpdateWithoutFolioInput>
  }

  export type TenantUpdateWithoutFolioInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hotels?: HotelUpdateManyWithoutTenantNestedInput
    Users?: UserUpdateManyWithoutTenantNestedInput
    Role?: RoleUpdateManyWithoutTenantNestedInput
    RoomType?: RoomTypeUpdateManyWithoutTenantNestedInput
    Room?: RoomUpdateManyWithoutTenantNestedInput
    Guest?: GuestUpdateManyWithoutTenantNestedInput
    Reservation?: ReservationUpdateManyWithoutTenantNestedInput
    POSOutlet?: POSOutletUpdateManyWithoutTenantNestedInput
    RatePlan?: RatePlanUpdateManyWithoutTenantNestedInput
  }

  export type TenantUncheckedUpdateWithoutFolioInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hotels?: HotelUncheckedUpdateManyWithoutTenantNestedInput
    Users?: UserUncheckedUpdateManyWithoutTenantNestedInput
    Role?: RoleUncheckedUpdateManyWithoutTenantNestedInput
    RoomType?: RoomTypeUncheckedUpdateManyWithoutTenantNestedInput
    Room?: RoomUncheckedUpdateManyWithoutTenantNestedInput
    Guest?: GuestUncheckedUpdateManyWithoutTenantNestedInput
    Reservation?: ReservationUncheckedUpdateManyWithoutTenantNestedInput
    POSOutlet?: POSOutletUncheckedUpdateManyWithoutTenantNestedInput
    RatePlan?: RatePlanUncheckedUpdateManyWithoutTenantNestedInput
  }

  export type HotelUpsertWithoutFolioInput = {
    update: XOR<HotelUpdateWithoutFolioInput, HotelUncheckedUpdateWithoutFolioInput>
    create: XOR<HotelCreateWithoutFolioInput, HotelUncheckedCreateWithoutFolioInput>
    where?: HotelWhereInput
  }

  export type HotelUpdateToOneWithWhereWithoutFolioInput = {
    where?: HotelWhereInput
    data: XOR<HotelUpdateWithoutFolioInput, HotelUncheckedUpdateWithoutFolioInput>
  }

  export type HotelUpdateWithoutFolioInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    tenant?: TenantUpdateOneRequiredWithoutHotelsNestedInput
    Guest?: GuestUpdateManyWithoutHotelNestedInput
    RoomType?: RoomTypeUpdateManyWithoutHotelNestedInput
    Room?: RoomUpdateManyWithoutHotelNestedInput
    Role?: RoleUpdateManyWithoutHotelNestedInput
    User?: UserUpdateManyWithoutHotelNestedInput
    Reservation?: ReservationUpdateManyWithoutHotelNestedInput
    POSOutlet?: POSOutletUpdateManyWithoutHotelNestedInput
    RatePlan?: RatePlanUpdateManyWithoutHotelNestedInput
  }

  export type HotelUncheckedUpdateWithoutFolioInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    Guest?: GuestUncheckedUpdateManyWithoutHotelNestedInput
    RoomType?: RoomTypeUncheckedUpdateManyWithoutHotelNestedInput
    Room?: RoomUncheckedUpdateManyWithoutHotelNestedInput
    Role?: RoleUncheckedUpdateManyWithoutHotelNestedInput
    User?: UserUncheckedUpdateManyWithoutHotelNestedInput
    Reservation?: ReservationUncheckedUpdateManyWithoutHotelNestedInput
    POSOutlet?: POSOutletUncheckedUpdateManyWithoutHotelNestedInput
    RatePlan?: RatePlanUncheckedUpdateManyWithoutHotelNestedInput
  }

  export type TenantCreateWithoutPOSOutletInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    hotels?: HotelCreateNestedManyWithoutTenantInput
    Users?: UserCreateNestedManyWithoutTenantInput
    Role?: RoleCreateNestedManyWithoutTenantInput
    RoomType?: RoomTypeCreateNestedManyWithoutTenantInput
    Room?: RoomCreateNestedManyWithoutTenantInput
    Guest?: GuestCreateNestedManyWithoutTenantInput
    Reservation?: ReservationCreateNestedManyWithoutTenantInput
    Folio?: FolioCreateNestedManyWithoutTenantInput
    RatePlan?: RatePlanCreateNestedManyWithoutTenantInput
  }

  export type TenantUncheckedCreateWithoutPOSOutletInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    hotels?: HotelUncheckedCreateNestedManyWithoutTenantInput
    Users?: UserUncheckedCreateNestedManyWithoutTenantInput
    Role?: RoleUncheckedCreateNestedManyWithoutTenantInput
    RoomType?: RoomTypeUncheckedCreateNestedManyWithoutTenantInput
    Room?: RoomUncheckedCreateNestedManyWithoutTenantInput
    Guest?: GuestUncheckedCreateNestedManyWithoutTenantInput
    Reservation?: ReservationUncheckedCreateNestedManyWithoutTenantInput
    Folio?: FolioUncheckedCreateNestedManyWithoutTenantInput
    RatePlan?: RatePlanUncheckedCreateNestedManyWithoutTenantInput
  }

  export type TenantCreateOrConnectWithoutPOSOutletInput = {
    where: TenantWhereUniqueInput
    create: XOR<TenantCreateWithoutPOSOutletInput, TenantUncheckedCreateWithoutPOSOutletInput>
  }

  export type HotelCreateWithoutPOSOutletInput = {
    id?: string
    name: string
    country: string
    city: string
    address: string
    tenant: TenantCreateNestedOneWithoutHotelsInput
    Guest?: GuestCreateNestedManyWithoutHotelInput
    RoomType?: RoomTypeCreateNestedManyWithoutHotelInput
    Room?: RoomCreateNestedManyWithoutHotelInput
    Role?: RoleCreateNestedManyWithoutHotelInput
    User?: UserCreateNestedManyWithoutHotelInput
    Reservation?: ReservationCreateNestedManyWithoutHotelInput
    Folio?: FolioCreateNestedManyWithoutHotelInput
    RatePlan?: RatePlanCreateNestedManyWithoutHotelInput
  }

  export type HotelUncheckedCreateWithoutPOSOutletInput = {
    id?: string
    name: string
    country: string
    city: string
    address: string
    tenantId: string
    Guest?: GuestUncheckedCreateNestedManyWithoutHotelInput
    RoomType?: RoomTypeUncheckedCreateNestedManyWithoutHotelInput
    Room?: RoomUncheckedCreateNestedManyWithoutHotelInput
    Role?: RoleUncheckedCreateNestedManyWithoutHotelInput
    User?: UserUncheckedCreateNestedManyWithoutHotelInput
    Reservation?: ReservationUncheckedCreateNestedManyWithoutHotelInput
    Folio?: FolioUncheckedCreateNestedManyWithoutHotelInput
    RatePlan?: RatePlanUncheckedCreateNestedManyWithoutHotelInput
  }

  export type HotelCreateOrConnectWithoutPOSOutletInput = {
    where: HotelWhereUniqueInput
    create: XOR<HotelCreateWithoutPOSOutletInput, HotelUncheckedCreateWithoutPOSOutletInput>
  }

  export type TenantUpsertWithoutPOSOutletInput = {
    update: XOR<TenantUpdateWithoutPOSOutletInput, TenantUncheckedUpdateWithoutPOSOutletInput>
    create: XOR<TenantCreateWithoutPOSOutletInput, TenantUncheckedCreateWithoutPOSOutletInput>
    where?: TenantWhereInput
  }

  export type TenantUpdateToOneWithWhereWithoutPOSOutletInput = {
    where?: TenantWhereInput
    data: XOR<TenantUpdateWithoutPOSOutletInput, TenantUncheckedUpdateWithoutPOSOutletInput>
  }

  export type TenantUpdateWithoutPOSOutletInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hotels?: HotelUpdateManyWithoutTenantNestedInput
    Users?: UserUpdateManyWithoutTenantNestedInput
    Role?: RoleUpdateManyWithoutTenantNestedInput
    RoomType?: RoomTypeUpdateManyWithoutTenantNestedInput
    Room?: RoomUpdateManyWithoutTenantNestedInput
    Guest?: GuestUpdateManyWithoutTenantNestedInput
    Reservation?: ReservationUpdateManyWithoutTenantNestedInput
    Folio?: FolioUpdateManyWithoutTenantNestedInput
    RatePlan?: RatePlanUpdateManyWithoutTenantNestedInput
  }

  export type TenantUncheckedUpdateWithoutPOSOutletInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hotels?: HotelUncheckedUpdateManyWithoutTenantNestedInput
    Users?: UserUncheckedUpdateManyWithoutTenantNestedInput
    Role?: RoleUncheckedUpdateManyWithoutTenantNestedInput
    RoomType?: RoomTypeUncheckedUpdateManyWithoutTenantNestedInput
    Room?: RoomUncheckedUpdateManyWithoutTenantNestedInput
    Guest?: GuestUncheckedUpdateManyWithoutTenantNestedInput
    Reservation?: ReservationUncheckedUpdateManyWithoutTenantNestedInput
    Folio?: FolioUncheckedUpdateManyWithoutTenantNestedInput
    RatePlan?: RatePlanUncheckedUpdateManyWithoutTenantNestedInput
  }

  export type HotelUpsertWithoutPOSOutletInput = {
    update: XOR<HotelUpdateWithoutPOSOutletInput, HotelUncheckedUpdateWithoutPOSOutletInput>
    create: XOR<HotelCreateWithoutPOSOutletInput, HotelUncheckedCreateWithoutPOSOutletInput>
    where?: HotelWhereInput
  }

  export type HotelUpdateToOneWithWhereWithoutPOSOutletInput = {
    where?: HotelWhereInput
    data: XOR<HotelUpdateWithoutPOSOutletInput, HotelUncheckedUpdateWithoutPOSOutletInput>
  }

  export type HotelUpdateWithoutPOSOutletInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    tenant?: TenantUpdateOneRequiredWithoutHotelsNestedInput
    Guest?: GuestUpdateManyWithoutHotelNestedInput
    RoomType?: RoomTypeUpdateManyWithoutHotelNestedInput
    Room?: RoomUpdateManyWithoutHotelNestedInput
    Role?: RoleUpdateManyWithoutHotelNestedInput
    User?: UserUpdateManyWithoutHotelNestedInput
    Reservation?: ReservationUpdateManyWithoutHotelNestedInput
    Folio?: FolioUpdateManyWithoutHotelNestedInput
    RatePlan?: RatePlanUpdateManyWithoutHotelNestedInput
  }

  export type HotelUncheckedUpdateWithoutPOSOutletInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    Guest?: GuestUncheckedUpdateManyWithoutHotelNestedInput
    RoomType?: RoomTypeUncheckedUpdateManyWithoutHotelNestedInput
    Room?: RoomUncheckedUpdateManyWithoutHotelNestedInput
    Role?: RoleUncheckedUpdateManyWithoutHotelNestedInput
    User?: UserUncheckedUpdateManyWithoutHotelNestedInput
    Reservation?: ReservationUncheckedUpdateManyWithoutHotelNestedInput
    Folio?: FolioUncheckedUpdateManyWithoutHotelNestedInput
    RatePlan?: RatePlanUncheckedUpdateManyWithoutHotelNestedInput
  }

  export type HotelCreateManyTenantInput = {
    id?: string
    name: string
    country: string
    city: string
    address: string
  }

  export type UserCreateManyTenantInput = {
    id?: string
    email: string
    passwordHash: string
    firstName: string
    lastName: string
    isActive?: boolean
    hotelId: string
    roleId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RoleCreateManyTenantInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    hotelId: string
  }

  export type RoomTypeCreateManyTenantInput = {
    id?: string
    name: string
    description?: string | null
    baseRate?: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    hotelId: string
  }

  export type RoomCreateManyTenantInput = {
    id?: string
    roomNumber: string
    status?: $Enums.RoomStatus
    roomTypeId: string
    hotelId: string
  }

  export type GuestCreateManyTenantInput = {
    id?: string
    firstName: string
    lastName: string
    email?: string | null
    phoneNumber?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    hotelId: string
  }

  export type ReservationCreateManyTenantInput = {
    id?: string
    checkIn: Date | string
    checkOut: Date | string
    status?: $Enums.ReservationStatus
    guestId: string
    roomId: string
    hotelId: string
  }

  export type FolioCreateManyTenantInput = {
    id?: string
    guestId: string
    balance?: Decimal | DecimalJsLike | number | string
    status?: $Enums.FolioStatus
    hotelId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type POSOutletCreateManyTenantInput = {
    id?: string
    name: string
    hotelId: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RatePlanCreateManyTenantInput = {
    id?: string
    hotelId: string
    code: string
    name: string
    baseAdjType: $Enums.AdjType
    baseAdjVal: Decimal | DecimalJsLike | number | string
    currency: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HotelUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    Guest?: GuestUpdateManyWithoutHotelNestedInput
    RoomType?: RoomTypeUpdateManyWithoutHotelNestedInput
    Room?: RoomUpdateManyWithoutHotelNestedInput
    Role?: RoleUpdateManyWithoutHotelNestedInput
    User?: UserUpdateManyWithoutHotelNestedInput
    Reservation?: ReservationUpdateManyWithoutHotelNestedInput
    Folio?: FolioUpdateManyWithoutHotelNestedInput
    POSOutlet?: POSOutletUpdateManyWithoutHotelNestedInput
    RatePlan?: RatePlanUpdateManyWithoutHotelNestedInput
  }

  export type HotelUncheckedUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    Guest?: GuestUncheckedUpdateManyWithoutHotelNestedInput
    RoomType?: RoomTypeUncheckedUpdateManyWithoutHotelNestedInput
    Room?: RoomUncheckedUpdateManyWithoutHotelNestedInput
    Role?: RoleUncheckedUpdateManyWithoutHotelNestedInput
    User?: UserUncheckedUpdateManyWithoutHotelNestedInput
    Reservation?: ReservationUncheckedUpdateManyWithoutHotelNestedInput
    Folio?: FolioUncheckedUpdateManyWithoutHotelNestedInput
    POSOutlet?: POSOutletUncheckedUpdateManyWithoutHotelNestedInput
    RatePlan?: RatePlanUncheckedUpdateManyWithoutHotelNestedInput
  }

  export type HotelUncheckedUpdateManyWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
  }

  export type UserUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hotel?: HotelUpdateOneRequiredWithoutUserNestedInput
    role?: RoleUpdateOneRequiredWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    hotelId?: StringFieldUpdateOperationsInput | string
    roleId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    hotelId?: StringFieldUpdateOperationsInput | string
    roleId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoleUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hotel?: HotelUpdateOneRequiredWithoutRoleNestedInput
    Users?: UserUpdateManyWithoutRoleNestedInput
    permissions?: PermissionUpdateManyWithoutRolesNestedInput
  }

  export type RoleUncheckedUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hotelId?: StringFieldUpdateOperationsInput | string
    Users?: UserUncheckedUpdateManyWithoutRoleNestedInput
    permissions?: PermissionUncheckedUpdateManyWithoutRolesNestedInput
  }

  export type RoleUncheckedUpdateManyWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hotelId?: StringFieldUpdateOperationsInput | string
  }

  export type RoomTypeUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    baseRate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hotel?: HotelUpdateOneRequiredWithoutRoomTypeNestedInput
    Room?: RoomUpdateManyWithoutRoomTypeNestedInput
  }

  export type RoomTypeUncheckedUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    baseRate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hotelId?: StringFieldUpdateOperationsInput | string
    Room?: RoomUncheckedUpdateManyWithoutRoomTypeNestedInput
  }

  export type RoomTypeUncheckedUpdateManyWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    baseRate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hotelId?: StringFieldUpdateOperationsInput | string
  }

  export type RoomUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    roomNumber?: StringFieldUpdateOperationsInput | string
    status?: EnumRoomStatusFieldUpdateOperationsInput | $Enums.RoomStatus
    roomType?: RoomTypeUpdateOneRequiredWithoutRoomNestedInput
    hotel?: HotelUpdateOneRequiredWithoutRoomNestedInput
    Reservation?: ReservationUpdateManyWithoutRoomNestedInput
  }

  export type RoomUncheckedUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    roomNumber?: StringFieldUpdateOperationsInput | string
    status?: EnumRoomStatusFieldUpdateOperationsInput | $Enums.RoomStatus
    roomTypeId?: StringFieldUpdateOperationsInput | string
    hotelId?: StringFieldUpdateOperationsInput | string
    Reservation?: ReservationUncheckedUpdateManyWithoutRoomNestedInput
  }

  export type RoomUncheckedUpdateManyWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    roomNumber?: StringFieldUpdateOperationsInput | string
    status?: EnumRoomStatusFieldUpdateOperationsInput | $Enums.RoomStatus
    roomTypeId?: StringFieldUpdateOperationsInput | string
    hotelId?: StringFieldUpdateOperationsInput | string
  }

  export type GuestUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hotel?: HotelUpdateOneRequiredWithoutGuestNestedInput
    Reservation?: ReservationUpdateManyWithoutGuestNestedInput
    Folio?: FolioUpdateManyWithoutGuestNestedInput
  }

  export type GuestUncheckedUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hotelId?: StringFieldUpdateOperationsInput | string
    Reservation?: ReservationUncheckedUpdateManyWithoutGuestNestedInput
    Folio?: FolioUncheckedUpdateManyWithoutGuestNestedInput
  }

  export type GuestUncheckedUpdateManyWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hotelId?: StringFieldUpdateOperationsInput | string
  }

  export type ReservationUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumReservationStatusFieldUpdateOperationsInput | $Enums.ReservationStatus
    guest?: GuestUpdateOneRequiredWithoutReservationNestedInput
    room?: RoomUpdateOneRequiredWithoutReservationNestedInput
    hotel?: HotelUpdateOneRequiredWithoutReservationNestedInput
  }

  export type ReservationUncheckedUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumReservationStatusFieldUpdateOperationsInput | $Enums.ReservationStatus
    guestId?: StringFieldUpdateOperationsInput | string
    roomId?: StringFieldUpdateOperationsInput | string
    hotelId?: StringFieldUpdateOperationsInput | string
  }

  export type ReservationUncheckedUpdateManyWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumReservationStatusFieldUpdateOperationsInput | $Enums.ReservationStatus
    guestId?: StringFieldUpdateOperationsInput | string
    roomId?: StringFieldUpdateOperationsInput | string
    hotelId?: StringFieldUpdateOperationsInput | string
  }

  export type FolioUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumFolioStatusFieldUpdateOperationsInput | $Enums.FolioStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    guest?: GuestUpdateOneRequiredWithoutFolioNestedInput
    hotel?: HotelUpdateOneRequiredWithoutFolioNestedInput
  }

  export type FolioUncheckedUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    guestId?: StringFieldUpdateOperationsInput | string
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumFolioStatusFieldUpdateOperationsInput | $Enums.FolioStatus
    hotelId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FolioUncheckedUpdateManyWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    guestId?: StringFieldUpdateOperationsInput | string
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumFolioStatusFieldUpdateOperationsInput | $Enums.FolioStatus
    hotelId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type POSOutletUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hotel?: HotelUpdateOneRequiredWithoutPOSOutletNestedInput
  }

  export type POSOutletUncheckedUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    hotelId?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type POSOutletUncheckedUpdateManyWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    hotelId?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RatePlanUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    baseAdjType?: EnumAdjTypeFieldUpdateOperationsInput | $Enums.AdjType
    baseAdjVal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Hotel?: HotelUpdateOneRequiredWithoutRatePlanNestedInput
  }

  export type RatePlanUncheckedUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    hotelId?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    baseAdjType?: EnumAdjTypeFieldUpdateOperationsInput | $Enums.AdjType
    baseAdjVal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RatePlanUncheckedUpdateManyWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    hotelId?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    baseAdjType?: EnumAdjTypeFieldUpdateOperationsInput | $Enums.AdjType
    baseAdjVal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GuestCreateManyHotelInput = {
    id?: string
    firstName: string
    lastName: string
    email?: string | null
    phoneNumber?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tenantId: string
  }

  export type RoomTypeCreateManyHotelInput = {
    id?: string
    name: string
    description?: string | null
    baseRate?: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    tenantId: string
  }

  export type RoomCreateManyHotelInput = {
    id?: string
    roomNumber: string
    status?: $Enums.RoomStatus
    roomTypeId: string
    tenantId: string
  }

  export type RoleCreateManyHotelInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    tenantId: string
  }

  export type UserCreateManyHotelInput = {
    id?: string
    email: string
    passwordHash: string
    firstName: string
    lastName: string
    tenantId: string
    isActive?: boolean
    roleId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReservationCreateManyHotelInput = {
    id?: string
    checkIn: Date | string
    checkOut: Date | string
    status?: $Enums.ReservationStatus
    guestId: string
    roomId: string
    tenantId: string
  }

  export type FolioCreateManyHotelInput = {
    id?: string
    guestId: string
    balance?: Decimal | DecimalJsLike | number | string
    status?: $Enums.FolioStatus
    tenantId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type POSOutletCreateManyHotelInput = {
    id?: string
    name: string
    tenantId: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RatePlanCreateManyHotelInput = {
    id?: string
    tenantId: string
    code: string
    name: string
    baseAdjType: $Enums.AdjType
    baseAdjVal: Decimal | DecimalJsLike | number | string
    currency: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GuestUpdateWithoutHotelInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: TenantUpdateOneRequiredWithoutGuestNestedInput
    Reservation?: ReservationUpdateManyWithoutGuestNestedInput
    Folio?: FolioUpdateManyWithoutGuestNestedInput
  }

  export type GuestUncheckedUpdateWithoutHotelInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenantId?: StringFieldUpdateOperationsInput | string
    Reservation?: ReservationUncheckedUpdateManyWithoutGuestNestedInput
    Folio?: FolioUncheckedUpdateManyWithoutGuestNestedInput
  }

  export type GuestUncheckedUpdateManyWithoutHotelInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenantId?: StringFieldUpdateOperationsInput | string
  }

  export type RoomTypeUpdateWithoutHotelInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    baseRate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: TenantUpdateOneRequiredWithoutRoomTypeNestedInput
    Room?: RoomUpdateManyWithoutRoomTypeNestedInput
  }

  export type RoomTypeUncheckedUpdateWithoutHotelInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    baseRate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenantId?: StringFieldUpdateOperationsInput | string
    Room?: RoomUncheckedUpdateManyWithoutRoomTypeNestedInput
  }

  export type RoomTypeUncheckedUpdateManyWithoutHotelInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    baseRate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenantId?: StringFieldUpdateOperationsInput | string
  }

  export type RoomUpdateWithoutHotelInput = {
    id?: StringFieldUpdateOperationsInput | string
    roomNumber?: StringFieldUpdateOperationsInput | string
    status?: EnumRoomStatusFieldUpdateOperationsInput | $Enums.RoomStatus
    roomType?: RoomTypeUpdateOneRequiredWithoutRoomNestedInput
    tenant?: TenantUpdateOneRequiredWithoutRoomNestedInput
    Reservation?: ReservationUpdateManyWithoutRoomNestedInput
  }

  export type RoomUncheckedUpdateWithoutHotelInput = {
    id?: StringFieldUpdateOperationsInput | string
    roomNumber?: StringFieldUpdateOperationsInput | string
    status?: EnumRoomStatusFieldUpdateOperationsInput | $Enums.RoomStatus
    roomTypeId?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    Reservation?: ReservationUncheckedUpdateManyWithoutRoomNestedInput
  }

  export type RoomUncheckedUpdateManyWithoutHotelInput = {
    id?: StringFieldUpdateOperationsInput | string
    roomNumber?: StringFieldUpdateOperationsInput | string
    status?: EnumRoomStatusFieldUpdateOperationsInput | $Enums.RoomStatus
    roomTypeId?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
  }

  export type RoleUpdateWithoutHotelInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: TenantUpdateOneRequiredWithoutRoleNestedInput
    Users?: UserUpdateManyWithoutRoleNestedInput
    permissions?: PermissionUpdateManyWithoutRolesNestedInput
  }

  export type RoleUncheckedUpdateWithoutHotelInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenantId?: StringFieldUpdateOperationsInput | string
    Users?: UserUncheckedUpdateManyWithoutRoleNestedInput
    permissions?: PermissionUncheckedUpdateManyWithoutRolesNestedInput
  }

  export type RoleUncheckedUpdateManyWithoutHotelInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenantId?: StringFieldUpdateOperationsInput | string
  }

  export type UserUpdateWithoutHotelInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: TenantUpdateOneRequiredWithoutUsersNestedInput
    role?: RoleUpdateOneRequiredWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateWithoutHotelInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    roleId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyWithoutHotelInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    roleId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReservationUpdateWithoutHotelInput = {
    id?: StringFieldUpdateOperationsInput | string
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumReservationStatusFieldUpdateOperationsInput | $Enums.ReservationStatus
    guest?: GuestUpdateOneRequiredWithoutReservationNestedInput
    room?: RoomUpdateOneRequiredWithoutReservationNestedInput
    tenant?: TenantUpdateOneRequiredWithoutReservationNestedInput
  }

  export type ReservationUncheckedUpdateWithoutHotelInput = {
    id?: StringFieldUpdateOperationsInput | string
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumReservationStatusFieldUpdateOperationsInput | $Enums.ReservationStatus
    guestId?: StringFieldUpdateOperationsInput | string
    roomId?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
  }

  export type ReservationUncheckedUpdateManyWithoutHotelInput = {
    id?: StringFieldUpdateOperationsInput | string
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumReservationStatusFieldUpdateOperationsInput | $Enums.ReservationStatus
    guestId?: StringFieldUpdateOperationsInput | string
    roomId?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
  }

  export type FolioUpdateWithoutHotelInput = {
    id?: StringFieldUpdateOperationsInput | string
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumFolioStatusFieldUpdateOperationsInput | $Enums.FolioStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    guest?: GuestUpdateOneRequiredWithoutFolioNestedInput
    tenant?: TenantUpdateOneRequiredWithoutFolioNestedInput
  }

  export type FolioUncheckedUpdateWithoutHotelInput = {
    id?: StringFieldUpdateOperationsInput | string
    guestId?: StringFieldUpdateOperationsInput | string
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumFolioStatusFieldUpdateOperationsInput | $Enums.FolioStatus
    tenantId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FolioUncheckedUpdateManyWithoutHotelInput = {
    id?: StringFieldUpdateOperationsInput | string
    guestId?: StringFieldUpdateOperationsInput | string
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumFolioStatusFieldUpdateOperationsInput | $Enums.FolioStatus
    tenantId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type POSOutletUpdateWithoutHotelInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: TenantUpdateOneRequiredWithoutPOSOutletNestedInput
  }

  export type POSOutletUncheckedUpdateWithoutHotelInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type POSOutletUncheckedUpdateManyWithoutHotelInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RatePlanUpdateWithoutHotelInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    baseAdjType?: EnumAdjTypeFieldUpdateOperationsInput | $Enums.AdjType
    baseAdjVal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Tenant?: TenantUpdateOneRequiredWithoutRatePlanNestedInput
  }

  export type RatePlanUncheckedUpdateWithoutHotelInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    baseAdjType?: EnumAdjTypeFieldUpdateOperationsInput | $Enums.AdjType
    baseAdjVal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RatePlanUncheckedUpdateManyWithoutHotelInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    baseAdjType?: EnumAdjTypeFieldUpdateOperationsInput | $Enums.AdjType
    baseAdjVal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateManyRoleInput = {
    id?: string
    email: string
    passwordHash: string
    firstName: string
    lastName: string
    tenantId: string
    isActive?: boolean
    hotelId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateWithoutRoleInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: TenantUpdateOneRequiredWithoutUsersNestedInput
    hotel?: HotelUpdateOneRequiredWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutRoleInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    hotelId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyWithoutRoleInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    hotelId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PermissionUpdateWithoutRolesInput = {
    id?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    conditions?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PermissionUncheckedUpdateWithoutRolesInput = {
    id?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    conditions?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PermissionUncheckedUpdateManyWithoutRolesInput = {
    id?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    conditions?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoleUpdateWithoutPermissionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: TenantUpdateOneRequiredWithoutRoleNestedInput
    hotel?: HotelUpdateOneRequiredWithoutRoleNestedInput
    Users?: UserUpdateManyWithoutRoleNestedInput
  }

  export type RoleUncheckedUpdateWithoutPermissionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenantId?: StringFieldUpdateOperationsInput | string
    hotelId?: StringFieldUpdateOperationsInput | string
    Users?: UserUncheckedUpdateManyWithoutRoleNestedInput
  }

  export type RoleUncheckedUpdateManyWithoutPermissionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenantId?: StringFieldUpdateOperationsInput | string
    hotelId?: StringFieldUpdateOperationsInput | string
  }

  export type ReservationCreateManyRoomInput = {
    id?: string
    checkIn: Date | string
    checkOut: Date | string
    status?: $Enums.ReservationStatus
    guestId: string
    tenantId: string
    hotelId: string
  }

  export type ReservationUpdateWithoutRoomInput = {
    id?: StringFieldUpdateOperationsInput | string
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumReservationStatusFieldUpdateOperationsInput | $Enums.ReservationStatus
    guest?: GuestUpdateOneRequiredWithoutReservationNestedInput
    tenant?: TenantUpdateOneRequiredWithoutReservationNestedInput
    hotel?: HotelUpdateOneRequiredWithoutReservationNestedInput
  }

  export type ReservationUncheckedUpdateWithoutRoomInput = {
    id?: StringFieldUpdateOperationsInput | string
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumReservationStatusFieldUpdateOperationsInput | $Enums.ReservationStatus
    guestId?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    hotelId?: StringFieldUpdateOperationsInput | string
  }

  export type ReservationUncheckedUpdateManyWithoutRoomInput = {
    id?: StringFieldUpdateOperationsInput | string
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumReservationStatusFieldUpdateOperationsInput | $Enums.ReservationStatus
    guestId?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    hotelId?: StringFieldUpdateOperationsInput | string
  }

  export type RoomCreateManyRoomTypeInput = {
    id?: string
    roomNumber: string
    status?: $Enums.RoomStatus
    tenantId: string
    hotelId: string
  }

  export type RoomUpdateWithoutRoomTypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    roomNumber?: StringFieldUpdateOperationsInput | string
    status?: EnumRoomStatusFieldUpdateOperationsInput | $Enums.RoomStatus
    tenant?: TenantUpdateOneRequiredWithoutRoomNestedInput
    hotel?: HotelUpdateOneRequiredWithoutRoomNestedInput
    Reservation?: ReservationUpdateManyWithoutRoomNestedInput
  }

  export type RoomUncheckedUpdateWithoutRoomTypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    roomNumber?: StringFieldUpdateOperationsInput | string
    status?: EnumRoomStatusFieldUpdateOperationsInput | $Enums.RoomStatus
    tenantId?: StringFieldUpdateOperationsInput | string
    hotelId?: StringFieldUpdateOperationsInput | string
    Reservation?: ReservationUncheckedUpdateManyWithoutRoomNestedInput
  }

  export type RoomUncheckedUpdateManyWithoutRoomTypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    roomNumber?: StringFieldUpdateOperationsInput | string
    status?: EnumRoomStatusFieldUpdateOperationsInput | $Enums.RoomStatus
    tenantId?: StringFieldUpdateOperationsInput | string
    hotelId?: StringFieldUpdateOperationsInput | string
  }

  export type ReservationCreateManyGuestInput = {
    id?: string
    checkIn: Date | string
    checkOut: Date | string
    status?: $Enums.ReservationStatus
    roomId: string
    tenantId: string
    hotelId: string
  }

  export type FolioCreateManyGuestInput = {
    id?: string
    balance?: Decimal | DecimalJsLike | number | string
    status?: $Enums.FolioStatus
    tenantId: string
    hotelId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReservationUpdateWithoutGuestInput = {
    id?: StringFieldUpdateOperationsInput | string
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumReservationStatusFieldUpdateOperationsInput | $Enums.ReservationStatus
    room?: RoomUpdateOneRequiredWithoutReservationNestedInput
    tenant?: TenantUpdateOneRequiredWithoutReservationNestedInput
    hotel?: HotelUpdateOneRequiredWithoutReservationNestedInput
  }

  export type ReservationUncheckedUpdateWithoutGuestInput = {
    id?: StringFieldUpdateOperationsInput | string
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumReservationStatusFieldUpdateOperationsInput | $Enums.ReservationStatus
    roomId?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    hotelId?: StringFieldUpdateOperationsInput | string
  }

  export type ReservationUncheckedUpdateManyWithoutGuestInput = {
    id?: StringFieldUpdateOperationsInput | string
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumReservationStatusFieldUpdateOperationsInput | $Enums.ReservationStatus
    roomId?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    hotelId?: StringFieldUpdateOperationsInput | string
  }

  export type FolioUpdateWithoutGuestInput = {
    id?: StringFieldUpdateOperationsInput | string
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumFolioStatusFieldUpdateOperationsInput | $Enums.FolioStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: TenantUpdateOneRequiredWithoutFolioNestedInput
    hotel?: HotelUpdateOneRequiredWithoutFolioNestedInput
  }

  export type FolioUncheckedUpdateWithoutGuestInput = {
    id?: StringFieldUpdateOperationsInput | string
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumFolioStatusFieldUpdateOperationsInput | $Enums.FolioStatus
    tenantId?: StringFieldUpdateOperationsInput | string
    hotelId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FolioUncheckedUpdateManyWithoutGuestInput = {
    id?: StringFieldUpdateOperationsInput | string
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumFolioStatusFieldUpdateOperationsInput | $Enums.FolioStatus
    tenantId?: StringFieldUpdateOperationsInput | string
    hotelId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}