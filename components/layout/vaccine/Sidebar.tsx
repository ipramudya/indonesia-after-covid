import { Divider, Navbar, ScrollArea } from "@mantine/core";
import Administrated from "components/containers/vaccine/Administrated";
import DailyDose from "components/containers/vaccine/DailyDose";
import DetailHead from "components/containers/vaccine/DetailHead";
import GeneralDetail from "components/containers/vaccine/GeneralDetail";
import Service from "components/containers/vaccine/Service";
import VaccineDetailed from "components/containers/vaccine/VaccineDetailed";
import VaccineGiven from "components/containers/vaccine/VaccineGiven";
import { useVaccine } from "context";
import type { FunctionComponent } from "react";
import { Vacinne } from "types/vaccine.types";

export interface SidebarVaccineProps {
    vaccine: Vacinne;
}

const SidebarVaccine: FunctionComponent<SidebarVaccineProps> = ({ vaccine }) => {
    const {
        state: {
            detail: { isEmpty },
        },
    } = useVaccine();

    return (
        <Navbar
            width={{ base: isEmpty ? 375 : 675 }}
            sx={{ padding: "18px 0 14px 0", flexDirection: "row" }}
        >
            <Navbar
                width={{ base: 375 }}
                sx={{ padding: "0 25px", borderRight: isEmpty ? "none" : "" }}
            >
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

            {!isEmpty && (
                <Navbar width={{ base: 300 }} sx={{ borderRight: "unset" }} py={14} px={20}>
                    <Navbar.Section>
                        {/* <Detail /> */}
                        <DetailHead />
                        <Divider my="sm" />
                    </Navbar.Section>
                    <Navbar.Section>
                        <GeneralDetail />
                        <Divider my="sm" />
                    </Navbar.Section>
                    <Navbar.Section>
                        <VaccineGiven />
                        <Divider
                            my="md"
                            label="Vaccination given in detail"
                            variant="dashed"
                            labelPosition="center"
                        />
                    </Navbar.Section>
                    <Navbar.Section
                        grow
                        component={ScrollArea}
                        type="always"
                        scrollbarSize={6}
                        mr={-15}
                    >
                        <VaccineDetailed />
                    </Navbar.Section>
                </Navbar>
            )}
        </Navbar>
    );
};

export default SidebarVaccine;
