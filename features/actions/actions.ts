'use server';

import {TUser, userSchema} from '@/lib/schema/user-schema';
import {transformZodErrors} from '@/lib/utils';
// import prisma from '@/service/db';
import {z} from 'zod';

export async function addStudentAction(
  formData: FormData
): Promise<{data: TUser | null; errors: {path: string | null; message: string}[] | null}> {
  const startingIdValue = 200000;

  // (prisma.student.count.length + 1)
  const id = startingIdValue + 500;

  const lastName = formData.get('lastName');

  const email = `${lastName}.${id}@student.portal.edu.ph`;

  await new Promise((resolve) => setInterval(resolve, 5000));
  try {
    const validatedFields = userSchema.parse({
      firstName: formData.get('firstName') as string,
      lastName: formData.get('lastName') as string,
      avatar: formData.get('avatar'),
      password: formData.get('password'),
      email: email,
      role: 'student',
      program: formData.get('program') as string
    });

    return {
      errors: null,
      data: validatedFields
    };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return {
        errors: transformZodErrors(error),
        data: null
      };
    }
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
