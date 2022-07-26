-- AlterTable
ALTER TABLE `users` MODIFY `username` TEXT NOT NULL,
    MODIFY `name` TEXT NOT NULL;

-- CreateIndex
CREATE FULLTEXT INDEX `users_username_idx` ON `users`(`username`);

-- CreateIndex
CREATE FULLTEXT INDEX `users_name_idx` ON `users`(`name`);
