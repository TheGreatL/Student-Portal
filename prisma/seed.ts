import {PrismaClient} from '@prisma/client';
const prisma = new PrismaClient();
async function main() {
  const programs = await prisma.program.createManyAndReturn({
    data: [
      {department: 'ga', acronym: 'BACOMM', name: 'Arts in Communication'},
      {department: 'ict', acronym: 'IT', name: 'Information Technology'},
      {department: 'bm', acronym: 'BM', name: 'Business Management'},
      {department: 'sh', acronym: 'STEM', name: 'Science Technology'}
    ]
  });

  const courses = await prisma.course.createManyAndReturn({
    data: [
      {name: 'Plat Tech', department: 'ict', description: 'Description', image: 'image'},
      {name: 'Japanese Language', department: 'tm', description: 'Description', image: 'image'},
      {name: 'Great Books', department: 'ga', description: 'Description', image: 'image'},
      {name: 'Emerging Technology', department: 'sh', description: 'Description', image: 'image'}
    ]
  });
  const rooms = await prisma.room.createManyAndReturn({
    data: [
      {name: 'A401', building: 'A', floor: '4', image: 'image'},
      {name: 'A402', building: 'A', floor: '4', image: 'image'},
      {name: 'A403', building: 'A', floor: '4', image: 'image'},
      {name: 'A404', building: 'A', floor: '4', image: 'image'},
      {name: 'A201', building: 'A', floor: '2', image: 'image'},
      {name: 'A202', building: 'A', floor: '2', image: 'image'},
      {name: 'A203', building: 'A', floor: '2', image: 'image'},
      {name: 'A204', building: 'A', floor: '2', image: 'image'},
      {name: 'A205', building: 'A', floor: '2', image: 'image'},
      {name: 'A206', building: 'A', floor: '2', image: 'image'},
      {name: 'D201', building: 'D', floor: '2', image: 'image'},
      {name: 'D202', building: 'D', floor: '2', image: 'image'},
      {name: 'D203', building: 'D', floor: '2', image: 'image'},
      {name: 'D401', building: 'D', floor: '4', image: 'image'}
    ]
  });

  const teacher1 = await prisma.user.create({
    data: {
      firstName: 'L',
      lastName: 'Lawliet',
      email: 'lawliet@gmail.com',
      avatar: 'avatar',
      password: 'password',
      role: 'teacher',

      teacher: {
        create: {
          department: 'ba'
        }
      }
    },
    include: {
      teacher: true
    }
  });

  const teacher2 = await prisma.user.create({
    data: {
      firstName: 'Light',
      lastName: 'Yagami',
      email: 'yagami@gmail.com',
      avatar: 'avatar',
      password: 'password',
      role: 'teacher',

      teacher: {
        create: {
          department: 'ict'
        }
      }
    },
    include: {
      teacher: true
    }
  });

  // Student
  const student1 = await prisma.user.create({
    data: {
      firstName: 'Ryuk',
      lastName: 'Shinigami',
      email: 'shinigami@gmail.com',
      avatar: 'avatar',
      password: 'password',
      role: 'student',
      student: {
        create: {
          id: 2000309926,
          programId: programs[0].id as string
        }
      }
    },
    include: {
      student: true
    }
  });

  // Student
  const student2 = await prisma.user.create({
    data: {
      firstName: 'Misa',
      lastName: 'Amane',
      email: 'amane@gmail.com',
      avatar: 'avatar',
      password: 'password',
      role: 'student',
      student: {
        create: {
          id: 2000309927,
          programId: programs[1].id
        }
      }
    },
    include: {
      student: true
    }
  });

  await prisma.class.create({
    data: {
      section: 'BT604',
      academicYear: '2024-2025',
      isOngoing: false,
      courseId: courses[0].id,
      teacherId: teacher1?.teacher?.id || '',
      classSchedule: {
        createMany: {
          data: [
            {
              roomId: rooms[0].id,
              scheduleDay: 'Friday',
              scheduleStartingTime: new Date(), // Correct time-only format
              scheduleEndingTime: new Date() // Correct time-only format
            },
            {
              roomId: rooms[1].id,
              scheduleDay: 'Friday',
              scheduleStartingTime: new Date(), // Correct time-only format
              scheduleEndingTime: new Date() // Correct time-only format
            }
          ]
        }
      },
      classDiscussion: {
        create: {
          authorId: teacher1.id,
          title: 'Test Discussion',
          content: 'Test Content',
          classDiscussionComment: {
            createMany: {
              data: [
                {
                  comment: 'Test Comment',
                  authorId: teacher1.id
                },
                {
                  comment: 'Test Comment2',
                  authorId: student1.id
                },
                {
                  comment: 'Test Comment3',
                  authorId: student2.id
                }
              ]
            }
          },
          classDiscussionReact: {
            createMany: {
              data: [
                {authorId: teacher1.id, reaction: 'angry'},
                {authorId: teacher2.id, reaction: 'angry'}
              ]
            }
          }
        }
      },
      classStudent: {
        // createMany: {
        //   data: [{studentId: Number(student1.id)}, {studentId: Number(student2.id)}]
        // }
        create: {
          studentId: Number(student1?.student?.id),
          classGrade: {
            create: {
              finals: '-',
              prelim: '-',
              midterm: '-',
              preFinals: '-'
            }
          }
        }
      }
    },
    include: {
      classSchedule: true,
      classStudent: true
    }
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
