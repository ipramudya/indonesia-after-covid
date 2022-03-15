import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";

const handler: NextApiHandler = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === "GET") {
        const vaccineEndpoint = "https://data.covid19.go.id/public/api/pemeriksaan-vaksinasi.json";

        const vaccineResponse = await fetch(vaccineEndpoint);
        const vaccineData = await vaccineResponse.json();

        if (vaccineResponse.ok) {
            const removeVaccineVal = vaccineData.vaksinasi.harian.map((dailyVaccine: any) => {
                const keys = Object.keys(dailyVaccine);

                const newField = keys.reduce((accumulator, current) => {
                    if (!dailyVaccine[current].hasOwnProperty("value")) {
                        return { ...accumulator, [current]: dailyVaccine[current] };
                    }

                    return { ...accumulator, [current]: dailyVaccine[current].value };
                }, {});

                return newField;
            });

            const { harian, ...others } = vaccineData.vaksinasi;

            res.status(200).json({
                harian: removeVaccineVal,
                ...others,
            });
        }
    } else {
        res.setHeader("Allow", ["GET"]);
        res.status(405).json({ message: `Method ${req.method} not allowed` });
    }
};

export default handler;
