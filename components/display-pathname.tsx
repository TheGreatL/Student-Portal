'use client';

import {usePathname} from 'next/navigation';

export default function DisplayPathName() {
  const pathName = usePathname();
  const withoutSlash = pathName.replace('/', '');
  const formattedPathName = withoutSlash.charAt(0).toUpperCase() + withoutSlash.substring(1).toLowerCase();
  return <h1 className='text-xl font-bold text-white'>{formattedPathName === '' ? 'Home' : formattedPathName}</h1>;
}
