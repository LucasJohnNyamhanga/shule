// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '../../db/prisma';
type userData = {
	message: string;
	type: string;
};

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<userData>
) {
	const { id, formId, subjectId, topicId, name, userId } = req.body;
	let userIdNumber = parseInt(userId);

	try {
		await prisma.review.update({
			where: { id: parseInt(id) },
			data: {
				name,
				topicId,
				subjectId,
				formId,
				usersId: userIdNumber,
			},
		});
		res.status(200).json({
			message: 'Successful Updated',
			type: 'success',
		});
	} catch (error) {
		res.status(200).json({
			message: 'Error Updating Database',
			type: 'error',
		});
	} finally {
		await prisma.$disconnect();
	}
}
