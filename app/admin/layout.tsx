import Header from '@/components/header';
import {Button} from '@/components/ui/button';

import {Grip, User} from 'lucide-react';
import Link from 'next/link';
type AdminLayoutProps = Readonly<{
  children: React.ReactNode;
}>;
export default function AdminLayout({children}: AdminLayoutProps) {
  return (
    <main className='flex grow flex-col bg-gray-200'>
      <Header className='gap-2 p-2 text-white'>
        <div className='flex grow items-center'>
          <Link href={'/admin/grade'}>
            <Button>
              <Grip />
            </Button>
          </Link>
        </div>

        <div className='flex grow justify-end'>
          <Link href={'/'}>
            <Button>
              To user
              <User />{' '}
            </Button>
          </Link>
        </div>
      </Header>
      {children}
    </main>
  );
}
