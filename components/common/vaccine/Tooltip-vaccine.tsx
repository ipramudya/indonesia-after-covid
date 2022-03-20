import { Divider, Group, Text, Tooltip } from "@mantine/core";
import { markerTooltip, typography } from "lib/mantine/styles";
import type { FunctionComponent, ReactChild } from "react";
import { memo } from "react";

interface TooltipVaccineProps {
    name: string;
    status: string;
    phone: string | null;
    children: ReactChild;
}

const TooltipVaccine: FunctionComponent<TooltipVaccineProps> = ({
    children,
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
                    <Text sx={typography.tooltip}>Phone: {phone || "-"}</Text>
                </Group>
            }
        >
            {children}
        </Tooltip>
    );
};

export default memo(TooltipVaccine);
