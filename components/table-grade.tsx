import React from 'react';
import {Separator} from './ui/separator';

export type TCourseTerms = {
  term: string;
  grade?: string;
};

export type TGradeCourse = {
  course: string;
  instructor: string;
  terms: TCourseTerms[];
  dateEnrolled: string;
};

export default function TableGrade({grade}: {grade: TGradeCourse}) {
  const {course, instructor, terms, dateEnrolled} = grade;
  return (
    <section className='flex h-[13rem] w-[20rem] flex-col overflow-hidden rounded-lg bg-white lg:w-[32rem]'>
      <div className='bg-gray-300 p-2'>
        <strong>{course}</strong>
        <p className='uppercase'>
          {instructor} • <span>{dateEnrolled}</span>
        </p>
      </div>
      <Separator
        orientation='horizontal'
        className='my-1 bg-blue-400'
      />
      <article className='flex grow flex-col p-2'>
        <header className={`flex justify-evenly bg-gray-300 px-2 py-3`}>
          {terms.map((term) => (
            <strong key={term.term}>{term.term}</strong>
          ))}
        </header>
        <div className='flex justify-evenly px-2'>
          {terms.map((grade) => (
            <p key={grade.term}>{grade.grade}</p>
          ))}
        </div>
      </article>
    </section>
  );
}
