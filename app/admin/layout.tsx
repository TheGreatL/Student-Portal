import Header from '@/components/header';
import {SidebarProvider} from '@/components/ui/sidebar';
import {AdminSidebar} from '@/features/users/components/sidebars/admin-sidebar';
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
        <Header />
        {children}
      </main>
    </SidebarProvider>
  );
}
