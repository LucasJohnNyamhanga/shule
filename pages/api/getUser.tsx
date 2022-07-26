// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '../../db/prisma';

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const { username } = req.body;
	try {
		const userFromServer = await prisma.users.findFirst({
			where: {
				username,
			},
			select: {
				id: true,
				username: true,
				isAdmin: true,
				isSuperUser: true,
				image: true,
				name: true,
				vifurushi: {
					select: {
						name: true,
						value: true,
					},
				},
				purchase: {
					select: {
						name: true,
						value: true,
					},
				},
			},
		});
		const user = JSON.parse(JSON.stringify(userFromServer));
		if (user) {
			res.status(200).json(user);
		} else {
			res.status(404).json('Not Found');
		}
	} catch (error) {
	} finally {
		await prisma.$disconnect();
	}
}
