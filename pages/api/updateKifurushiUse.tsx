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
	const { id, name } = req.body;

	try {
		await prisma.vifurushi.updateMany({
			where: { usersId: parseInt(id), name },
			data: {
				value: {
					decrement: 1,
				},
			},
		});
		res.status(200).json({
			message: `You have successful downloaded package`,
			type: 'success',
		});
	} catch (error) {
		console.log(error);
		res.status(200).json({ message: 'Error, Could not buy.', type: 'error' });
	} finally {
		await prisma.$disconnect();
	}
}
