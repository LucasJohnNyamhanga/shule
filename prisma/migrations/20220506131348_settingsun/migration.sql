-- AlterTable
ALTER TABLE `question` ADD COLUMN `published` BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE `review` ADD COLUMN `published` BOOLEAN NOT NULL DEFAULT false;
