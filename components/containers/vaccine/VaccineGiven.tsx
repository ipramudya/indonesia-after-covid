import { Group, Text, useMantineTheme } from "@mantine/core";
import { Distributed } from "components/common";
import { useVaccine } from "context";
import { typography } from "lib/mantine/styles";
import { FunctionComponent, useCallback } from "react";

type AccumulationType =
    | "divaksin"
    | "divaksin_1"
    | "divaksin_2"
    | "batal_vaksin"
    | "pending_vaksin";

const VaccineGiven: FunctionComponent = () => {
    const theme = useMantineTheme();
    const {
        state: {
            detail: { data },
        },
    } = useVaccine();

    const accumulatingData = useCallback(
        (type: AccumulationType) => {
            return Number(data?.detail.reduce((accumulated, item) => accumulated + item[type], 0));
        },
        [data?.detail]
    );

    return (
        <Group direction="column" spacing={6} pr={5}>
            <Text
                sx={typography.textMain}
                style={{ fontWeight: 600, color: theme.colors.dark[7] }}
                mb={6}
            >
                Vaccine given
            </Text>

            <Distributed
                label="Total vaccinated people"
                quantity={accumulatingData("divaksin")}
                fullWidth
            />
            <Distributed
                label="Total vaccination failed"
                quantity={accumulatingData("batal_vaksin")}
                fullWidth
            />
            <Distributed
                label="Total vaccination pending"
                quantity={accumulatingData("pending_vaksin")}
                fullWidth
            />
        </Group>
    );
};

export default VaccineGiven;
