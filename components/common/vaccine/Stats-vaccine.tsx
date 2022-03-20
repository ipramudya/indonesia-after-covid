import { Group, Text, useMantineTheme } from "@mantine/core";
import { typography } from "lib/mantine/styles";
import type { FunctionComponent } from "react";

interface StatsVaccineProps {
    label: string;
    isHighlight?: boolean;
    stats: string | undefined;
    noWrap?: boolean;
}

const StatsVaccine: FunctionComponent<StatsVaccineProps> = ({
    label,
    isHighlight = false,
    stats,
    noWrap = false,
}) => {
    const theme = useMantineTheme();
    return (
        <Group sx={{ width: "100%", alignItems: noWrap ? "start" : "" }} noWrap={noWrap}>
            <Text sx={typography.textTiny} component="span" style={{ minWidth: "55px" }}>
                {label}
            </Text>
            <Text
                sx={typography.textTiny}
                style={isHighlight ? { color: theme.colors.green[6], fontWeight: 600 } : {}}
            >
                {stats}
            </Text>
        </Group>
    );
};

export default StatsVaccine;
