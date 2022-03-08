import { FunctionComponent } from "react";
import Link from "next/link";

import { Divider, Group, Header, Text } from "@mantine/core";
import { typography } from "lib/mantine/styles";

const Topbar: FunctionComponent = () => {
    return (
        <Header padding="sm" height={60}>
            <Group sx={{ height: "100%" }}>
                <Text size="xl" component="h1" m={0} color="dark" sx={{ fontStyle: "italic" }}>
                    Indonesia
                    <Text component="span" size="xl" weight={500} color="gray">
                        AfterCovid
                    </Text>
                </Text>
                <Divider orientation="vertical" />
                <Group spacing="lg">
                    <Link href="/" passHref>
                        <Text sx={typography.link}>Cases</Text>
                    </Link>
                    <Link href="/vaccine" passHref>
                        <Text sx={typography.link}>Vaccine</Text>
                    </Link>
                    <Link href="/news" passHref>
                        <Text sx={typography.link}>News</Text>
                    </Link>
                </Group>
            </Group>
        </Header>
    );
};

export default Topbar;
