import {StaticImageData} from 'next/image';

type Status = 'on going' | 'completed';
export type RoleType = 'student' | 'employee' | 'admin';
export type CourseType = {
  name: string;
  description: string;
  courseId: number;
  progress: number;
  image: StaticImageData;
  teacher: string;
  status: Status;
};

export interface CourseDBType {
  id: string;
  name: string;
  description: string;
  image: string;
}
