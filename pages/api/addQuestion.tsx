// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '../../db/prisma';
type dataType = {
	topicName: string;
	topicDefinition: string;
	formId: string;
	subjectId: string;
};

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const {
		question,
		answer,
		questionFormatId,
		reviewId,
		answerDetails,
		userId,
	} = req.body;
	const answerFromUser = JSON.parse(JSON.stringify(answer));
	let formatIdNumber = parseInt(questionFormatId);
	let reviewIdNUmber = parseInt(reviewId);
	let userIdNumber = parseInt(userId);

	try {
		await prisma.question.create({
			data: {
				question,
				answer: {
					create: answerFromUser,
				},
				reviewId: reviewIdNUmber,
				questionFormatId: formatIdNumber,
				answerDetails,
				usersId: userIdNumber,
			},
		});
		res.status(200).json({
			message: 'Successful added',
			type: 'success',
		});
	} catch (error) {
		res.status(200).json({
			message: 'Error writting database',
			type: 'error',
		});
		console.log(error);
		console.log('answer: ' + answer);
	} finally {
		await prisma.$disconnect();
	}
}
