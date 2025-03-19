import prisma from '@/service/db';
import Image from 'next/image';
import n from '@/assets/nayeon.jpg';
import {departments} from '@/utils/utils';
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from '@/components/ui/card';

export default async function CoursesDisplay() {
  const courses = await prisma.course.findMany({
    // orderBy: {
    //   createdAt: 'desc'
    // }
  });
  return (
    <>
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
    </>
  );
}
