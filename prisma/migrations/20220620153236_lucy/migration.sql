-- CreateTable
CREATE TABLE `notesDownloadable` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `content` VARCHAR(191) NOT NULL,
    `isPdf` BOOLEAN NOT NULL,
    `published` BOOLEAN NOT NULL DEFAULT false,
    `formId` INTEGER NOT NULL,
    `subjectId` INTEGER NOT NULL,
    `usersId` INTEGER NOT NULL DEFAULT 1,

    UNIQUE INDEX `notesDownloadable_formId_key`(`formId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `notesDownloadable` ADD CONSTRAINT `notesDownloadable_usersId_fkey` FOREIGN KEY (`usersId`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `notesDownloadable` ADD CONSTRAINT `notesDownloadable_subjectId_fkey` FOREIGN KEY (`subjectId`) REFERENCES `subject`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `notesDownloadable` ADD CONSTRAINT `notesDownloadable_formId_fkey` FOREIGN KEY (`formId`) REFERENCES `form`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
