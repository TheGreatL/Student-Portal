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
    progress: 100,
    teacher: 'daddy bong',
    description: 'Great Books',
    status: 'on going'
  },
  {
    courseId: 2,
    image: generateImage(2),
    name: 'Application Development',
    slug: 'application-development',
    progress: 100,
    teacher: 'daddy bong',
    description: 'Application Development',
    status: 'completed'
  },
  {
    courseId: 3,
    image: generateImage(3),
    name: 'Management Information System',
    slug: 'management-information-system',
    progress: 100,
    teacher: 'daddy bong',
    description: 'Management Information System',
    status: 'on going'
  },
  {
    courseId: 4,
    image: generateImage(4),
    name: 'System Management',
    slug: 'system-management',
    progress: 100,
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
  // {
  //   courseId: 6,
  //   image: generateImage(6),
  //   name: 'Platform Technology',
  //   slug: 'platform-technology',
  //   progress: 100,
  //   teacher: 'daddy bong',
  //   description: 'Platform Technology',
  //   status: 'completed'
  // },
  // {
  //   courseId: 7,
  //   image: generateImage(7),
  //   name: 'Platform Technology',
  //   progress: 100,
  //   teacher: 'daddy bong',
  //   description: 'Platform Technology',
  //   status: 'on going'
  // },
  // {
  //   courseId: 8,
  //   image: generateImage(8),
  //   name: 'Platform Technology',
  //   progress: 100,
  //   teacher: 'daddy bong',
  //   description: 'Platform Technology',
  //   status: 'completed'
  // },
  // {
  //   courseId: 9,
  //   image: generateImage(9),
  //   name: 'Platform Technology',
  //   progress: 100,
  //   teacher: 'daddy bong',
  //   description: 'Platform Technology',
  //   status: 'on going'
  // },
  // {
  //   courseId: 10,
  //   image: generateImage(10),
  //   name: 'Platform Technology',
  //   progress: 100,
  //   teacher: 'daddy bong',
  //   description: 'Platform Technology',
  //   status: 'on going'
  // },
  // {
  //   courseId: 11,
  //   image: generateImage(11),
  //   name: 'Platform Technology',
  //   progress: 100,
  //   teacher: 'daddy bong',
  //   description: 'Platform Technology',
  //   status: 'completed'
  // },
  // {
  //   courseId: 12,
  //   image: generateImage(12),
  //   name: 'Platform Technology',
  //   progress: 100,
  //   teacher: 'daddy bong',
  //   description: 'Platform Technology',
  //   status: 'on going'
  // },
  // {
  //   courseId: 13,
  //   image: generateImage(13),
  //   name: 'Platform Technology',
  //   progress: 100,
  //   teacher: 'daddy bong',
  //   description: 'Platform Technology',
  //   status: 'completed'
  // },
  // {
  //   courseId: 14,
  //   image: generateImage(14),
  //   name: 'Platform Technology',
  //   progress: 100,
  //   teacher: 'daddy bong',
  //   description: 'Platform Technology',
  //   status: 'completed'
  // },
  // {
  //   courseId: 15,
  //   image: generateImage(15),
  //   name: 'Platform Technology',
  //   progress: 100,
  //   teacher: 'daddy bong',
  //   description: 'Platform Technology',
  //   status: 'completed'
  // },
  // {
  //   courseId: 16,
  //   image: generateImage(16),
  //   name: 'Platform Technology',
  //   progress: 100,
  //   teacher: 'daddy bong',
  //   description: 'Platform Technology',
  //   status: 'on going'
  // },
  // {
  //   courseId: 17,
  //   image: generateImage(17),
  //   name: 'Platform Technology',
  //   progress: 100,
  //   teacher: 'daddy bong',
  //   description: 'Platform Technology',
  //   status: 'completed'
  // },
  // {
  //   courseId: 18,
  //   image: generateImage(18),
  //   name: 'Platform Technology',
  //   progress: 50,
  //   teacher: 'daddy bong',
  //   description: 'Platform Technology',
  //   status: 'on going'
  // },
  // {
  //   courseId: 19,
  //   image: generateImage(19),
  //   name: 'Platform Technology',
  //   progress: 56,
  //   teacher: 'daddy bong',
  //   description: 'Platform Technology',
  //   status: 'completed'
  // }
];
