import { ActionIcon, Divider, Group, Text } from "@mantine/core";
import { useCases } from "context";
import { typography } from "lib/mantine/styles";
import formatNum from "lib/numeral/formatNum";
import { FunctionComponent, memo } from "react";
import { FiX } from "react-icons/fi";
import { Popup } from "react-map-gl";
import { useEffectOnce } from "react-use";
import formatTitle from "utils/formatTitle";

const CustomPopup: FunctionComponent = () => {
    const {
        dispatch,
        state: {
            exploredProvince: { province },
            isPopupShown,
        },
    } = useCases();

    const onPopupClose = () => dispatch({ type: "triggerPopup", payload: false });

    // trigger when popup is not shown
    useEffectOnce(() => {
        if (!isPopupShown) {
            dispatch({ type: "triggerPopup", payload: true });
        }
    });

    return (
        <>
            {isPopupShown && (
                <Popup
                    latitude={province?.lokasi?.lat as number}
                    longitude={province?.lokasi?.lon as number}
                    anchor="bottom"
                    closeButton={false}
                    closeOnClick={false}
                    offset={27}
                >
                    <Group
                        spacing={3}
                        sx={{ padding: "1em", minWidth: "160px" }}
                        direction="column"
                    >
                        <Group position="apart" style={{ width: "100%" }} noWrap>
                            <Text
                                sx={typography.textMain}
                                style={{ fontWeight: "bold" }}
                                color="dark"
                            >
                                {formatTitle(province?.key as string)}
                            </Text>
                            <ActionIcon onClick={onPopupClose}>
                                <FiX />
                            </ActionIcon>
                        </Group>
                        <Divider variant="dashed" style={{ width: "100%" }} my={6} />
                        <Group position="apart" style={{ width: "100%" }}>
                            <Text sx={typography.textTiny}>Total case</Text>
                            <Text sx={typography.textTiny}>
                                {formatNum(province?.jumlah_kasus, "comma")}
                            </Text>
                        </Group>
                        <Group position="apart" style={{ width: "100%" }}>
                            <Text sx={typography.textTiny}>Healed</Text>
                            <Text sx={typography.textTiny}>
                                {formatNum(province?.jumlah_sembuh, "comma")}
                            </Text>
                        </Group>
                        <Group position="apart" style={{ width: "100%" }}>
                            <Text sx={typography.textTiny}>Fatal</Text>
                            <Text sx={typography.textTiny}>
                                {formatNum(province?.jumlah_meninggal, "comma")}
                            </Text>
                        </Group>
                    </Group>
                </Popup>
            )}
        </>
    );
};

export default memo(CustomPopup);
