'use client';
import {Button} from '@/components/ui/button';
import {Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow} from '@/components/ui/table';
import {TClassWithTeacher} from '@/types/prisma-model-types';
import {Eye} from 'lucide-react';
import {useRouter} from 'next/navigation';

export default function ClassTable({classes}: {classes: TClassWithTeacher[]}) {
  const router = useRouter();
  return (
    <Table className='bg-white'>
      <TableCaption>Classes </TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Section</TableHead>
          <TableHead>Course</TableHead>
          <TableHead>Teacher</TableHead>
          <TableHead></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {classes.map((classItem) => (
          <TableRow key={classItem.id}>
            <TableCell>{classItem.section}</TableCell>
            <TableCell>{classItem.course.name}</TableCell>
            <TableCell>
              {classItem.teacher?.user.firstName} {classItem.teacher?.user.lastName}
            </TableCell>
            <TableCell>
              <Button
                variant={'outline'}
                onClick={() => {
                  router.push(`classes/${classItem.id}`);
                }}>
                <Eye />
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
