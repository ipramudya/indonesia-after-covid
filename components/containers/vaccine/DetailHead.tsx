import { ActionIcon, Group, Text, useMantineTheme } from "@mantine/core";
import { useVaccine } from "context";
import { typography } from "lib/mantine/styles";
import type { FunctionComponent } from "react";
import { FiX } from "react-icons/fi";

const DetailHead: FunctionComponent = () => {
    const theme = useMantineTheme();
    const {
        state: {
            detail: { data },
        },
        dispatch,
    } = useVaccine();

    return (
        <Group position="apart" noWrap>
            <Text sx={typography.textMain} style={{ fontWeight: 600, color: theme.colors.dark[7] }}>
                {data?.nama}
            </Text>
            <ActionIcon variant="default" onClick={() => dispatch({ type: "clearVaccineDetail" })}>
                <FiX />
            </ActionIcon>
        </Group>
    );
};

export default DetailHead;
