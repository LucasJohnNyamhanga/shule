/*
  Warnings:

  - You are about to drop the column `photo` on the `reference` table. All the data in the column will be lost.
  - Added the required column `data` to the `reference` table without a default value. This is not possible if the table is not empty.
  - Added the required column `isPdf` to the `reference` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `reference` DROP COLUMN `photo`,
    ADD COLUMN `data` LONGTEXT NOT NULL,
    ADD COLUMN `isPdf` BOOLEAN NOT NULL;
