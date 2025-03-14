import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';

import {Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow} from '@/components/ui/table';

import React from 'react';

export default function SchedulePage() {
  const schedules = [
    {
      subject: 'Programming Languages',
      day: 'F',
      time: '2:00PM-4:00PM',
      room: 'A402',
      instructor: 'CHRISTIAN JOSHUA EBALIN'
    },
    {
      subject: 'Web Systems and Technologies',
      day: 'F',
      time: '4:00PM-6:00PM',
      room: 'D403',
      instructor: 'JENER GALANG'
    }
  ];

  // TODO: COPY UI OF ONESTI
  return (
    <section className='flex grow flex-col gap-5 p-5'>
      <label
        className='text-center text-lg font-semibold'
        htmlFor='ay&term'>
        Academic Year & Term
      </label>
      <Select>
        <SelectTrigger
          id='ay&term'
          className='bg-white'>
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
      <p className='text-center text-lg font-semibold'>Select Day</p>
      <Select>
        <SelectTrigger className='bg-white'>
          <SelectValue placeholder='Day' />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Day</SelectLabel>
            <SelectItem value='monday'>Monday</SelectItem>
            <SelectItem value='tuesday'>Tuesday</SelectItem>
            <SelectItem value='wednesday'>Wednesday</SelectItem>
            <SelectItem value='thursday'>Thursday</SelectItem>
            <SelectItem value='friday'>Friday</SelectItem>
            <SelectItem value='saturday'>Saturday</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      <strong className='text-center text-2xl'>Your Schedule for Today</strong>
      <p>Table Here</p>
      <Table className='rounded-sm bg-white'>
        <TableCaption>© Ken The Great Student Portal</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Course</TableHead>
            <TableHead className='text-center'>Day</TableHead>
            <TableHead className='text-center'>Time</TableHead>
            <TableHead className='text-center'>Room</TableHead>
            <TableHead className='text-right'>Instructor</TableHead>
            <TableHead className='text-right'>Avatar</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {schedules.map((schedule) => (
            <TableRow key={schedule.subject}>
              <TableCell className='font-medium'>{schedule.subject}</TableCell>
              <TableCell className='text-center'>{schedule.day}</TableCell>
              <TableCell className='text-center'>{schedule.time}</TableCell>
              <TableCell className='text-center'>{schedule.room}</TableCell>
              <TableCell className='text-right'>{schedule.instructor}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </section>
  );
}
