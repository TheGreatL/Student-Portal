import HomeCarousel from '@/components/home-carousel';
import CoursesTabs from '@/components/home/courses-tabs';

export default async function HomePage() {
  return (
    <section className='flex grow flex-col gap-5 px-1 py-2'>
      <HomeCarousel />
      <CoursesTabs />
    </section>
  );
}
