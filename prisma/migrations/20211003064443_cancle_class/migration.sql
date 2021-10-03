-- AlterTable
ALTER TABLE "Class" ADD COLUMN     "cancle" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "Tutor" ADD COLUMN     "avatar" TEXT,
ADD COLUMN     "bio" TEXT;
