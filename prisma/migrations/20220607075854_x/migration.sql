-- AlterTable
ALTER TABLE `reference` ADD COLUMN `usersId` INTEGER NOT NULL DEFAULT 1;

-- AddForeignKey
ALTER TABLE `reference` ADD CONSTRAINT `reference_usersId_fkey` FOREIGN KEY (`usersId`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
