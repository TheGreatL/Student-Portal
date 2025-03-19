import CreateCourseModal from '@/features/course/components/create-course';

import React from 'react';
import CoursesDisplay from '@/features/course/components/courses-display';

export default async function CoursesPage() {
  // TODO: ADD COURSE: MANAGE COURSE: ASSIGN COURSE(STUDENT AND EMPLOYEE)

  return (
    <section className='flex grow flex-col'>
      <section>
        <h1>All of Course</h1>
        <CreateCourseModal />
      </section>
      {/* <article className='my-2 grow space-y-5 p-3'> */}
      <article className='my-2 grow p-3'>
        <ul className='space-y-5'>
          <CoursesDisplay />
        </ul>
      </article>
    </section>
  );
}
