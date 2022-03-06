import type { GetServerSideProps, NextPage } from "next";
import { AppShell } from "@mantine/core";

import { Sidebar, Topbar } from "components/layout";
import { NEXT_URL } from "config/url";
import { HomeProps } from "types";
import { CasesProvider } from "context/cases/cases.context";

const Home: NextPage<HomeProps> = ({ provinces, update }) => {
    return (
        <>
            <CasesProvider initialProps={{ provinces, update }}>
                <AppShell
                    padding="sm"
                    navbar={<Sidebar />}
                    header={<Topbar />}
                    sx={{
                        height: "100vh",
                        position: "absolute",
                        maxWidth: "100%",
                        overflow: "hidden",
                    }}
                >
                    {/* Main component */}
                </AppShell>
            </CasesProvider>
        </>
    );
};

const getServerSideProps: GetServerSideProps = async () => {
    const provinceEndpoint = "https://data.covid19.go.id/public/api/prov.json";
    const updateEndpoint = `${NEXT_URL}/api/cases/update`;

    const results = await Promise.all(
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
};

export { getServerSideProps };
export default Home;
