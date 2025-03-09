import {StaticImageData} from 'next/image';

type Status = 'on going' | 'completed';
export type TCourse = {
  name: string;
  description: string;
  courseId: number;
  progress: number;
  image: StaticImageData;
  teacher: string;
  status: Status;
  slug: string;
};
