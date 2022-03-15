import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";

const handler: NextApiHandler = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === "GET") {
        const covidUpdateEndpoint: string = "https://data.covid19.go.id/public/api/update.json";
        const CovidUpdateResponse = await fetch(covidUpdateEndpoint);
        const covidUpdate: any = await CovidUpdateResponse.json();

        /* simplify object by removing "value" key */
        const simplifiedUpdate: object = covidUpdate.update.harian.map((covidCase: any) => {
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
    } else {
        res.setHeader("Allow", ["GET"]);
        res.status(405).json({ message: `Method ${req.method} not allowed` });
    }
};

export default handler;
