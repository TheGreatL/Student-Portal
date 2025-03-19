'use client';
import SidebarMenuNavigationGroupButton from '@/components/sidebar-menu-navigation-buttons';
import {Sidebar, SidebarContent} from '@/components/ui/sidebar';

import {Backpack, Home, Notebook, School, User} from 'lucide-react';

export function AdminSidebar() {
  const array = [
    {name: 'Home', href: '/admin', icon: Home},
    {name: 'Courses', href: '/admin/courses', icon: Notebook},
    {name: 'Users', href: '/admin/users', icon: User},
    {name: 'Rooms', href: '/admin/rooms', icon: Backpack},
    {name: 'Classes', href: '/admin/classes', icon: School}
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
