import HomeCarousel from '@/features/user/components/home-carousel';
import CoursesTabs from '@/features/course/components/courses-tabs';

export default async function HomePage() {
  return (
    <section className='flex grow flex-col gap-5 px-1 py-2'>
      <HomeCarousel />
      <CoursesTabs />
    </section>
  );
}
