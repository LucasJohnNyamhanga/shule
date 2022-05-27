/*
  Warnings:

  - You are about to drop the column `formExamsId` on the `examType` table. All the data in the column will be lost.
  - Added the required column `formId` to the `examType` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `examType` DROP FOREIGN KEY `examType_formExamsId_fkey`;

-- AlterTable
ALTER TABLE `examType` DROP COLUMN `formExamsId`,
    ADD COLUMN `formId` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `examType` ADD CONSTRAINT `examType_formId_fkey` FOREIGN KEY (`formId`) REFERENCES `formExams`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
