import { Box, Divider, Group, Text, useMantineTheme } from "@mantine/core";
import { Distributed } from "components/common";
import { useVaccine } from "context";
import { typography } from "lib/mantine/styles";
import type { FunctionComponent } from "react";

const staticData = ["Public officer", "Health workers", "Elderly people/Lansia", "Batch three"];

const VaccineDetailed: FunctionComponent = () => {
    const theme = useMantineTheme();
    const {
        state: {
            detail: { data },
        },
    } = useVaccine();

    console.log(data);

    return (
        <Box pr={20}>
            {data?.detail.map((item, idx) => (
                <>
                    <Group direction="column" spacing={6} key={item.id}>
                        <Text
                            sx={typography.textTiny}
                            style={{ fontWeight: 600, color: theme.colors.green[6] }}
                        >
                            {staticData[idx]}
                        </Text>

                        {/* Total vaccinated */}
                        <Box pl={12} sx={{ width: "100%" }}>
                            <Distributed
                                label="Vaccinated people"
                                quantity={item.divaksin}
                                fullWidth
                            />
                            <Group spacing={0} noWrap>
                                <Divider mx="xs" orientation="vertical" sx={{ height: "40px" }} />
                                <Box sx={{ width: "100%" }}>
                                    <Distributed label="First dose" quantity={item.divaksin_1} />
                                    <Distributed label="Second dose" quantity={item.divaksin_2} />
                                </Box>
                            </Group>
                        </Box>

                        {/* Canceled */}
                        <Box pl={12} sx={{ width: "100%" }}>
                            <Distributed
                                label="Vaccination failed"
                                quantity={item.batal_vaksin}
                                fullWidth
                            />
                            {item.batal_vaksin > 0 ? (
                                <Group spacing={0} noWrap>
                                    <Divider
                                        mx="xs"
                                        orientation="vertical"
                                        sx={{ height: "40px" }}
                                    />
                                    <Box sx={{ width: "100%" }}>
                                        <Distributed
                                            label="First batch"
                                            quantity={item.batal_vaksin_1}
                                        />
                                        <Distributed
                                            label="Second batch"
                                            quantity={item.batal_vaksin_2}
                                        />
                                    </Box>
                                </Group>
                            ) : null}
                        </Box>

                        {/* Pending */}
                        <Box pl={12} sx={{ width: "100%" }}>
                            <Distributed
                                label="Vaccination pending"
                                quantity={item.pending_vaksin}
                                fullWidth
                            />
                            {item.pending_vaksin > 0 ? (
                                <Group spacing={0} noWrap>
                                    <Divider
                                        mx="xs"
                                        orientation="vertical"
                                        sx={{ height: "40px" }}
                                    />
                                    <Box sx={{ width: "100%" }}>
                                        <Distributed
                                            label="First batch"
                                            quantity={item.pending_vaksin_1}
                                        />
                                        <Distributed
                                            label="Second batch"
                                            quantity={item.pending_vaksin_2}
                                        />
                                    </Box>
                                </Group>
                            ) : null}
                        </Box>
                    </Group>
                    <Divider variant="dashed" my={12} />
                </>
            ))}
        </Box>
    );
};

export default VaccineDetailed;
