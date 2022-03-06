import { Group, Text } from "@mantine/core";
import { box, typography } from "lib/mantine/styles";
import formatNum from "lib/numeral/formatNum";
import moment from "moment";
import { FunctionComponent } from "react";
import { TooltipProps } from "recharts";
import { ValueType, NameType } from "recharts/types/component/DefaultTooltipContent";

const LineTooltip: FunctionComponent<TooltipProps<ValueType, NameType>> = ({
    active,
    payload,
    label,
}) => {
    return (
        <>
            {active && payload && payload.length ? (
                <Group spacing="md" direction="column" sx={box.tooltipWrapper}>
                    <Text component="span" sx={typography.tooltip} weight="bold">
                        {moment(label).format("D MMM YYYY")}
                    </Text>
                    <Group spacing="xs" direction="column">
                        <Text component="span" sx={typography.tooltip}>{`${
                            payload?.[0].name
                        }: ${formatNum(Number(payload[0].value))}`}</Text>
                        <Text component="span" sx={typography.tooltip}>
                            {`Accumulation: ${formatNum(
                                payload[0].payload[`${payload[0].dataKey}_kum`]
                            )}`}
                        </Text>
                    </Group>
                </Group>
            ) : null}
        </>
    );
};

export default LineTooltip;
