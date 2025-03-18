'use client';
import {Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow} from '@/components/ui/table';

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import {Room} from '@prisma/client';
import React, {useState} from 'react';
import {Button} from '@/components/ui/button';
import {Eye} from 'lucide-react';

export default function RoomsCard({rooms}: {rooms: Room[]}) {
  const [building, setBuilding] = useState<string | undefined>(undefined);

  const buildings = rooms.reduce<string[]>((accumulator, current) => {
    if (!accumulator.includes(current.building)) {
      accumulator.push(current.building);
    }

    return accumulator;
  }, []);

  const filteredRooms = building === undefined ? rooms : rooms.filter((room) => room.building === building);
  return (
    <article className='m-4 space-y-5'>
      <Select
        onValueChange={(value: string) => setBuilding(value)}
        value={building}>
        <SelectTrigger className='bg-white'>
          <SelectValue placeholder='Buildings' />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Buildings</SelectLabel>
            {buildings.map((building) => (
              <SelectItem
                value={building}
                key={building}>
                {building}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>

      <Table className='bg-white'>
        <TableCaption>Registered Student</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Building</TableHead>
            <TableHead>Floor</TableHead>
            <TableHead></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredRooms.map((room) => (
            <TableRow key={room.id}>
              <TableCell>{room.name}</TableCell>
              <TableCell>{room.building}</TableCell>
              <TableCell>{room.floor}</TableCell>
              <TableCell>
                <Button variant={'outline'}>
                  <Eye />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </article>
  );
}
