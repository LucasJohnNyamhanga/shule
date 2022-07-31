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
	const { id, isAdmin, isSuperUser } = req.body;

	try {
		await prisma.users.update({
			where: { id: parseInt(id) },
			data: {
				isAdmin,
				isSuperUser,
			},
		});
		res
			.status(200)
			.json({ message: 'User status Update Successful', type: 'success' });
	} catch (error) {
		res
			.status(200)
			.json({ message: 'Error, Could Not Update user status.', type: 'error' });
	} finally {
		await prisma.$disconnect();
	}
}
