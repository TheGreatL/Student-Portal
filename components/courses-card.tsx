import {Card, CardContent, CardDescription, CardHeader} from '@/components/ui/card';
import {CourseType} from '@/types/types';
import Image from 'next/image';
import Link from 'next/link';
import {Progress} from './ui/progress';

type CoursesCard = {
  course: CourseType;
};
export default function CoursesCard({course}: CoursesCard) {
  const {courseId, image, name, progress, teacher, description} = course;
  return (
    <Link
      href={`courses/${name}`}
      className='flex w-[20rem]'>
      <Card>
        <CardHeader className='p-3'>
          <Image
            src={image}
            alt='Picture of Cat'
            className='h-[15rem] rounded-sm'
          />
          <CardContent className='p-1'>
            <h1 className='text-lg font-semibold'>{name}</h1>
            <CardDescription>{description}</CardDescription>
            <h1>{courseId}</h1>
            <Progress value={progress} />
            <h1>{teacher}</h1>
          </CardContent>
        </CardHeader>
      </Card>
    </Link>
  );
}
