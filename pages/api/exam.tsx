// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '../../db/prisma';

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const { examTypeId } = req.body;
	let examTypeIdreceived = parseInt(examTypeId);
	try {
		const topicsFromServer = await prisma.exam.findMany({
			where: {
				examTypeId: examTypeIdreceived,
			},
			select: {
				id: true,
				description: true,
				published: true,
				hasAnswers: true,
				year: true,
			},
		});
		const topics = JSON.parse(JSON.stringify(topicsFromServer));
		res.status(200).json(topics);
	} catch (error) {
	} finally {
		await prisma.$disconnect();
	}
}
