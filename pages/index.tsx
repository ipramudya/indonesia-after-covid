import { AppShell, Navbar, Title } from "@mantine/core";
import type { GetServerSideProps, NextPage } from "next";

import { Sidebar, Topbar } from "components/layout";
import { NEXT_URL } from "config/url";
import { HomeProps } from "types";

export default function Home({ provinces, update }: HomeProps): NextPage {
    console.log(provinces, update);
    return (
        <AppShell
            padding="sm"
            navbar={<Sidebar />}
            header={<Topbar />}
            sx={{ height: "100vh", position: "absolute", maxWidth: "100%" }}
        >
            {/* Main component */}
        </AppShell>
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
