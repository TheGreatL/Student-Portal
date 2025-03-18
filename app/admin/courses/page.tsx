import {Card, CardContent, CardDescription, CardHeader, CardTitle} from '@/components/ui/card';
import CreateCourseModal from '@/features/course/components/create-course';
import prisma from '@/service/db';
import Image from 'next/image';
import React from 'react';
import n from '@/assets/nayeon.jpg';
import {departments} from '@/utils/utils';

export default async function CoursesPage() {
  // TODO: ADD COURSE: MANAGE COURSE: ASSIGN COURSE(STUDENT AND EMPLOYEE)

  const courses = await prisma.course.findMany({
    orderBy: {
      createdAt: 'desc'
    }
  });
  // console.log(departments.filter((department) => department.name == 'ict')[0]);
  return (
    <section className='flex grow flex-col'>
      <section>
        <h1>All of Course</h1>
        <CreateCourseModal />
      </section>
      {/* <article className='my-2 grow space-y-5 p-3'> */}
      <article className='my-2 grow p-3'>
        <ul className='space-y-5'>
          {courses.map((course) => (
            <li key={course.id}>
              <Card>
                <CardHeader>
                  <CardTitle>{course.name}</CardTitle>
                  <CardDescription>{course.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Image
                    src={n}
                    alt={course.name}
                    className='h-auto w-full'
                  />
                  <h1>{departments.filter((department) => department.value === course.department)[0].name}</h1>
                </CardContent>
              </Card>
            </li>
          ))}
        </ul>
      </article>
    </section>
  );
}
