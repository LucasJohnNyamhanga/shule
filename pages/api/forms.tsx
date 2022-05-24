// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '../../db/prisma'
type userData = {
  id:number,
  formName:string,
}[]

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<userData>
) {
try {
    const formsFromServer: userData = await prisma.form.findMany({
      select: {
          id:true,
          formName:true,
      }
    })
    const forms = JSON.parse(JSON.stringify(formsFromServer));
    res.status(200).json(forms);
    } catch (error) {
        
    } finally {
    await prisma.$disconnect();
  }
}
