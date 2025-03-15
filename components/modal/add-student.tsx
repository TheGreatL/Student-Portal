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
import {Label} from '../ui/label';
import {Input} from '../ui/input';
import {ScrollArea} from '../ui/scroll-area';

import {SubmitHandler, useForm} from 'react-hook-form';
import {TUser, userSchema} from '@/lib/schema/user-schema';
import {zodResolver} from '@hookform/resolvers/zod';
import {addStudentAction} from '@/features/actions/actions';
import {Loader} from 'lucide-react';
export default function AddStudentModal() {
  const {
    register,
    handleSubmit,

    reset,
    formState: {errors, isSubmitting}
  } = useForm<TUser>({
    resolver: zodResolver(userSchema),
    defaultValues: {
      id: undefined,
      firstName: undefined,
      lastName: undefined,
      avatar: 'asd',
      password: 'asd',
      email: 'carlonkenandrew@gmail.com',
      role: 'student',
      program: undefined,
      teacher: undefined,
      student: undefined,
      updatedAt: undefined,
      createdAt: undefined,
      deletedAt: undefined
    }
  });

  const onSubmitForm: SubmitHandler<TUser> = async (submitData) => {
    // call the server action

    const formData = new FormData();
    formData.append('firstName', submitData.firstName);
    formData.append('lastName', submitData.lastName);
    formData.append('program', submitData.program);
    formData.append('password', 'mypassword');
    formData.append('avatar', 'asda');

    const {data, errors} = await addStudentAction(formData);

    console.log(data);
    if (errors) {
      console.log(errors);
    }
  };

  return (
    <Dialog
      onOpenChange={(open) => {
        if (!open) reset();
      }}>
      <DialogTrigger asChild>
        <Button variant='outline'>Add Student</Button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-[425px]'>
        <DialogHeader>
          <DialogTitle>Create Student</DialogTitle>
          <DialogDescription>add a user, type of student</DialogDescription>
        </DialogHeader>
        <form
          className='flex flex-col gap-3'
          onSubmit={handleSubmit(onSubmitForm)}>
          <ScrollArea className='mb-5 max-h-[25rem] pr-2'>
            <div className='flex flex-col gap-2 p-2'>
              <Label htmlFor='firstName'>First Name</Label>
              <Input
                id='firstName'
                {...register('firstName')}
                placeholder='First Name'
              />
              <p className='text-xs text-red-500'>{errors.firstName && errors.firstName.message}</p>
            </div>
            <div className='flex flex-col gap-2 p-2'>
              <Label htmlFor='lastName'>Last Name</Label>
              <Input
                id='lastName'
                {...register('lastName')}
                placeholder='Last Name'
              />
              <p className='text-xs text-red-500'>{errors.lastName && errors.lastName.message}</p>
            </div>
            <div className='flex flex-col gap-2 p-2'>
              <Label
                htmlFor='program'
                className={`${errors.program && 'text-red-500'}`}>
                Program
              </Label>
              <Input
                id='program'
                {...register('program')}
                placeholder='Program'
                className={`${errors.program && 'border-red-500'}`}
              />
              <p className='text-xs text-red-500'>{errors.program && errors.program.message}</p>
            </div>
          </ScrollArea>
          <Button
            disabled={isSubmitting}
            type='submit'>
            {isSubmitting ?
              <>
                <span>Submitting...</span> <Loader />
              </>
            : 'Create Student'}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
