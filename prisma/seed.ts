
import { PrismaClient } from "../src/generated/prisma";


const prisma = new PrismaClient();

async function seedCurrencies() {
  const currencies = [
    { code: 'USD', name: 'US Dollar' },
    { code: 'EUR', name: 'Euro' },
    { code: 'GBP', name: 'British Pound' },
  ];

  for (const currency of currencies) {
    await prisma.currency.upsert({
      where: { code: currency.code },
      update: {},
      create: currency,
    });
  }
}

seedCurrencies()
  .then(() => {
    console.log('Global currencies seeded.');
    prisma.$disconnect();
  })
  .catch((err) => {
    console.error(err);
    prisma.$disconnect();
    process.exit(1);
  });