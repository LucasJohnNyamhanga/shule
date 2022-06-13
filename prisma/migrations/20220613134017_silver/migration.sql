-- CreateIndex
CREATE FULLTEXT INDEX `answer_answer_idx` ON `answer`(`answer`);

-- CreateIndex
CREATE FULLTEXT INDEX `exam_description_exam_idx` ON `exam`(`description`, `exam`);

-- CreateIndex
CREATE FULLTEXT INDEX `examType_name_definition_idx` ON `examType`(`name`, `definition`);

-- CreateIndex
CREATE FULLTEXT INDEX `note_content_idx` ON `note`(`content`);

-- CreateIndex
CREATE FULLTEXT INDEX `question_question_idx` ON `question`(`question`);

-- CreateIndex
CREATE FULLTEXT INDEX `reference_name_description_data_idx` ON `reference`(`name`, `description`, `data`);

-- CreateIndex
CREATE FULLTEXT INDEX `review_name_idx` ON `review`(`name`);

-- CreateIndex
CREATE FULLTEXT INDEX `subject_subjectName_subjectDefinition_idx` ON `subject`(`subjectName`, `subjectDefinition`);

-- CreateIndex
CREATE FULLTEXT INDEX `subjectExams_subjectName_subjectDefinition_idx` ON `subjectExams`(`subjectName`, `subjectDefinition`);

-- CreateIndex
CREATE FULLTEXT INDEX `subjectReference_subjectDefinition_subjectName_idx` ON `subjectReference`(`subjectDefinition`, `subjectName`);

-- CreateIndex
CREATE FULLTEXT INDEX `subjectReview_subjectName_subjectDefinition_idx` ON `subjectReview`(`subjectName`, `subjectDefinition`);

-- CreateIndex
CREATE FULLTEXT INDEX `topic_topicName_topicDefinition_idx` ON `topic`(`topicName`, `topicDefinition`);

-- CreateIndex
CREATE FULLTEXT INDEX `topicReview_topicName_topicDefinition_idx` ON `topicReview`(`topicName`, `topicDefinition`);
