import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { key } = req.query;

    const specificProvinceResponse = await fetch(
        `https://data.covid19.go.id/public/api/prov_detail_${key}.jso`
    );

    if (!specificProvinceResponse.ok) {
        res.status(500).send({ message: "failed to fetch data" });
        return;
    }

    const specificProvinceJson = await specificProvinceResponse.json();
    res.status(200).json(specificProvinceJson);
}
