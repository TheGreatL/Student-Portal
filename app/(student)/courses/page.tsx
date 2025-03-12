import CoursesCard from '@/components/courses-card';
import {courses} from '@/utils/data';

import * as motion from 'motion/react-client';

type CoursesPageProps = {
  searchParams?: Promise<{
    query?: string;
    page?: string;
  }>;
};
export default async function CoursesPage({searchParams}: CoursesPageProps) {
  const searchParamsV = await searchParams;

  console.log(searchParamsV?.query);
  return (
    <section className='flex gap-5 p-5'>
      <motion.div className='flex flex-wrap justify-center gap-2 py-2'>
        {courses.map((course) => (
          <CoursesCard
            course={course}
            key={course.courseId}
          />
        ))}
      </motion.div>
    </section>
  );
}
