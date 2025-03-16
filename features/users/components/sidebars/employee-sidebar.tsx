'use client';
import SidebarMenuNavigationGroupButton from '@/components/sidebar-menu-navigation-buttons';
import {Sidebar, SidebarContent, SidebarFooter, SidebarHeader} from '@/components/ui/sidebar';

import {Home, Notebook, User} from 'lucide-react';

export function EmployeeSidebar() {
  const array = [
    {name: 'Home', href: '/employee', icon: Home},
    {name: 'Courses', href: '/employee/courses', icon: Notebook},
    {name: 'Students', href: '/employee/students', icon: User}
  ];
  return (
    <Sidebar
      collapsible='icon'
      className=''>
      <SidebarHeader></SidebarHeader>
      <SidebarContent>
        <SidebarMenuNavigationGroupButton
          label='Employee Link Navigation'
          navigationData={array}
          role='employee'
        />
      </SidebarContent>
      <SidebarFooter></SidebarFooter>
    </Sidebar>
  );
}
