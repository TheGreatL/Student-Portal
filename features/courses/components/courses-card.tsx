'use client';
import {Card, CardContent, CardDescription, CardHeader} from '@/components/ui/card';

import Image from 'next/image';
import Link from 'next/link';
import {Progress} from '../../../components/ui/progress';
import {TCourse} from '../schema/course';

type CoursesCard = {
  course: TCourse;
};
export default function CoursesCard({course}: CoursesCard) {
  const {courseId, image, name, progress, teacher, description, slug} = course;
  return (
    <Link
      href={`courses/${slug}`}
      className='flex h-auto w-[9rem] md:w-[15rem] lg:w-[20rem]'>
      <Card>
        <CardHeader className='p-2 lg:p-3'>
          <Image
            src={image}
            alt='Picture of Cat'
            className='h-[9rem] rounded-sm lg:h-[15rem]'
            priority
          />
          <CardContent className='p-1'>
            <h1 className='text-sm/tight font-semibold lg:text-lg'>{name}</h1>
            <CardDescription className='text-xs/tight lg:text-sm'>{description}</CardDescription>
            <h1>CourseId: {courseId}</h1>
            <Progress value={progress} />
            <h1>{teacher}</h1>
          </CardContent>
        </CardHeader>
      </Card>
    </Link>
  );
}
