import React from 'react';
import {Pagination, PaginationContent, PaginationItem} from '@/components/ui/pagination';
import {ChevronLeftIcon, ChevronRightIcon} from 'lucide-react';
import Link from 'next/link';
import {Button} from '../../../components/ui/button';

export default function UsersStudentTablePagination({page, numberOfPage}: {page: number; numberOfPage: number}) {
  return (
    <Pagination className='bg-white p-2'>
      <PaginationContent>
        <PaginationItem>
          <Link
            aria-disabled={page === 1}
            className={`${page === 1 && 'pointer-events-none opacity-50'} `}
            href={`/admin/users?page=${page > 1 ? page - 1 : 1}`}>
            <Button>
              <ChevronLeftIcon />
              <span className='hidden sm:block'>Previous</span>
            </Button>
          </Link>
        </PaginationItem>
        {Array.from({length: numberOfPage}).map((_, index) => (
          <PaginationItem key={index}>
            <Link
              aria-disabled={index + 1 > numberOfPage}
              className={`${index + 1 > numberOfPage && 'pointer-events-none opacity-50'} `}
              href={`/admin/users?page=${index + 1}`}>
              <Button
                className={`${page === index + 1 && 'underline underline-offset-4'}`}
                variant={'link'}>
                <span className='hidden sm:block'>{index + 1}</span>
              </Button>
            </Link>
          </PaginationItem>
        ))}
        <PaginationItem>
          <Link
            aria-disabled={page >= numberOfPage}
            className={`${page >= numberOfPage && 'pointer-events-none opacity-50'} `}
            href={`/admin/users?page=${page + 1}`}>
            <Button>
              <span className='hidden sm:block'>Next</span>
              <ChevronRightIcon />
            </Button>
          </Link>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
