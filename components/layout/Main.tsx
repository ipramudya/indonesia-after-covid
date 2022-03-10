import { useDidUpdate } from "@mantine/hooks";
import { useCases } from "context";
import { Ref, useCallback, useRef } from "react";
import Map, { MapRef } from "react-map-gl";

import type { FunctionComponent } from "react";
interface MainProps {}

const Main: FunctionComponent<MainProps> = () => {
    const mapRef: Ref<MapRef> = useRef(null);
    const { state } = useCases();
    const { exploredProvince } = state;

    const exploredProvinceLat = exploredProvince.province?.lokasi?.lat as number;
    const exploredProvinceLon = exploredProvince.province?.lokasi?.lon as number;
    const defaultLocation = {
        longitude: 118.11485523945265,
        latitude: -1.4724675223323658,
        zoom: 4.3,
    };

    const getInitialViewState = () => {
        if (exploredProvince.isEmpty) {
            return defaultLocation;
        } else {
            return {
                longitude: exploredProvinceLon,
                latitude: exploredProvinceLat,
                zoom: 9,
            };
        }
    };

    const onMapFly = useCallback(
        ({ lat, lon, zoom }: { lat: number; lon: number; zoom: number }) => {
            mapRef.current?.flyTo({
                center: { lon, lat },
                duration: 1000,
                zoom,
                speed: 0.2,
                essential: true,
            });
        },
        []
    );

    // custom hooks to avoid initial useEffect fun
    useDidUpdate(() => {
        if (!exploredProvince.isEmpty) {
            onMapFly({ lat: exploredProvinceLat, lon: exploredProvinceLon, zoom: 9 });
        } else {
            const { latitude, longitude, zoom } = defaultLocation;
            onMapFly({ lat: latitude, lon: longitude, zoom });
        }

        mapRef.current?.resize();
    }, [exploredProvince]);

    return (
        <Map
            initialViewState={getInitialViewState()}
            ref={mapRef}
            mapStyle="mapbox://styles/ipramudya0/cl0k1g3f6000315p4q5f1grm2/draft"
            mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
            style={{ width: "100%", height: "100%" }}
        />
    );
};

export default Main;
