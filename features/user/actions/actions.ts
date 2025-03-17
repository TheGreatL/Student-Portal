'use server';

import {userSchema} from '@/features/user/schema/user';
import {transformZodErrors} from '@/lib/utils';
import prisma from '@/service/db';
import {Department, Role} from '@prisma/client';
import {z} from 'zod';
export async function addUserAction(
  formData: FormData
): Promise<{errors: {path: string | null; message: string}[] | null}> {
  const role = formData.get('userType') as Role;

  const startingIdValue = 200000;

  const studentCount = await prisma.student.count();

  // const id = startingIdValue + (studentCount + 1);
  const id = startingIdValue + (studentCount + 1);

  const firstName = formData.get('firstName') as string;
  const lastName = formData.get('lastName') as string;
  const avatar = formData.get('avatar') as string;
  const password = formData.get('password') as string;
  const email =
    role === 'student' ?
      `${lastName.toString().replace(' ', '')}.${id}@student.portal.edu.ph`
    : (`${lastName.replace(' ', '')}.${firstName.replace(' ', '')}@student.portal.edu.ph` as string);
  // await new Promise((resolve) => setInterval(resolve, 5000));

  try {
    if (role === 'student') {
      const validatedFields = userSchema.parse({
        firstName,
        lastName,
        avatar,
        password,
        email,
        role,
        student: {
          program: formData.get('program') as string
        }
      });
      await prisma.user.create({
        data: {
          firstName,
          lastName,
          avatar,
          password,
          email,
          role,
          student: {
            create: {
              id,
              programId: validatedFields.student?.program as string
            }
          }
        },
        include: {
          student: true
        }
      });
    } else {
      const validatedFields = userSchema.parse({
        firstName,
        lastName,
        avatar,
        password,
        email,
        role,
        teacher: {
          department: formData.get('department') as Department
        }
      });

      const teachersWithSameName = await prisma.user.findMany({
        where: {
          lastName: {contains: lastName, mode: 'insensitive'},
          firstName: {contains: firstName, mode: 'insensitive'}
        }
      });
      let teacherEmail = email;
      if (teachersWithSameName.length) {
        teacherEmail =
          `${lastName.replace(' ', '')}.${firstName.replace(' ', '')}${teachersWithSameName.length + 1}@student.portal.edu.ph` as string;
      }
      await prisma.user.create({
        data: {
          firstName,
          lastName,
          avatar,
          password,
          email: teacherEmail as string,
          role,
          teacher: {
            create: {
              department: validatedFields.teacher?.department as Department
            }
          }
        },
        include: {
          teacher: true
        }
      });
    }
    return {
      errors: null
    };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return {
        errors: transformZodErrors(error)
      };
    }
    console.table(error);
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
