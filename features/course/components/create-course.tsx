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
import {zodResolver} from '@hookform/resolvers/zod';
import {Loader} from 'lucide-react';
import {useState} from 'react';
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
import {courseSchema, TCourse} from '@/features/course/schema/course';
import {departments} from '@/utils/utils';
import {createCourse} from '../actions/action';
export default function CreateCourseModal() {
  const [isShowing, setIsShowing] = useState<boolean>(false);

  const form = useForm<TCourse>({
    resolver: zodResolver(courseSchema),
    defaultValues: {
      name: '',
      department: undefined,
      description: '',
      image: ''
    }
  });

  const onSubmitForm: SubmitHandler<TCourse> = async (submitData) => {
    // call the server action
    const formData = new FormData();
    formData.append('name', submitData.name);
    formData.append('description', submitData.description);
    formData.append('department', submitData.department as string);
    formData.append('image', submitData.image);
    const {errors} = await createCourse(formData);

    if (errors) {
      form.setError('name', {
        message: errors[0].message as string
      });
    }
    if (!errors) {
      setIsShowing(false);
      redirect('/admin/courses');
    }
  };

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
        <Button variant='outline'>Create Course</Button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-[425px]'>
        <DialogHeader>
          <DialogTitle>Create Course</DialogTitle>
          <DialogDescription>Create Course</DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form
            className='flex flex-col gap-3'
            onSubmit={form.handleSubmit(onSubmitForm)}>
            <ScrollArea className='mb-5 max-h-[25rem] pr-2'>
              <div className='flex flex-col gap-2 p-2'>
                <FormField
                  control={form.control}
                  name='name'
                  render={({field}) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input
                          placeholder='Name'
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
                  name='image'
                  render={({field}) => (
                    <FormItem>
                      <FormLabel>Image</FormLabel>
                      <FormControl>
                        <Input
                          placeholder='Image'
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
                  name='description'
                  render={({field}) => (
                    <FormItem>
                      <FormLabel>Description</FormLabel>
                      <FormControl>
                        <Input
                          placeholder='Description'
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
                  name='department'
                  render={({field}) => (
                    <FormItem>
                      <FormLabel>Department</FormLabel>
                      <FormControl>
                        <Select
                          onValueChange={field.onChange}
                          value={field.value}>
                          <SelectTrigger className={`${form.formState.errors.department ? 'border-red-300' : ''} }`}>
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
              </div>
            </ScrollArea>
            <Button
              disabled={form.formState.isSubmitting}
              type='submit'>
              {form.formState.isSubmitting ?
                <>
                  <span>Submitting...</span> <Loader />
                </>
              : 'Create Crouse'}
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
