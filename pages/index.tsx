import type { GetServerSideProps, NextPage } from "next";
import { AppShell } from "@mantine/core";

import { Sidebar, Topbar, SidebarExpanded } from "components/layout";
import { NEXT_URL } from "config/url";
import { HomeProps } from "types";
import appshell from "lib/mantine/styles/appshell";

const Home: NextPage<HomeProps> = ({ provinces, update }) => {
    return (
        <>
            <AppShell
                padding="sm"
                // navbar={<Sidebar update={update} provinces={provinces} />}
                navbar={<SidebarExpanded update={update} provinces={provinces} />}
                header={<Topbar />}
                styles={appshell}
            >
                {/* Main component */}
            </AppShell>
        </>
    );
};

const getServerSideProps: GetServerSideProps = async () => {
    const provinceEndpoint = "https://data.covid19.go.id/public/api/prov.json";
    const updateEndpoint = `${NEXT_URL}/api/cases/update`;

    const [provinces, update] = await Promise.all(
        [
            fetch(provinceEndpoint).then((res) => res.json()),
            fetch(updateEndpoint).then((res) => res.json()),
        ].map((jsonResponse) => jsonResponse.catch((error) => error))
    );

    return {
        props: {
            provinces,
            update,
        },
    };
};

export { getServerSideProps };
export default Home;
