const { PrismaClient } = require('@prisma/client');
const { writeFileSync } = require('fs');

const prisma = new PrismaClient()

async function main() {
  // quick add
  // await prisma.birthday.create({ data: { year: 2000, month: 1, day: 1, name: 'George' } });
  // quick update
  // await prisma.birthday.updateMany({ where: { name: 'Bobby' }, data: { year: 1984 } });

  const dump = await prisma.birthday.findMany({
    select: {
      day: true,
      month: true,
      year: true,
      name: true,
    },
  });
  writeFileSync('birthdays.json', JSON.stringify(dump));
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