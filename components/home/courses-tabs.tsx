import React from 'react';
import {Tabs, TabsContent, TabsList, TabsTrigger} from '@/components/ui/tabs';
import CoursesCard from '../courses-card';
import cat from '../../public/cat.jpg';
import nayeon from '../../public/assets/n.jpg';
import n from '../../public/assets/nayeon.jpg';
import {CourseType} from '@/types/types';
export default function CoursesTabs() {
  const courses: CourseType[] = [
    {
      courseId: 1,
      image: nayeon,
      name: 'Information Management System ',
      progress: 5,
      teacher: 'Lubian',
      description: 'asdasdasd'
    },
    {
      courseId: 2,
      image: n,
      name: 'Information Management System',
      progress: 5,
      teacher: 'Lubian',
      description: 'asdasdasd'
    },
    {
      courseId: 3,
      image: cat,
      name: 'Management Information System',
      progress: 5,
      teacher: 'Lubian',
      description: 'asdasdasd'
    },
    {
      courseId: 4,
      image: cat,
      name: 'Management Information System',
      progress: 5,
      teacher: 'Lubian',
      description: 'asdasdasd'
    }
  ];
  const completedCourse: CourseType[] = [
    {
      courseId: 1,
      image: nayeon,
      name: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt quo ex qui sint ad eveniet nemo facere distinctio. Sit quo accusamus non pariatur blanditiis, nulla nam officia deserunt corporis consequuntur?',
      progress: 5,
      teacher: 'Lubian',
      description: 'asdasdasd'
    },
    {
      courseId: 2,
      image: n,
      name: 'Information Management System',
      progress: 5,
      teacher: 'Lubian',
      description: 'asdasdasd'
    },
    {
      courseId: 3,
      image: cat,
      name: 'Management Information System',
      progress: 5,
      teacher: 'Lubian',
      description: 'asdasdasd'
    },
    {
      courseId: 4,
      image: cat,
      name: 'Management Information System',
      progress: 5,
      teacher: 'Lubian',
      description: 'asdasdasd'
    },
    {
      courseId: 6,
      image: cat,
      name: 'Advanced Database Systems - SY2425-1T',
      progress: 5,
      teacher: 'Lubian',
      description: 'asdasdasd'
    }
  ];

  return (
    <Tabs defaultValue='enrolled'>
      <TabsList>
        <TabsTrigger
          className='w-[10rem] data-[state=active]:bg-slate-500 data-[state=active]:text-white'
          value='enrolled'>
          Enrolled
        </TabsTrigger>
        <TabsTrigger
          className='w-[10rem] data-[state=active]:bg-slate-500 data-[state=active]:text-white'
          value='completed'>
          Completed
        </TabsTrigger>
      </TabsList>
      <TabsContent value='enrolled'>
        <div className='flex flex-wrap justify-center gap-5'>
          {courses.map((course) => (
            <CoursesCard
              course={course}
              key={course.courseId}
            />
          ))}
        </div>
      </TabsContent>
      <TabsContent value='completed'>
        <div className='flex flex-wrap justify-center gap-5'>
          {completedCourse.map((course) => (
            <CoursesCard
              course={course}
              key={course.courseId}
            />
          ))}
        </div>
      </TabsContent>
    </Tabs>
  );
}
