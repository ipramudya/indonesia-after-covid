import { LoadingOverlay } from "@mantine/core";
import { ChooseLocOverlay, MarkersVaccine } from "components/common";
import { useVaccine } from "context";
import useFaskes from "hooks/useFaskes";
import { FunctionComponent, Ref, useCallback, useEffect, useRef, useState } from "react";
import Map, { MapRef } from "react-map-gl";

const defaultCoordinate = {
    longitude: 117.9188324776498,
    latitude: -2.1851528432548974,
    zoom: 4.4, // default 10
};

const Main: FunctionComponent = () => {
    const [viewport, setViewport] = useState(defaultCoordinate);
    const mapRef: Ref<MapRef> = useRef(null);

    const {
        state: { selectedLocation, locationRef },
    } = useVaccine();
    const { data, isLoading } = useFaskes();

    useEffect(() => {
        if (data && !isLoading) {
            const { latitude, longitude } = data.data[0];
            setViewport({ latitude: +latitude, longitude: +longitude, zoom: 10 });
            return;
        } else {
            setViewport(defaultCoordinate);
        }
    }, [data, isLoading]);

    const onSelectLocationFocus = useCallback(() => locationRef.current.focus(), [locationRef]);

    return (
        <Map
            {...viewport}
            onMove={(event) => {
                setViewport(event.viewState);
            }}
            ref={mapRef}
            mapStyle="mapbox://styles/ipramudya0/cl0k1g3f6000315p4q5f1grm2/draft"
            mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
            style={{ position: "relative" }}
        >
            {selectedLocation.isEmpty && (
                <ChooseLocOverlay onSelectLocationFocus={onSelectLocationFocus} />
            )}
            {isLoading && <LoadingOverlay visible={isLoading} />}
            <MarkersVaccine data={data?.data} />
        </Map>
    );
};

export default Main;
