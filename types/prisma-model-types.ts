import {Prisma} from '@prisma/client';

export type TStudentWithUser = Prisma.UserGetPayload<{
  include: {student: true};
}>;

export type TTeacherWithUser = Prisma.UserGetPayload<{
  include: {teacher: true};
}>;

export type TClassWithTeacher = Prisma.ClassGetPayload<{
  include: {
    teacher: {
      include: {
        user: true;
      };
    };
    course: true;
  };
}>;
