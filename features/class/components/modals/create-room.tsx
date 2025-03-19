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
import {ScrollArea} from '@/components/ui/scroll-area';

import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from '@/components/ui/form';
import {Input} from '@/components/ui/input';
import {redirect} from 'next/navigation';

import {createRoomAction} from '../../action';
import {roomSchema, TRoom} from '../../schema/room';

export default function CreateRoomModal() {
  const [isShowing, setIsShowing] = useState<boolean>(false);
  const form = useForm<TRoom>({
    resolver: zodResolver(roomSchema),
    defaultValues: {
      name: '',
      building: '',
      floor: '',
      image: ''
    }
  });

  const onSubmitForm: SubmitHandler<TRoom> = async (submitData) => {
    // call the server action

    const formData = new FormData();
    formData.append('name', submitData.name);
    formData.append('building', submitData.building.toUpperCase());
    formData.append('floor', submitData.floor as string);
    formData.append('image', submitData.image as string);

    const {errors} = await createRoomAction(formData);

    if (errors) {
      console.log(errors);
    }

    if (!errors) {
      setIsShowing(false);
      redirect('/admin/rooms');
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
        <Button variant='outline'>Create Room</Button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-[425px]'>
        <DialogHeader>
          <DialogTitle>Create Room</DialogTitle>
          <DialogDescription>Create a room</DialogDescription>
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
                  name='building'
                  render={({field}) => (
                    <FormItem>
                      <FormLabel>Building</FormLabel>
                      <FormControl>
                        <Input
                          placeholder='Building'
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
                  name='floor'
                  render={({field}) => (
                    <FormItem>
                      <FormLabel>Floor</FormLabel>
                      <FormControl>
                        <Input
                          placeholder='1st | 2nd | 3rd | 4th'
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
            </ScrollArea>
            <Button
              disabled={form.formState.isSubmitting}
              type='submit'>
              {form.formState.isSubmitting ?
                <>
                  <span>Submitting...</span> <Loader />
                </>
              : 'Create Room'}
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
