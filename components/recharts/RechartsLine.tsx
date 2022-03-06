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
    readonly chartData: object[];
    title: string | undefined;
    field: string | undefined;
    color: string | undefined;
}

const RechartsLine: FunctionComponent<RechartsLineProps> = ({
    chartData,
    title,
    field,
    color,
    tooltip,
}) => {
    const domainAxis = ["dataMin", "dataMax"];
    const fontStyle = {
        fontSize: "12px",
    };

    return (
        <ResponsiveContainer>
            <LineChart data={chartData}>
                <CartesianGrid vertical={false} />
                <Tooltip content={tooltip} />
                <XAxis
                    dataKey="key"
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
                    tickMargin={5}
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

export default RechartsLine;
