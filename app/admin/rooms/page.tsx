import CreateRoomModal from '@/features/class/components/modals/create-room';
import RoomsTable from '@/features/class/components/rooms-table';
import prisma from '@/service/db';
import React from 'react';

export default async function RoomsPage() {
  const rooms = await prisma.room.findMany({
    orderBy: {
      name: 'asc'
    }
  });
  return (
    <section className='flex grow flex-col'>
      <h1>Rooms Page</h1>
      <CreateRoomModal />
      <RoomsTable rooms={rooms} />
    </section>
  );
}
