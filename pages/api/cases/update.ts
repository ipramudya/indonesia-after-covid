import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse): NextApiHandler {
    if (req.method === "GET") {
        const covidUpdateEndpoint: string = "https://data.covid19.go.id/public/api/update.json";
        const CovidUpdateResponse = await fetch(covidUpdateEndpoint);
        const covidUpdate: object = await CovidUpdateResponse.json();

        /* simplify object by removing "value" key */
        const simplifiedUpdate: object = covidUpdate.update.harian.map((covidCase) => {
            const keys = Object.keys(covidCase);

            const newField = keys.reduce((accumulator, current) => {
                if (!covidCase[current].hasOwnProperty("value")) {
                    return { ...accumulator, [current]: covidCase[current] };
                }

                return { ...accumulator, [current]: covidCase[current].value };
            }, {});

            return newField;
        });

        res.status(200).json({
            data: covidUpdate.data,
            penambahan: covidUpdate.update.penambahan,
            harian: simplifiedUpdate,
            total: covidUpdate.update.total,
        });
    }
}
