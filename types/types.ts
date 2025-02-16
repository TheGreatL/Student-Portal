import {StaticImageData} from 'next/image';

export type CourseType = {
  name: string;
  description: string;
  courseId: number;
  progress: number;
  image: StaticImageData;
  teacher: string;
};
