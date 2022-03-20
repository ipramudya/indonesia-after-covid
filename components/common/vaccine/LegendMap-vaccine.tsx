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
                        onClick={onToggleLegend}
                        styles={{ label: { fontWeight: "normal", color: theme.colors.green[7] } }}
                    >
                        Legend
                    </Button>
                }
            >
                <Group direction="column" spacing="sm">
                    {/* Hospital icon */}
                    <Group direction="row">
                        <ThemeIcon variant="light" color="gray">
                            <FaHospitalAlt color={theme.colors.green[8]} />
                        </ThemeIcon>
                        <Text sx={typography.textMain} ml={3}>
                            Hospital
                        </Text>
                    </Group>

                    {/* Clinic icon */}
                    <Group>
                        <ThemeIcon variant="light" color="gray">
                            <GiHealthNormal color={theme.colors.green[2]} />
                        </ThemeIcon>
                        <Text sx={typography.textMain} ml={3}>
                            Clinic
                        </Text>
                    </Group>

                    {/* Others icon */}
                    <Group>
                        <ThemeIcon variant="light" color="gray">
                            <RiHospitalFill color={theme.colors.green[6]} />
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
