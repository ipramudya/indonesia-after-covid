import { Divider, Group, Header, Space, Text, Title } from "@mantine/core";
import Link from "next/link";
import { NextPage } from "next";

import useStyles from "lib/mantine/styles";

export default function Topbar() {
    const { classes } = useStyles();

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
                        <Text className={classes.link}>Cases</Text>
                    </Link>
                    <Link href="/vaccine" passHref>
                        <Text className={classes.link}>Vaccine</Text>
                    </Link>
                    <Link href="/news" passHref>
                        <Text className={classes.link}>Vaccine</Text>
                    </Link>
                </Group>
            </Group>
        </Header>
    );
}
