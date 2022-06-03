// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '../../db/prisma';

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const { reviewId } = req.body;
	let Idreceived = parseInt(reviewId);
	try {
		const topicsFromServer = await prisma.question.findMany({
			where: {
				reviewId: Idreceived,
				published: true,
			},
			select: {
				id: true,
				question: true,
				answer: {
					select: {
						id: true,
						answer: true,
						valid: true,
					},
				},
				questionFormat: {
					select: {
						name: true,
					},
				},
				published: true,
				questionFormatId: true,
				answerDetails: true,
			},
		});
		const topics = JSON.parse(JSON.stringify(topicsFromServer));
		res.status(200).json(topics);
	} catch (error) {
	} finally {
		await prisma.$disconnect();
	}
}
