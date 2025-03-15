import React from 'react';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import TableGrade, {TGradeCourse} from '@/components/table-grade';

export default function GradesPage() {
  const grades: TGradeCourse[] = [
    {
      course: 'Great Books',
      dateEnrolled: '26 FEB, 2025',
      instructor: 'Teacher',
      terms: [
        {
          term: 'Prelim',
          grade: '88.92'
        },
        {
          term: 'Midterm',
          grade: '88.92'
        },
        {
          term: 'Pre Finals',
          grade: '88.92'
        },
        {
          term: 'Finals',
          grade: '88.92'
        }
      ]
    },
    {
      course: 'Information Assurance & Security (Cybersecurity Fundamentals)',
      dateEnrolled: '26 FEB, 2025',
      instructor: 'Teacher',
      terms: [
        {
          term: 'Prelim',
          grade: '88.92'
        },
        {
          term: 'Midterm',
          grade: '88.92'
        },
        {
          term: 'Pre Finals',
          grade: '88.92'
        },
        {
          term: 'Finals',
          grade: '88.92'
        }
      ]
    },
    {
      course: 'Management Information Systems',
      dateEnrolled: '26 FEB, 2025',
      instructor: 'Teacher',
      terms: [
        {
          term: 'Prelim',
          grade: '-'
        },
        {
          term: 'Midterm',
          grade: '-'
        },
        {
          term: 'Pre Finals',
          grade: '-'
        },
        {
          term: 'Finals',
          grade: '-'
        }
      ]
    },
    {
      course: 'IT Capstone Project 1',
      dateEnrolled: '26 FEB, 2025',
      instructor: 'Teacher',
      terms: [
        {
          term: 'Finals',
          grade: '-'
        }
      ]
    },
    {
      course: 'Web Systems and Technologies',
      dateEnrolled: '26 FEB, 2025',
      instructor: 'Teacher',
      terms: [
        {
          term: 'Prelim',
          grade: '-'
        },
        {
          term: 'Midterm',
          grade: '-'
        },
        {
          term: 'Pre Finals',
          grade: '-'
        },
        {
          term: 'Finals',
          grade: '-'
        }
      ]
    },
    {
      course: 'Programming Languages',
      dateEnrolled: '26 FEB, 2025',
      instructor: 'Teacher',
      terms: [
        {
          term: 'Prelim',
          grade: '-'
        },
        {
          term: 'Midterm',
          grade: '-'
        },
        {
          term: 'Pre Finals',
          grade: '-'
        },
        {
          term: 'Finals',
          grade: '-'
        }
      ]
    },
    {
      course: 'Mobile Systems and Technologies',
      dateEnrolled: '26 FEB, 2025',
      instructor: 'Teacher',
      terms: [
        {
          term: 'Prelim',
          grade: '-'
        },
        {
          term: 'Midterm',
          grade: '-'
        },
        {
          term: 'Pre Finals',
          grade: '-'
        },
        {
          term: 'Finals',
          grade: '-'
        }
      ]
    }
  ];
  // TODO: COPY UI OF ONESTI
  return (
    <section className='flex grow flex-col gap-5 p-5'>
      <div className='flex items-center'>
        <label htmlFor='grades'>School Year & Term:</label>
        <Select>
          <SelectTrigger
            id='grades'
            className='w-[15rem] bg-white'>
            <SelectValue placeholder='Select A.Y & Term' />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Academic Year & Term</SelectLabel>
              <SelectItem value='apple'>Apple</SelectItem>
              <SelectItem value='banana'>Banana</SelectItem>
              <SelectItem value='blueberry'>Blueberry</SelectItem>
              <SelectItem value='grapes'>Grapes</SelectItem>
              <SelectItem value='pineapple'>Pineapple</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <p className=''>Tertiary</p>
      </div>
      <article className='flex grow flex-wrap justify-evenly gap-3'>
        {grades.map((grade) => (
          <TableGrade
            key={grade.course}
            grade={grade}
          />
        ))}
      </article>
    </section>
  );
}
