'use client';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog';

import {Controller, SubmitHandler, useForm} from 'react-hook-form';
import {TUser, userSchema} from '@/features/users/schema/user-schema';
import {zodResolver} from '@hookform/resolvers/zod';
import {addStudentAction} from '@/features/users/actions/actions';
import {Loader} from 'lucide-react';
import {redirect} from 'next/navigation';
import {useState} from 'react';
import {Program} from '@prisma/client';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import {Button} from '@/components/ui/button';
import {ScrollArea} from '@/components/ui/scroll-area';
import {Label} from '@/components/ui/label';
import {Input} from '@/components/ui/input';
export default function AddStudentModal({programs}: {programs: Program[]}) {
  const [isShowing, setIsShowing] = useState(false);
  const {
    register,
    handleSubmit,
    reset,

    control,
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
    if (data) {
      setIsShowing(false);
      redirect('/admin/users');
    }
  };

  return (
    <Dialog
      onOpenChange={(isShowing) => {
        if (isShowing) {
          reset();
        }
        setIsShowing(isShowing);
      }}
      open={isShowing}>
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
              <Controller
                name='program'
                control={control}
                render={({field}) => (
                  <Select
                    onValueChange={field.onChange}
                    value={field.value}>
                    <SelectTrigger
                      id='program'
                      className='bg-white'>
                      <SelectValue placeholder='Programs' />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Programs Available</SelectLabel>

                        {programs.map((program) => (
                          <SelectItem
                            value={program.id}
                            key={program.acronym}>
                            {program.acronym} - {program.name}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                )}
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
