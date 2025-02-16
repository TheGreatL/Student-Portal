'use client';
import Link from 'next/link';
import {usePathname} from 'next/navigation';

import React from 'react';
type NavLinkProps = {
  href: string;
  children: React.ReactElement;
};
export default function NavLink({href, children}: NavLinkProps) {
  const pathName = usePathname();
  console.log(pathName);
  return (
    <Link
      href={href}
      className={`${pathName === href ? 'bg-red-500' : 'bg-white hover:bg-gray-100'} my-1 flex rounded-2xl p-2`}>
      {children}
    </Link>
  );
}
