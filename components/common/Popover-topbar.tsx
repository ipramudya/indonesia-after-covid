import { Popover, ActionIcon, Group, Text, Anchor, useMantineTheme } from "@mantine/core";
import { typography } from "lib/mantine/styles";
import type { FunctionComponent } from "react";
import { TiInfoLarge } from "react-icons/ti";
import { GoLinkExternal } from "react-icons/go";

interface CustomPopoverProps {
    onInfoButtonClick: () => void;
    isPopoverShown: boolean;
}

const CustomPopover: FunctionComponent<CustomPopoverProps> = ({
    onInfoButtonClick,
    isPopoverShown,
}) => {
    const theme = useMantineTheme();

    return (
        <Popover
            opened={isPopoverShown}
            onClose={onInfoButtonClick}
            position="bottom"
            placement="end"
            withArrow
            withCloseButton
            styles={{ inner: { padding: "12px" } }}
            target={
                <ActionIcon variant="default" color="gray" onClick={onInfoButtonClick}>
                    <TiInfoLarge />
                </ActionIcon>
            }
        >
            <Group spacing={0} direction="column" sx={{ maxWidth: "300px" }}>
                <Text sx={typography.textHead} component="span">
                    Information
                </Text>
                <Text sx={typography.textTiny} component="p" style={{ margin: "6px 0" }}>
                    The terrible covid-19 pandemic is affecting the whole world, some other
                    countries will probably be much worse than Indonesia. Therefore, this dashboard
                    was made for public information purposes so that the public can find out the
                    rate of movement of the coronavirus periodically
                </Text>
                <Text sx={typography.textTiny} component="p" style={{ margin: "6px 0" }}>
                    The data displayed in the application is obtained from a number of trusted
                    sources and is regularly updated by the government through publicly accessible
                    APIs.
                </Text>
                <Text sx={typography.textTiny} component="p" style={{ margin: "6px 0 3px 0" }}>
                    The following data sources are used:
                </Text>
                <Group direction="column" spacing={4}>
                    <Anchor
                        sx={typography.textTiny}
                        style={{
                            marginLeft: "12px",
                            color: theme.colors.dark[4],
                            display: "flex",
                            alignItems: "center",
                        }}
                        href="https://documenter.getpostman.com/view/16605343/Tzm6nwoS"
                        target="_blank"
                    >
                        <GoLinkExternal size={15} style={{ marginRight: "6px" }} />
                        Indonesian Government COVID-19 Data APIs
                    </Anchor>
                    <Anchor
                        sx={typography.textTiny}
                        style={{
                            marginLeft: "12px",
                            color: theme.colors.dark[4],
                            display: "flex",
                            alignItems: "center",
                        }}
                        href="https://covid19.go.id/dokumentasi-api-faskes-vaksinasi"
                        target="_blank"
                    >
                        <GoLinkExternal size={15} style={{ marginRight: "6px" }} />
                        covid19.go.id
                    </Anchor>
                </Group>
            </Group>
        </Popover>
    );
};

export default CustomPopover;
