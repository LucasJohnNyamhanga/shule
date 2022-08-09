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
	const { number } = req.body;
	try {
		const result = await prisma.order.findMany({
			where: {
				orderNumber: number,
			},
			select: {
				id: true,
			},
		});
		let searchResults = JSON.parse(JSON.stringify(result));
		res.status(200).json(searchResults);
	} catch (error) {
		res.status(200).json('Not Found');
		console.log(error);
	} finally {
		await prisma.$disconnect();
	}
}
