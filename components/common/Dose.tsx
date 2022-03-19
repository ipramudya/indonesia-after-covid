import type { FunctionComponent } from "react";
import { Group, Badge, Text, useMantineTheme } from "@mantine/core";
import { BiChevronsUp } from "react-icons/bi";

import { typography, badge } from "lib/mantine/styles";
import formatNum from "lib/numeral/formatNum";

interface DoseProps {
    total: number;
    increase: number;
    title: string;
}

const Dose: FunctionComponent<DoseProps> = ({ total, increase, title }) => {
    const theme = useMantineTheme();

    return (
        <Group direction="column" spacing={3}>
            <Text sx={typography.textMain}>{title}</Text>
            <Group align="center" spacing={3} noWrap>
                <Text
                    sx={typography.textMain}
                    style={{ fontWeight: "bold", color: theme.colors.green[5] }}
                >
                    {formatNum(total)}
                </Text>
                <Badge
                    radius="sm"
                    color="gray"
                    leftSection={<BiChevronsUp />}
                    styles={badge}
                    sx={{ padding: "3px" }}
                >
                    {formatNum(increase, "autoformat")}
                </Badge>
            </Group>
        </Group>
    );
};

export default Dose;
