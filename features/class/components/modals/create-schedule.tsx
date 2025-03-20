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
import {TRoomSchedules} from '@/types/prisma-model-types';

export default function CreateScheduleModal({rooms}: {rooms: TRoomSchedules[]}) {
  const [isShowing, setIsShowing] = useState<boolean>(false);

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
        <Button variant='outline'>Create Schedule</Button>
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
