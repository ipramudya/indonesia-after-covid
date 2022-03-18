import { memo } from "react";
import { Box, Text, Group, ActionIcon } from "@mantine/core";
import { FiX } from "react-icons/fi";
import type { FunctionComponent } from "react";

import { box, typography } from "lib/mantine/styles";

interface Heading {
    title: string;
    onOverviewClose: () => void;
}

const Heading: FunctionComponent<Heading> = ({ title, onOverviewClose }) => (
    <Box sx={box.titleAndMenu}>
        <Text component="span" sx={typography.textHead} style={{ fontSize: "14px" }}>
            {title}
        </Text>
        <Group spacing="xs">
            <ActionIcon variant="default" onClick={onOverviewClose}>
                <FiX />
            </ActionIcon>
        </Group>
    </Box>
);

export default memo(Heading);
