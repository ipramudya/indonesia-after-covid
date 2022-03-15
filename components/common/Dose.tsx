import type { FunctionComponent } from "react";
import { Group, Badge, Text } from "@mantine/core";
import { BiChevronsUp } from "react-icons/bi";

import { typography, badge } from "lib/mantine/styles";
import formatNum from "lib/numeral/formatNum";

interface DoseProps {
    total: number;
    increase: number;
}

const Dose: FunctionComponent<DoseProps> = ({ total, increase }) => {
    return (
        <Group direction="column" spacing={3}>
            <Text sx={typography.textMain}>First dose</Text>
            <Group align="center" spacing={3} noWrap>
                <Text sx={typography.textMain} color="green" style={{ fontWeight: "bold" }}>
                    {formatNum(total)}
                </Text>
                <Badge radius="sm" color="gray" leftSection={<BiChevronsUp />} styles={badge}>
                    {formatNum(increase, "autoformat")}
                </Badge>
            </Group>
        </Group>
    );
};

export default Dose;
