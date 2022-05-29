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
	const { id, examTypeId, exam, description, year, hasAnswers } = req.body;
	let hasAnswer = hasAnswers == 'true' ? true : false;

	try {
		await prisma.exam.update({
			where: { id: parseInt(id) },
			data: {
				examTypeId: parseInt(examTypeId),
				exam,
				description,
				year: parseInt(year),
				hasAnswers: hasAnswer,
			},
		});
		res.status(200).json({ message: 'Update successful', type: 'success' });
	} catch (error) {
		console.log(error);
		res
			.status(200)
			.json({ message: 'Error, Could not update.', type: 'error' });
	} finally {
		await prisma.$disconnect();
	}
}
