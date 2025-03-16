'use client';
import {Button} from '@/components/ui/button';
import {Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle} from '@/components/ui/dialog';
import {Input} from '@/components/ui/input';
import {Label} from '@/components/ui/label';
import {DateClickArg} from '@fullcalendar/interaction/index.js';

type TestModalType = {
  dateClicked: null | DateClickArg;
  handleOnDialogClose: () => void;
  handleAddEvent: (date: Date, title: string) => void;
};
export default function TestModal({dateClicked, handleOnDialogClose, handleAddEvent}: TestModalType) {
  const isOpen = dateClicked !== null;

  const {date} = dateClicked || {date: new Date()};

  const dateString = date.toISOString().slice(0, 16);

  console.log(dateString);

  const handleFormAction = (formData: FormData) => {
    const title = formData.get('title') as string;
    const date = formData.get('date') as string;
    handleAddEvent(new Date(date), title);
    handleOnDialogClose();
  };
  return (
    <Dialog
      open={isOpen}
      onOpenChange={handleOnDialogClose}>
      <DialogContent className='sm:max-w-[425px]'>
        <DialogHeader>
          <DialogTitle>Save activity</DialogTitle>
          <DialogDescription>Plan this date</DialogDescription>
        </DialogHeader>
        <form
          className='flex flex-col gap-5 px-5'
          action={handleFormAction}>
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
              defaultValue={dateString}
            />
          </div>
          <Button type='submit'>Save activity</Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
