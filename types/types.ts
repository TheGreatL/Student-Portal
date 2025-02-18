import {StaticImageData} from 'next/image';

type Status = 'on going' | 'completed';
export type CourseType = {
  name: string;
  description: string;
  courseId: number;
  progress: number;
  image: StaticImageData;
  teacher: string;
  status: Status;
};
