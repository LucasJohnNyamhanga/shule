// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '../../db/prisma';

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const {
		orderNumber,
		description,
		amountPaid,
		booksDownload,
		examAccess,
		examsSolvedDownload,
		examsUnsolvedDownload,
		notesDownload,
		quizExcercises,
		userId,
	} = req.body;
	try {
		await prisma.order.create({
			data: {
				orderNumber,
				description,
				amountPaid: parseInt(amountPaid),
				booksDownload: parseInt(booksDownload),
				examAccess: parseInt(examAccess),
				examsSolvedDownload: parseInt(examsSolvedDownload),
				examsUnsolvedDownload: parseInt(examsUnsolvedDownload),
				notesDownload: parseInt(notesDownload),
				quizExcercises: parseInt(quizExcercises),
				userId: parseInt(userId),
			},
		});
		res.status(200).json({
			message: 'Order Successful Created.',
			type: 'success',
		});
	} catch (error) {
		console.log(error);
		res.status(200).json({
			message: 'Error writting to database',
			type: 'error',
		});
	} finally {
		await prisma.$disconnect();
	}
}
