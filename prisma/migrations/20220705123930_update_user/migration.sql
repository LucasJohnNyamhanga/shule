/*
  Warnings:

  - Added the required column `usersId` to the `review` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `review` ADD COLUMN `usersId` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `review` ADD CONSTRAINT `review_usersId_fkey` FOREIGN KEY (`usersId`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
