/*
  Warnings:

  - You are about to drop the column `vifurushiId` on the `booksDownload` table. All the data in the column will be lost.
  - You are about to drop the column `vifurushiId` on the `examAccess` table. All the data in the column will be lost.
  - You are about to drop the column `vifurushiId` on the `examsSolvedDownload` table. All the data in the column will be lost.
  - You are about to drop the column `vifurushiId` on the `examsUnsolvedDownload` table. All the data in the column will be lost.
  - You are about to drop the column `vifurushiId` on the `notesDownload` table. All the data in the column will be lost.
  - You are about to drop the column `vifurushiId` on the `quizExcercises` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[vifurushiPackageId]` on the table `booksDownload` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[vifurushiPackageId]` on the table `examAccess` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[vifurushiPackageId]` on the table `examsSolvedDownload` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[vifurushiPackageId]` on the table `examsUnsolvedDownload` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[vifurushiPackageId]` on the table `notesDownload` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[vifurushiPackageId]` on the table `quizExcercises` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `vifurushiPackageId` to the `booksDownload` table without a default value. This is not possible if the table is not empty.
  - Added the required column `vifurushiPackageId` to the `examAccess` table without a default value. This is not possible if the table is not empty.
  - Added the required column `vifurushiPackageId` to the `examsSolvedDownload` table without a default value. This is not possible if the table is not empty.
  - Added the required column `vifurushiPackageId` to the `examsUnsolvedDownload` table without a default value. This is not possible if the table is not empty.
  - Added the required column `vifurushiPackageId` to the `notesDownload` table without a default value. This is not possible if the table is not empty.
  - Added the required column `vifurushiPackageId` to the `quizExcercises` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `booksDownload` DROP FOREIGN KEY `booksDownload_vifurushiId_fkey`;

-- DropForeignKey
ALTER TABLE `examAccess` DROP FOREIGN KEY `examAccess_vifurushiId_fkey`;

-- DropForeignKey
ALTER TABLE `examsSolvedDownload` DROP FOREIGN KEY `examsSolvedDownload_vifurushiId_fkey`;

-- DropForeignKey
ALTER TABLE `examsUnsolvedDownload` DROP FOREIGN KEY `examsUnsolvedDownload_vifurushiId_fkey`;

-- DropForeignKey
ALTER TABLE `notesDownload` DROP FOREIGN KEY `notesDownload_vifurushiId_fkey`;

-- DropForeignKey
ALTER TABLE `quizExcercises` DROP FOREIGN KEY `quizExcercises_vifurushiId_fkey`;

-- AlterTable
ALTER TABLE `booksDownload` DROP COLUMN `vifurushiId`,
    ADD COLUMN `vifurushiPackageId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `examAccess` DROP COLUMN `vifurushiId`,
    ADD COLUMN `vifurushiPackageId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `examsSolvedDownload` DROP COLUMN `vifurushiId`,
    ADD COLUMN `vifurushiPackageId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `examsUnsolvedDownload` DROP COLUMN `vifurushiId`,
    ADD COLUMN `vifurushiPackageId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `notesDownload` DROP COLUMN `vifurushiId`,
    ADD COLUMN `vifurushiPackageId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `quizExcercises` DROP COLUMN `vifurushiId`,
    ADD COLUMN `vifurushiPackageId` INTEGER NOT NULL;

-- CreateTable
CREATE TABLE `vifurushiPrice` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `price` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `vifurushiPackage` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `value` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `booksDownload_vifurushiPackageId_key` ON `booksDownload`(`vifurushiPackageId`);

-- CreateIndex
CREATE UNIQUE INDEX `examAccess_vifurushiPackageId_key` ON `examAccess`(`vifurushiPackageId`);

-- CreateIndex
CREATE UNIQUE INDEX `examsSolvedDownload_vifurushiPackageId_key` ON `examsSolvedDownload`(`vifurushiPackageId`);

-- CreateIndex
CREATE UNIQUE INDEX `examsUnsolvedDownload_vifurushiPackageId_key` ON `examsUnsolvedDownload`(`vifurushiPackageId`);

-- CreateIndex
CREATE UNIQUE INDEX `notesDownload_vifurushiPackageId_key` ON `notesDownload`(`vifurushiPackageId`);

-- CreateIndex
CREATE UNIQUE INDEX `quizExcercises_vifurushiPackageId_key` ON `quizExcercises`(`vifurushiPackageId`);

-- AddForeignKey
ALTER TABLE `notesDownload` ADD CONSTRAINT `notesDownload_vifurushiPackageId_fkey` FOREIGN KEY (`vifurushiPackageId`) REFERENCES `vifurushiPackage`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `quizExcercises` ADD CONSTRAINT `quizExcercises_vifurushiPackageId_fkey` FOREIGN KEY (`vifurushiPackageId`) REFERENCES `vifurushiPackage`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `examsUnsolvedDownload` ADD CONSTRAINT `examsUnsolvedDownload_vifurushiPackageId_fkey` FOREIGN KEY (`vifurushiPackageId`) REFERENCES `vifurushiPackage`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `examsSolvedDownload` ADD CONSTRAINT `examsSolvedDownload_vifurushiPackageId_fkey` FOREIGN KEY (`vifurushiPackageId`) REFERENCES `vifurushiPackage`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `examAccess` ADD CONSTRAINT `examAccess_vifurushiPackageId_fkey` FOREIGN KEY (`vifurushiPackageId`) REFERENCES `vifurushiPackage`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `booksDownload` ADD CONSTRAINT `booksDownload_vifurushiPackageId_fkey` FOREIGN KEY (`vifurushiPackageId`) REFERENCES `vifurushiPackage`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
