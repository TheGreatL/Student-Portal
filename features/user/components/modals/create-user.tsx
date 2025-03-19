'use client';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog';

import {SubmitHandler, useForm} from 'react-hook-form';
import {TUser, userSchema} from '@/features/user/schema/user';
import {zodResolver} from '@hookform/resolvers/zod';
import {Loader} from 'lucide-react';
import {useState} from 'react';
import {Department, Program, Role} from '@prisma/client';
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

import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from '@/components/ui/form';
import {Input} from '@/components/ui/input';
import {redirect} from 'next/navigation';
import {createUserAction} from '../../actions/actions';
import {departments} from '@/utils/utils';

export default function CreateUserModal({programs}: {programs: Program[]}) {
  const [isShowing, setIsShowing] = useState<boolean>(false);
  const [userType, setUserType] = useState<Role>('student');
  const form = useForm<TUser>({
    resolver: zodResolver(userSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      avatar: 'avatar',
      password: 'mypassword',
      role: 'student'
    }
  });

  const onSubmitForm: SubmitHandler<TUser> = async (submitData) => {
    // call the server action

    const formData = new FormData();
    formData.append('firstName', submitData.firstName);
    formData.append('lastName', submitData.lastName);
    formData.append('password', submitData.password as string);
    formData.append('avatar', submitData.avatar as string);
    formData.append('userType', userType);

    if (userType === 'student') formData.append('program', submitData.student?.program as string);
    else if (userType === 'teacher') formData.append('department', submitData.teacher?.department as Department);

    const {errors} = await createUserAction(formData);

    if (errors) {
      console.log(errors);
    }

    if (!errors) {
      setIsShowing(false);
      redirect('/admin/users');
    }
  };

  const userTypes = [
    {
      value: 'student' as Role,
      name: 'Student'
    },
    {
      value: 'teacher' as Role,
      name: 'Teacher'
    }
  ];

  return (
    <Dialog
      onOpenChange={(isShowing) => {
        if (isShowing) {
          form.reset();
        }
        setIsShowing(isShowing);
      }}
      open={isShowing}>
      <DialogTrigger asChild>
        <Button variant='outline'>Create User</Button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-[425px]'>
        <DialogHeader>
          <DialogTitle>Create Student</DialogTitle>
          <DialogDescription>Create a user</DialogDescription>
        </DialogHeader>

        <Select
          onValueChange={(value: Role) => setUserType(value)}
          value={userType}>
          <SelectTrigger>
            <SelectValue placeholder='User Types' />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>User Types</SelectLabel>
              {userTypes.map((types) => (
                <SelectItem
                  value={types.value}
                  key={types.value}>
                  {types.name}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
        <Form {...form}>
          <form
            className='flex flex-col gap-3'
            onSubmit={form.handleSubmit(onSubmitForm)}>
            <ScrollArea className='mb-5 max-h-[25rem] pr-2'>
              <div className='flex flex-col gap-2 p-2'>
                <FormField
                  control={form.control}
                  name='firstName'
                  render={({field}) => (
                    <FormItem>
                      <FormLabel>First Name</FormLabel>
                      <FormControl>
                        <Input
                          placeholder='First Name'
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className='flex flex-col gap-2 p-2'>
                <FormField
                  control={form.control}
                  name='lastName'
                  render={({field}) => (
                    <FormItem>
                      <FormLabel>Last Name</FormLabel>
                      <FormControl>
                        <Input
                          placeholder='Last Name'
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className='flex flex-col gap-2 p-2'>
                {userType === 'student' ?
                  <FormField
                    control={form.control}
                    name='student.program'
                    render={({field}) => (
                      <FormItem>
                        <FormLabel>Program</FormLabel>
                        <FormControl>
                          <Select
                            onValueChange={field.onChange}
                            value={field.value}>
                            <SelectTrigger
                              className={`${form.formState.errors.student?.program ? 'border-red-300' : ''} }`}>
                              <SelectValue placeholder='Program' />
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
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                : <FormField
                    control={form.control}
                    name='teacher.department'
                    render={({field}) => (
                      <FormItem>
                        <FormLabel>Departments</FormLabel>
                        <FormControl>
                          <Select
                            onValueChange={field.onChange}
                            value={field.value}>
                            <SelectTrigger
                              className={`${form.formState.errors.teacher?.department ? 'border-red-300' : ''} }`}>
                              <SelectValue placeholder='Departments' />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectGroup>
                                <SelectLabel>Departments Available</SelectLabel>
                                {departments.map((department) => (
                                  <SelectItem
                                    value={department.value}
                                    key={department.value}>
                                    {department.name}
                                  </SelectItem>
                                ))}
                              </SelectGroup>
                            </SelectContent>
                          </Select>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                }
              </div>
            </ScrollArea>
            <Button
              disabled={form.formState.isSubmitting}
              type='submit'>
              {form.formState.isSubmitting ?
                <>
                  <span>Submitting...</span> <Loader />
                </>
              : 'Create Student'}
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
