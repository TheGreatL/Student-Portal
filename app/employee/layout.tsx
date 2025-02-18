import DisplayPathName from '@/components/display-pathname';
import Header from '@/components/header';
import HeaderScroll from '@/components/header-scroll';
import SidebarTrigger from '@/components/sidebar-trigger';
import {SidebarProvider} from '@/components/ui/sidebar';
import {Button} from '@/components/ui/button';
import Link from 'next/link';
import {CalendarDays, User} from 'lucide-react';
import {EmployeeSidebar} from '@/components/sidebars/employee-sidebar';

type EmployeeLayoutProps = Readonly<{
  children: React.ReactNode;
}>;
export default function EmployeeLayout({children}: EmployeeLayoutProps) {
  return (
    <SidebarProvider
      style={
        {
          '--sidebar-width': '15rem',
          '--sidebar-width-mobile': '15rem'
        } as React.CSSProperties
      }>
      <EmployeeSidebar />
      <main className='flex grow flex-col bg-gray-200'>
        <Header className='gap-2 p-2 text-white'>
          <div className='flex max-w-[25rem] grow items-center gap-5'>
            <SidebarTrigger />
            <DisplayPathName />
          </div>
          <HeaderScroll />
          <div className='flex grow justify-end gap-5'>
            <Link href={'/calendar'}>
              <Button>
                <CalendarDays />
              </Button>
            </Link>
            <Link href={'/'}>
              <Button>
                To Student
                <User />
              </Button>
            </Link>
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
    </SidebarProvider>
  );
}
