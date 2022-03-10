import {
    ActionIcon,
    Box,
    Divider,
    Group,
    Progress,
    Select,
    Text,
    Tooltip,
    useMantineTheme,
} from "@mantine/core";
import CovidCase from "components/common/CovidCase";
import { SelectIcon } from "components/common/Icons";
import OverviewSkeleton from "components/common/OverviewSkeleton";
import { RechartsBar, RechartsLine } from "components/recharts";
import overviewLineMenu, { IOverviewLineMenu } from "constant/overviewLineMenu";
import { useCases } from "context";
import useDetailProvince from "hooks/useDetailProvince";
import useStorage from "hooks/useStorage";
import { box, typography } from "lib/mantine/styles";
import { selectSmall } from "lib/mantine/styles/select";
import tooltip from "lib/mantine/styles/tooltip";
import { FunctionComponent, useState } from "react";
import { BsInfoCircle, BsThreeDotsVertical } from "react-icons/bs";
import { FiX } from "react-icons/fi";
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
    const { state, dispatch } = useCases();
    const { exploredProvince } = state;
    const { isLoading, data } = useDetailProvince(exploredProvince.province?.key);

    const onSelectChange = (e: string | null) => {
        const willBeSelected = overviewLineMenu.find((menuItem) => menuItem.value === e);
        setSelectedMenu(willBeSelected);
    };

    const onOverviewClose = () => {
        dispatch({ type: "clearExploredProvince" });
        onClearStorage();
        return;
    };

    const ageProgress = data?.data.kasus.jenis_kelamin.list_data?.map((data, idx) => ({
        value: Number(data.doc_count.toFixed(2)),
        label: `${idx === 0 ? "Male" : "female"} ${data.doc_count.toFixed(3)} %`,
        color: idx === 0 ? theme.colors.gray[2] : "#F8F9FA",
    }));

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
                    <div>
                        <Box sx={box.titleAndMenu}>
                            <Text
                                component="span"
                                sx={typography.textHead}
                                style={{ fontSize: "14px" }}
                            >
                                {formatTitle(data?.provinsi as string)}
                            </Text>
                            <Group spacing="xs">
                                <ActionIcon variant="default" onClick={onOverviewClose}>
                                    <FiX />
                                </ActionIcon>
                            </Group>
                        </Box>
                        <Divider mb="sm" />
                    </div>

                    {/* Summary */}
                    <div>
                        <CovidCase
                            color="#ee5555"
                            title="Confirmed case"
                            increase={exploredProvince.province?.penambahan?.positif}
                            total={exploredProvince.province?.jumlah_kasus}
                            type="tiny"
                        />
                        <CovidCase
                            color="green"
                            title="Healed"
                            increase={exploredProvince.province?.penambahan?.sembuh}
                            total={exploredProvince.province?.jumlah_sembuh}
                            type="tiny"
                        />
                        <CovidCase
                            color="dark"
                            title="Fatal"
                            increase={exploredProvince.province?.penambahan?.meninggal}
                            total={exploredProvince.province?.jumlah_meninggal}
                            type="tiny"
                        />
                        <Divider my="sm" />
                    </div>

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
