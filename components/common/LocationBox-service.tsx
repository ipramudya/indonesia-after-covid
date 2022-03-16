import { Button, Box, Group, Text } from "@mantine/core";
import { useVaccine } from "context";
import { typography } from "lib/mantine/styles";
import type { FunctionComponent } from "react";
import { memo } from "react";
import { FiX } from "react-icons/fi";
import { IoLocate } from "react-icons/io5";
import formatTitle from "utils/formatTitle";

interface LocationBoxServiceProps {
    onCLoseLocationBox: () => void;
}

const LocationBoxService: FunctionComponent<LocationBoxServiceProps> = ({ onCLoseLocationBox }) => {
    const {
        state: { selectedLocation },
    } = useVaccine();

    return (
        <>
            <Text sx={typography.textMain} my="sm">
                Your current location:
            </Text>
            <Button
                variant="outline"
                color="gray"
                fullWidth
                styles={{
                    root: {
                        padding: "0 8px",
                        transition: "all 0.3s ease",
                        cursor: "default",
                    },
                    label: { width: "100%" },
                }}
                leftIcon={<IoLocate />}
                rightIcon={
                    <Box
                        onClick={onCLoseLocationBox}
                        sx={(theme) => ({
                            ":hover": { color: theme.colors.red },
                            cursor: "pointer",
                        })}
                    >
                        <FiX />
                    </Box>
                }
            >
                <Group position="apart">
                    <Text sx={typography.textMain}>
                        {`${formatTitle(
                            selectedLocation.location?.district as string
                        )}, ${formatTitle(selectedLocation.location?.province as string)}`}
                    </Text>
                </Group>
            </Button>
        </>
    );
};

export default memo(LocationBoxService);
