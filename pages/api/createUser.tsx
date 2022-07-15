// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '../../db/prisma';

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const { name, image, username, password } = req.body;
	try {
		await prisma.users.create({
			data: {
				name,
				image,
				username,
				password,
				vifurushi: {
					create: [
						{ name: 'notesDownload', value: 0 },
						{ name: 'examsSolvedDownload', value: 0 },
						{ name: 'examsUnsolvedDownload', value: 0 },
						{ name: 'quizExcercises', value: 0 },
						{ name: 'booksDownload', value: 0 },
						{ name: 'examAccess', value: 0 },
					],
				},
			},
		});
		res.status(200).json({
			message: 'Account Successful Created.',
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
