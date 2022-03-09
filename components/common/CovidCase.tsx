import { Box, Group, Text, Badge } from "@mantine/core";
import { BiChevronsUp, BiChevronsDown } from "react-icons/bi";

import formatNum from "lib/numeral/formatNum";
import { ListIcon } from "./Icons";
import { badge, box, typography } from "lib/mantine/styles";

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
                    {formatNum(total)}
                </Text>
                <Badge
                    radius="sm"
                    color="gray"
                    leftSection={(increase as number) < 0 ? <BiChevronsDown /> : <BiChevronsUp />}
                    styles={badge}
                >
                    {formatNum(increase)}
                </Badge>
            </Group>
        </Box>
    );
};

export default CovidCase;
