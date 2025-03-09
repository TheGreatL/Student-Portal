import HomeCarousel from '@/components/home-carousel';
import CoursesTabs from '@/components/home/courses-tabs';
import client from '@/service/db';

export default async function HomePage() {
  try {
    const result = await client.query('SELECT * FROM courses');
    console.log('user', result.rows);
  } catch (error) {
    console.error('Failed to fetch users:', error);
  }
  return (
    <section className='flex grow flex-col gap-5 px-1 py-2'>
      <HomeCarousel />
      <CoursesTabs />
    </section>
  );
}
