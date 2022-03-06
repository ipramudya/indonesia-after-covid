import { FunctionComponent, useState } from "react";
import { Box, Select, Text } from "@mantine/core";
import { IoIosArrowDown } from "react-icons/io";

import dailySpreadMenu from "constant/dailySpreadMenu";
import { box, typography } from "lib/mantine/styles";
import select from "lib/mantine/styles/select";
import { ISelectItem } from "types";
import RechartsLine from "components/recharts/RechartsLine";
import { useCases } from "context";
import LineTooltip from "components/recharts/Tooltips";

const DailySpread: FunctionComponent = () => {
    const [selectedMenu, setSelectedMenu] = useState<ISelectItem | undefined>({
        label: "New cases",
        value: "jumlah_positif",
        color: "#EE5555",
    });
    const {
        state: { cases },
    } = useCases();

    const handleSelectChange = (e: string | null) => {
        const willBeSelected = dailySpreadMenu.find((menuItem) => menuItem.value === e);
        setSelectedMenu(willBeSelected);
    };

    console.log(cases?.update);

    return (
        <Box>
            <Box sx={box.titleAndMenu}>
                <Text component="span" sx={typography.textHead}>
                    Daily spread case
                </Text>
                <Select
                    data={dailySpreadMenu}
                    onChange={handleSelectChange}
                    placeholder="Filter cases"
                    value={selectedMenu?.value}
                    rightSection={<IoIosArrowDown />}
                    styles={select}
                />
            </Box>
            <Box sx={{ height: "270px" }}>
                <RechartsLine
                    chartData={cases?.update?.harian}
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
