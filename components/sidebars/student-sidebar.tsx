'use client';
import {Sidebar, SidebarContent, SidebarFooter, SidebarHeader} from '@/components/ui/sidebar';

import {Home, Notebook, User} from 'lucide-react';
import SidebarMenuNavigationGroupButton from '../sidebar-menu-navigation-buttons';

export function StudentSidebar() {
  const array = [
    {name: 'Home', href: '/', icon: Home},
    {name: 'Courses', href: '/courses', icon: Notebook},
    {name: 'Students', href: '/students', icon: User}
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
