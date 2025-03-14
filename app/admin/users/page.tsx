import AddStudentModal from '@/components/modal/add-student';
import React from 'react';

export default function UsersPage() {
  // TODO: ADD USER (STUDENT AND EMPLOYEE)
  return (
    <section className='flex grow flex-col'>
      <section>
        <h1>All of Users</h1>
        <AddStudentModal />
      </section>
    </section>
  );
}
