import { FunctionComponent, useState } from "react";
import { Box, Select, Text } from "@mantine/core";
import { IoIosArrowDown } from "react-icons/io";

import dailySpreadMenu from "constant/dailySpreadMenu";
import { box, typography } from "lib/mantine/styles";
import select from "lib/mantine/styles/select";
import { ISelectItem } from "types";
import RechartsLine from "components/recharts/RechartsLine";
import LineTooltip from "components/recharts/Tooltips";
import { Update } from "types/update.types";

interface DailySpreadProps {
    update: Update;
}

const DailySpread: FunctionComponent<DailySpreadProps> = ({ update }) => {
    const [selectedMenu, setSelectedMenu] = useState<ISelectItem | undefined>({
        label: "New cases",
        value: "jumlah_positif",
        color: "#EE5555",
    });

    const onSelectChange = (e: string | null) => {
        const willBeSelected = dailySpreadMenu.find((menuItem) => menuItem.value === e);
        setSelectedMenu(willBeSelected);
    };

    return (
        <Box>
            <Box sx={box.titleAndMenu}>
                <Text component="span" sx={typography.textHead}>
                    Daily spread case
                </Text>
                <Select
                    data={dailySpreadMenu}
                    onChange={onSelectChange}
                    placeholder="Filter cases"
                    value={selectedMenu?.value}
                    rightSection={<IoIosArrowDown />}
                    styles={select}
                />
            </Box>
            <Box sx={{ height: "230px" }}>
                <RechartsLine
                    chartData={update.harian}
                    title={selectedMenu?.label}
                    field={selectedMenu?.value}
                    color={selectedMenu?.color}
                    tooltip={LineTooltip}
                />
            </Box>
        </Box>
    );
};

export default DailySpread;
