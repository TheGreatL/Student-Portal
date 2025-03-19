import {z} from 'zod';

export const roomSchema = z.object({
  name: z
    .string({
      required_error: 'Name is required',
      invalid_type_error: 'Name must be a string'
    })
    .trim()
    .nonempty('Name field cannot be empty'),
  building: z
    .string({
      required_error: 'Building is required',
      invalid_type_error: 'Building must be a string'
    })
    .trim()
    .nonempty('Building field cannot be empty'),
  floor: z
    .string({
      required_error: 'Floor is required',
      invalid_type_error: 'Floor must be a string'
    })
    .trim()
    .nonempty('Floor field cannot be empty'),
  image: z
    .string({
      required_error: 'Image is required',
      invalid_type_error: 'Image must be a string'
    })
    .trim()
    .nonempty('Image cannot be empty')
});
export type TRoom = z.infer<typeof roomSchema>;
