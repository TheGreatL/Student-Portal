import {Department, Role} from '@prisma/client';
import {z} from 'zod';

export const programSchema = z.object({
  id: z.string().trim().optional(),
  acronym: z.string().trim(),
  name: z.string().trim()
});

export type TProgram = z.infer<typeof programSchema>;

export const userSchema = z.object({
  id: z
    .string({
      required_error: 'ID is required',
      invalid_type_error: 'ID must be a string'
    })
    .cuid('Invalid ID format')
    .trim()
    .optional(),

  firstName: z
    .string({
      required_error: 'First name is required',
      invalid_type_error: 'First name must be a string'
    })
    .nonempty('First name cannot be empty')
    .trim(),
  lastName: z
    .string({
      required_error: 'Last name is required',
      invalid_type_error: 'Last name must be a string'
    })
    .trim()
    .nonempty('Last name cannot be empty'),

  email: z
    .string({
      required_error: 'Email is required',
      invalid_type_error: 'Email must be a string'
    })
    .email('Invalid email address')
    .trim()
    .optional(),

  password: z
    .string({
      required_error: 'Password is required',
      invalid_type_error: 'Password must be a string'
    })
    .trim()
    .min(3, 'Password must be at least 3 characters')
    .optional(),

  avatar: z
    .string({
      required_error: 'Avatar is required',
      invalid_type_error: 'Avatar must be a string'
    })
    .trim()
    .optional(),

  role: z
    .nativeEnum(Role, {
      required_error: 'Role is required',
      invalid_type_error: 'Invalid role selection'
    })
    .optional(),

  student: z
    .object({
      program: z
        .string({
          required_error: 'Program is required',
          invalid_type_error: 'Program must be a string'
        })
        .trim()
        .min(1, 'Program cannot be empty')
        .optional()
    })
    .optional(),
  teacher: z
    .object({
      department: z
        .nativeEnum(Department, {
          required_error: 'Department is required',
          invalid_type_error: 'Invalid department selection'
        })
        .optional()
    })
    .optional(),

  createdAt: z
    .date({
      required_error: 'Created date is required',
      invalid_type_error: 'Invalid date format'
    })
    .optional(),

  updatedAt: z
    .date({
      required_error: 'Updated date is required',
      invalid_type_error: 'Invalid date format'
    })
    .optional(),

  deletedAt: z
    .date({
      required_error: 'Deleted date is required',
      invalid_type_error: 'Invalid date format'
    })
    .optional()
});
export type TUser = z.infer<typeof userSchema>;
