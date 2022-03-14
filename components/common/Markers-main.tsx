import { ActionIcon } from "@mantine/core";
import { useCases } from "context";
import { useStorage } from "hooks";
import { FunctionComponent, memo } from "react";
import { GoPrimitiveDot } from "react-icons/go";
import { Marker } from "react-map-gl";
import { ListDataEntity } from "types/provinces.types";

interface MarkersProps {
    provinces: ListDataEntity[] | null | undefined;
}

const Markers: FunctionComponent<MarkersProps> = ({ provinces }) => {
    const {
        dispatch,
        state: { exploredProvince },
    } = useCases();
    const { onSetStorage } = useStorage();

    const onMarkerClick = (e: any) => {
        const province = provinces?.find((prov) => prov?.lokasi?.lat === e.target.getLngLat().lat);

        // run only when province on marker is not same as explored province that already exist
        if (exploredProvince.province?.key !== province?.key) {
            dispatch({ type: "setExploredProvince", payload: province as ListDataEntity });
            onSetStorage({ exploredProvince: { isEmpty: false, province } });
            dispatch({ type: "triggerPopup", payload: true });
            return;
        }

        return dispatch({ type: "triggerPopup", payload: true });
    };

    return (
        <>
            {provinces?.map((province) => {
                const isSameLocation = province.key === exploredProvince.province?.key;

                return province?.lokasi ? (
                    <div key={province.key}>
                        <Marker
                            longitude={province?.lokasi?.lon}
                            latitude={province?.lokasi?.lat}
                            onClick={onMarkerClick}
                        >
                            <ActionIcon
                                radius="xl"
                                variant={isSameLocation ? "outline" : "hover"}
                                size={isSameLocation ? "lg" : "sm"}
                                color="red"
                            >
                                <GoPrimitiveDot
                                    size={isSameLocation ? 44 : 30}
                                    style={isSameLocation ? { opacity: 0.5 } : { opacity: 0.3 }}
                                />
                            </ActionIcon>
                        </Marker>
                    </div>
                ) : null;
            })}
        </>
    );
};

export default memo(Markers);
