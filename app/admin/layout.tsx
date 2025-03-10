import DisplayPathName from '@/components/display-pathname';
import Header from '@/components/header';
import SidebarTrigger from '@/components/sidebar-trigger';
import {Button} from '@/components/ui/button';
import {SidebarProvider} from '@/components/ui/sidebar';
import {CalendarDays, User} from 'lucide-react';
import HeaderScroll from '@/components/header-scroll';
import Link from 'next/link';
import {AdminSidebar} from '@/components/sidebars/admin-sidebar';
type AdminLayoutProps = Readonly<{
  children: React.ReactNode;
}>;
export default function AdminLayout({children}: AdminLayoutProps) {
  return (
    <SidebarProvider
      style={
        {
          '--sidebar-width': '15rem',
          '--sidebar-width-mobile': '15rem'
        } as React.CSSProperties
      }>
      <AdminSidebar />
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
            <Link href={'/employee'}>
              <Button>
                To Employee
                <User />
              </Button>
            </Link>
            <Link
              href={'/'}
              className='flex items-center justify-center gap-5'>
              <Button>
                To Student
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
