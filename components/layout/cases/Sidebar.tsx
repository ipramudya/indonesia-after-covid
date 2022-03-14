import { FunctionComponent } from "react";
import { Divider, Navbar, ScrollArea } from "@mantine/core";

import Confirmed from "components/containers/cases/Confirmed";
import ExploredProvince from "components/containers/cases/ExploredProvince";
import Overview from "components/containers/cases/Overview";
import { useCases } from "context";
import { Provinces } from "types/provinces.types";
import { Update } from "types/update.types";

export interface SidebarCases {
    provinces: Provinces;
    update: Update;
}

const SidebarExpanded: FunctionComponent<SidebarCases> = ({ provinces, update }) => {
    const {
        state: {
            exploredProvince: { isEmpty },
        },
    } = useCases();

    return (
        <Navbar
            width={{ base: isEmpty ? 375 : 675 }}
            height="100%"
            sx={{ padding: "18px 0 14px 0", flexDirection: "row" }}
        >
            <Navbar
                width={{ base: 375 }}
                height="100%"
                sx={{ padding: "0 25px", borderRight: isEmpty ? "none" : "" }}
            >
                <Navbar.Section>
                    <Confirmed update={update} />
                </Navbar.Section>
                <Divider my="md" />
                <Navbar.Section
                    grow
                    component={ScrollArea}
                    ml={-20}
                    mr={-20}
                    type="always"
                    scrollbarSize={6}
                >
                    <ExploredProvince provinces={provinces} />
                </Navbar.Section>
            </Navbar>

            {!isEmpty && (
                <Navbar width={{ base: 300 }} height="100%" sx={{ borderRight: "unset" }}>
                    <Navbar.Section
                        component={ScrollArea}
                        grow
                        mr={5}
                        scrollbarSize={6}
                        type="always"
                    >
                        <Overview />
                    </Navbar.Section>
                </Navbar>
            )}
        </Navbar>
    );
};

export default SidebarExpanded;