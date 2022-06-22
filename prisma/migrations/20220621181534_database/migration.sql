/*
  Warnings:

  - You are about to drop the column `formId` on the `examDownloadable` table. All the data in the column will be lost.
  - You are about to drop the column `subjectId` on the `examDownloadable` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `examDownloadable` DROP FOREIGN KEY `examDownloadable_formId_fkey`;

-- DropForeignKey
ALTER TABLE `examDownloadable` DROP FOREIGN KEY `examDownloadable_subjectId_fkey`;

-- AlterTable
ALTER TABLE `examDownloadable` DROP COLUMN `formId`,
    DROP COLUMN `subjectId`;
