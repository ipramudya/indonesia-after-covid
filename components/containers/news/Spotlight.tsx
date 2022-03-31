import { Box, Group, ScrollArea, Text } from "@mantine/core";
import { typography } from "lib/mantine/styles";
import type { FunctionComponent } from "react";

interface SpotlightProps {}

const Spotlight: FunctionComponent<SpotlightProps> = ({}) => {
    return (
        <Group sx={{ width: "50%" }} px="2rem" spacing={12} direction="column">
            <Text sx={typography.textHead} style={{ fontSize: "1.3rem" }} component="text">
                Spotlight
            </Text>
            <Box component={ScrollArea}>
                <Group direction="column">{/* card item */}</Group>
            </Box>
        </Group>
    );
};

export default Spotlight;
