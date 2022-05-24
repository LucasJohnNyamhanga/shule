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
	const { subjectName, subjectDefinition, imageLocation, forms } = req.body;
	try {
		await prisma.subject.create({
			data: {
				subjectName,
				subjectDefinition,
				imageLocation,
				forms: {
					connect: forms,
				},
			},
		});
		res.status(200).json({
			message: 'Subject Successful added.',
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
