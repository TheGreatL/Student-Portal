import React from 'react';
import {Pagination, PaginationContent, PaginationItem} from '@/components/ui/pagination';
import Link from 'next/link';
import {ChevronLeftIcon, ChevronRightIcon} from 'lucide-react';
export default function UsersStudentTablePagination({page, isMax}: {page: number; isMax: boolean}) {
  console.log(isMax);
  return (
    <Pagination className='bg-white p-2'>
      <PaginationContent>
        <PaginationItem>
          <Link
            aria-disabled={page === 1}
            className={`${page === 1 && 'f; pointer-events-none opacity-50'} flex rounded-2xl border-2 border-black px-2 hover:bg-gray-300`}
            href={`/admin/users?page=${page > 1 ? page - 1 : 1}`}>
            <>
              <ChevronLeftIcon />
              <span className='hidden sm:block'>Previous</span>
            </>
          </Link>
        </PaginationItem>
        <PaginationItem>
          <Link
            aria-disabled={isMax}
            className={`${isMax && 'pointer-events-none opacity-50'} flex rounded-2xl border-2 border-black px-2 hover:bg-gray-300`}
            href={`/admin/users?page=${page + 1}`}>
            <span className='hidden sm:block'>Next</span>
            <ChevronRightIcon />
          </Link>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
