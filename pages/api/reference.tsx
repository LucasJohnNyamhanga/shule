// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '../../db/prisma';

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const { formId, subjectId } = req.body;
	let formIdreceived = parseInt(formId);
	let subjectIdreceived = parseInt(subjectId);
	console.log(formIdreceived, subjectIdreceived);
	try {
		const topicsFromServer = await prisma.reference.findMany({
			where: {
				subjectId: subjectIdreceived,
				formReference: {
					some: {
						id: formIdreceived,
					},
				},
			},
			select: {
				id: true,
				name: true,
				description: true,
				published: true,
				isPdf: true,
			},
		});
		const topics = JSON.parse(JSON.stringify(topicsFromServer));
		res.status(200).json(topics);
	} catch (error) {
	} finally {
		await prisma.$disconnect();
	}
}
