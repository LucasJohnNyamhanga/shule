// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '../../db/prisma'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { formId, subjectId, topicId } = req.body
  let formIdreceived = parseInt(formId);
  let subjectIdreceived = parseInt(subjectId);
  let topicIdreceived = parseInt(topicId);
try {
  const topicsFromServer = await prisma.review.findMany({
    where: {
      subjectId: subjectIdreceived,
      formId: formIdreceived,
      topicId:topicIdreceived,
    },
      select: {
        id: true,
        name:true,
        published:true,
      }
    })
    const topics = JSON.parse(JSON.stringify(topicsFromServer));
    res.status(200).json(topics);
    } catch (error) {
        
    } finally {
    await prisma.$disconnect();
  }
}
