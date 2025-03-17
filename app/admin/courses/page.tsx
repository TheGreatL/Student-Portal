import {Card, CardContent, CardDescription, CardHeader, CardTitle} from '@/components/ui/card';
import CreateCourseModal from '@/features/course/components/create-course';
import prisma from '@/service/db';
import React from 'react';

export default async function CoursesPage() {
  // TODO: ADD COURSE: MANAGE COURSE: ASSIGN COURSE(STUDENT AND EMPLOYEE)

  const courses = await prisma.course.findMany();
  return (
    <section className='flex grow flex-col'>
      <section>
        <h1>All of Course</h1>
        <CreateCourseModal />
      </section>
      <article className='my-2 grow space-y-5 p-3'>
        {courses.map((course) => (
          <Card key={course.id}>
            <CardHeader>
              <CardTitle>{course.name}</CardTitle>
              <CardDescription>{course.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <h1>{course.department}</h1>
            </CardContent>
          </Card>
        ))}
      </article>
    </section>
  );
}
