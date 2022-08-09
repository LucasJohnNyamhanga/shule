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
	const { id, status } = req.body;

	try {
		await prisma.order.update({
			where: { id: parseInt(id) },
			data: {
				status,
			},
		});
		res.status(200).json({ message: 'Update successful', type: 'success' });
	} catch (error) {
		res
			.status(200)
			.json({ message: 'Error, Could not update.', type: 'error' });
	} finally {
		await prisma.$disconnect();
	}
}
