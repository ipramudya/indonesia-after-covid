import { ActionIcon } from "@mantine/core";
import { Marker } from "react-map-gl";
import { FunctionComponent, memo } from "react";
import { GoPrimitiveDot } from "react-icons/go";
import { ListDataEntity } from "types/provinces.types";
import { useCases } from "context";
import { useStorage } from "hooks";

interface MarkersMainProps {
    provinces: ListDataEntity[] | null | undefined;
    exploredProvince: {
        isEmpty: boolean;
        province?: ListDataEntity | undefined;
    };
}

const MarkersMain: FunctionComponent<MarkersMainProps> = ({ provinces, exploredProvince }) => {
    const { dispatch } = useCases();
    const { onSetStorage } = useStorage();

    const onMarkerClick = (e: any) => {
        const province = provinces?.find((prov) => prov?.lokasi?.lat === e.target.getLngLat().lat);
        dispatch({ type: "setExploredProvince", payload: province as ListDataEntity });
        onSetStorage({ exploredProvince: { isEmpty: false, province } });
        return;
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
                                size={isSameLocation ? "xl" : "lg"}
                                color="red"
                            >
                                <GoPrimitiveDot
                                    size={33}
                                    style={isSameLocation ? { opacity: "unset" } : { opacity: 0.3 }}
                                />
                            </ActionIcon>
                        </Marker>
                    </div>
                ) : null;
            })}
        </>
    );
};

export default memo(MarkersMain);
