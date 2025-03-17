import Header from '@/components/header';
import {SidebarProvider} from '@/components/ui/sidebar';
import {StudentSidebar} from '@/features/user/components/sidebars/student-sidebar';
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
        <Header />
        {children}
      </main>
    </SidebarProvider>
  );
}
