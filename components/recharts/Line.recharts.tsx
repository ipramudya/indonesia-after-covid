import { Group, Text } from "@mantine/core";
import { box, typography } from "lib/mantine/styles";
import formatNum from "lib/numeral/formatNum";
import moment from "moment";
import { FunctionComponent } from "react";
import {
    CartesianGrid,
    Legend,
    Line,
    LineChart,
    ResponsiveContainer,
    Tooltip,
    TooltipProps,
    XAxis,
    YAxis,
} from "recharts";
import { ValueType, NameType } from "recharts/types/component/DefaultTooltipContent";

interface RechartsLineProps {
    tooltip?: FunctionComponent<TooltipProps<ValueType, NameType>> | undefined;
    readonly chartData: any[] | undefined | null;
    title: string | undefined;
    field: string | undefined;
    color: string | undefined;
}

const RechartsLine: FunctionComponent<RechartsLineProps> = ({ chartData, title, field, color }) => {
    const domainAxis = ["dataMin", "dataMax"];
    const fontStyle = {
        fontSize: "12px",
    };

    return (
        <ResponsiveContainer>
            <LineChart data={chartData as any[]} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
                <CartesianGrid vertical={false} />
                <Tooltip content={CustomTooltip} />
                <XAxis
                    dataKey="tanggal"
                    type="number"
                    tickFormatter={(day) => moment(day).format("D MMM")}
                    axisLine={false}
                    tickSize={0}
                    tickMargin={15}
                    domain={domainAxis}
                    dy={10}
                    style={fontStyle}
                    scale="linear"
                />
                <YAxis
                    type="number"
                    tickFormatter={(value) => formatNum(value, "autoformat")}
                    tickSize={0}
                    tickMargin={10}
                    axisLine={false}
                    width={35}
                    interval="preserveStart"
                    style={fontStyle}
                    scale="linear"
                    tickCount={4}
                />
                <Legend wrapperStyle={{ paddingTop: 15 }} />
                <Line name={title} type="natural" dot={false} dataKey={field} stroke={color} />
            </LineChart>
        </ResponsiveContainer>
    );
};

const CustomTooltip = (props: TooltipProps<string, string>) => {
    const { active, payload, label } = props;

    if (active && payload && payload.length) {
        return (
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
                            payload[0].payload[`AKUMULASI_${payload[0].dataKey}`]
                        )}`}
                    </Text>
                </Group>
            </Group>
        );
    }

    return null;
};

export default RechartsLine;
