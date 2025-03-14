'use client';
import React from 'react';
import {SidebarGroup, SidebarGroupLabel, SidebarMenuButton} from './ui/sidebar';
import {LucideProps} from 'lucide-react';
import Link from 'next/link';
import {usePathname} from 'next/navigation';

type NavigationData = {
  name: string;
  href: string;
  icon: React.ForwardRefExoticComponent<Omit<LucideProps, 'ref'> & React.RefAttributes<SVGSVGElement>>;
};

type SidebarMenuNavigationGroupButtonProps = {
  label: string;
  navigationData: NavigationData[];
};
export default function SidebarMenuNavigationGroupButton({
  label,
  navigationData
}: SidebarMenuNavigationGroupButtonProps) {
  const pathName = usePathname();

  return (
    <SidebarGroup>
      <SidebarGroupLabel>{label}</SidebarGroupLabel>
      {navigationData.map((navigation) => (
        <SidebarMenuButton
          key={navigation.name}
          // first condition is for route that is not / route
          isActive={pathName === navigation.href || (navigation.href !== '/' && pathName.startsWith(navigation.href))}
          className='my-0.5 p-5 data-[active=true]:bg-blue-400 data-[active=true]:text-white'
          tooltip={navigation.name}
          asChild>
          <Link href={navigation.href}>
            <navigation.icon />
            {navigation.name}
          </Link>
        </SidebarMenuButton>
      ))}
    </SidebarGroup>
  );
}
