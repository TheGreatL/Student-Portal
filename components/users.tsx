import client from '@/service/db';
export default async function Users() {
  const result = await client.query('SELECT * FROM courses');

  await new Promise((resolve) => setInterval(resolve, 2000));

  return (
    <div className='flex flex-col gap-2'>
      {result.rows.map((course: {courseId: string; courseName: string}) => (
        <p key={course.courseId}>{course.courseName}</p>
      ))}
    </div>
  );
}
