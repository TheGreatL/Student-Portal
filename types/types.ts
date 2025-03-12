import {StaticImageData} from 'next/image';
import {Department, Role} from '@prisma/client';
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

type TUser = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  password?: string;
  avatar: string;
  role: Role;
  createdAt: Date | null;
  updatedAt: Date | null;
  deletedAt?: Date | null;
};

export type TStudent = {
  id: string;
  userId: string;
  course: string;
  user: TUser;
};

export type TTeacher = {
  id: string;
  userId: string;
  department: Department;
  user: TUser;
};
