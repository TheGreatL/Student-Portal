import CreateScheduleModal from '@/features/class/components/modals/create-schedule';
import prisma from '@/service/db';
import React from 'react';
import {Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow} from '@/components/ui/table';
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from '@/components/ui/card';

import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from '@/components/ui/tooltip';

import {TDiscussionWithCommentAndReaction} from '@/types/prisma-model-types';
import {Reaction, User} from '@prisma/client';
import IconGenerator from '@/components/icon-generator';
import {Separator} from '@/components/ui/separator';

export default async function ClassDetails({params}: {params: Promise<{classId: string}>}) {
  const {classId} = await params;
  const rooms = await prisma.classSchedule.findMany({
    include: {
      class: true,
      room: true
    }
  });
  // const classData = await prisma.class.findUnique({
  //   where: {
  //     id: classId
  //   },
  //   include: {
  //     classSchedule: {
  //       include: {
  //         room: true
  //       }
  //     },
  //     classStudent: {
  //       include: {
  //         student: {
  //           include: {
  //             user: true,
  //             program: true
  //           }
  //         }
  //       }
  //     },
  //     teacher: {
  //       include: {
  //         user: true
  //       }
  //     },
  //     course: true
  //   }
  // });

  const classData = await prisma.class.findUnique({
    where: {
      id: classId
    },
    include: {
      course: true,
      classSchedule: {
        include: {
          room: true
        }
      },
      classStudent: {
        include: {
          student: {
            include: {
              user: true,
              program: true
            }
          }
        }
      },
      teacher: {
        include: {
          user: true
        }
      },
      classDiscussion: {
        include: {
          user: true,

          classDiscussionComment: {
            include: {
              user: true
            },
            orderBy: {
              createdAt: 'desc'
            }
          },
          classDiscussionReact: {
            include: {
              user: true
            },
            orderBy: {
              createdAt: 'desc'
            }
          }
        }
      }
    }
  });

  const formatDiscussionReaction = (discussions: TDiscussionWithCommentAndReaction[] | undefined) => {
    if (!discussions) return [];

    const classDiscussionReact: {
      reaction: Reaction;
      user: User;
    }[] = [];

    discussions.forEach((discussion) => {
      discussion.classDiscussionReact.forEach((react) => {
        classDiscussionReact.push({
          reaction: react.reaction,
          user: react.user
        });
      });
    });
    type ReactionMap = {
      [key in Reaction]?: User[];
    };
    const reduceReaction = classDiscussionReact.reduce<ReactionMap>((accumulator, curr) => {
      const reaction = curr.reaction as Reaction;
      if (!accumulator[reaction]) {
        accumulator[reaction] = [];
      }

      accumulator[reaction].push(curr.user);

      return accumulator;
    }, {});

    //     *Needed Format of Data
    //     ClassDiscussionReact: [
    //       {
    //         reaction: reactionType,
    //         users:[]
    //       }
    //     ]
    //   */

    return Object.entries(reduceReaction).map(([reaction, users]) => ({
      reaction: reaction as Reaction,
      users
    }));
  };
  const formattedDiscussionReaction = formatDiscussionReaction(classData?.classDiscussion);
  // console.log(formattedDiscussionReaction);
  // console.dir(classData);
  return (
    <section className='flex grow flex-col p-5'>
      <h1>
        Teacher: {classData?.teacher?.user.firstName} {classData?.teacher?.user.lastName}
      </h1>
      <h1>Course Name: {classData?.course.name}</h1>
      <h1>Section: {classData?.section}</h1>
      <h1>Academic Year: {classData?.academicYear}</h1>

      <article className='mt-5 space-y-5'>
        <CreateScheduleModal rooms={rooms} />
        <Table className='bg-white'>
          <TableCaption>Schedule</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Building Name</TableHead>
              <TableHead>Floor</TableHead>
              <TableHead>Room Name</TableHead>
              <TableHead>Day</TableHead>
              <TableHead>Time</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {classData?.classSchedule.map((schedule) => (
              <TableRow key={schedule.id}>
                <TableCell>{schedule.room.building}</TableCell>
                <TableCell>{schedule.room.floor}</TableCell>
                <TableCell>{schedule.room.name}</TableCell>
                <TableCell>{schedule.scheduleDay}</TableCell>
                <TableCell>
                  {schedule.scheduleStartingTime.toDateString()} {schedule.scheduleEndingTime.toDateString()}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <Table className='bg-white'>
          <TableCaption>Students</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Program</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {classData?.classStudent.map((student) => (
              <TableRow key={student.id}>
                <TableCell>
                  {student.student?.user.firstName} {student.student?.user.lastName}
                </TableCell>
                <TableCell>{student.student?.program.name}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </article>
      <article className='my-6'>
        {classData?.classDiscussion.map((discussion) => (
          <Card key={discussion.id}>
            <CardHeader>
              <CardTitle>{discussion.title}</CardTitle>
              <CardDescription>
                {discussion.user.firstName} {discussion.user.lastName}
              </CardDescription>
              <CardContent>
                <p>{discussion.content}</p>
              </CardContent>
              <CardFooter>
                <section className='flex w-full flex-col'>
                  <TooltipProvider>
                    <div className='space-x-6'>
                      {formattedDiscussionReaction.map((react) => {
                        return (
                          <Tooltip key={react.reaction}>
                            <TooltipTrigger asChild>
                              <IconGenerator reaction={react.reaction} />
                            </TooltipTrigger>
                            <TooltipContent side='bottom'>
                              {react.users.map((user) => (
                                <p key={user.id}>
                                  {user.firstName} {user.lastName}
                                </p>
                              ))}
                            </TooltipContent>
                          </Tooltip>
                        );
                      })}
                    </div>
                  </TooltipProvider>

                  <span>{discussion.classDiscussionComment.length} comments</span>
                  <div className=''>
                    {discussion.classDiscussionComment.map((comment) => (
                      <>
                        <div
                          key={comment.id}
                          className='w-full bg-gray-200'>
                          <strong>
                            {comment.user.firstName} {comment.user.lastName}
                          </strong>
                          <p>{comment.comment}</p>
                        </div>
                        <Separator
                          orientation='horizontal'
                          className='my-1 bg-blue-400'
                        />
                      </>
                    ))}
                  </div>
                </section>
              </CardFooter>
            </CardHeader>
          </Card>
        ))}
      </article>
    </section>
  );
}
