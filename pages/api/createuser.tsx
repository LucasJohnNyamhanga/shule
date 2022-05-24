// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '../../db/prisma'
type dataType = {
    name: string
}

export default async function handler(req: NextApiRequest,res: NextApiResponse) {
    const { firstName, lastName } = req.body
        try {
            await prisma.users.create({
                data: {
                    firstName,
                    lastName
                }
            })
            res.status(200).json({message: 'Successful added'});
        } catch (error) {
            console.log("Failure");
        } finally {
            await prisma.$disconnect();
        }
}
