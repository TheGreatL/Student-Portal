import React from 'react';
import {twMerge} from 'tailwind-merge';
type HeaderProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Header({children, className}: HeaderProps) {
  return <header className={twMerge('sticky top-0 z-50 flex bg-gray-400', className)}>{children}</header>;
}
