// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '../../db/prisma';
type userData = {
	id: number;
	formName: string;
}[];

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<userData>
) {
	const { formName } = req.body;
	try {
		const formFromServer = await prisma.formReference.findMany({
			where: {
				formName,
			},
			select: {
				id: true,
				formName: true,
			},
		});
		const forms = JSON.parse(JSON.stringify(formFromServer));
		res.status(200).json(forms);
	} catch (error) {
	} finally {
		await prisma.$disconnect();
	}
}
