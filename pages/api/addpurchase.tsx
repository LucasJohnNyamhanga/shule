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
	const { name, value, id } = req.body;
	try {
		await prisma.purchase.create({
			data: {
				usersId: parseInt(id),
				name,
				value,
			},
		});
		res.status(200).json({
			message: 'Purchase Successful.',
			type: 'success',
		});
	} catch (error) {
		res.status(200).json({
			message: 'Error writting to database',
			type: 'error',
		});
		console.log(error);
	} finally {
		await prisma.$disconnect();
	}
}
