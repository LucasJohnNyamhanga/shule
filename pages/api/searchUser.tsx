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
	const { user } = req.body;
	console.log(user);
	try {
		const result = await prisma.users.findMany({
			where: {
				username: {
					contains: user,
				},
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
		let searchResults = JSON.parse(JSON.stringify(result));

		if (searchResults.length > 0) {
			res.status(200).json(searchResults);
		} else {
			const result = await prisma.users.findMany({
				where: {
					name: {
						contains: user,
					},
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
			let searchResults = JSON.parse(JSON.stringify(result));
			res.status(200).json(searchResults);
		}
	} catch (error) {
		res.status(404).json('Not Found');
		console.log(error);
	} finally {
		await prisma.$disconnect();
	}
}
