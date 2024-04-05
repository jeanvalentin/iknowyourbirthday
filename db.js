const { PrismaClient } = require('@prisma/client');
const { writeFileSync } = require('fs');

const prisma = new PrismaClient()

async function main() {
  const dump = await prisma.birthday.findMany({
    select: {
      day: true,
      month: true,
      year: true,
      name: true,
    },
  });
  writeFileSync('public/birthdays.json', JSON.stringify(dump));
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
