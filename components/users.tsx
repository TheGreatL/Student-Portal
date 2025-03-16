import UsersStudentTablePagination from './users-student-table-pagination';

export default async function Users({page}: {page: number}) {
  await new Promise((resolve) => setTimeout(resolve, 5000));
  return (
    <div className='flex flex-col'>
      <h1>test</h1>
      <UsersStudentTablePagination
        page={page}
        isMax={false}
      />
    </div>
  );
}
