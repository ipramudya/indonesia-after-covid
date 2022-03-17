import { useMantineTheme, Group, Text } from "@mantine/core";
import { box, typography } from "lib/mantine/styles";
import moment from "moment";
import numeral from "numeral";
import { FunctionComponent, useCallback } from "react";
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
import { Harian } from "types/vaccine.types";
import { BsSquareFill } from "react-icons/bs";
import formatNum from "lib/numeral/formatNum";

interface MultilineRechartsProps {
    readonly daily: Harian[];
}

const MultilineRecharts: FunctionComponent<MultilineRechartsProps> = ({ daily }) => {
    const fontStyle = {
        fontSize: "10px",
    };

    console.log(daily[0]);

    const onFormatYAxis = useCallback((num) => numeral(num).format("0.0a"), []);
    const onFormatXAxis = useCallback((day) => moment(day).format("D MMM"), []);

    return (
        <ResponsiveContainer>
            <LineChart margin={{ top: 0, left: 0, right: 0, bottom: 0 }} data={daily}>
                <CartesianGrid vertical={false} />
                <Tooltip content={CustomTooltip} />
                <XAxis
                    dataKey="key"
                    type="number"
                    tickFormatter={onFormatXAxis}
                    axisLine={false}
                    tickSize={0}
                    tickMargin={15}
                    domain={["dataMin", "dataMax"]}
                    dy={10}
                    style={fontStyle}
                    scale="linear"
                />
                <YAxis
                    type="number"
                    tickFormatter={onFormatYAxis}
                    tickSize={0}
                    tickMargin={3}
                    axisLine={false}
                    width={35}
                    interval="preserveStartEnd"
                    style={fontStyle}
                    scale="linear"
                />
                <Legend wrapperStyle={{ paddingTop: 15 }} />
                <Line name="First dose" dot={false} dataKey="jumlah_vaksinasi_1" stroke="#70c88e" />
                <Line
                    name="Second dose"
                    dot={false}
                    dataKey="jumlah_vaksinasi_2"
                    stroke="#004643"
                />
            </LineChart>
        </ResponsiveContainer>
    );
};

const CustomTooltip = (props: TooltipProps<string, string>) => {
    const { active, payload, label } = props;
    const theme = useMantineTheme();

    if (active && payload && payload.length) {
        return (
            <Group spacing="md" direction="column" sx={box.tooltipWrapper}>
                <Text
                    sx={typography.tooltip}
                    style={{ fontWeight: "bold", color: theme.colors.dark[7] }}
                >
                    {moment(label).format("D MMM YYYY")}
                </Text>
                <div>
                    <Group spacing={12} mb={6}>
                        <BsSquareFill style={{ color: payload[0].color }} size={10} />
                        <Group direction="column" spacing={0}>
                            <Text sx={typography.textTiny}>
                                First dose: {formatNum(payload[0].value as unknown as number)}
                            </Text>
                            <Text sx={typography.textTiny}>
                                Accumulation:{" "}
                                {formatNum(payload[0].payload.jumlah_jumlah_vaksinasi_1_kum)}
                            </Text>
                        </Group>
                    </Group>
                    <Group spacing={12}>
                        <BsSquareFill style={{ color: payload[1].color }} size={10} />
                        <Group direction="column" spacing={0}>
                            <Text sx={typography.textTiny}>
                                First dose: {formatNum(payload[1].value as unknown as number)}
                            </Text>
                            <Text sx={typography.textTiny}>
                                Accumulation:{" "}
                                {formatNum(payload[1].payload.jumlah_jumlah_vaksinasi_2_kum)}
                            </Text>
                        </Group>
                    </Group>
                </div>
            </Group>
        );
    }

    return null;
};

export default MultilineRecharts;
