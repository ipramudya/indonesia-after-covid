import { memo, useMemo } from "react";
import { Badge, Box, Group, Text } from "@mantine/core";
import { BiChevronsDown, BiChevronsUp } from "react-icons/bi";

import { badge, box, typography } from "lib/mantine/styles";
import formatNum from "lib/numeral/formatNum";
import { ListIcon } from "components/ui/Icons";

interface ICovidCaseProps {
    color: "green" | "dark" | "yellow" | "#ee5555";
    title: "Healed" | "Fatal" | "Hospitalized" | "Confirmed case";
    increase: number | undefined;
    total: number | undefined;
    type?: "tiny" | "normal";
}

const CovidCase: React.FunctionComponent<ICovidCaseProps> = ({
    color,
    increase,
    total,
    title,
    type = "normal",
}) => {
    const memoizedTotal = useMemo(() => formatNum(total), [total]);
    const memoizedIncrease = useMemo(() => formatNum(increase), [increase]);

    return (
        <Box sx={box.case}>
            <Group spacing="xs">
                {type === "normal" && <ListIcon color={color} />}
                <Text
                    component="span"
                    sx={type === "normal" ? typography.textMain : typography.textTiny}
                >
                    {title}
                </Text>
            </Group>
            <Group spacing="sm">
                <Text
                    color={color}
                    weight="bold"
                    sx={type === "normal" ? typography.number : typography.numberTiny}
                >
                    {memoizedTotal}
                </Text>
                <Badge
                    radius="sm"
                    color="gray"
                    leftSection={(increase as number) < 0 ? <BiChevronsDown /> : <BiChevronsUp />}
                    styles={badge}
                >
                    {memoizedIncrease}
                </Badge>
            </Group>
        </Box>
    );
};

export default memo(CovidCase);
