'use client';
import {Sidebar, SidebarContent} from '@/components/ui/sidebar';

import {Home, Notebook, User} from 'lucide-react';
import SidebarMenuNavigationGroupButton from '../sidebar-menu-navigation-buttons';

export function AdminSidebar() {
  const array = [
    {name: 'Home', href: '/admin', icon: Home},
    {name: 'Courses', href: '/admin/courses', icon: Notebook},
    {name: 'Users', href: '/admin/users', icon: User}
  ];
  return (
    <Sidebar
      collapsible='icon'
      className=''>
      <SidebarContent>
        <SidebarMenuNavigationGroupButton
          role='admin'
          label='Admin Link Navigation'
          navigationData={array}
        />
      </SidebarContent>
    </Sidebar>
  );
}
