import { Box, Divider, Group, Select, SelectItem, Text } from "@mantine/core";
import DividerLabel from "components/common/DividerLabel";
import type { FunctionComponent, ReactNode } from "react";
import { useCallback, useMemo, useState } from "react";
import { BsCursor, BsSortDown } from "react-icons/bs";

import { ButtonItem, SelectItemWithIcon } from "components/ui/Items";
import { box, typography, select } from "lib/mantine/styles";
import browseProvinceMenu from "constant/browseProvinceMenu";
import { useCases } from "context";
import { useStorage } from "hooks";
import formatTitle from "utils/formatTitle";
import sort from "utils/sort";
import { ListDataEntity, Provinces } from "types/provinces-cases.types";
import { ProvinceBox } from "components/common";

interface ExploredProvinceProps {
    provinces: Provinces;
}

interface ISelectItemWithIcon {
    icon: ReactNode;
    label: string;
    value: "tca" | "tcd" | "afba" | "afbd";
    sortedby: "jumlah_kasus" | "key";
    order: "asc" | "dsc";
}

const ExploredProvince: FunctionComponent<ExploredProvinceProps> = ({ provinces }) => {
    const [sortedProvince, setSortedProvince] = useState(provinces.list_data);
    const [selectedMenu, setSelectedMenu] = useState<ISelectItemWithIcon>({
        icon: <BsSortDown />,
        value: "tca",
        sortedby: "jumlah_kasus",
        label: "Total case",
        order: "asc",
    });
    const { onSetStorage, onClearStorage } = useStorage();
    const {
        dispatch,
        state: { exploredProvince },
    } = useCases();

    const onSort = useCallback(
        (willBeSelected: ISelectItemWithIcon) => {
            const willBeSorted = sort(
                sortedProvince,
                willBeSelected.sortedby,
                willBeSelected.order
            );
            setSortedProvince(willBeSorted);
        },
        [sortedProvince]
    );

    const onSelectChange = useCallback(
        (target: string | null) => {
            const willBeSelected: ISelectItemWithIcon | any = browseProvinceMenu.find(
                (menuItem) => menuItem.value === target
            );
            setSelectedMenu(willBeSelected);
            onSort(willBeSelected);
        },
        [onSort]
    );

    const onProvinceChange = useCallback(
        (target: string | null) => {
            if (!target) {
                dispatch({ type: "clearExploredProvince" });
                onClearStorage();
                return;
            }

            const province = provinces.list_data?.find(
                (prov) => prov.key === target
            ) as ListDataEntity;
            dispatch({ type: "setExploredProvince", payload: province });
            onSetStorage({ exploredProvince: { isEmpty: false, province } });
            return;
        },

        [dispatch, onClearStorage, onSetStorage, provinces.list_data]
    );

    const selectData = useMemo(
        () =>
            sortedProvince?.map((province) => ({
                value: province.key,
                label: formatTitle(province.key),
                number: province.jumlah_kasus,
            })),
        [sortedProvince]
    );

    return (
        <Box sx={{ padding: "0 25px 0 20px" }}>
            <Box sx={box.titleAndMenu} mb="xl">
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
                    <ProvinceBox
                        onClick={onProvinceChange}
                        isSelected
                        provName={exploredProvince.province?.key as string}
                    >
                        <ButtonItem
                            label={exploredProvince.province?.key as string}
                            quantity={exploredProvince.province?.jumlah_kasus as number}
                            isSelected
                        />
                    </ProvinceBox>
                    <Divider
                        variant="dashed"
                        labelPosition="center"
                        my="xs"
                        label={<DividerLabel />}
                    />
                </>
            )}
            <Group direction="column">
                {sortedProvince
                    ?.filter((prov: ListDataEntity) =>
                        !exploredProvince.isEmpty
                            ? prov.key !== exploredProvince.province?.key
                            : prov
                    )
                    .map((prov: ListDataEntity) => (
                        <ProvinceBox key={prov.key} provName={prov.key} onClick={onProvinceChange}>
                            <ButtonItem label={prov.key} quantity={prov.jumlah_kasus} />
                        </ProvinceBox>
                    ))}
            </Group>
        </Box>
    );
};

export default ExploredProvince;
