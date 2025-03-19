import {z} from 'zod';

export const classSchema = z.object({
  section: z
    .string({
      invalid_type_error: 'Section must be string',
      required_error: 'Section is required'
    })
    .trim()
    .nonempty('Input section name first'),
  courseId: z
    .string({
      invalid_type_error: 'Course must be string',
      required_error: 'Course is required'
    })
    .uuid('Select a course for this class first')
    .nonempty('Select a course for this class first'),
  teacherId: z.string().default('').optional(),
  isOngoing: z.boolean().default(true),
  academicYear: z
    .string({
      invalid_type_error: 'Academic Year must be string',
      required_error: 'Academic Year is required'
    })
    .trim()
    .nonempty('Input academic year for this class first')
});
export type TClass = z.infer<typeof classSchema>;
