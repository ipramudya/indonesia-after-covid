import { Box, Text } from "@mantine/core";
import MultilineRecharts from "components/recharts/Multiline.recharts";
import { typography } from "lib/mantine/styles";
import type { FunctionComponent } from "react";
import { Harian } from "types/vaccine.types";

interface DailyDoseProps {
    daily: Harian[];
}

const DailyDose: FunctionComponent<DailyDoseProps> = ({ daily }) => {
    return (
        <div>
            <Text sx={typography.textHead} mb="sm">
                Daily dose given
            </Text>
            <Box sx={{ height: "250px" }}>
                <MultilineRecharts daily={daily} />
            </Box>
        </div>
    );
};

export default DailyDose;
