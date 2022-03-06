import { FunctionComponent, useState } from "react";
import { Box, Select, Text } from "@mantine/core";
import { SelectItemWithIcon } from "components/common/SelectItem";
import { TiArrowSortedDown } from "react-icons/ti";

import dailySpreadMenu from "constant/dailySpreadMenu";
import { box, typography } from "lib/mantine/styles";
import select from "lib/mantine/styles/select";
import { ISelectItemWithIcon } from "types";

const DailySpread: FunctionComponent = () => {
    const [selectedMenu, setSelectedMenu] = useState<ISelectItemWithIcon | undefined>({
        icon: <TiArrowSortedDown />,
        label: "",
        value: "",
    });

    const handleSelectChange = (e: string | null) => {
        const willBeSelected: ISelectItemWithIcon | undefined = dailySpreadMenu.find(
            (menuItem) => menuItem.value === e
        );
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
                    onChange={handleSelectChange}
                    placeholder="Sort the case"
                    value={selectedMenu?.value}
                    itemComponent={SelectItemWithIcon}
                    rightSection={selectedMenu?.icon}
                    styles={select}
                />
            </Box>
        </Box>
    );
};

export default DailySpread;
