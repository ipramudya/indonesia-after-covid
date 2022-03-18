import { Paper, Center, Group, Button, Overlay, Text, useMantineTheme } from "@mantine/core";
import { button } from "lib/mantine/styles";
import type { FunctionComponent } from "react";
import { memo } from "react";

interface ChooseLocationOverlayProps {
    onSelectLocationFocus: () => any;
}

const ChooseLocationOverlay: FunctionComponent<ChooseLocationOverlayProps> = ({
    onSelectLocationFocus,
}) => {
    const theme = useMantineTheme();

    return (
        <>
            <Paper
                p="lg"
                sx={{
                    zIndex: 101,
                    position: "absolute",
                    maxWidth: "300px",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                }}
            >
                <Center component={Group} direction="column" spacing="lg">
                    <Text sx={{ textAlign: "center" }}>
                        Please select your location first before using the map service
                    </Text>
                    <Button
                        variant="default"
                        styles={button}
                        sx={(theme) => ({ color: theme.colors.dark[7] })}
                        onClick={onSelectLocationFocus}
                    >
                        Choose location
                    </Button>
                </Center>
            </Paper>
            <Overlay opacity={0.5} blur={4} color={theme.colors.gray[2]} zIndex={100} />
        </>
    );
};

export default memo(ChooseLocationOverlay);
