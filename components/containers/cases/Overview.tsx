import { Divider, Group, useMantineTheme } from "@mantine/core";
import { useCallback, useMemo, useState } from "react";
import type { FunctionComponent } from "react";

import { Daily, Grouping, Heading, OverviewSkeleton, Summary } from "components/common";
import overviewLineMenu, { IOverviewLineMenu } from "constant/overviewLineMenu";
import { useCases } from "context";
import { useDetailProvince, useStorage } from "hooks";
import formatTitle from "utils/formatTitle";

interface OverviewProps {}

const Overview: FunctionComponent<OverviewProps> = ({}) => {
    const [selectedMenu, setSelectedMenu] = useState<IOverviewLineMenu | undefined>({
        label: "Cases",
        value: "KASUS",
        color: "#EE5555",
    });
    const theme = useMantineTheme();
    const { onClearStorage } = useStorage();
    const {
        state: { exploredProvince },
        dispatch,
    } = useCases();
    const { isLoading, data } = useDetailProvince();

    const onSelectChange = useCallback((e: string | null) => {
        const willBeSelected = overviewLineMenu.find((menuItem) => menuItem.value === e);
        setSelectedMenu(willBeSelected);
    }, []);

    const onOverviewClose = useCallback(() => {
        dispatch({ type: "clearExploredProvince" });
        onClearStorage();
        return;
    }, [dispatch, onClearStorage]);

    const ageProgress = useMemo(
        () =>
            data?.data.kasus.jenis_kelamin.list_data?.map((data, idx) => ({
                value: Number(data.doc_count.toFixed(2)),
                label: `${idx === 0 ? "Male" : "female"} ${data.doc_count.toFixed(3)} %`,
                color: idx === 0 ? theme.colors.gray[2] : "#F8F9FA",
            })),
        [data?.data.kasus.jenis_kelamin.list_data, theme.colors.gray]
    );
    const overviewTitle = useMemo(() => formatTitle(data?.provinsi as string), [data?.provinsi]);

    return (
        <>
            {isLoading ? (
                <>
                    <OverviewSkeleton />
                </>
            ) : (
                <Group
                    direction="column"
                    grow
                    sx={{ padding: "14px 25px" }}
                    position="center"
                    spacing={4}
                >
                    {/* Overview Head */}
                    <Heading title={overviewTitle} onOverviewClose={onOverviewClose} />
                    <Divider mb="sm" />

                    {/* Summary */}
                    <Summary province={exploredProvince.province} />
                    <Divider my="sm" />

                    {/* Case grouping by line chart */}
                    <Daily
                        data={data}
                        onSelectChange={onSelectChange}
                        selectedMenu={selectedMenu}
                    />

                    {/* Case Grouping */}
                    <Grouping ageProgress={ageProgress} data={data} color={theme.colors.dark[8]} />
                </Group>
            )}
        </>
    );
};

export default Overview;
