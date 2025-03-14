'use server';

export async function addStudentAction(formData: FormData): Promise<{data: string | null; error: string | null}> {
  await new Promise((resolve) => setInterval(resolve, 5000));

  return {data: null, error: null};
}
