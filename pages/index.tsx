import { Layout, MainCases, SidebarCases } from "components/layout";
import removeValueKey from "utils/removeValueKey";
import type { GetStaticProps, NextPage } from "next";
import { Provinces } from "types/provinces-cases.types";
import { Update } from "types/update-cases.types";

interface HomeProps {
    provinces: Provinces;
    updates: Update;
}

const Home: NextPage<HomeProps> = ({ provinces, updates }) => {
    return (
        <Layout Sidebar={<SidebarCases update={updates} provinces={provinces} />}>
            <MainCases provinces={provinces.list_data} />
        </Layout>
    );
};

const getStaticProps: GetStaticProps = async () => {
    const provinceEndpoint = "https://data.covid19.go.id/public/api/prov.json";
    const updateEndpoint = "https://data.covid19.go.id/public/api/update.json";

    const results = await Promise.all(
        [
            fetch(provinceEndpoint).then((res) => res.json()),
            fetch(updateEndpoint).then((res) => res.json()),
        ].map((jsonResponse) => jsonResponse.catch((err) => err))
    );

    if (results.find((result) => result instanceof Error)) {
        return {
            notFound: true,
        };
    }

    const [provinces, updates] = results;

    // simplify object by removing "value" key
    const newHarianEntries = removeValueKey(updates.update.harian);

    return {
        props: {
            provinces,
            updates: {
                data: updates.data,
                penambahan: updates.update.penambahan,
                harian: newHarianEntries,
                total: updates.update.total,
            },
        },
        revalidate: 120,
    };
};

export { getStaticProps };
export default Home;
