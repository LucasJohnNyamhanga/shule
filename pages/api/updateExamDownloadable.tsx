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
	const { id, name, link, fileExtension, examId, userId } = req.body;
	let userIdNumber = parseInt(userId);

	try {
		await prisma.examDownloadable.update({
			where: { id: parseInt(id) },
			data: {
				name,
				link,
				fileExtension,
				examId,
				usersId: userIdNumber,
			},
		});
		res.status(200).json({ message: 'Update successful', type: 'success' });
		console.log('file ext is :' + fileExtension);
	} catch (error) {
		console.log(error);
		res
			.status(200)
			.json({ message: 'Error, Could not update.', type: 'error' });
	} finally {
		await prisma.$disconnect();
	}
}
