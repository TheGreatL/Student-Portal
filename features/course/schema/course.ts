import {Department} from '@prisma/client';
import {z} from 'zod';
export const statusSchema = z.enum(['on going', 'completed', 'failed']);

export type TStatus = z.infer<typeof statusSchema>;

const staticImageDataSchema = z.object({
  src: z.string(), // The image path or URL (usually a string)
  height: z.number(), // The image height (in pixels)
  width: z.number(), // The image width (in pixels)
  blurDataURL: z.string().optional() // (optional) The base64-encoded blurred image data URL
});
export const testCourseSchema = z.object({
  name: z.string(),
  description: z.string(),
  courseId: z.number(),
  progress: z.number(),
  image: staticImageDataSchema,
  teacher: z.string(),
  status: statusSchema,
  slug: z.string()
});

export type TTestCourseSchema = z.infer<typeof testCourseSchema>;

export const courseSchema = z.object({
  id: z
    .string({
      required_error: 'ID is required',
      invalid_type_error: 'ID must be a string'
    })
    .cuid('Invalid ID format')
    .trim()
    .optional(),
  name: z
    .string({
      required_error: 'Course Name is Required'
    })
    .trim()
    .nonempty('Name cannot be empty'),
  department: z.nativeEnum(Department, {
    required_error: 'Department is required',
    invalid_type_error: 'Invalid department selection'
  }),
  description: z
    .string({
      required_error: 'Description is Required'
    })
    .trim()
    .nonempty('Description cannot be empty'),
  image: z
    .string({
      required_error: 'Image is Required'
    })
    .trim()
    .nonempty('Image cannot be empty')
});

export type TCourse = z.infer<typeof courseSchema>;
