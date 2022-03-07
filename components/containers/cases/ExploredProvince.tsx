import { Box, Button, Divider, Group, Select, SelectItem, Text } from "@mantine/core";
import { FunctionComponent, ReactNode, useState } from "react";
import { BsCursor, BsSortDown } from "react-icons/bs";

import DividerLabel from "components/common/DividerLabel";
import { ButtonItem, SelectItemWithIcon } from "components/common/Items";
import browseProvinceMenu from "constant/browseProvinceMenu";
import { box, typography } from "lib/mantine/styles";
import button from "lib/mantine/styles/button";
import select from "lib/mantine/styles/select";
import { Provinces } from "types/provinces.types";
import formatTitle from "utils/formatTitle";
import sort from "utils/sort";

interface ExploredProvinceProps {
    provinces: Provinces;
}

interface ISelectItemWithIcon {
    icon: ReactNode;
    label: string;
    value: "tca" | "tcd" | "afba" | "afbd";
    sortedBy: "jumlah_kasus" | "key";
    order: "asc" | "dsc";
}

const ExploredProvince: FunctionComponent<ExploredProvinceProps> = ({ provinces }) => {
    const [sortedProvince, setSortedProvince] = useState(provinces.list_data);
    const [selectedMenu, setSelectedMenu] = useState<ISelectItemWithIcon>({
        icon: <BsSortDown />,
        value: "tca",
        sortedBy: "jumlah_kasus",
        label: "Total case",
        order: "asc",
    });

    const handleSort = (willBeSelected: ISelectItemWithIcon) => {
        const willBeSorted = sort(sortedProvince, willBeSelected.sortedBy, willBeSelected.order);
        setSortedProvince(willBeSorted);
    };

    const handleSelectChange = (e: string | null) => {
        const willBeSelected: ISelectItemWithIcon | any = browseProvinceMenu.find(
            (menuItem) => menuItem.value === e
        );
        setSelectedMenu(willBeSelected);
        handleSort(willBeSelected);
    };

    const selectData = sortedProvince?.map((province) => ({
        value: province.key,
        label: formatTitle(province.key),
        number: province.jumlah_kasus,
    }));

    return (
        <Box sx={{ padding: "0 30px 0 20px" }}>
            <Box sx={box.titleAndMenu}>
                <Text component="span" sx={typography.textHead}>
                    Explore province
                </Text>
                <Select
                    data={browseProvinceMenu}
                    onChange={handleSelectChange}
                    placeholder="Sort the case"
                    value={selectedMenu?.value}
                    itemComponent={SelectItemWithIcon}
                    rightSection={selectedMenu?.icon}
                    styles={select}
                />
            </Box>
            <Select
                data={selectData as SelectItem[]}
                searchable
                clearable
                nothingFound="Province does not exist"
                placeholder="Find and select a specific province"
                icon={<BsCursor />}
                maxDropdownHeight={150}
            />
            <Divider variant="dashed" labelPosition="center" my="xs" label={<DividerLabel />} />
            <Group direction="column">
                {provinces.list_data?.map((prov) => (
                    <Button variant="outline" key={prov.key} color="gray" fullWidth styles={button}>
                        <ButtonItem label={prov.key} quantity={prov.jumlah_kasus} />
                    </Button>
                ))}
            </Group>
        </Box>
    );
};

export default ExploredProvince;
