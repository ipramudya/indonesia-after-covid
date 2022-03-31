import { Layout, MainVaccine, SidebarVaccine } from "components/layout";
import type { GetStaticProps } from "next";
import type { FunctionComponent } from "react";
import { Vacinne } from "types/vaccine.types";
import removeValueKey from "utils/removeValueKey";

interface VaccineProps {
    vaccine: Vacinne;
}

const Vaccine: FunctionComponent<VaccineProps> = ({ vaccine }) => {
    return (
        <Layout Sidebar={<SidebarVaccine vaccine={vaccine} />}>
            <MainVaccine />
        </Layout>
    );
};

const getStaticProps: GetStaticProps = async () => {
    const vaccineRes = await fetch(
        "https://data.covid19.go.id/public/api/pemeriksaan-vaksinasi.json"
    );

    if (!vaccineRes.ok) {
        return {
            notFound: true,
        };
    }

    const vaccineData = await vaccineRes.json();
    const newHarianEntries = removeValueKey(vaccineData.vaksinasi.harian);
    const { harian, ...others } = vaccineData.vaksinasi;

    return {
        props: {
            vaccine: {
                ...others,
                harian: newHarianEntries,
            },
        },
        revalidate: 120,
    };
};

export { getStaticProps };
export default Vaccine;
