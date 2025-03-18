import {Button} from '@/components/ui/button';
import RoomsCard from '@/features/class/component/rooms-card';
import prisma from '@/service/db';
import React from 'react';

export default async function RoomsPage() {
  const rooms = await prisma.room.findMany();
  return (
    <section className='flex grow flex-col'>
      <h1>Rooms Page</h1>
      <Button>Add Class</Button>
      <RoomsCard rooms={rooms} />
    </section>
  );
}
