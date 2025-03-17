import {PrismaClient} from '@prisma/client';
const prisma = new PrismaClient();
async function main() {
  const programs = await prisma.program.createMany({
    data: [
      {department: 'tm', acronym: 'BACOMM', name: 'Arts in Communication'},
      {department: 'ict', acronym: 'IT', name: 'Information Technology'},
      {department: 'bm', acronym: 'BM', name: 'Business Management'}
    ]
  });

  const courses = await prisma.course.createMany({
    data: [
      {name: 'Plat Tech', department: 'ict', description: 'Description', image: 'image'},
      {name: 'Net Tech', department: 'ict', description: 'Description', image: 'image'},
      {name: 'Great Books', department: 'tm', description: 'Description', image: 'image'}
    ]
  });
  const rooms = await prisma.room.createMany({
    data: [
      {name: 'A401', building: 'A', floor: '4', image: 'image'},
      {name: 'A402', building: 'A', floor: '4', image: 'image'},
      {name: 'A403', building: 'A', floor: '4', image: 'image'},
      {name: 'D403', building: 'D', floor: '4', image: 'image'}
    ]
  });
  console.log({programs, courses, rooms});
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
