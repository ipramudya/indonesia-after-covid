import { Divider, Navbar, ScrollArea } from "@mantine/core";
import { FunctionComponent } from "react";

import Confirmed from "components/containers/cases/Confirmed";
import DailySpread from "components/containers/cases/DailySpread";
import ExploredProvince from "components/containers/cases/ExploredProvince";
import { Provinces } from "types/provinces.types";
import { Update } from "types/update.types";

interface SidebarProps {
    provinces: Provinces;
    update: Update;
}

const Sidebar: FunctionComponent<SidebarProps> = ({ provinces, update }) => {
    return (
        <Navbar width={{ base: 400 }} height="100%" sx={{ padding: "14px 25px" }}>
            <Navbar.Section>{<Confirmed update={update} />}</Navbar.Section>
            <Divider my="sm" />
            <Navbar.Section>{<DailySpread update={update} />}</Navbar.Section>
            <Divider my="sm" />
            <Navbar.Section grow component={ScrollArea} ml={-20} mr={-25} type="always">
                {<ExploredProvince provinces={provinces} />}
            </Navbar.Section>
        </Navbar>
    );
};

export default Sidebar;
