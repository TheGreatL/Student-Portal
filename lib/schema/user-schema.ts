import {Role} from '@prisma/client';
import {z} from 'zod';

export const programSchema = z.object({
  id: z.string().trim().optional(),
  acronym: z.string().trim(),
  name: z.string().trim()
});

export type TProgram = z.infer<typeof programSchema>;

export const userSchema = z.object({
  id: z.string().cuid().trim().optional(),
  firstName: z
    .string({
      required_error: 'First is required',
      invalid_type_error: 'First must be a string'
    })
    .trim(),
  lastName: z.string().trim(),
  email: z.string().email({message: 'Invalid email address'}).trim().optional(),
  password: z.string().trim().optional(),
  avatar: z.string().trim().optional(),
  role: z.nativeEnum(Role),
  createdAt: z.optional(z.date()),
  updatedAt: z.optional(z.date()),
  deletedAt: z.optional(z.date()),
  student: z.object({}).optional(),
  teacher: z.object({}).optional(),
  program: programSchema.shape.acronym
});

export type TUser = z.infer<typeof userSchema>;
