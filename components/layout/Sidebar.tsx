import { Divider, Navbar, ScrollArea } from "@mantine/core";
import { FunctionComponent } from "react";

import Confirmed from "components/containers/cases/Confirmed";

const Sidebar: FunctionComponent = () => {
    return (
        <Navbar width={{ base: 400 }} height="100%" padding="sm">
            <Navbar.Section mt="xs">{<Confirmed />}</Navbar.Section>
            <Divider my="sm" />
            <Navbar.Section>{/* Daily Spread */}</Navbar.Section>
            <Navbar.Section>{/* Explore Province */}</Navbar.Section>
        </Navbar>
    );
};

export default Sidebar;
