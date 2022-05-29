// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '../../db/prisma';
type dataType = {
	formId: string;
	subjectId: string;
	topicId: string;
	content: string;
};

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const { examTypeId, exam, description, year, hasAnswers } = req.body;
	let hasAnswer = hasAnswers == 'true' ? true : false;
	let typeId = parseInt(examTypeId);
	let yearDone = parseInt(year);
	try {
		await prisma.exam.create({
			data: {
				examTypeId: typeId,
				description,
				exam,
				year: yearDone,
				hasAnswers: hasAnswer,
			},
		});
		res.status(200).json({
			message: 'Notes Successful Created.',
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
