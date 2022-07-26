-- DropIndex
DROP INDEX `users_name_username_idx` ON `users`;

-- CreateIndex
CREATE FULLTEXT INDEX `users_username_name_idx` ON `users`(`username`, `name`);
