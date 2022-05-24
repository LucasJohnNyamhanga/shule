// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '../../db/prisma'
type dataType = {
    formId: string,
    subjectId: string,
    topicId: string,
    content:string
}

export default async function handler(req: NextApiRequest,res: NextApiResponse) {
    
    const { formName } = req.body;
        try {
            await prisma.formReview.create({
                data: {
                    formName,
                }
            })
            res.status(200).json({
                message: 'Notes Successful Created.',
                type:'success'
            })
        } catch (error) {
            res.status(200).json({
                message: 'Error writting to database',
                type:'error'
            });
        } finally {
            await prisma.$disconnect();
        }
}
