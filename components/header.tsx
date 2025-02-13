import React from 'react';
import {twJoin} from 'tailwind-merge';
type HeaderProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Header({children, className}: HeaderProps) {
  return <header className={twJoin('sticky top-0 flex bg-gray-400', className)}>{children}</header>;
}
