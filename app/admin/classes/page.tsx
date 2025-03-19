import ClassTable from '@/features/class/components/class-table';
import CreateClassModal from '@/features/class/components/modals/create-class';
import prisma from '@/service/db';
import React from 'react';

export default async function ClassesPage() {
  const teachers = await prisma.user.findMany({
    where: {
      role: 'teacher'
    },
    include: {
      teacher: true
    }
  });
  const courses = await prisma.course.findMany();
  const classes = await prisma.class.findMany({
    include: {
      teacher: {
        include: {
          user: true
        }
      },
      course: true
    }
  });
  return (
    <section className='flex grow flex-col p-5'>
      <h1>Classes</h1>
      <CreateClassModal
        courses={courses}
        teachers={teachers}
      />
      <article className='p-2.5'>
        <ClassTable classes={classes} />
      </article>
    </section>
  );
}
