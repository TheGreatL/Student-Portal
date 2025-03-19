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

import {Button} from '@/components/ui/button';

import {FormControl, FormField, FormItem, FormLabel, FormMessage} from '@/components/ui/form';
import {Input} from '@/components/ui/input';
import {redirect} from 'next/navigation';

import {createClassAction} from '../../action';
import ScrollAreaForm from '@/components/scroll-area-form';
import {classSchema, TClass} from '../../schema/class';
import {Course} from '@prisma/client';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import {TTeacherWithUser} from '@/types/prisma-model-types';

export default function CreateClassModal({teachers, courses}: {teachers: TTeacherWithUser[]; courses: Course[]}) {
  const [isShowing, setIsShowing] = useState<boolean>(false);
  const [selectedCourseId, setSelectedCourseId] = useState<string>('');
  const form = useForm<TClass>({
    resolver: zodResolver(classSchema),
    defaultValues: {
      section: '',
      academicYear: '',
      courseId: '',
      isOngoing: false,
      teacherId: ''
    }
  });

  const onSubmitForm: SubmitHandler<TClass> = async (submitData) => {
    // call the server action

    const formData = new FormData();
    formData.append('section', submitData.section);
    formData.append('academicYear', submitData.academicYear);
    formData.append('courseId', submitData.courseId as string);
    formData.append('isOngoing', String(submitData.isOngoing));
    formData.append('teacherId', submitData.teacherId as string);

    const {errors} = await createClassAction(formData);

    if (errors) {
      console.log('create class:', errors);
    }

    if (!errors) {
      // setIsShowing(false);
      redirect('/admin/classes');
    }
  };

  const selectedCourse = courses.filter((course) => course.id === selectedCourseId) as Course[];
  const availableTeacher =
    selectedCourseId === '' ? teachers : (
      teachers.filter((teacher) => teacher.teacher?.department === selectedCourse[0].department)
    );

  return (
    <Dialog
      onOpenChange={(isShowing) => {
        if (isShowing) {
          form.reset();
        }
        setSelectedCourseId('');
        setIsShowing(isShowing);
      }}
      open={isShowing}>
      <DialogTrigger asChild>
        <Button variant='outline'>Create Class</Button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-[425px]'>
        <DialogHeader>
          <DialogTitle>Create Class</DialogTitle>
          <DialogDescription>Select a course first to assign a teacher</DialogDescription>
        </DialogHeader>
        <ScrollAreaForm
          form={form}
          onSubmitForm={form.handleSubmit(onSubmitForm)}>
          <>
            <div className='flex flex-col gap-2 p-2'>
              <FormField
                control={form.control}
                name='section'
                render={({field}) => (
                  <FormItem>
                    <FormLabel>Section Name</FormLabel>
                    <FormControl>
                      <Input
                        placeholder='Mahogany'
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
                name='courseId'
                render={({field}) => (
                  <FormItem>
                    <FormLabel>Courses</FormLabel>
                    <FormControl>
                      <Select
                        onValueChange={(value: string) => {
                          form.setValue('teacherId', '');
                          setSelectedCourseId(value);
                          field.onChange(value);
                        }}
                        value={field.value}>
                        <SelectTrigger className={`${form.formState.errors.courseId ? 'border-red-300' : ''} }`}>
                          <SelectValue placeholder='Courses' />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectLabel>Course Available</SelectLabel>
                            {courses.map((course) => (
                              <SelectItem
                                value={course.id}
                                key={course.id}>
                                {course.name} - {course.department}
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
            <div className='flex flex-col gap-2 p-2'>
              <FormField
                control={form.control}
                name='teacherId'
                render={({field}) => (
                  <FormItem>
                    <FormLabel>Teachers available</FormLabel>
                    <FormControl>
                      <Select
                        onValueChange={field.onChange}
                        value={field.value}>
                        <SelectTrigger disabled={selectedCourseId === ''}>
                          <SelectValue placeholder='Available Teachers' />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectLabel>Teachers for {selectedCourse[0]?.department || ''}</SelectLabel>
                            {availableTeacher.map((teacher) => (
                              <SelectItem
                                value={teacher?.teacher?.id || ''}
                                key={teacher.id}>
                                {teacher.firstName} {teacher.lastName}
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
            <div className='flex flex-col gap-2 p-2'>
              <FormField
                control={form.control}
                name='academicYear'
                render={({field}) => (
                  <FormItem>
                    <FormLabel>Academic Year</FormLabel>
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

            <Button
              className='w-full'
              disabled={form.formState.isSubmitting}
              type='submit'>
              {form.formState.isSubmitting ?
                <>
                  <span>Submitting...</span> <Loader />
                </>
              : 'Create Room'}
            </Button>
          </>
        </ScrollAreaForm>
      </DialogContent>
    </Dialog>
  );
}
