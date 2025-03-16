import {z} from 'zod';

export const statusSchema = z.enum(['on going', 'completed', 'failed']);

export type TStatus = z.infer<typeof statusSchema>;

const staticImageDataSchema = z.object({
  src: z.string(), // The image path or URL (usually a string)
  height: z.number(), // The image height (in pixels)
  width: z.number(), // The image width (in pixels)
  blurDataURL: z.string().optional() // (optional) The base64-encoded blurred image data URL
});
export const courseSchema = z.object({
  name: z.string(),
  description: z.string(),
  courseId: z.number(),
  progress: z.number(),
  image: staticImageDataSchema,
  teacher: z.string(),
  status: statusSchema,
  slug: z.string()
});

export type TCourse = z.infer<typeof courseSchema>;
