import {TStudent, TTeacher} from '@/types/types';
import {prisma} from '@/utils';

export default async function Users() {
  const allStudents = await prisma.student.findMany({
    include: {
      user: true
    }
  });

  const allTeacher = await prisma.teacher.findMany({
    include: {
      user: true
    }
  });

  return (
    <div className='flex flex-col'>
      <div className='flex flex-wrap items-center justify-center gap-2'>
        {allStudents.map((student: TStudent) => (
          <div
            key={student.id}
            className='flex w-[10rem] grow flex-col bg-gray-400 text-wrap break-words'>
            <p>{student.id}</p>
            <p>{student.user.firstName}</p>
            <p>{student.user.lastName}</p>
            <p>{student.userId}</p>
            <p>{student.user.createdAt?.toDateString()}</p>
            <p>{student.user.updatedAt?.toDateString()}</p>
            <p>Deleted At: {student.user.deletedAt?.toDateString()}</p>
            <p>Course: {student.course}</p>
          </div>
        ))}
      </div>
      <div className='flex flex-wrap items-center justify-center gap-2'>
        <h1>Teachers</h1>
        {allTeacher.map((teacher: TTeacher) => (
          <div
            key={teacher.id}
            className='flex w-[10rem] grow flex-col bg-gray-400 text-wrap break-words'>
            <p>{teacher.id}</p>
            <p>{teacher.user.firstName}</p>
            <p>{teacher.user.lastName}</p>
            <p>{teacher.userId}</p>
            <p>{teacher.user.createdAt?.toDateString()}</p>
            <p>{teacher.user.updatedAt?.toDateString()}</p>
            <p>Deleted At: {teacher.user.deletedAt?.toDateString()}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
