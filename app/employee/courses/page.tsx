import CoursesCard from '@/features/courses/components/courses-card';
import {courses} from '@/utils/data';

import * as motion from 'motion/react-client';

export default function CoursesPage() {
  return (
    <div className='flex flex-wrap justify-center gap-5 p-5'>
      <motion.div className='flex flex-wrap justify-center gap-5 p-5'>
        {courses.map((course) => (
          <CoursesCard
            course={course}
            key={course.courseId}
          />
        ))}
      </motion.div>
    </div>
  );
}
