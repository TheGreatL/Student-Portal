// type CourseViewProps = {
//   slug: string;
// };

export default async function CourseView() {
  await new Promise((resolve) => setInterval(resolve, 5000));

  return (
    <div>
      <h1>CourseView</h1>
    </div>
  );
}
