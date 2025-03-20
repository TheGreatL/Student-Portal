'use server';

import {transformZodErrors} from '@/lib/utils';
import {z} from 'zod';
import {roomSchema} from './schema/room';
import prisma from '@/service/db';
import {classSchema} from './schema/class';

export async function createRoomAction(formData: FormData): Promise<{
  errors: {path: string | null; message: string}[] | null;
}> {
  const name = formData.get('name') as string;
  const building = formData.get('building') as string;
  const floor = formData.get('floor') as string;
  const image = formData.get('image') as string;
  try {
    roomSchema.parse({
      name,
      building,
      floor,
      image
    });

    await prisma.room.create({
      data: {
        name,
        building,
        floor,
        image
      }
    });

    return {
      errors: null
    };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return {
        errors: transformZodErrors(error)
      };
    }
    return {
      errors: [
        {
          message: 'An unexpected error occurred. Could not create room.',
          path: null
        }
      ]
    };
  }
}

export async function createClassAction(formData: FormData): Promise<{
  errors: {path: string | null; message: string}[] | null;
}> {
  const section = formData.get('section') as string;
  const academicYear = formData.get('academicYear') as string;
  const courseId = formData.get('courseId') as string;
  const isOngoingString = String(formData.get('isOngoing')) as string;
  const teacherId = formData.get('teacherId') as string;

  const isOngoing: boolean = JSON.parse(isOngoingString);

  try {
    classSchema.parse({
      section,
      academicYear,
      courseId,
      isOngoing,
      teacherId
    });

    await prisma.class.create({
      data: {
        section,
        academicYear,
        courseId,
        isOngoing,
        teacherId
      }
    });
    return {
      errors: null
    };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return {
        errors: transformZodErrors(error)
      };
    }

    console.dir(error);
    return {
      errors: [
        {
          message: 'An unexpected error occurred. Could not create a class.',
          path: null
        }
      ]
    };
  }
}
