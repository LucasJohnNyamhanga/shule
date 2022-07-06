// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '../../db/prisma';
type dataType = {
	formId: string;
	subjectId: string;
	topicId: string;
	content: string;
};

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const { topicId, content, formId, subjectId, userId } = req.body;
	let formIdNumber = parseInt(formId);
	let subjectIdNumber = parseInt(subjectId);
	let userIdNumber = parseInt(userId);
	try {
		await prisma.note.create({
			data: {
				formId,
				subjectId,
				topicId,
				content,
				usersId: userIdNumber,
			},
		});
		res.status(200).json({
			message: 'Notes Successful Created.',
			type: 'success',
		});
	} catch (error) {
		res.status(200).json({
			message: 'Error writting to database',
			type: 'error',
		});
	} finally {
		await prisma.$disconnect();
	}
}
