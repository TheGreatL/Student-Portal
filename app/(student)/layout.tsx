import DisplayPathName from '@/components/display-pathname';
import Header from '@/components/header';
import SidebarTrigger from '@/components/sidebar-trigger';
import {Button} from '@/components/ui/button';
import {SidebarProvider} from '@/components/ui/sidebar';
import {CalendarDays, User} from 'lucide-react';
import Link from 'next/link';
import HeaderScroll from '@/components/header-scroll';
import {StudentSidebar} from '@/components/sidebars/student-sidebar';
type StudentLayoutProps = Readonly<{
  children: React.ReactNode;
}>;
export default function StudentLayout({children}: StudentLayoutProps) {
  return (
    <SidebarProvider
      style={
        {
          '--sidebar-width': '15rem',
          '--sidebar-width-mobile': '15rem'
        } as React.CSSProperties
      }>
      <StudentSidebar />
      <main className='flex grow flex-col bg-gray-200'>
        <Header className='gap-2 p-2 text-white'>
          <div className='flex max-w-[25rem] grow items-center gap-5'>
            <SidebarTrigger />
            <DisplayPathName />
          </div>
          <HeaderScroll />
          {/* <div className='flex grow items-center justify-center'> 
          <form className='flex grow overflow-hidden rounded-2xl bg-white text-black focus-within:ring-2'>
              <Input className='border-0 ring-0 focus-visible:ring-0 focus-visible:outline-0' />
              <Button
                type='button'
                variant={'ghost'}>
                <SearchIcon />
              </Button>
            </form> 
            </div> */}
          <div className='flex grow justify-end gap-5'>
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
          </div>
        </Header>
        {children}
      </main>
    </SidebarProvider>
  );
}
