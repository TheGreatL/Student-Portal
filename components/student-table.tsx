import {Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow} from '@/components/ui/table';

import UsersStudentTablePagination from '@/components/users-student-table-pagination';
import prisma from '@/service/db';
export default async function StudentTable({page}: {page: number}) {
  const limit = 5;
  const skip = (page - 1) * limit;
  const students = await prisma.user.findMany({
    where: {
      role: 'student'
    },
    take: limit,
    skip,
    include: {
      student: {
        include: {
          program: true
        }
      }
    }
  });

  const isMax = students.length < 5;
  return (
    <div className='h-full'>
      <h1>Students</h1>
      <Table className='bg-white'>
        <TableCaption>Registered Student</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Program</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {students.map((student) => (
            <TableRow key={student.id}>
              <TableCell>{student.student?.id}</TableCell>
              <TableCell>
                {student.firstName} {student.lastName}
              </TableCell>
              <TableCell>{student.email}</TableCell>
              <TableCell>{student.student?.program.acronym}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <UsersStudentTablePagination
        page={page}
        isMax={isMax}
      />
    </div>
  );
}
