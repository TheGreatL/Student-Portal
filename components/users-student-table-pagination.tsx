import React from 'react';
import {Pagination, PaginationContent, PaginationItem} from '@/components/ui/pagination';
import {ChevronLeftIcon, ChevronRightIcon} from 'lucide-react';
import Link from 'next/link';
import {Button} from './ui/button';

export default function UsersStudentTablePagination({page, isMax}: {page: number; isMax: boolean}) {
  return (
    <Pagination className='bg-white p-2'>
      <PaginationContent>
        <PaginationItem>
          <Link
            aria-disabled={page === 1}
            className={`${page === 1 && 'pointer-events-none opacity-50'} `}
            href={`/admin/users?page=${page > 1 ? page - 1 : 1}`}>
            <Button variant={'link'}>
              <ChevronLeftIcon />
              <span className='hidden sm:block'>Previous</span>
            </Button>
          </Link>
        </PaginationItem>
        <PaginationItem>
          <Link
            aria-disabled={isMax}
            className={`${isMax && 'pointer-events-none opacity-50'} `}
            href={`/admin/users?page=${page + 1}`}>
            <Button variant={'link'}>
              <span className='hidden sm:block'>Next</span>
              <ChevronRightIcon />
            </Button>
          </Link>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
