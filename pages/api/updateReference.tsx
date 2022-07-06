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
	const {
		id,
		name,
		description,
		data,
		formReference,
		subjectId,
		isPdf,
		userId,
	} = req.body;
	let userIdNumber = parseInt(userId);

	try {
		await prisma.reference.update({
			where: { id: parseInt(id) },
			data: {
				name,
				description,
				data,
				formReference: {
					set: formReference,
				},
				subjectId,
				isPdf: isPdf == 'True' ? true : false,
				usersId: userIdNumber,
			},
		});
		res.status(200).json({ message: 'Update successful', type: 'success' });
	} catch (error) {
		console.log(error);
		res
			.status(200)
			.json({ message: 'Error, Could not update.', type: 'error' });
	} finally {
		await prisma.$disconnect();
	}
}
