import React from 'react';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious
} from '@/components/ui/pagination';
export default function UsersStudentTablePagination({page, isMax}: {page: number; isMax: boolean}) {
  console.log(isMax);
  return (
    <Pagination className='bg-white p-2'>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            aria-disabled={page === 1}
            className={`${page === 1 && 'pointer-events-none opacity-50'}`}
            href={`/admin/users?page=${page > 1 ? page - 1 : 1}`}
          />
        </PaginationItem>
        <PaginationItem>
          <PaginationNext
            aria-disabled={isMax}
            className={`${isMax && 'pointer-events-none opacity-50'}`}
            href={`/admin/users?page=${page + 1}`}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
