import {Skeleton} from '@/components/ui/skeleton';
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from '@/components/ui/table';

export default function AdminUsersLoading() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>
            <Skeleton className='h-[1.5rem] w-full bg-gray-500' />
          </TableHead>
          <TableHead>
            <Skeleton className='h-[1.5rem] w-full bg-gray-500' />
          </TableHead>
          <TableHead>
            <Skeleton className='h-[1.5rem] w-full bg-gray-500' />
          </TableHead>
          <TableHead>
            <Skeleton className='h-[1.5rem] w-full bg-gray-500' />
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {Array.from({length: 5}).map((_, len) => (
          <TableRow key={len}>
            <TableCell>
              <Skeleton className='h-[1.5rem] bg-gray-500' />
            </TableCell>
            <TableCell>
              <Skeleton className='h-[1.5rem] bg-gray-500' />
            </TableCell>
            <TableCell>
              <Skeleton className='h-[1.5rem] bg-gray-500' />
            </TableCell>
            <TableCell>
              <Skeleton className='h-[1.5rem] bg-gray-500' />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
