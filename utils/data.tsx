import {TCourse} from '@/types/types';
import cat from '@/assets/cat.jpg';
import nayeon from '@/assets/nayeon.jpg';
import n from '@/assets/n.jpg';

const generateImage = (number: number) => {
  if (number % 2 === 0) return cat;
  else if (number % 3 === 0) return nayeon;
  else return n;
};

export const courses: TCourse[] = [
  {
    courseId: 1,
    image: generateImage(1),
    name: 'Great Books',
    slug: 'great-books',
    progress: 80,
    teacher: 'daddy bong',
    description: 'Great Books',
    status: 'on going'
  },
  {
    courseId: 2,
    image: generateImage(2),
    name: 'Application Development',
    slug: 'application-development',
    progress: 6,
    teacher: 'daddy bong',
    description: 'Application Development',
    status: 'completed'
  },
  {
    courseId: 3,
    image: generateImage(3),
    name: 'Management Information System',
    slug: 'management-information-system',
    progress: 19,
    teacher: 'daddy bong',
    description: 'Management Information System',
    status: 'on going'
  },
  {
    courseId: 4,
    image: generateImage(4),
    name: 'System Management',
    slug: 'system-management',
    progress: 50,
    teacher: 'daddy bong',
    description: 'System Management',
    status: 'completed'
  },
  {
    courseId: 5,
    image: generateImage(5),
    name: 'Platform Technology',
    slug: 'platform-technology',
    progress: 100,
    teacher: 'daddy bong',
    description: 'Platform Technology',
    status: 'on going'
  }
];
