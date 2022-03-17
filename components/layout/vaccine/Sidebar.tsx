import type { FunctionComponent } from "react";
import { Divider, Navbar } from "@mantine/core";
import { Vacinne } from "types/vaccine.types";
import Administrated from "components/containers/vaccine/Administrated";
import Service from "components/containers/vaccine/Service";
import DailyDose from "components/containers/vaccine/DailyDose";

export interface SidebarVaccineProps {
    vaccine: Vacinne;
}

const SidebarVaccine: FunctionComponent<SidebarVaccineProps> = ({ vaccine }) => {
    console.log(vaccine);
    return (
        <Navbar width={{ base: 375 }} sx={{ padding: "18px 0 14px 0", flexDirection: "row" }}>
            <Navbar sx={{ padding: "0 25px", borderRight: "none" }}>
                <Navbar.Section>
                    <Administrated increase={vaccine.penambahan} total={vaccine.total} />
                </Navbar.Section>
                <Divider my="md" />
                <Navbar.Section>
                    <Service />
                </Navbar.Section>
                <Divider my="md" />
                <Navbar.Section grow>
                    <DailyDose daily={vaccine.harian} />
                </Navbar.Section>
            </Navbar>
        </Navbar>
    );
};

export default SidebarVaccine;
