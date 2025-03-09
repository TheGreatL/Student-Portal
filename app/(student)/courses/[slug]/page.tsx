type CourseViewProps = {
  params: {slug: string};
};

export default function CourseView({params}: CourseViewProps) {
  const {slug} = params;
  return (
    <div>
      <h1>CourseView</h1>
      <h1>{slug}</h1>
    </div>
  );
}
