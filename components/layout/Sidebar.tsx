import { Navbar } from "@mantine/core";
import { FunctionComponent } from "react";

import Confirmed from "components/containers/cases/Confirmed";

const Sidebar: FunctionComponent = () => {
    return (
        <Navbar width={{ base: 400 }} height="100%" padding="sm">
            <Navbar.Section>{<Confirmed />}</Navbar.Section>
            <Navbar.Section>{/* Daily Spread */}</Navbar.Section>
            <Navbar.Section>{/* Explore Province */}</Navbar.Section>
        </Navbar>
    );
};

export default Sidebar;
