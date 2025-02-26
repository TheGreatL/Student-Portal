import HomeCarousel from '@/components/home-carousel';
import CoursesTabs from '@/components/home/courses-tabs';
// import syncModels from '@/database/sync-models';
// import {UserService} from '@/service/user-service';

export default async function HomePage() {
  // syncModels();
  // console.log(
  //   await UserService.createUser({firstName: 'test', lastName: 'last', email: 'asdasdasd', password: 'hello'})
  // );
  return (
    <section className='flex grow flex-col gap-5 px-1 py-2'>
      <HomeCarousel />
      <CoursesTabs />
    </section>
  );
}

