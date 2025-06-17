import { PrismaClient } from '../generated/prisma';

const prisma = new PrismaClient();

async function clearDatabase() {
  try {
    console.log('Starting database cleanup...');

    // Delete in reverse order of dependencies
    console.log('Deleting Folios...');
    await prisma.folio.deleteMany();

    console.log('Deleting Reservations...');
    await prisma.reservation.deleteMany();

    console.log('Deleting ExchangeRates...');
    await prisma.exchangeRate.deleteMany();

    console.log('Deleting RatePlans...');
    await prisma.ratePlan.deleteMany();

    console.log('Deleting Rooms...');
    await prisma.room.deleteMany();

    console.log('Deleting RoomTypes...');
    await prisma.roomType.deleteMany();

    console.log('Deleting Guests...');
    await prisma.guest.deleteMany();

    console.log('Deleting POSOutlets...');
    await prisma.pOSOutlet.deleteMany();

    // console.log('Deleting Users...');
    // await prisma.user.deleteMany();

    // console.log('Deleting Permissions...');
    // await prisma.permission.deleteMany();

    // console.log('Deleting Roles...');
    // await prisma.role.deleteMany();

    // console.log('Deleting Hotels...');
    // await prisma.hotel.deleteMany();

    // console.log('Deleting Tenants...');
    // await prisma.tenant.deleteMany();

    // Keep currencies as they are system-wide
    // await prisma.currency.deleteMany();

    console.log('Database cleanup completed successfully');
  } catch (error) {
    console.error('Error during database cleanup:', error);
    throw Error('Failed to clear database');
  } finally {
    await prisma.$disconnect();
  }
}

// Run if called directly
if (require.main === module) {
  clearDatabase()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });
}

export { clearDatabase };