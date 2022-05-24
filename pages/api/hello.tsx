// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    
  if (req.method == 'PUT') {
    res.status(200).json({ name:"Inapokea"});
}
  res.status(200).json({ name: 'John Doe' })
}
