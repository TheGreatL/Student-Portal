import {Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow} from '@/components/ui/table';

import UsersStudentTablePagination from '@/features/user/components/users-student-table-pagination';
import prisma from '@/service/db';
export default async function TeachersTable({page}: {page: number}) {
  const limit = 5;
  const skip = (page - 1) * limit;
  const teachers = await prisma.user.findMany({
    where: {
      role: 'teacher'
    },
    take: limit,
    skip,
    include: {
      teacher: true
    },
    orderBy: {
      createdAt: 'desc'
    }
  });

  const allTeacher = await prisma.user.findMany({
    where: {
      role: 'teacher'
    }
  });

  const numberOfPage = Math.ceil(allTeacher.length / limit);
  return (
    <div className='h-full'>
      <h1>Teachers</h1>
      <Table className='bg-white'>
        <TableCaption>Registered Student</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Department</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {teachers.map((teacher) => (
            <TableRow key={teacher.id}>
              <TableCell>{teacher.teacher?.id}</TableCell>
              <TableCell>
                {teacher.firstName} {teacher.lastName}
              </TableCell>
              <TableCell>{teacher.email}</TableCell>
              <TableCell>{teacher.teacher?.department}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <UsersStudentTablePagination
        page={page}
        numberOfPage={numberOfPage}
      />
    </div>
  );
}
