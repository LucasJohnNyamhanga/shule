/*
  Warnings:

  - You are about to drop the column `value` on the `vifurushiPackage` table. All the data in the column will be lost.
  - You are about to drop the `booksDownload` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `examAccess` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `examsSolvedDownload` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `examsUnsolvedDownload` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `notesDownload` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `quizExcercises` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `vifurushiPrice` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `booksDownload` to the `vifurushiPackage` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `vifurushiPackage` table without a default value. This is not possible if the table is not empty.
  - Added the required column `examAccess` to the `vifurushiPackage` table without a default value. This is not possible if the table is not empty.
  - Added the required column `examsSolvedDownload` to the `vifurushiPackage` table without a default value. This is not possible if the table is not empty.
  - Added the required column `examsUnsolvedDownload` to the `vifurushiPackage` table without a default value. This is not possible if the table is not empty.
  - Added the required column `notesDownload` to the `vifurushiPackage` table without a default value. This is not possible if the table is not empty.
  - Added the required column `price` to the `vifurushiPackage` table without a default value. This is not possible if the table is not empty.
  - Added the required column `quizExcercises` to the `vifurushiPackage` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `booksDownload` DROP FOREIGN KEY `booksDownload_vifurushiPackageId_fkey`;

-- DropForeignKey
ALTER TABLE `examAccess` DROP FOREIGN KEY `examAccess_vifurushiPackageId_fkey`;

-- DropForeignKey
ALTER TABLE `examsSolvedDownload` DROP FOREIGN KEY `examsSolvedDownload_vifurushiPackageId_fkey`;

-- DropForeignKey
ALTER TABLE `examsUnsolvedDownload` DROP FOREIGN KEY `examsUnsolvedDownload_vifurushiPackageId_fkey`;

-- DropForeignKey
ALTER TABLE `notesDownload` DROP FOREIGN KEY `notesDownload_vifurushiPackageId_fkey`;

-- DropForeignKey
ALTER TABLE `quizExcercises` DROP FOREIGN KEY `quizExcercises_vifurushiPackageId_fkey`;

-- AlterTable
ALTER TABLE `vifurushiPackage` DROP COLUMN `value`,
    ADD COLUMN `booksDownload` INTEGER NOT NULL,
    ADD COLUMN `description` TEXT NOT NULL,
    ADD COLUMN `examAccess` INTEGER NOT NULL,
    ADD COLUMN `examsSolvedDownload` INTEGER NOT NULL,
    ADD COLUMN `examsUnsolvedDownload` INTEGER NOT NULL,
    ADD COLUMN `notesDownload` INTEGER NOT NULL,
    ADD COLUMN `price` INTEGER NOT NULL,
    ADD COLUMN `quizExcercises` INTEGER NOT NULL,
    MODIFY `name` TEXT NOT NULL;

-- DropTable
DROP TABLE `booksDownload`;

-- DropTable
DROP TABLE `examAccess`;

-- DropTable
DROP TABLE `examsSolvedDownload`;

-- DropTable
DROP TABLE `examsUnsolvedDownload`;

-- DropTable
DROP TABLE `notesDownload`;

-- DropTable
DROP TABLE `quizExcercises`;

-- DropTable
DROP TABLE `vifurushiPrice`;
