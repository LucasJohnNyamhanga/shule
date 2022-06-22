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
	const { name, link, fileExtension, subjectId, formId } = req.body;
	let formIdNumber = parseInt(formId);
	let subjectIdNumber = parseInt(subjectId);

	try {
		await prisma.notesDownloadable.create({
			data: {
				name,
				subjectId: subjectIdNumber,
				formId: formIdNumber,
				fileExtension,
				link,
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
