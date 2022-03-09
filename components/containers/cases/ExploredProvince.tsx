import { Box, Button, Divider, Group, Select, SelectItem, Text } from "@mantine/core";
import { FunctionComponent, ReactNode, useState } from "react";
import { BsCursor, BsSortDown } from "react-icons/bs";

import DividerLabel from "components/common/DividerLabel";
import { ButtonItem, SelectItemWithIcon } from "components/common/Items";
import browseProvinceMenu from "constant/browseProvinceMenu";
import { box, typography } from "lib/mantine/styles";
import { button, selectedButton } from "lib/mantine/styles/button";
import select from "lib/mantine/styles/select";
import { ListDataEntity, Provinces } from "types/provinces.types";
import formatTitle from "utils/formatTitle";
import sort from "utils/sort";
import { useCases } from "context";
import useStorage from "hooks/useStorage";

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
    const { dispatch, state } = useCases();
    const { exploredProvince } = state;
    const { onSetStorage, onClearStorage } = useStorage();

    const onSort = (willBeSelected: ISelectItemWithIcon) => {
        const willBeSorted = sort(sortedProvince, willBeSelected.sortedBy, willBeSelected.order);
        setSortedProvince(willBeSorted);
        return;
    };

    const onSelectChange = (target: string | null) => {
        const willBeSelected: ISelectItemWithIcon | any = browseProvinceMenu.find(
            (menuItem) => menuItem.value === target
        );
        setSelectedMenu(willBeSelected);
        onSort(willBeSelected);
        return;
    };

    const onProvinceChange = (target: string | null) => {
        if (!target) {
            dispatch({ type: "clearExploredProvince" });
            onClearStorage();
            return;
        }

        const province = provinces.list_data?.find((prov) => prov.key === target) as ListDataEntity;
        dispatch({ type: "setExploredProvince", payload: province });
        onSetStorage({ exploredProvince: { isEmpty: false, province } });
        return;
    };

    const selectData = sortedProvince?.map((province) => ({
        value: province.key,
        label: formatTitle(province.key),
        number: province.jumlah_kasus,
    }));

    return (
        <Box sx={{ padding: "0 25px 0 20px" }}>
            <Box sx={box.titleAndMenu}>
                <Text component="span" sx={typography.textHead}>
                    Explore province
                </Text>
                <Select
                    data={browseProvinceMenu}
                    onChange={onSelectChange}
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
                onChange={onProvinceChange}
                mb="sm"
            />
            {!exploredProvince.isEmpty && (
                <>
                    <Button
                        variant="outline"
                        color="gray"
                        fullWidth
                        styles={selectedButton}
                        onClick={() => onProvinceChange(null)}
                    >
                        <ButtonItem
                            label={exploredProvince.province?.key}
                            quantity={exploredProvince.province?.jumlah_kasus}
                            isSelected
                        />
                    </Button>
                    <Divider
                        variant="dashed"
                        labelPosition="center"
                        my="xs"
                        label={<DividerLabel />}
                    />
                </>
            )}
            <Group direction="column">
                {provinces.list_data
                    ?.filter((prov) =>
                        !exploredProvince.isEmpty
                            ? prov.key !== exploredProvince.province?.key
                            : prov
                    )
                    .map((prov) => (
                        <Button
                            variant="outline"
                            key={prov.key}
                            color="gray"
                            fullWidth
                            styles={button}
                            onClick={() => onProvinceChange(prov.key)}
                        >
                            <ButtonItem label={prov.key} quantity={prov.jumlah_kasus} />
                        </Button>
                    ))}
            </Group>
        </Box>
    );
};

export default ExploredProvince;
