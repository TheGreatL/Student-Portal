import {clsx, type ClassValue} from 'clsx';
import {twMerge} from 'tailwind-merge';
import {z} from 'zod';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function transformZodErrors(error: z.ZodError) {
  return error.issues.map((issue) => ({
    path: issue.path.join('.'),
    message: issue.message
  }));
}
