import { NextPage } from "next";
import { Navbar } from "@mantine/core";

export default function Sidebar() {
    return (
        <Navbar width={{ base: 400 }} height="100%" padding="xs">
            <Navbar.Section>{/* Indonesia confirmed cases */}</Navbar.Section>
            <Navbar.Section>{/* Daily Spread */}</Navbar.Section>
            <Navbar.Section>{/* Explore Province */}</Navbar.Section>
        </Navbar>
    );
}
