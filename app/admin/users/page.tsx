import AddStudentModal from '@/components/modal/add-student';
import prisma from '@/service/db';
import React, {Suspense} from 'react';
import {Tabs, TabsContent, TabsList, TabsTrigger} from '@/components/ui/tabs';

import StudentTable from '@/components/student-table';
import AdminUsersLoading from './loading';
export default async function UsersPage({
  searchParams
}: {
  searchParams?: Promise<{
    page?: string;
  }>;
}) {
  // TODO: ADD USER (EMPLOYEE)
  // TODO: CREATE Table Component

  const page = Number((await searchParams)?.page || 1);

  const programs = await prisma.program.findMany();

  return (
    <section className='flex grow flex-col'>
      <section>
        <h1>All of Users</h1>
        <AddStudentModal programs={programs} />
      </section>
      <article className='my-2 grow p-3'>
        <Tabs
          className='h-full'
          defaultValue='student'>
          <TabsList>
            <TabsTrigger value='student'>Students</TabsTrigger>
            <TabsTrigger value='teacher'>Teachers</TabsTrigger>
          </TabsList>
          <TabsContent value='student'>
            {/* <AdminUsersLoading /> */}
            <Suspense fallback={<AdminUsersLoading />}>
              <StudentTable page={page} />
            </Suspense>
          </TabsContent>
          <TabsContent value='teacher'>
            <h1>Teachers</h1>
          </TabsContent>
        </Tabs>
      </article>
    </section>
  );
}
