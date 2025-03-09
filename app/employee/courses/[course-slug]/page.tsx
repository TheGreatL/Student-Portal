import {GetServerSideProps} from 'next';

type CourseViewProps = {
  params: {'course-slug': string};
};

export default function CourseView({params}: CourseViewProps) {
  const {'course-slug': slug} = params;
  return (
    <div>
      <h1>CourseView</h1>
      <h1>{slug}</h1>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const {params} = context;
  return {
    props: {
      params
    }
  };
};
