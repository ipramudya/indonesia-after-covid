import { Box, Divider, Progress, Text, Tooltip } from "@mantine/core";
import { FunctionComponent } from "react";
import { BsInfoCircle } from "react-icons/bs";

import { RechartsBar } from "components/recharts";
import { SelectIcon } from "components/ui/Icons";
import { typography, tooltip } from "lib/mantine/styles";
import { DetailProvince } from "types/detailProv-cases.types";

interface GroupingOverviewProps {
    ageProgress:
        | {
              value: number;
              label: string;
              color: string;
          }[]
        | undefined;
    color?: string | undefined;
    data: DetailProvince | undefined;
}

const GroupingOverview: FunctionComponent<GroupingOverviewProps> = ({
    ageProgress,
    color,
    data,
}) => {
    return (
        <div>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}
            >
                <Text component="span" sx={typography.textMain}>
                    Case grouping
                </Text>
                <Tooltip
                    styles={tooltip}
                    label="Percentage is calculated based on total confirmed cases from each province"
                    wrapLines
                    width={200}
                    position="right"
                    placement="center"
                >
                    <SelectIcon icon={<BsInfoCircle />} />
                </Tooltip>
            </Box>
            {/* Gender Grouping - Progress bar */}
            <Divider variant="dashed" my="xs" label="by gender" />
            <Progress
                sections={ageProgress}
                size="xl"
                mb="xs"
                styles={{
                    root: { height: "30px" },
                    label: { fontWeight: 500, color: color },
                }}
            />
            {/* Age Grouping - Stick bar */}
            <Divider variant="dashed" my="xs" label="by age" />
            <Box sx={{ height: "200px" }}>
                <RechartsBar chartData={data?.data.kasus.kelompok_umur.list_data} />
            </Box>
        </div>
    );
};

export default GroupingOverview;
