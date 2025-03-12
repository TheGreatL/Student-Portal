import HomeCarousel from '@/components/home-carousel';
import CoursesTabs from '@/components/home/courses-tabs';
import Users from '@/components/users';
// import {prisma} from '@/utils';
import {Suspense} from 'react';
export default async function HomePage() {
  // const createUser = await prisma.user.create({
  //   data: {
  //     firstName: 'Ken',
  //     lastName: 'Carlon',
  //     email: 'carlon.309926@fairview.sti.edu.ph',
  //     password: 'asd',
  //     avatar: 'avatarss',
  //     role: 'student',
  //     teacher: {
  //       create: {
  //         department: 'ict'
  //       }
  //     }
  //   }
  // });

  // console.log(createUser);

  return (
    <section className='flex grow flex-col gap-5 px-1 py-2'>
      <HomeCarousel />
      <CoursesTabs />
      {/* waits async server components */}
      <Suspense fallback={<p>Loading.....</p>}>
        <Users />
      </Suspense>
    </section>
  );
}
