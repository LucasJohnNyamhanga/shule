// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '../../db/prisma';

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const { examId } = req.body;
	let examIdNumber = parseInt(examId);

	try {
		const topicsFromServer = await prisma.examDownloadable.findMany({
			where: {
				examId: examIdNumber,
			},
			select: {
				id: true,
				name: true,
				link: true,
				fileExtension: true,
				published: true,
			},
		});
		const topics = JSON.parse(JSON.stringify(topicsFromServer));
		res.status(200).json(topics);
	} catch (error) {
	} finally {
		await prisma.$disconnect();
	}
}
