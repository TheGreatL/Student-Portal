'use client';
import {Grip} from 'lucide-react';
import {Button} from './ui/button';
import {useSidebar} from './ui/sidebar';

export default function SidebarTrigger() {
  const {toggleSidebar} = useSidebar();

  return (
    <Button
      variant={'outline'}
      className='text-black'
      onMouseEnter={toggleSidebar}
      onClick={toggleSidebar}>
      <Grip />
    </Button>
  );
}
