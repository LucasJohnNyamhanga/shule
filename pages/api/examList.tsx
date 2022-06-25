// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '../../db/prisma';

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const { examTypeId } = req.body;
	let id = parseInt(examTypeId);
	console.log('id ya examType ni ' + id);
	try {
		const topicsFromServer = await prisma.examType.findUnique({
			where: {
				id,
			},
			select: {
				exam: {
					select: {
						id: true,
						description: true,
						year: true,
					},
				},
			},
		});
		const topics = JSON.parse(JSON.stringify(topicsFromServer));
		res.status(200).json(topics);
	} catch (error) {
	} finally {
		await prisma.$disconnect();
	}
}
