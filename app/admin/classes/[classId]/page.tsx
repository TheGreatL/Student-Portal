import prisma from '@/service/db';
import React from 'react';

export default async function ClassDetails({params}: {params: Promise<{classId: string}>}) {
  const {classId} = await params;
  const classData = await prisma.class.findUnique({
    where: {
      id: classId
    }
  });
  console.dir(classData);
  return <div>ClassDetails</div>;
}
