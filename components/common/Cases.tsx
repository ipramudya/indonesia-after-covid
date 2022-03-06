import { Box, Group, Text, Badge } from "@mantine/core";
import { BiChevronsUp } from "react-icons/bi";

import formatNum from "lib/numeral/formatNum";
import { ListIcon } from "./Icons";
import { badge, box, typography } from "lib/mantine/styles";

interface ICovidCaseProps {
    color: "green" | "dark" | "yellow";
    title: "Healed" | "Fatal" | "Hospitalized";
    increase: number;
    total: number;
}

const CovidCase: React.FunctionComponent<ICovidCaseProps> = ({ color, increase, total, title }) => {
    return (
        <Box sx={box.case}>
            <Group spacing="xs">
                <ListIcon color={color} />
                <Text component="span" sx={typography.textMain}>
                    {title} cases
                </Text>
            </Group>
            <Group spacing="sm">
                <Text color={color} weight="bold" sx={typography.number}>
                    {formatNum(total)}
                </Text>
                <Badge radius="sm" color="gray" leftSection={<BiChevronsUp />} styles={badge}>
                    {formatNum(increase)}
                </Badge>
            </Group>
        </Box>
    );
};

export default CovidCase;
