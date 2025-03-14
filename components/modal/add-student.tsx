'use client';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog';
import {Button} from '../ui/button';
import {addStudentAction} from '@/features/actions/actions';
import {Label} from '../ui/label';
import {Input} from '../ui/input';

export default function AddStudentModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant='outline'>Add Student</Button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-[425px]'>
        <DialogHeader>
          <DialogTitle>Add Student</DialogTitle>
          <DialogDescription>add a user, type of student</DialogDescription>
        </DialogHeader>
        <form
          className='flex flex-col gap-5 px-5'
          action={addStudentAction}>
          <div className='flex items-center gap-4'>
            <Label
              htmlFor='title'
              className='text-right'>
              Title
            </Label>
            <Input
              id='title'
              name='title'
              className='col-span-3'
            />
          </div>
          <div className='flex items-center gap-4'>
            <Label
              htmlFor='date'
              className='text-right'>
              Date
            </Label>
            <Input
              id='date'
              name='date'
              type='datetime-local'
              className='col-span-3'
            />
          </div>
          <Button type='submit'>Save activity</Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
