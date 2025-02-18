export default async function CourseView() {
  await new Promise((resolve) => setTimeout(resolve, 5000));
  return (
    <div>
      <h1>CourseView</h1>
    </div>
  );
}
