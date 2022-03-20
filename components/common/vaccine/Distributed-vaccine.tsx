import { Group, Text } from "@mantine/core";
import { typography } from "lib/mantine/styles";
import formatNum from "lib/numeral/formatNum";
import { FunctionComponent, useMemo } from "react";

interface DistributedProps {
    label: string;
    quantity: number | string;

    fullWidth?: boolean;
}

const Distributed: FunctionComponent<DistributedProps> = ({
    label,
    quantity,

    fullWidth = false,
}) => {
    const conditionallyQuantity = useMemo(() => {
        if (quantity > 0) {
            if (quantity === 1) {
                return "1 person";
            } else {
                return `${formatNum(Number(quantity))} people`;
            }
        }
        return "-";
    }, [quantity]);

    return (
        <Group position="apart" sx={fullWidth ? { width: "100%" } : {}}>
            <Text sx={typography.textTiny}>{label}</Text>
            <Text sx={typography.textTiny}>{conditionallyQuantity}</Text>
        </Group>
    );
};

export default Distributed;
