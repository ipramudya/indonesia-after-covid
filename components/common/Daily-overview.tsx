import type { FunctionComponent } from "react";
import { Box, Divider, Select, Text } from "@mantine/core";
import { BsThreeDotsVertical } from "react-icons/bs";

import { RechartsLine } from "components/recharts";
import overviewLineMenu, { IOverviewLineMenu } from "constant/overviewLineMenu";
import { box, typography, selectSmall } from "lib/mantine/styles";
import { DetailProvince } from "types/detailProv-cases.types";

interface DailyOverviewProps {
    onSelectChange: (e: string | null) => void;
    selectedMenu: IOverviewLineMenu | undefined;
    data: DetailProvince | undefined;
}

const DailyOverview: FunctionComponent<DailyOverviewProps> = ({
    onSelectChange,
    selectedMenu,
    data,
}) => {
    return (
        <div>
            <Box sx={box.titleAndMenu}>
                <Text component="span" sx={typography.textMain}>
                    Daily spread
                </Text>
                <Select
                    data={overviewLineMenu}
                    onChange={onSelectChange}
                    value={selectedMenu?.value}
                    rightSection={<BsThreeDotsVertical />}
                    styles={selectSmall}
                    size="xs"
                />
            </Box>
            <Box sx={{ height: "200px" }}>
                <RechartsLine
                    chartData={data?.list_perkembangan}
                    title={selectedMenu?.label}
                    field={selectedMenu?.value}
                    color={selectedMenu?.color}
                />
            </Box>
            <Divider my="sm" />
        </div>
    );
};

export default DailyOverview;
