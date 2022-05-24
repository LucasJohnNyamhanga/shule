/*
  Warnings:

  - You are about to drop the `_formTosubjectReview` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `_formTosubjectReview` DROP FOREIGN KEY `_formTosubjectReview_A_fkey`;

-- DropForeignKey
ALTER TABLE `_formTosubjectReview` DROP FOREIGN KEY `_formTosubjectReview_B_fkey`;

-- DropTable
DROP TABLE `_formTosubjectReview`;

-- CreateTable
CREATE TABLE `formReview` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `formName` VARCHAR(191) NOT NULL,
    `usersId` INTEGER NOT NULL DEFAULT 1,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_formReviewTosubjectReview` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_formReviewTosubjectReview_AB_unique`(`A`, `B`),
    INDEX `_formReviewTosubjectReview_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `formReview` ADD CONSTRAINT `formReview_usersId_fkey` FOREIGN KEY (`usersId`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_formReviewTosubjectReview` ADD CONSTRAINT `_formReviewTosubjectReview_A_fkey` FOREIGN KEY (`A`) REFERENCES `formReview`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_formReviewTosubjectReview` ADD CONSTRAINT `_formReviewTosubjectReview_B_fkey` FOREIGN KEY (`B`) REFERENCES `subjectReview`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
