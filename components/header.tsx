import React from 'react';
import {twMerge} from 'tailwind-merge';
import DisplayPathName from './display-pathname';
import Search from './search';
import {CalendarDays, User} from 'lucide-react';
import {Button} from './ui/button';
import Link from 'next/link';
import SidebarTrigger from './sidebar-trigger';
type HeaderProps = {
  className?: string;
};

export default function Header({className}: HeaderProps) {
  return (
    <header className={twMerge('sticky top-0 z-50 flex gap-2 bg-gray-400 p-2 text-white', className)}>
      <section className='flex w-[10rem] grow items-center gap-5'>
        <SidebarTrigger />
        <DisplayPathName />
      </section>
      <Search />
      <section className='flex grow items-center justify-end gap-5'>
        <Link
          href={'/calendar'}
          className='hidden lg:block'>
          <Button>
            <CalendarDays />
          </Button>
        </Link>
        <Link href={'/employee'}>
          <Button>
            <span className='hidden lg:inline-block'> To Employee</span>
            <User />
          </Button>
        </Link>
        <Link
          href={'/admin'}
          className='flex items-center justify-center gap-5'>
          <Button>
            <span className='hidden lg:inline-block'> To Admin</span>
            <User />
          </Button>
        </Link>
      </section>
    </header>
  );
}
