/*
  Warnings:

  - You are about to drop the column `tBookId` on the `Class` table. All the data in the column will be lost.
  - You are about to drop the `FdBack` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `TBook` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Class" DROP CONSTRAINT "Class_tBookId_fkey";

-- DropForeignKey
ALTER TABLE "FdBack" DROP CONSTRAINT "FdBack_classId_fkey";

-- AlterTable
ALTER TABLE "CPcode" ADD COLUMN     "stdntId" INTEGER;

-- AlterTable
ALTER TABLE "Class" DROP COLUMN "tBookId",
ADD COLUMN     "tbookId" INTEGER;

-- DropTable
DROP TABLE "FdBack";

-- DropTable
DROP TABLE "TBook";

-- CreateTable
CREATE TABLE "Tbook" (
    "id" SERIAL NOT NULL,
    "type" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "createdat" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Tbook_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Fdback" (
    "id" SERIAL NOT NULL,
    "classId" INTEGER NOT NULL,
    "content" TEXT NOT NULL,

    CONSTRAINT "Fdback_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Class" ADD CONSTRAINT "Class_tbookId_fkey" FOREIGN KEY ("tbookId") REFERENCES "Tbook"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CPcode" ADD CONSTRAINT "CPcode_stdntId_fkey" FOREIGN KEY ("stdntId") REFERENCES "Stdnt"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Fdback" ADD CONSTRAINT "Fdback_classId_fkey" FOREIGN KEY ("classId") REFERENCES "Class"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
