import { Divider, Group, Header, Text } from "@mantine/core";
import { Popover } from "components/common";
import { typography } from "lib/mantine/styles";
import Link from "next/link";
import { FunctionComponent, useState } from "react";

const Topbar: FunctionComponent = () => {
    const [isPopoverShown, setIsPopoverShown] = useState(false);
    const onInfoButtonClick = () => setIsPopoverShown((prev) => !prev);

    return (
        <Header sx={{ padding: "14px 25px" }} height={60}>
            <Group sx={{ height: "100%" }} noWrap>
                <Text size="xl" component="h1" m={0} color="dark" sx={{ fontStyle: "italic" }}>
                    Indonesia
                    <Text component="span" size="xl" weight={500} color="gray">
                        AfterCovid
                    </Text>
                </Text>
                <Divider orientation="vertical" />
                <Group position="apart" sx={{ width: "100%" }}>
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
                    <Popover
                        isPopoverShown={isPopoverShown}
                        onInfoButtonClick={onInfoButtonClick}
                    />
                </Group>
            </Group>
        </Header>
    );
};

export default Topbar;
