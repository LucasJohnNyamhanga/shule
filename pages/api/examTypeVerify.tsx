// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '../../db/prisma';

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const { formId, subjectId, name } = req.body;
	let formIdreceived = parseInt(formId);
	let subjectIdreceived = parseInt(subjectId);
	try {
		const topicsFromServer = await prisma.examType.findMany({
			where: {
				subjectId: subjectIdreceived,
				formId: formIdreceived,
				name,
			},
			select: {
				id: true,
				name: true,
				definition: true,
				formId: true,
				subjectId: true,
				published: true,
			},
		});
		const topics = JSON.parse(JSON.stringify(topicsFromServer));
		res.status(200).json(topics);
	} catch (error) {
		console.log(error);
	} finally {
		await prisma.$disconnect();
	}
}
