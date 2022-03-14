import { Group, Text } from "@mantine/core";
import { useCases } from "context";
import { typography } from "lib/mantine/styles";
import formatNum from "lib/numeral/formatNum";
import { FunctionComponent, useState } from "react";
import { Popup } from "react-map-gl";
import formatTitle from "utils/formatTitle";

interface CustomPopupProps {}

const CustomPopup: FunctionComponent<CustomPopupProps> = ({}) => {
    const [isPopupShown, setIsPopupShown] = useState(false);

    const {
        state: {
            exploredProvince: { province },
        },
    } = useCases();

    const onPopupClose = () => {
        setIsPopupShown(false);
    };

    return (
        <>
            {!isPopupShown && (
                <Popup
                    latitude={province?.lokasi?.lat as number}
                    longitude={province?.lokasi?.lon as number}
                    anchor="bottom"
                    onClose={onPopupClose}
                    closeButton={false}
                    offset={27}
                >
                    <Group
                        spacing={5}
                        sx={{ padding: "0.75em", alignItems: "center" }}
                        direction="column"
                    >
                        <Text sx={typography.textMain}>{formatTitle(province?.key as string)}</Text>
                        <Group position="apart">
                            <Text sx={typography.textTiny} style={{ color: "red" }}>
                                Total case
                            </Text>
                            <Text sx={typography.textTiny} style={{ color: "red" }}>
                                {formatNum(province?.jumlah_kasus, "comma")}
                            </Text>
                        </Group>
                    </Group>
                </Popup>
            )}
        </>
    );
};

export default CustomPopup;
