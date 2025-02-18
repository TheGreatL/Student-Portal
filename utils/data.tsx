import {CourseType} from '@/types/types';
import cat from '../public/assets/cat.jpg';
import nayeon from '../public/assets/nayeon.jpg';
import n from '../public/assets/n.jpg';

const generateRandomNumber = (maxNum: number) => {
  return Math.round(Math.random() * maxNum) + 1;
};

const generateImage = (number: number) => {
  switch (number) {
    case 1:
      return nayeon;
    case 2:
      return cat;
    default:
      return n;
  }
};

export const courses: CourseType[] = [
  {
    courseId: generateRandomNumber(3000),
    image: generateImage(generateRandomNumber(3)),
    name: 'Great Books',
    progress: generateRandomNumber(100),
    teacher: 'daddy bong',
    description: 'Great Books',
    status: 'on going'
  },
  {
    courseId: generateRandomNumber(3000),
    image: generateImage(generateRandomNumber(3)),
    name: 'Application Development',
    progress: generateRandomNumber(100),
    teacher: 'daddy bong',
    description: 'Application Development',
    status: 'completed'
  },
  {
    courseId: generateRandomNumber(3000),
    image: generateImage(generateRandomNumber(3)),
    name: 'Management Information System',
    progress: generateRandomNumber(100),
    teacher: 'daddy bong',
    description: 'Management Information System',
    status: 'on going'
  },
  {
    courseId: generateRandomNumber(3000),
    image: generateImage(generateRandomNumber(3)),
    name: 'System Management',
    progress: generateRandomNumber(100),
    teacher: 'daddy bong',
    description: 'System Management',
    status: 'completed'
  },
  {
    courseId: generateRandomNumber(3000),
    image: generateImage(generateRandomNumber(3)),
    name: 'Platform Technology',
    progress: generateRandomNumber(100),
    teacher: 'daddy bong',
    description: 'Platform Technology',
    status: 'on going'
  },
  {
    courseId: generateRandomNumber(3000),
    image: generateImage(generateRandomNumber(3)),
    name: 'Platform Technology',
    progress: generateRandomNumber(100),
    teacher: 'daddy bong',
    description: 'Platform Technology',
    status: 'completed'
  },
  {
    courseId: generateRandomNumber(3000),
    image: generateImage(generateRandomNumber(3)),
    name: 'Platform Technology',
    progress: generateRandomNumber(100),
    teacher: 'daddy bong',
    description: 'Platform Technology',
    status: 'on going'
  },
  {
    courseId: generateRandomNumber(3000),
    image: generateImage(generateRandomNumber(3)),
    name: 'Platform Technology',
    progress: generateRandomNumber(100),
    teacher: 'daddy bong',
    description: 'Platform Technology',
    status: 'completed'
  },
  {
    courseId: generateRandomNumber(3000),
    image: generateImage(generateRandomNumber(3)),
    name: 'Platform Technology',
    progress: generateRandomNumber(100),
    teacher: 'daddy bong',
    description: 'Platform Technology',
    status: 'on going'
  },
  {
    courseId: generateRandomNumber(3000),
    image: generateImage(generateRandomNumber(3)),
    name: 'Platform Technology',
    progress: generateRandomNumber(100),
    teacher: 'daddy bong',
    description: 'Platform Technology',
    status: 'on going'
  },
  {
    courseId: generateRandomNumber(3000),
    image: generateImage(generateRandomNumber(3)),
    name: 'Platform Technology',
    progress: generateRandomNumber(100),
    teacher: 'daddy bong',
    description: 'Platform Technology',
    status: 'completed'
  },
  {
    courseId: generateRandomNumber(3000),
    image: generateImage(generateRandomNumber(3)),
    name: 'Platform Technology',
    progress: generateRandomNumber(100),
    teacher: 'daddy bong',
    description: 'Platform Technology',
    status: 'on going'
  },
  {
    courseId: generateRandomNumber(3000),
    image: generateImage(generateRandomNumber(3)),
    name: 'Platform Technology',
    progress: generateRandomNumber(100),
    teacher: 'daddy bong',
    description: 'Platform Technology',
    status: 'completed'
  },
  {
    courseId: generateRandomNumber(3000),
    image: generateImage(generateRandomNumber(3)),
    name: 'Platform Technology',
    progress: generateRandomNumber(100),
    teacher: 'daddy bong',
    description: 'Platform Technology',
    status: 'completed'
  },
  {
    courseId: generateRandomNumber(3000),
    image: generateImage(generateRandomNumber(3)),
    name: 'Platform Technology',
    progress: generateRandomNumber(100),
    teacher: 'daddy bong',
    description: 'Platform Technology',
    status: 'completed'
  },
  {
    courseId: generateRandomNumber(3000),
    image: generateImage(generateRandomNumber(3)),
    name: 'Platform Technology',
    progress: generateRandomNumber(100),
    teacher: 'daddy bong',
    description: 'Platform Technology',
    status: 'on going'
  },
  {
    courseId: generateRandomNumber(3000),
    image: generateImage(generateRandomNumber(3)),
    name: 'Platform Technology',
    progress: generateRandomNumber(100),
    teacher: 'daddy bong',
    description: 'Platform Technology',
    status: 'completed'
  },
  {
    courseId: generateRandomNumber(3000),
    image: generateImage(generateRandomNumber(3)),
    name: 'Platform Technology',
    progress: generateRandomNumber(100),
    teacher: 'daddy bong',
    description: 'Platform Technology',
    status: 'on going'
  },
  {
    courseId: generateRandomNumber(3000),
    image: generateImage(generateRandomNumber(3)),
    name: 'Platform Technology',
    progress: generateRandomNumber(100),
    teacher: 'daddy bong',
    description: 'Platform Technology',
    status: 'completed'
  }
];
