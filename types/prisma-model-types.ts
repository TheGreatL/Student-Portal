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

export type TRoomSchedules = Prisma.ClassScheduleGetPayload<{
  include: {
    room: true;
    class: true;
  };
}>;

export type TDiscussionWithCommentAndReaction = Prisma.ClassDiscussionGetPayload<{
  include: {
    user: true;

    classDiscussionComment: {
      include: {
        user: true;
      };
    };
    classDiscussionReact: {
      include: {
        user: true;
      };
    };
  };
}>;

export type TDiscussionReaction = Prisma.ClassDiscussionReactGetPayload<{
  include: {
    user: true;
  };
}>;
