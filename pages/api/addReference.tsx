// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '../../db/prisma';
type dataType = {
	subjectName: string;
	subjectDefinition: string;
	imageLocation: string;
	forms: [
		{
			id: number;
		}
	];
};

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const { name, description, data, formReference, subjectId, isPdf } = req.body;

	try {
		await prisma.reference.create({
			data: {
				name,
				description,
				data,
				formReference: {
					connect: formReference,
				},
				subjectId,
				isPdf: isPdf == 'True' ? true : false,
			},
		});
		res.status(200).json({
			message: 'Subject Successful added.',
			type: 'success',
		});
	} catch (error) {
		console.log('Majanga : ' + error);
		res.status(200).json({
			message: 'Error writting to database',
			type: 'error',
		});
	} finally {
		await prisma.$disconnect();
	}
}
