/*
  Warnings:

  - You are about to drop the column `name` on the `formExams` table. All the data in the column will be lost.
  - You are about to drop the column `definition` on the `subjectExams` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `subjectExams` table. All the data in the column will be lost.
  - Added the required column `formName` to the `formExams` table without a default value. This is not possible if the table is not empty.
  - Added the required column `subjectDefinition` to the `subjectExams` table without a default value. This is not possible if the table is not empty.
  - Added the required column `subjectName` to the `subjectExams` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `formExams` DROP COLUMN `name`,
    ADD COLUMN `formName` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `subjectExams` DROP COLUMN `definition`,
    DROP COLUMN `name`,
    ADD COLUMN `subjectDefinition` LONGTEXT NOT NULL,
    ADD COLUMN `subjectName` VARCHAR(191) NOT NULL;
