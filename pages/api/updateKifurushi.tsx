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
	const {
		id,
		booksDownload,
		examAccess,
		examsSolvedDownload,
		examsUnsolvedDownload,
		notesDownload,
		quizExcercises,
	} = req.body;
	try {
		await prisma.vifurushi.updateMany({
			where: { userId: parseInt(id), name: 'notesDownload' },
			data: {
				value: {
					increment: parseInt(notesDownload),
				},
			},
		});
		await prisma.vifurushi.updateMany({
			where: { userId: parseInt(id), name: 'quizExcercises' },
			data: {
				value: {
					increment: parseInt(quizExcercises),
				},
			},
		});
		await prisma.vifurushi.updateMany({
			where: { userId: parseInt(id), name: 'examsUnsolvedDownload' },
			data: {
				value: {
					increment: parseInt(examsUnsolvedDownload),
				},
			},
		});
		await prisma.vifurushi.updateMany({
			where: { userId: parseInt(id), name: 'examsSolvedDownload' },
			data: {
				value: {
					increment: parseInt(examsSolvedDownload),
				},
			},
		});
		await prisma.vifurushi.updateMany({
			where: { userId: parseInt(id), name: 'examAccess' },
			data: {
				value: {
					increment: parseInt(examAccess),
				},
			},
		});
		await prisma.vifurushi.updateMany({
			where: { userId: parseInt(id), name: 'booksDownload' },
			data: {
				value: {
					increment: parseInt(booksDownload),
				},
			},
		});
		res.status(200).json({
			message: 'You have successful bought the package.',
			type: 'success',
		});
	} catch (error) {
		console.log(error);
		res.status(200).json({ message: 'Error, Could not buy.', type: 'error' });
	} finally {
		await prisma.$disconnect();
	}
}
