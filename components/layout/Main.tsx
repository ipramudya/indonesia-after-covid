import { Markers } from "components/common";
import { useCases } from "context";
import { FunctionComponent, Ref, useCallback, useEffect, useRef, useState } from "react";
import Map, { MapRef } from "react-map-gl";
import { ListDataEntity } from "types/provinces.types";

interface ICoordinate {
    latitude: number;
    longitude: number;
    zoom: number;
}

interface MainProps {
    provinces: ListDataEntity[] | null | undefined;
}

const defaultCoordinate = {
    longitude: 117.9188324776498,
    latitude: -2.1851528432548974,
    zoom: 4.4,
};

const Main: FunctionComponent<MainProps> = ({ provinces }) => {
    const mapRef: Ref<MapRef> = useRef(null);
    const {
        state: { exploredProvince },
    } = useCases();

    const [viewState, setViewState] = useState<ICoordinate>(defaultCoordinate);
    const latitude = exploredProvince.province?.lokasi.lat as number;
    const longitude = exploredProvince.province?.lokasi.lon as number;

    const onFlyTo = useCallback(({ latitude, longitude, zoom }: ICoordinate) => {
        mapRef.current?.flyTo({
            zoom,
            center: {
                lat: latitude,
                lon: longitude,
            },
            essential: true,
        });
    }, []);

    useEffect(() => {
        if (!exploredProvince.isEmpty) {
            if (!exploredProvince.province?.lokasi) {
                onFlyTo(defaultCoordinate);
                return;
            }
            onFlyTo({ latitude, longitude, zoom: 9 });
        } else {
            onFlyTo(defaultCoordinate);
        }
        mapRef.current?.resize();
    }, [exploredProvince, latitude, longitude, onFlyTo]);

    useEffect(() => {
        if (exploredProvince.isEmpty) {
            return setViewState(defaultCoordinate);
        } else {
            return setViewState({ latitude, longitude, zoom: 9 });
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [exploredProvince.isEmpty]);

    return (
        <Map
            {...viewState}
            onMove={(event) => {
                setViewState(event.viewState);
            }}
            ref={mapRef}
            mapStyle="mapbox://styles/ipramudya0/cl0k1g3f6000315p4q5f1grm2/draft"
            mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
        >
            <Markers provinces={provinces} exploredProvince={exploredProvince} />
        </Map>
    );
};

export default Main;
