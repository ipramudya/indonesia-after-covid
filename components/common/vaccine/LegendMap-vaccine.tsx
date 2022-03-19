import { Affix, Button, Group, ThemeIcon, Popover, Text, useMantineTheme } from "@mantine/core";
import { typography } from "lib/mantine/styles";
import type { FunctionComponent } from "react";
import { FaHospitalAlt } from "react-icons/fa";
import { GiHealthNormal } from "react-icons/gi";
import { RiHospitalFill } from "react-icons/ri";

interface LegendMapVaccineProps {
    onToggleLegend: () => void;
    isPopoverOpened: boolean;
}

const LegendMapVaccine: FunctionComponent<LegendMapVaccineProps> = ({
    onToggleLegend,
    isPopoverOpened,
}) => {
    const theme = useMantineTheme();
    return (
        <Affix position={{ bottom: 50, right: 30 }}>
            <Popover
                opened={isPopoverOpened}
                withinPortal={false}
                onClose={onToggleLegend}
                position="top"
                placement="end"
                styles={{ popover: { minWidth: "180px" } }}
                target={
                    <Button
                        variant="white"
                        color="green"
                        onClick={onToggleLegend}
                        styles={{ label: { fontWeight: "normal" } }}
                    >
                        Legend
                    </Button>
                }
            >
                <Group direction="column" spacing="sm">
                    {/* Hospital icon */}
                    <Group direction="row">
                        <ThemeIcon variant="light" color="green">
                            <FaHospitalAlt color={theme.colors.green[7]} />
                        </ThemeIcon>
                        <Text sx={typography.textMain} ml={3}>
                            Hospital
                        </Text>
                    </Group>

                    {/* Clinic icon */}
                    <Group>
                        <ThemeIcon variant="light" color="green">
                            <GiHealthNormal color="#93FFD8" />
                        </ThemeIcon>
                        <Text sx={typography.textMain} ml={3}>
                            Clinic
                        </Text>
                    </Group>

                    {/* Others icon */}
                    <Group>
                        <ThemeIcon variant="light" color="green">
                            <RiHospitalFill color={theme.colors.green[5]} />
                        </ThemeIcon>
                        <Text sx={typography.textMain} ml={3}>
                            Health services
                        </Text>
                    </Group>
                </Group>
            </Popover>
        </Affix>
    );
};

export default LegendMapVaccine;
