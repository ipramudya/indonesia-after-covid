import { Box, Group, Text, Badge } from "@mantine/core";
import { TiArrowSortedUp } from "react-icons/ti";

import formatNum from "lib/numeral/formatNum";
import { ListIcon } from "./Icons";
import useStyles from "lib/mantine/styles";

interface ICovidCaseProps {
    color: "green" | "dark" | "yellow";
    title: "Healed" | "Fatal" | "Hospitalized";
    increase: number;
    total: number;
}

const CovidCase: React.FunctionComponent<ICovidCaseProps> = ({ color, increase, total, title }) => {
    const { classes } = useStyles();

    return (
        <Box className={classes.caseBox}>
            <Group spacing="xs">
                <ListIcon color={color} />
                <Text component="span" className={classes.subHeading}>
                    {title} cases
                </Text>
            </Group>
            <Group spacing="xs">
                <Text color={color} weight="bold" className={classes.number}>
                    {formatNum(total)}
                </Text>
                <Badge
                    radius="sm"
                    color="gray"
                    leftSection={<TiArrowSortedUp />}
                    className={classes.badge}
                >
                    {formatNum(increase)}
                </Badge>
            </Group>
        </Box>
    );
};

export default CovidCase;
