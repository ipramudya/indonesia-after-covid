import { Divider, Group, Text, Tooltip } from "@mantine/core";
import { markerTooltip, typography } from "lib/mantine/styles";
import type { FunctionComponent, ReactChild } from "react";
import { memo } from "react";

interface TooltipVaccineProps {
    name: string;
    status: string;
    class_rs: string;
    phone: string | null;
    children: ReactChild;
}

const TooltipVaccine: FunctionComponent<TooltipVaccineProps> = ({
    children,
    class_rs,
    name,
    phone,
    status,
}) => {
    return (
        <Tooltip
            styles={markerTooltip}
            label={
                <Group direction="column" spacing={3}>
                    <Text sx={typography.tooltip} style={{ fontWeight: "bold" }}>
                        {name}
                    </Text>
                    <Divider variant="dashed" sx={{ width: "100%" }} my={6} />
                    <Text sx={typography.tooltip}>Status: {status}</Text>
                    <Text sx={typography.tooltip}>Class: {class_rs || "-"}</Text>
                    <Text sx={typography.tooltip}>Phone: {phone || "-"}</Text>
                </Group>
            }
        >
            {children}
        </Tooltip>
    );
};

export default memo(TooltipVaccine);
