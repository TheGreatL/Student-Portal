import {z} from 'zod';

export const statusSchema = z.enum(['on going', 'completed', 'failed']);

export type TStatus = z.infer<typeof statusSchema>;
export const courseSchema = z.object({
  name: z.string(),
  description: z.string(),
  courseId: z.number(),
  progress: z.number(),
  image: z.string(),
  teacher: z.string(),
  status: statusSchema,
  slug: z.string()
});

export type TCourse = z.infer<typeof courseSchema>;
