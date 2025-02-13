import Header from '@/components/header';
import {Button} from '@/components/ui/button';
import {Input} from '@/components/ui/input';
import {Home, SearchIcon, User} from 'lucide-react';
import Link from 'next/link';

type StudentLayoutProps = Readonly<{
  children: React.ReactNode;
}>;
export default function StudentLayout({children}: StudentLayoutProps) {
  return (
    <main className='flex grow flex-col bg-gray-200'>
      <Header className='gap-2 p-2 text-white'>
        <div className='flex grow items-center'>
          <Link href={'/'}>
            <Button>
              <Home />
            </Button>
          </Link>
        </div>
        <div className='flex grow items-center justify-center'>
          <form className='flex grow overflow-hidden rounded-2xl bg-white text-black focus-within:ring-2'>
            <Input className='border-0 ring-0 focus-visible:ring-0 focus-visible:outline-0' />
            <Button
              type='button'
              variant={'ghost'}>
              <SearchIcon />
            </Button>
          </form>
        </div>
        <div className='flex grow justify-end'>
          <Link
            href={'/admin'}
            className='flex items-center justify-center gap-5'>
            <Button>
              To admin
              <User />
            </Button>
          </Link>
        </div>
      </Header>
      {children}
    </main>
  );
}
