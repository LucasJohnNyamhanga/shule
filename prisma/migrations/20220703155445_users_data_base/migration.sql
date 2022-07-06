/*
  Warnings:

  - Added the required column `updatedAt` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `exam` ALTER COLUMN `usersId` DROP DEFAULT;

-- AlterTable
ALTER TABLE `examDownloadable` ALTER COLUMN `usersId` DROP DEFAULT;

-- AlterTable
ALTER TABLE `form` ALTER COLUMN `usersId` DROP DEFAULT;

-- AlterTable
ALTER TABLE `formExams` ALTER COLUMN `usersId` DROP DEFAULT;

-- AlterTable
ALTER TABLE `formReference` ALTER COLUMN `usersId` DROP DEFAULT;

-- AlterTable
ALTER TABLE `formReview` ALTER COLUMN `usersId` DROP DEFAULT;

-- AlterTable
ALTER TABLE `note` ALTER COLUMN `usersId` DROP DEFAULT;

-- AlterTable
ALTER TABLE `notesDownloadable` ALTER COLUMN `usersId` DROP DEFAULT;

-- AlterTable
ALTER TABLE `question` ALTER COLUMN `usersId` DROP DEFAULT;

-- AlterTable
ALTER TABLE `reference` ALTER COLUMN `usersId` DROP DEFAULT;

-- AlterTable
ALTER TABLE `subject` ALTER COLUMN `usersId` DROP DEFAULT;

-- AlterTable
ALTER TABLE `subjectExams` ALTER COLUMN `usersId` DROP DEFAULT;

-- AlterTable
ALTER TABLE `subjectReference` ALTER COLUMN `usersId` DROP DEFAULT;

-- AlterTable
ALTER TABLE `subjectReview` ALTER COLUMN `usersId` DROP DEFAULT;

-- AlterTable
ALTER TABLE `topic` ALTER COLUMN `usersId` DROP DEFAULT;

-- AlterTable
ALTER TABLE `topicReview` ALTER COLUMN `usersId` DROP DEFAULT;

-- AlterTable
ALTER TABLE `users` ADD COLUMN `updatedAt` DATETIME(3) NOT NULL;
