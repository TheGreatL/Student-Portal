'use client';
import React from 'react';
import {Input} from './ui/input';
import {Button} from './ui/button';
import {SearchIcon} from 'lucide-react';
import {usePathname, useRouter, useSearchParams} from 'next/navigation';

export default function Search() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const {replace} = useRouter();
  const searchAction = (formData: FormData) => {
    const search = formData.get('search') as string;

    if (search.trim() == '' || search.trim() === ' ') return;

    const params = new URLSearchParams(searchParams);

    params.set('query', search);

    if (pathname !== '/courses') {
      replace(`/courses?${params.toString()}`);
    } else {
      replace(`${pathname}?${params.toString()}`);
    }
  };
  return (
    <div className='flex grow items-center justify-center'>
      <form
        action={searchAction}
        className='flex grow overflow-hidden rounded-2xl bg-white text-black focus-within:ring-2'>
        <Input
          name='search'
          className='border-0 ring-0 focus-visible:ring-0 focus-visible:outline-0'
        />
        <Button
          type='submit'
          variant={'ghost'}>
          <SearchIcon />
        </Button>
      </form>
    </div>
  );
}
