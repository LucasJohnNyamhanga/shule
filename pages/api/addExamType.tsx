// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '../../db/prisma';
type dataType = {
	topicName: string;
	topicDefinition: string;
	formId: string;
	subjectId: string;
};

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const { name, definition, formId, subjectId } = req.body;
	let formIdNumber = parseInt(formId);
	let subjectIdNumber = parseInt(subjectId);
	try {
		await prisma.examType.create({
			data: {
				name,
				definition,
				formId: formIdNumber,
				subjectId: subjectIdNumber,
			},
		});
		res.status(200).json({
			message: 'Successful added',
			type: 'success',
		});
	} catch (error) {
		res.status(200).json({
			message: 'Error writting database',
			type: 'error',
		});
	} finally {
		await prisma.$disconnect();
	}
}
