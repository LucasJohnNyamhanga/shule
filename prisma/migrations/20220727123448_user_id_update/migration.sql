/*
  Warnings:

  - You are about to drop the column `usersId` on the `vifurushi` table. All the data in the column will be lost.
  - Added the required column `userId` to the `vifurushi` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `vifurushi` DROP FOREIGN KEY `vifurushi_usersId_fkey`;

-- AlterTable
ALTER TABLE `vifurushi` DROP COLUMN `usersId`,
    ADD COLUMN `userId` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `vifurushi` ADD CONSTRAINT `vifurushi_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
