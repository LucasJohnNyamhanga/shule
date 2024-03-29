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
	const { topicName, topicDefinition, formId, subjectId, userId } = req.body;
	let formIdNumber = parseInt(formId);
	let subjectIdNumber = parseInt(subjectId);
	let userIdNumber = parseInt(userId);

	try {
		await prisma.topicReview.create({
			data: {
				topicName,
				topicDefinition,
				formId: formIdNumber,
				subjectId: subjectIdNumber,
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
	} finally {
		await prisma.$disconnect();
	}
}
