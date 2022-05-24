// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '../../db/prisma'
type userData = {
  id:number,
  subjectName:string,
  subjectDefinition:string|null,
  imageLocation: string | null,
  published:boolean,
  forms: {
      formName:String
    }[],
    
}[]

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<userData>
) {
try {
    const subjectsFromServer: userData = await prisma.subjectReview.findMany({
      select: {
          id:true,
          subjectName:true,
          subjectDefinition:true,
          imageLocation: true,
          published:true,
          forms: {
              select: {
              formName:true
              }
          },
      }
    })
    const subjects = JSON.parse(JSON.stringify(subjectsFromServer));
    res.status(200).json(subjects);
    } catch (error) {
        
    } finally {
    await prisma.$disconnect();
  }
}
