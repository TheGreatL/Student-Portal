import React from 'react';
import {ScrollArea} from './ui/scroll-area';
import {Form} from './ui/form';
import {FieldValues, UseFormReturn} from 'react-hook-form';
import {twMerge} from 'tailwind-merge';

export type FormProps<T extends FieldValues> = {
  children: React.ReactNode;
  onSubmitForm: () => void;
  form: UseFormReturn<T>;
  formClass?: string;
  scrollAreaClass?: string;
};

export default function ScrollAreaForm<T extends FieldValues>({
  formClass,
  scrollAreaClass,
  children,
  form,
  onSubmitForm
}: FormProps<T>) {
  return (
    <Form {...form}>
      <form
        className={twMerge('flex flex-col gap-3', formClass)}
        onSubmit={form.handleSubmit(onSubmitForm)}>
        <ScrollArea className={twMerge(scrollAreaClass, 'mb-5 max-h-[25rem] pr-2')}>{children}</ScrollArea>
      </form>
    </Form>
  );
}
