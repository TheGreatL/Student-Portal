import {Card, CardContent, CardDescription, CardHeader, CardTitle} from '@/components/ui/card';
import Link from 'next/link';
export default async function CourseDetails({params}: {params: {slug: string}}) {
  const {slug} = await params;

  const discussions = [
    {
      id: 1,
      slug: 'how-to-learn-javascript',
      title: 'How to Learn JavaScript Effectively'
    },
    {
      id: 2,
      slug: 'react-vs-angular',
      title: 'React vs Angular: Which is Better?'
    },
    {
      id: 3,
      slug: 'best-coding-practices',
      title: 'Best Coding Practices for Clean Code'
    },
    {
      id: 4,
      slug: 'understanding-asynchronous-programming',
      title: 'Understanding Asynchronous Programming in JavaScript'
    },
    {
      id: 5,
      slug: 'front-end-vs-back-end',
      title: "Front-End vs Back-End Development: What's the Difference?"
    }
  ];
  return (
    <section className='grow'>
      <h1 className='text-center'>Discussions</h1>
      <article className='flex flex-wrap gap-5 p-2'>
        {discussions.map((discussion: {id: number; slug: string; title: string}) => (
          <Link
            href={`/courses/${slug}/${discussion.slug}`}
            key={discussion.id}>
            <Card className='w-[350px]'>
              <CardHeader>
                <CardTitle>{discussion.title}</CardTitle>
                <CardDescription>Deploy your new project in one-click.</CardDescription>
              </CardHeader>
              <CardContent>
                <div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque sit illo quidem, aliquid officia hic
                    ullam eveniet autem accusamus pariatur numquam reiciendis nostrum iure ratione, quae atque doloribus
                    libero architecto.
                  </p>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </article>
    </section>
  );
}
