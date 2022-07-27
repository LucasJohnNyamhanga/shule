/*
  Warnings:

  - A unique constraint covering the columns `[usersId]` on the table `vifurushi` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateTable
CREATE TABLE `notesDownload` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `value` INTEGER NOT NULL,
    `vifurushiId` INTEGER NOT NULL,

    UNIQUE INDEX `notesDownload_vifurushiId_key`(`vifurushiId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `quizExcercises` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `value` INTEGER NOT NULL,
    `vifurushiId` INTEGER NOT NULL,

    UNIQUE INDEX `quizExcercises_vifurushiId_key`(`vifurushiId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `examsUnsolvedDownload` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `value` INTEGER NOT NULL,
    `vifurushiId` INTEGER NOT NULL,

    UNIQUE INDEX `examsUnsolvedDownload_vifurushiId_key`(`vifurushiId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `examsSolvedDownload` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `value` INTEGER NOT NULL,
    `vifurushiId` INTEGER NOT NULL,

    UNIQUE INDEX `examsSolvedDownload_vifurushiId_key`(`vifurushiId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `examAccess` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `value` INTEGER NOT NULL,
    `vifurushiId` INTEGER NOT NULL,

    UNIQUE INDEX `examAccess_vifurushiId_key`(`vifurushiId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `booksDownload` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `value` INTEGER NOT NULL,
    `vifurushiId` INTEGER NOT NULL,

    UNIQUE INDEX `booksDownload_vifurushiId_key`(`vifurushiId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `vifurushi_usersId_key` ON `vifurushi`(`usersId`);

-- AddForeignKey
ALTER TABLE `notesDownload` ADD CONSTRAINT `notesDownload_vifurushiId_fkey` FOREIGN KEY (`vifurushiId`) REFERENCES `vifurushi`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `quizExcercises` ADD CONSTRAINT `quizExcercises_vifurushiId_fkey` FOREIGN KEY (`vifurushiId`) REFERENCES `vifurushi`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `examsUnsolvedDownload` ADD CONSTRAINT `examsUnsolvedDownload_vifurushiId_fkey` FOREIGN KEY (`vifurushiId`) REFERENCES `vifurushi`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `examsSolvedDownload` ADD CONSTRAINT `examsSolvedDownload_vifurushiId_fkey` FOREIGN KEY (`vifurushiId`) REFERENCES `vifurushi`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `examAccess` ADD CONSTRAINT `examAccess_vifurushiId_fkey` FOREIGN KEY (`vifurushiId`) REFERENCES `vifurushi`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `booksDownload` ADD CONSTRAINT `booksDownload_vifurushiId_fkey` FOREIGN KEY (`vifurushiId`) REFERENCES `vifurushi`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
