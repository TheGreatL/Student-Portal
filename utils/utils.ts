import {Department} from '@prisma/client';

export const departments: {
  value: Department;
  name: string;
}[] = [
  {
    value: 'ict',
    name: 'Information Communication Technology'
  },
  {
    value: 'bm',
    name: 'Business Management'
  },
  {
    value: 'hm',
    name: 'Hotel Management'
  },
  {
    value: 'sh',
    name: 'Senior High'
  },
  {
    value: 'tm',
    name: 'Tourism Management'
  },
  {
    value: 'ga',
    name: 'General Academic'
  },
  {
    value: 'ba',
    name: 'Broadcasting Communication'
  }
];
