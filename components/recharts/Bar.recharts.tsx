import { Group, Text, useMantineTheme } from "@mantine/core";
import { box, typography } from "lib/mantine/styles";
import formatNum from "lib/numeral/formatNum";
import { FunctionComponent, useCallback } from "react";
import {
    Bar,
    BarChart,
    CartesianGrid,
    LabelList,
    ResponsiveContainer,
    Tooltip,
    TooltipProps,
    XAxis,
    YAxis,
} from "recharts";
import { ContentType } from "recharts/types/component/Label";
import { ListDataEntity1 } from "types/detailProv-cases.types";

interface RechartsLineProps {
    readonly chartData: ListDataEntity1[] | undefined | null;
}

const RechartsBar: FunctionComponent<RechartsLineProps> = ({ chartData }) => {
    const theme = useMantineTheme();
    const fontStyle = {
        fontSize: "10px",
    };

    const onFormatYAxis = useCallback((value) => formatNum(value, "percentage"), []);
    const onFormatLabel = useCallback((value: number) => `${value.toFixed(0)}%`, []);

    return (
        <ResponsiveContainer>
            <BarChart
                data={chartData as ListDataEntity1[]}
                margin={{ top: 10, left: 0, right: 0, bottom: 0 }}
            >
                <Tooltip
                    content={CustomTooltip}
                    cursor={{
                        stroke: "transparent",
                        fill: theme.colors.gray[4],
                    }}
                />
                <CartesianGrid vertical={false} strokeWidth={0.5} />
                <XAxis
                    dataKey="key"
                    tickSize={0}
                    tickMargin={15}
                    interval={0}
                    style={fontStyle}
                    dx={-3}
                    axisLine={false}
                ></XAxis>
                <YAxis
                    type="number"
                    tickFormatter={onFormatYAxis}
                    tickSize={0}
                    tickMargin={5}
                    width={35}
                    interval="preserveStart"
                    style={fontStyle}
                    axisLine={false}
                />
                <Bar
                    name="Total cases"
                    fill="#E9ECEF"
                    dataKey="doc_count"
                    barSize={20}
                    isAnimationActive={false}
                >
                    <LabelList
                        dataKey="doc_count"
                        position="insideTop"
                        content={CustomBarLabel}
                        formatter={onFormatLabel}
                    />
                </Bar>
            </BarChart>
        </ResponsiveContainer>
    );
};

const CustomBarLabel: ContentType = (props) => {
    const theme = useMantineTheme();
    const { x, y, width, value }: any = props;

    return (
        <g>
            <text
                x={x + width / 2}
                y={y - 5}
                fill={theme.colors.dark[7]}
                fontSize="10px"
                textAnchor="middle"
                dominantBaseline="middle"
            >
                {`${value.toFixed(1)}%`}
            </text>
        </g>
    );
};

const CustomTooltip = (props: TooltipProps<string, string>) => {
    const { active, payload, label } = props;
    const theme = useMantineTheme();

    if (active && payload && payload.length) {
        return (
            <Group spacing="md" direction="column" sx={box.tooltipWrapper}>
                <Text
                    sx={typography.textTiny}
                    weight="bold"
                    color={theme.colors.dark[7]}
                >{`Age: ${label}`}</Text>
                <Text sx={typography.textTiny} color={theme.colors.dark[7]}>{`Percentage: ${Number(
                    payload[0].value
                ).toFixed(4)}%`}</Text>
            </Group>
        );
    }

    return null;
};

export default RechartsBar;
