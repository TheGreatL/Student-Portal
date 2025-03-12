import Header from '@/components/header';
import {SidebarProvider} from '@/components/ui/sidebar';
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
        <Header />
        {children}
      </main>
    </SidebarProvider>
  );
}
