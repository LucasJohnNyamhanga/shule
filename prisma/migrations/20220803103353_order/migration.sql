-- CreateTable
CREATE TABLE `order` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `orderNumber` TEXT NOT NULL,
    `description` TEXT NOT NULL,
    `amountPaid` INTEGER NOT NULL,
    `booksDownload` INTEGER NOT NULL,
    `examAccess` INTEGER NOT NULL,
    `examsSolvedDownload` INTEGER NOT NULL,
    `examsUnsolvedDownload` INTEGER NOT NULL,
    `notesDownload` INTEGER NOT NULL,
    `quizExcercises` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `userId` INTEGER NOT NULL,

    FULLTEXT INDEX `order_orderNumber_idx`(`orderNumber`),
    FULLTEXT INDEX `order_description_idx`(`description`),
    FULLTEXT INDEX `order_orderNumber_description_idx`(`orderNumber`, `description`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `order` ADD CONSTRAINT `order_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
