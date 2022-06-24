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
	const { name, link, fileExtension, examId } = req.body;
	let examIdNumber = parseInt(examId);

	try {
		await prisma.examDownloadable.create({
			data: {
				name,
				fileExtension,
				link,
				examId,
			},
		});
		res.status(200).json({
			message: 'Downloadable Successful Created.',
			type: 'success',
		});
	} catch (error) {
		res.status(200).json({
			message: 'Error writting to database',
			type: 'error',
		});
		console.log(error);
	} finally {
		await prisma.$disconnect();
	}
}
