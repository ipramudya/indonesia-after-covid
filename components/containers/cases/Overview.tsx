import {
    Box,
    Divider,
    Group,
    Progress,
    Select,
    Text,
    Tooltip,
    useMantineTheme,
} from "@mantine/core";
import { useCallback, useMemo, useState } from "react";
import type { FunctionComponent } from "react";
import { BsInfoCircle, BsThreeDotsVertical } from "react-icons/bs";

import { Heading, Summary, Skeleton as OverviewSkeleton } from "components/common";
import { SelectIcon } from "components/common/Icons";
import { RechartsBar, RechartsLine } from "components/recharts";
import overviewLineMenu, { IOverviewLineMenu } from "constant/overviewLineMenu";
import { useCases } from "context";
import useDetailProvince from "hooks/useDetailProvince";
import useStorage from "hooks/useStorage";
import { box, typography } from "lib/mantine/styles";
import { selectSmall } from "lib/mantine/styles/select";
import tooltip from "lib/mantine/styles/tooltip";
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
    const { isLoading, data } = useDetailProvince(exploredProvince.province?.key);

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
                    spacing="xs"
                >
                    {/* Overview Head */}
                    <Heading title={overviewTitle} onOverviewClose={onOverviewClose} />
                    <Divider mb="sm" />

                    {/* Summary */}
                    <Summary province={exploredProvince.province} />
                    <Divider my="sm" />

                    {/* Case grouping by line chart */}
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

                    {/* Case Grouping */}
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
                                label: { fontWeight: 500, color: theme.colors.dark[8] },
                            }}
                        />
                        {/* Age Grouping - Stick bar */}
                        <Divider variant="dashed" my="xs" label="by age" />
                        <Box sx={{ height: "200px" }}>
                            <RechartsBar chartData={data?.data.kasus.kelompok_umur.list_data} />
                        </Box>
                    </div>
                </Group>
            )}
        </>
    );
};

export default Overview;
