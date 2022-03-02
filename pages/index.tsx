import { Title } from "@mantine/core";
import type { GetServerSideProps, NextPage } from "next";

import { NEXT_URL } from "config/url";
import { HomeProps } from "../types/index";

export default function Home({ provinces, update }: HomeProps): NextPage {
    console.log(provinces, update);
    return (
        <div>
            <Title>Setup is done</Title>
        </div>
    );
}

export async function getServerSideProps(): GetServerSideProps {
    const provinceEndpoint: string = "https://data.covid19.go.id/public/api/prov.json";
    const updateEndpoint: string = `${NEXT_URL}/api/cases/update`;

    const results = await Promise.all<object>(
        [
            fetch(provinceEndpoint).then((res) => res.json()),
            fetch(updateEndpoint).then((res) => res.json()),
        ].map((jsonResponse) => jsonResponse.catch((error) => error))
    );

    return {
        props: {
            provinces: results[0],
            update: results[1],
        },
    };
}
