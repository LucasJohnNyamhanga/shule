-- CreateTable
CREATE TABLE `users` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `firstName` VARCHAR(191) NOT NULL,
    `lastName` VARCHAR(191) NOT NULL,
    `image` VARCHAR(191) NULL,
    `username` VARCHAR(191) NULL,
    `password` VARCHAR(191) NULL,
    `isAdmin` BOOLEAN NOT NULL DEFAULT false,
    `isSuperUser` BOOLEAN NOT NULL DEFAULT false,
    `dateJoined` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `subject` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `subjectName` VARCHAR(191) NOT NULL,
    `subjectDefinition` LONGTEXT NOT NULL,
    `imageLocation` VARCHAR(191) NULL,
    `published` BOOLEAN NOT NULL DEFAULT false,
    `usersId` INTEGER NOT NULL DEFAULT 1,

    FULLTEXT INDEX `subject_subjectName_subjectDefinition_idx`(`subjectName`, `subjectDefinition`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `form` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `formName` VARCHAR(191) NOT NULL,
    `usersId` INTEGER NOT NULL DEFAULT 1,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `topic` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `topicName` VARCHAR(191) NOT NULL,
    `topicDefinition` VARCHAR(191) NULL,
    `published` BOOLEAN NOT NULL DEFAULT false,
    `subjectId` INTEGER NOT NULL,
    `formId` INTEGER NOT NULL,
    `usersId` INTEGER NOT NULL DEFAULT 1,

    FULLTEXT INDEX `topic_topicName_topicDefinition_idx`(`topicName`, `topicDefinition`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `note` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `content` LONGTEXT NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `published` BOOLEAN NOT NULL DEFAULT false,
    `subjectId` INTEGER NOT NULL,
    `formId` INTEGER NOT NULL,
    `usersId` INTEGER NOT NULL DEFAULT 1,
    `topicId` INTEGER NOT NULL,

    UNIQUE INDEX `note_topicId_key`(`topicId`),
    FULLTEXT INDEX `note_content_idx`(`content`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `notesDownloadable` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `link` VARCHAR(191) NOT NULL,
    `fileExtension` VARCHAR(191) NOT NULL,
    `published` BOOLEAN NOT NULL DEFAULT false,
    `formId` INTEGER NOT NULL,
    `subjectId` INTEGER NOT NULL,
    `usersId` INTEGER NOT NULL DEFAULT 1,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `subjectReview` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `subjectName` VARCHAR(191) NOT NULL,
    `subjectDefinition` LONGTEXT NOT NULL,
    `imageLocation` VARCHAR(191) NULL,
    `published` BOOLEAN NOT NULL DEFAULT false,
    `usersId` INTEGER NOT NULL DEFAULT 1,

    FULLTEXT INDEX `subjectReview_subjectName_subjectDefinition_idx`(`subjectName`, `subjectDefinition`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `formReview` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `formName` VARCHAR(191) NOT NULL,
    `usersId` INTEGER NOT NULL DEFAULT 1,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `topicReview` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `topicName` VARCHAR(191) NOT NULL,
    `topicDefinition` VARCHAR(191) NULL,
    `published` BOOLEAN NOT NULL DEFAULT false,
    `subjectId` INTEGER NOT NULL,
    `formId` INTEGER NOT NULL,
    `usersId` INTEGER NOT NULL DEFAULT 1,

    FULLTEXT INDEX `topicReview_topicName_topicDefinition_idx`(`topicName`, `topicDefinition`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `review` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `published` BOOLEAN NOT NULL DEFAULT false,
    `topicId` INTEGER NOT NULL,
    `subjectId` INTEGER NOT NULL,
    `formId` INTEGER NOT NULL,

    FULLTEXT INDEX `review_name_idx`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `question` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `question` LONGTEXT NOT NULL,
    `published` BOOLEAN NOT NULL DEFAULT false,
    `answerDetails` LONGTEXT NOT NULL DEFAULT '',
    `questionFormatId` INTEGER NOT NULL,
    `reviewId` INTEGER NOT NULL,
    `usersId` INTEGER NOT NULL DEFAULT 1,

    FULLTEXT INDEX `question_question_idx`(`question`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `questionFormat` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `answer` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `answer` LONGTEXT NOT NULL,
    `valid` BOOLEAN NOT NULL DEFAULT false,
    `questionId` INTEGER NOT NULL,

    FULLTEXT INDEX `answer_answer_idx`(`answer`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `subjectExams` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `subjectName` VARCHAR(191) NOT NULL,
    `subjectDefinition` LONGTEXT NOT NULL,
    `imageLocation` VARCHAR(191) NULL,
    `published` BOOLEAN NOT NULL DEFAULT false,
    `usersId` INTEGER NOT NULL DEFAULT 1,

    FULLTEXT INDEX `subjectExams_subjectName_subjectDefinition_idx`(`subjectName`, `subjectDefinition`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `formExams` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `formName` VARCHAR(191) NOT NULL,
    `usersId` INTEGER NOT NULL DEFAULT 1,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `examType` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `definition` LONGTEXT NOT NULL,
    `published` BOOLEAN NOT NULL DEFAULT false,
    `subjectId` INTEGER NOT NULL,
    `formId` INTEGER NOT NULL,

    FULLTEXT INDEX `examType_name_definition_idx`(`name`, `definition`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `exam` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `description` LONGTEXT NOT NULL,
    `year` INTEGER NOT NULL,
    `hasAnswers` BOOLEAN NOT NULL DEFAULT false,
    `published` BOOLEAN NOT NULL DEFAULT false,
    `examTypeId` INTEGER NOT NULL,
    `exam` LONGTEXT NOT NULL,
    `usersId` INTEGER NOT NULL DEFAULT 1,

    FULLTEXT INDEX `exam_description_exam_idx`(`description`, `exam`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `examDownloadable` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `link` VARCHAR(191) NOT NULL,
    `fileExtension` VARCHAR(191) NOT NULL,
    `published` BOOLEAN NOT NULL DEFAULT false,
    `formId` INTEGER NOT NULL,
    `subjectId` INTEGER NOT NULL,
    `examId` INTEGER NOT NULL,
    `usersId` INTEGER NOT NULL DEFAULT 1,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `subjectReference` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `subjectName` VARCHAR(191) NOT NULL,
    `subjectDefinition` LONGTEXT NOT NULL,
    `imageLocation` VARCHAR(191) NULL,
    `published` BOOLEAN NOT NULL DEFAULT false,
    `usersId` INTEGER NOT NULL DEFAULT 1,

    FULLTEXT INDEX `subjectReference_subjectDefinition_subjectName_idx`(`subjectDefinition`, `subjectName`),
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
    `data` LONGTEXT NOT NULL,
    `isPdf` BOOLEAN NOT NULL,
    `published` BOOLEAN NOT NULL DEFAULT false,
    `subjectId` INTEGER NOT NULL,
    `usersId` INTEGER NOT NULL DEFAULT 1,

    FULLTEXT INDEX `reference_name_description_data_idx`(`name`, `description`, `data`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_formTosubject` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_formTosubject_AB_unique`(`A`, `B`),
    INDEX `_formTosubject_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_formReviewTosubjectReview` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_formReviewTosubjectReview_AB_unique`(`A`, `B`),
    INDEX `_formReviewTosubjectReview_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_formExamsTosubjectExams` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_formExamsTosubjectExams_AB_unique`(`A`, `B`),
    INDEX `_formExamsTosubjectExams_B_index`(`B`)
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
ALTER TABLE `subject` ADD CONSTRAINT `subject_usersId_fkey` FOREIGN KEY (`usersId`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `form` ADD CONSTRAINT `form_usersId_fkey` FOREIGN KEY (`usersId`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `topic` ADD CONSTRAINT `topic_usersId_fkey` FOREIGN KEY (`usersId`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `topic` ADD CONSTRAINT `topic_subjectId_fkey` FOREIGN KEY (`subjectId`) REFERENCES `subject`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `topic` ADD CONSTRAINT `topic_formId_fkey` FOREIGN KEY (`formId`) REFERENCES `form`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `note` ADD CONSTRAINT `note_usersId_fkey` FOREIGN KEY (`usersId`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `note` ADD CONSTRAINT `note_subjectId_fkey` FOREIGN KEY (`subjectId`) REFERENCES `subject`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `note` ADD CONSTRAINT `note_formId_fkey` FOREIGN KEY (`formId`) REFERENCES `form`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `note` ADD CONSTRAINT `note_topicId_fkey` FOREIGN KEY (`topicId`) REFERENCES `topic`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `notesDownloadable` ADD CONSTRAINT `notesDownloadable_usersId_fkey` FOREIGN KEY (`usersId`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `notesDownloadable` ADD CONSTRAINT `notesDownloadable_subjectId_fkey` FOREIGN KEY (`subjectId`) REFERENCES `subject`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `notesDownloadable` ADD CONSTRAINT `notesDownloadable_formId_fkey` FOREIGN KEY (`formId`) REFERENCES `form`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `subjectReview` ADD CONSTRAINT `subjectReview_usersId_fkey` FOREIGN KEY (`usersId`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `formReview` ADD CONSTRAINT `formReview_usersId_fkey` FOREIGN KEY (`usersId`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `topicReview` ADD CONSTRAINT `topicReview_usersId_fkey` FOREIGN KEY (`usersId`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `topicReview` ADD CONSTRAINT `topicReview_subjectId_fkey` FOREIGN KEY (`subjectId`) REFERENCES `subjectReview`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `topicReview` ADD CONSTRAINT `topicReview_formId_fkey` FOREIGN KEY (`formId`) REFERENCES `formReview`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `review` ADD CONSTRAINT `review_subjectId_fkey` FOREIGN KEY (`subjectId`) REFERENCES `subjectReview`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `review` ADD CONSTRAINT `review_formId_fkey` FOREIGN KEY (`formId`) REFERENCES `formReview`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `review` ADD CONSTRAINT `review_topicId_fkey` FOREIGN KEY (`topicId`) REFERENCES `topicReview`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `question` ADD CONSTRAINT `question_usersId_fkey` FOREIGN KEY (`usersId`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `question` ADD CONSTRAINT `question_reviewId_fkey` FOREIGN KEY (`reviewId`) REFERENCES `review`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `question` ADD CONSTRAINT `question_questionFormatId_fkey` FOREIGN KEY (`questionFormatId`) REFERENCES `questionFormat`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `answer` ADD CONSTRAINT `answer_questionId_fkey` FOREIGN KEY (`questionId`) REFERENCES `question`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `subjectExams` ADD CONSTRAINT `subjectExams_usersId_fkey` FOREIGN KEY (`usersId`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `formExams` ADD CONSTRAINT `formExams_usersId_fkey` FOREIGN KEY (`usersId`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `examType` ADD CONSTRAINT `examType_subjectId_fkey` FOREIGN KEY (`subjectId`) REFERENCES `subjectExams`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `examType` ADD CONSTRAINT `examType_formId_fkey` FOREIGN KEY (`formId`) REFERENCES `formExams`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `exam` ADD CONSTRAINT `exam_usersId_fkey` FOREIGN KEY (`usersId`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `exam` ADD CONSTRAINT `exam_examTypeId_fkey` FOREIGN KEY (`examTypeId`) REFERENCES `examType`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `examDownloadable` ADD CONSTRAINT `examDownloadable_usersId_fkey` FOREIGN KEY (`usersId`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `examDownloadable` ADD CONSTRAINT `examDownloadable_subjectId_fkey` FOREIGN KEY (`subjectId`) REFERENCES `subjectExams`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `examDownloadable` ADD CONSTRAINT `examDownloadable_formId_fkey` FOREIGN KEY (`formId`) REFERENCES `formExams`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `examDownloadable` ADD CONSTRAINT `examDownloadable_examId_fkey` FOREIGN KEY (`examId`) REFERENCES `exam`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `subjectReference` ADD CONSTRAINT `subjectReference_usersId_fkey` FOREIGN KEY (`usersId`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `formReference` ADD CONSTRAINT `formReference_usersId_fkey` FOREIGN KEY (`usersId`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `reference` ADD CONSTRAINT `reference_usersId_fkey` FOREIGN KEY (`usersId`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `reference` ADD CONSTRAINT `reference_subjectId_fkey` FOREIGN KEY (`subjectId`) REFERENCES `subjectReference`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_formTosubject` ADD CONSTRAINT `_formTosubject_A_fkey` FOREIGN KEY (`A`) REFERENCES `form`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_formTosubject` ADD CONSTRAINT `_formTosubject_B_fkey` FOREIGN KEY (`B`) REFERENCES `subject`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_formReviewTosubjectReview` ADD CONSTRAINT `_formReviewTosubjectReview_A_fkey` FOREIGN KEY (`A`) REFERENCES `formReview`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_formReviewTosubjectReview` ADD CONSTRAINT `_formReviewTosubjectReview_B_fkey` FOREIGN KEY (`B`) REFERENCES `subjectReview`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_formExamsTosubjectExams` ADD CONSTRAINT `_formExamsTosubjectExams_A_fkey` FOREIGN KEY (`A`) REFERENCES `formExams`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_formExamsTosubjectExams` ADD CONSTRAINT `_formExamsTosubjectExams_B_fkey` FOREIGN KEY (`B`) REFERENCES `subjectExams`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_formReferenceTosubjectReference` ADD CONSTRAINT `_formReferenceTosubjectReference_A_fkey` FOREIGN KEY (`A`) REFERENCES `formReference`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_formReferenceTosubjectReference` ADD CONSTRAINT `_formReferenceTosubjectReference_B_fkey` FOREIGN KEY (`B`) REFERENCES `subjectReference`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_formReferenceToreference` ADD CONSTRAINT `_formReferenceToreference_A_fkey` FOREIGN KEY (`A`) REFERENCES `formReference`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_formReferenceToreference` ADD CONSTRAINT `_formReferenceToreference_B_fkey` FOREIGN KEY (`B`) REFERENCES `reference`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
