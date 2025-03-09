type CourseViewProps = {
  params: {'course-slug': string};
};
export default async function CourseView({params}: CourseViewProps) {
  // await new Promise((resolve) => setTimeout(resolve, 2000));

  const {'course-slug': slug} = params;
  return (
    <div>
      <h1>CourseView</h1>
      <h1>{slug}</h1>
    </div>
  );
}
