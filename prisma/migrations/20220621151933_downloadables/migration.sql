/*
  Warnings:

  - Added the required column `name` to the `examDownloadable` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `notesDownloadable` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `examDownloadable` ADD COLUMN `name` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `notesDownloadable` ADD COLUMN `name` VARCHAR(191) NOT NULL;
