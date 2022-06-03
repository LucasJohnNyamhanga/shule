-- CreateTable
CREATE TABLE `subjectReference` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `subjectName` VARCHAR(191) NOT NULL,
    `subjectDefinition` LONGTEXT NOT NULL,
    `imageLocation` VARCHAR(191) NULL,
    `published` BOOLEAN NOT NULL DEFAULT false,
    `usersId` INTEGER NOT NULL DEFAULT 1,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `formReference` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `formName` VARCHAR(191) NOT NULL,
    `usersId` INTEGER NOT NULL DEFAULT 1,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `reference` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `description` LONGTEXT NOT NULL,
    `photo` VARCHAR(191) NULL,
    `subjectId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_formReferenceTosubjectReference` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_formReferenceTosubjectReference_AB_unique`(`A`, `B`),
    INDEX `_formReferenceTosubjectReference_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_formReferenceToreference` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_formReferenceToreference_AB_unique`(`A`, `B`),
    INDEX `_formReferenceToreference_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `subjectReference` ADD CONSTRAINT `subjectReference_usersId_fkey` FOREIGN KEY (`usersId`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `formReference` ADD CONSTRAINT `formReference_usersId_fkey` FOREIGN KEY (`usersId`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `reference` ADD CONSTRAINT `reference_subjectId_fkey` FOREIGN KEY (`subjectId`) REFERENCES `subjectReference`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_formReferenceTosubjectReference` ADD CONSTRAINT `_formReferenceTosubjectReference_A_fkey` FOREIGN KEY (`A`) REFERENCES `formReference`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_formReferenceTosubjectReference` ADD CONSTRAINT `_formReferenceTosubjectReference_B_fkey` FOREIGN KEY (`B`) REFERENCES `subjectReference`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_formReferenceToreference` ADD CONSTRAINT `_formReferenceToreference_A_fkey` FOREIGN KEY (`A`) REFERENCES `formReference`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_formReferenceToreference` ADD CONSTRAINT `_formReferenceToreference_B_fkey` FOREIGN KEY (`B`) REFERENCES `reference`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
