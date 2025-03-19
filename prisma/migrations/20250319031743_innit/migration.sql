-- CreateEnum
CREATE TYPE "Role" AS ENUM ('student', 'teacher', 'admin');

-- CreateEnum
CREATE TYPE "Department" AS ENUM ('ict', 'sh', 'bm', 'tm', 'hm');

-- CreateTable
CREATE TABLE "Course" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "department" "Department" NOT NULL,
    "description" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),
    "deletedAt" DATE,

    CONSTRAINT "Course_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Class" (
    "id" UUID NOT NULL,
    "courseId" UUID NOT NULL,
    "teacherId" UUID NOT NULL,
    "section" TEXT NOT NULL,
    "isOngoing" BOOLEAN NOT NULL,
    "academicYear" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),
    "deletedAt" DATE,

    CONSTRAINT "Class_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ClassGrade" (
    "id" UUID NOT NULL,
    "classId" UUID NOT NULL,
    "prelim" TEXT NOT NULL,
    "midterm" TEXT NOT NULL,
    "preFinals" TEXT NOT NULL,
    "finals" TEXT NOT NULL,

    CONSTRAINT "ClassGrade_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ClassStudent" (
    "id" UUID NOT NULL,
    "classId" UUID NOT NULL,
    "studentId" BIGINT NOT NULL,

    CONSTRAINT "ClassStudent_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ClassSchedule" (
    "id" UUID NOT NULL,
    "roomId" UUID NOT NULL,
    "schedule" TIMESTAMP(3) NOT NULL,
    "classId" UUID NOT NULL,

    CONSTRAINT "ClassSchedule_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Room" (
    "id" UUID NOT NULL,
    "building" TEXT NOT NULL,
    "floor" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),
    "deletedAt" DATE,

    CONSTRAINT "Room_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Program" (
    "id" UUID NOT NULL,
    "acronym" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "department" "Department" NOT NULL,

    CONSTRAINT "Program_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" UUID NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "avatar" TEXT NOT NULL,
    "role" "Role" NOT NULL,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Student" (
    "id" BIGINT NOT NULL,
    "userId" UUID NOT NULL,
    "programId" UUID NOT NULL,

    CONSTRAINT "Student_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Teacher" (
    "id" UUID NOT NULL,
    "userId" UUID NOT NULL,
    "department" "Department" NOT NULL,

    CONSTRAINT "Teacher_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Course_name_key" ON "Course"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Course_name_department_key" ON "Course"("name", "department");

-- CreateIndex
CREATE UNIQUE INDEX "Class_academicYear_section_key" ON "Class"("academicYear", "section");

-- CreateIndex
CREATE UNIQUE INDEX "ClassStudent_classId_studentId_key" ON "ClassStudent"("classId", "studentId");

-- CreateIndex
CREATE UNIQUE INDEX "Room_building_name_key" ON "Room"("building", "name");

-- CreateIndex
CREATE INDEX "Program_acronym_name_idx" ON "Program"("acronym", "name");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE INDEX "User_id_email_role_idx" ON "User"("id", "email", "role");

-- CreateIndex
CREATE UNIQUE INDEX "User_lastName_email_firstName_key" ON "User"("lastName", "email", "firstName");

-- CreateIndex
CREATE UNIQUE INDEX "Student_userId_key" ON "Student"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Teacher_userId_key" ON "Teacher"("userId");

-- AddForeignKey
ALTER TABLE "Class" ADD CONSTRAINT "Class_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "Course"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Class" ADD CONSTRAINT "Class_teacherId_fkey" FOREIGN KEY ("teacherId") REFERENCES "Teacher"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ClassGrade" ADD CONSTRAINT "ClassGrade_classId_fkey" FOREIGN KEY ("classId") REFERENCES "Class"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ClassStudent" ADD CONSTRAINT "ClassStudent_classId_fkey" FOREIGN KEY ("classId") REFERENCES "Class"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ClassStudent" ADD CONSTRAINT "ClassStudent_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "Student"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ClassSchedule" ADD CONSTRAINT "ClassSchedule_roomId_fkey" FOREIGN KEY ("roomId") REFERENCES "Room"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ClassSchedule" ADD CONSTRAINT "ClassSchedule_classId_fkey" FOREIGN KEY ("classId") REFERENCES "Class"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Student" ADD CONSTRAINT "Student_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Student" ADD CONSTRAINT "Student_programId_fkey" FOREIGN KEY ("programId") REFERENCES "Program"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Teacher" ADD CONSTRAINT "Teacher_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
