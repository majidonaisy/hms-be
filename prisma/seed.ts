import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const currencies = [
  { code: "USD", name: "United States Dollar" },
  { code: "EUR", name: "Euro" },
  { code: "GBP", name: "British Pound Sterling" },
  { code: "JPY", name: "Japanese Yen" },
  // Add more currencies as needed...
];

const exchangeRates = [
  { base: "USD", target: "EUR", rate: 0.85 },
  { base: "USD", target: "GBP", rate: 0.73 },
  { base: "USD", target: "JPY", rate: 110.0 },
  { base: "EUR", target: "USD", rate: 1.18 },
  { base: "EUR", target: "GBP", rate: 0.86 },
  { base: "EUR", target: "JPY", rate: 129.5 },
  // Add more exchange rates as needed...
];

async function main() {
  try {
    console.log('Starting seed...');

    // First, seed currencies
    console.log('Seeding currencies...');
    for (const currency of currencies) {
      await prisma.currency.upsert({
        where: { code: currency.code },
        update: {},
        create: {
          code: currency.code,
          name: currency.name,
        },
      });
    }
    console.log('Currencies seeded successfully');

    // Then, seed exchange rates
    console.log('Seeding exchange rates...');
    for (const rate of exchangeRates) {
      await prisma.exchangeRate.upsert({
        where: {
          baseCurrency_targetCurrency: {
            baseCurrency: rate.base,
            targetCurrency: rate.target,
          },
        },
        update: {
          rate: rate.rate,
        },
        create: {
          baseCurrency: rate.base,
          targetCurrency: rate.target,
          rate: rate.rate,
        },
      });
    }
    console.log('Exchange rates seeded successfully');

  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });