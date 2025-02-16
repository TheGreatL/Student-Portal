'use client';
import {Sidebar, SidebarContent, SidebarFooter, SidebarHeader} from '@/components/ui/sidebar';

import SidebarMenuNavigationGroupButton from './sidebar-menu-navigation-buttons';
import {Home, Notebook, User} from 'lucide-react';

export function AppSidebar() {
  const array = [
    {name: 'Home', href: '/', icon: Home},
    {name: 'Courses', href: '/courses', icon: Notebook},
    {name: 'Users', href: '/users', icon: User}
  ];
  return (
    <Sidebar
      collapsible='icon'
      className=''>
      <SidebarHeader></SidebarHeader>
      <SidebarContent>
        <SidebarMenuNavigationGroupButton
          label='Student Link Navigation'
          navigationData={array}
        />
      </SidebarContent>
      <SidebarFooter></SidebarFooter>
    </Sidebar>
  );
}
