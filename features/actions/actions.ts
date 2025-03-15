'use server';

import {userSchema} from '@/lib/schema/user-schema';
import {transformZodErrors} from '@/lib/utils';
import prisma from '@/service/db';
import {Role, User} from '@prisma/client';
import {z} from 'zod';

export async function addStudentAction(
  formData: FormData
): Promise<{data: User | null; errors: {path: string | null; message: string}[] | null}> {
  const startingIdValue = 200000;

  const studentCount = await prisma.student.count();

  // const id = startingIdValue + (studentCount + 1);
  const id = startingIdValue + (studentCount + 1);

  const lastName = formData.get('lastName');

  const email = `${lastName}.${id}@student.portal.edu.ph`;

  // await new Promise((resolve) => setInterval(resolve, 5000));
  try {
    const validatedFields = userSchema.parse({
      firstName: formData.get('firstName') as string,
      lastName: formData.get('lastName') as string,
      avatar: formData.get('avatar') as string,
      password: formData.get('password') as string,
      email: email as string,
      role: 'student' as Role,
      program: formData.get('program') as string
    });

    const student = await prisma.user.create({
      data: {
        firstName: validatedFields.firstName,
        lastName: validatedFields.lastName,
        avatar: validatedFields.avatar as string,
        password: validatedFields.password as string,
        email: validatedFields.email as string,
        role: validatedFields.role,
        student: {
          create: {
            id: id.toString(),
            programId: formData.get('program') as string
          }
        }
      },
      include: {
        student: true
      }
    });

    return {
      errors: null,
      data: student
    };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return {
        errors: transformZodErrors(error),
        data: null
      };
    }
    console.table(error);
    return {
      errors: [
        {
          message: 'An unexpected error occurred. Could not create shelf.',
          path: null
        }
      ],
      data: null
    };
  }
}
