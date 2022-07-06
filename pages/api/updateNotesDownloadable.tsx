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
	const { id, name, link, fileExtension, formId, subjectId, userId } = req.body;
	let userIdNumber = parseInt(userId);

	try {
		await prisma.notesDownloadable.update({
			where: { id: parseInt(id) },
			data: {
				name,
				link,
				fileExtension,
				formId,
				subjectId,
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
