import type { GetServerSideProps, NextPage } from "next";

import { Layout, MainCases, SidebarCases } from "components/layout";
import { NEXT_URL } from "config/url";
import { Provinces } from "types/provinces.types";
import { Update } from "types/update.types";

interface HomeProps {
    provinces: Provinces;
    update: Update;
}

const Home: NextPage<HomeProps> = ({ provinces, update }) => {
    return (
        <Layout Sidebar={<SidebarCases update={update} provinces={provinces} />}>
            <MainCases provinces={provinces.list_data} />
        </Layout>
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
