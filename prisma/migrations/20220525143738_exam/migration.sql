-- CreateTable
CREATE TABLE `subjectExams` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `definition` LONGTEXT NOT NULL,
    `imageLocation` VARCHAR(191) NULL,
    `published` BOOLEAN NOT NULL DEFAULT false,
    `usersId` INTEGER NOT NULL DEFAULT 1,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `formExams` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `usersId` INTEGER NOT NULL DEFAULT 1,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `examType` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `definition` LONGTEXT NOT NULL,
    `published` BOOLEAN NOT NULL DEFAULT false,
    `subjectId` INTEGER NOT NULL,
    `formExamsId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `exam` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `description` LONGTEXT NOT NULL,
    `year` INTEGER NOT NULL,
    `hasAnswers` BOOLEAN NOT NULL DEFAULT false,
    `published` BOOLEAN NOT NULL DEFAULT false,
    `examTypeId` INTEGER NOT NULL,
    `exam` LONGTEXT NOT NULL,
    `usersId` INTEGER NOT NULL DEFAULT 1,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_formExamsTosubjectExams` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_formExamsTosubjectExams_AB_unique`(`A`, `B`),
    INDEX `_formExamsTosubjectExams_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `subjectExams` ADD CONSTRAINT `subjectExams_usersId_fkey` FOREIGN KEY (`usersId`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `formExams` ADD CONSTRAINT `formExams_usersId_fkey` FOREIGN KEY (`usersId`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `examType` ADD CONSTRAINT `examType_subjectId_fkey` FOREIGN KEY (`subjectId`) REFERENCES `subjectExams`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `examType` ADD CONSTRAINT `examType_formExamsId_fkey` FOREIGN KEY (`formExamsId`) REFERENCES `formExams`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `exam` ADD CONSTRAINT `exam_usersId_fkey` FOREIGN KEY (`usersId`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `exam` ADD CONSTRAINT `exam_examTypeId_fkey` FOREIGN KEY (`examTypeId`) REFERENCES `examType`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_formExamsTosubjectExams` ADD CONSTRAINT `_formExamsTosubjectExams_A_fkey` FOREIGN KEY (`A`) REFERENCES `formExams`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_formExamsTosubjectExams` ADD CONSTRAINT `_formExamsTosubjectExams_B_fkey` FOREIGN KEY (`B`) REFERENCES `subjectExams`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
