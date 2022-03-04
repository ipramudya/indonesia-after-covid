import type { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import indonesiaGeoJson from "constant/indonesia.json";

const handler: NextApiHandler = (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === "GET") {
        res.status(200).json(indonesiaGeoJson);
    } else {
        res.setHeader("Allow", ["GET"]);
        res.status(405).json({ message: `Method ${req.method} not allowed` });
    }
};

export default handler;
