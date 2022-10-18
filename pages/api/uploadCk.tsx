import middleware from "../../components/middleware/middleware";
import nextConnect from "next-connect";
var mv = require("mv");
import type { NextApiRequest, NextApiResponse } from "next";

const handler = nextConnect();

handler.use(middleware);

type Data = {
  uploaded: boolean;
  url: string;
};

handler.post(async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  try {
    const { files }: any = req;
    const body = req.body;
    const file = JSON.parse(JSON.stringify(files));
    var oldPath = file.upload.filepath;
    var newPath = `./public/uploads/${file.upload.originalFilename}`;
    mv(oldPath, newPath, function (err: any) {
      console.log(err);
    });
    res.status(200).json({
      uploaded: true,
      url: `/uploads/${file.upload.originalFilename}`,
    });
  } catch (err) {}
});

export const config = {
  api: {
    bodyParser: false,
  },
};

export default handler;
