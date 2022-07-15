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
	const { id, password } = req.body;

	try {
		await prisma.users.update({
			where: { id: parseInt(id) },
			data: {
				password,
			},
		});
		res
			.status(200)
			.json({ message: 'Password Update Successful', type: 'success' });
	} catch (error) {
		console.log(error);
		res
			.status(200)
			.json({ message: 'Error, Could Not Update Password.', type: 'error' });
	} finally {
		await prisma.$disconnect();
	}
}
