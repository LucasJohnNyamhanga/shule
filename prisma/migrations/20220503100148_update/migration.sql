/*
  Warnings:

  - You are about to drop the column `validAnswer` on the `question` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `answer` ADD COLUMN `valid` BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE `question` DROP COLUMN `validAnswer`;
