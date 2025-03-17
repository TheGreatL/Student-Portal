'use server';

import {transformZodErrors} from '@/lib/utils';
import {Department, Prisma} from '@prisma/client';
import {z} from 'zod';
import {courseSchema} from '../schema/course';
import prisma from '@/service/db';

export async function createCourse(
  formData: FormData
): Promise<{errors: {path: string | null; message: string}[] | null}> {
  const name = formData.get('name') as string;
  const image = formData.get('image') as string;
  const description = formData.get('description') as string;
  const department = formData.get('department') as Department;

  try {
    courseSchema.parse({
      name,
      image,
      description,
      department
    });

    await prisma.course.create({
      data: {
        name,
        image,
        description,
        department
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

    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      const target = error.meta?.target as string[] | undefined;

      let message = 'Error';
      if (target?.length === 1 && target[0] === 'name') {
        message = 'Name is already exists';
      }
      return {
        errors: [
          {
            message,
            path: null
          }
        ]
      };
    }

    return {
      errors: [
        {
          message: 'An unexpected error occurred. Could not create shelf.',
          path: null
        }
      ]
    };
  }
}
