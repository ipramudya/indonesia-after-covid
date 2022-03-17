import { Layout, MainVaccine, SidebarVaccine } from "components/layout";
import { NEXT_URL } from "config/url";
import type { GetServerSideProps } from "next";
import type { FunctionComponent } from "react";
import { Vacinne } from "types/vaccine.types";

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

const getServerSideProps: GetServerSideProps = async () => {
    const nextAPIEndpoint = `${NEXT_URL}/api/vaccine`;
    const response = await fetch(nextAPIEndpoint);
    const data = await response.json();

    return {
        props: {
            vaccine: data,
        },
    };
};

export { getServerSideProps };
export default Vaccine;
