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
		key,
		notesDownload,
		quizExcercises,
		examsUnsolvedDownload,
		examsSolvedDownload,
		examAccess,
		booksDownload,
	} = req.body;

	try {
		switch (key) {
			case 'Notes':
				await prisma.vifurushi.updateMany({
					where: { usersId: parseInt(id), name: 'notesDownload' },
					data: {
						value: {
							increment: 1,
						},
					},
				});
				await prisma.vifurushi.updateMany({
					where: { usersId: parseInt(id), name: 'quizExcercises' },
					data: {
						value: {
							increment: 5,
						},
					},
				});
				res.status(200).json({
					message: `You have successful bought ${key} package`,
					type: 'success',
				});
				break;
			case 'Quiz':
				await prisma.vifurushi.updateMany({
					where: { usersId: parseInt(id), name: 'quizExcercises' },
					data: {
						value: {
							increment: 10,
						},
					},
				});
				res.status(200).json({
					message: `You have successful bought ${key} package`,
					type: 'success',
				});
				break;
			case 'Unsolved Exam':
				await prisma.vifurushi.updateMany({
					where: { usersId: parseInt(id), name: 'examsUnsolvedDownload' },
					data: {
						value: {
							increment: 1,
						},
					},
				});
				await prisma.vifurushi.updateMany({
					where: { usersId: parseInt(id), name: 'quizExcercises' },
					data: {
						value: {
							increment: 3,
						},
					},
				});
				res.status(200).json({
					message: `You have successful bought ${key} package`,
					type: 'success',
				});
				break;
			case 'Solved Exam':
				await prisma.vifurushi.updateMany({
					where: { usersId: parseInt(id), name: 'examsSolvedDownload' },
					data: {
						value: {
							increment: 1,
						},
					},
				});
				await prisma.vifurushi.updateMany({
					where: { usersId: parseInt(id), name: 'examAccess' },
					data: {
						value: {
							increment: 1,
						},
					},
				});
				await prisma.vifurushi.updateMany({
					where: { usersId: parseInt(id), name: 'quizExcercises' },
					data: {
						value: {
							increment: 5,
						},
					},
				});
				res.status(200).json({
					message: `You have successful bought ${key} package`,
					type: 'success',
				});
				break;
			case 'Books':
				await prisma.vifurushi.updateMany({
					where: { usersId: parseInt(id), name: 'booksDownload' },
					data: {
						value: {
							increment: 1,
						},
					},
				});
				await prisma.vifurushi.updateMany({
					where: { usersId: parseInt(id), name: 'quizExcercises' },
					data: {
						value: {
							increment: 5,
						},
					},
				});
				res.status(200).json({
					message: `You have successful bought ${key} package`,
					type: 'success',
				});
				break;

			default:
				break;
		}
	} catch (error) {
		console.log(error);
		res.status(200).json({ message: 'Error, Could not buy.', type: 'error' });
	} finally {
		await prisma.$disconnect();
	}
}
