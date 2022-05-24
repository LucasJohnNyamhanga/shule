/*
  Warnings:

  - Made the column `subjectDefinition` on table `subject` required. This step will fail if there are existing NULL values in that column.
  - Made the column `subjectDefinition` on table `subjectReview` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `subject` MODIFY `subjectDefinition` LONGTEXT NOT NULL;

-- AlterTable
ALTER TABLE `subjectReview` MODIFY `subjectDefinition` LONGTEXT NOT NULL;
