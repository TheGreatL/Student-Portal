'use client';
import React, {useMemo} from 'react';
import {Tabs, TabsContent, TabsList, TabsTrigger} from '@/components/ui/tabs';
import CoursesCard from '../courses-card';
import {courses} from '@/utils/data';

export default function CoursesTabs() {
  const onGoingCourses = useMemo(() => {
    return courses.filter((course) => course.status === 'on going');
  }, []);
  const completedCourses = useMemo(() => {
    return courses.filter((course) => course.status === 'completed');
  }, []);

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
          {onGoingCourses.map((course) => (
            <CoursesCard
              course={course}
              key={course.courseId}
            />
          ))}
        </div>
      </TabsContent>
      <TabsContent value='completed'>
        <div className='flex flex-wrap justify-center gap-5'>
          {completedCourses.map((course) => (
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
