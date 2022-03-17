import { LoadingOverlay } from "@mantine/core";
import { ChooseLocOverlay, LegendMap, MarkersVaccine } from "components/common";
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
    const [isPopoverOpened, setIsPopoverOpened] = useState(false);
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

    const onShowLegend = useCallback(() => setIsPopoverOpened((prev) => !prev), []);

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
            {isLoading && <LoadingOverlay visible={isLoading} />}
            {selectedLocation.isEmpty ? (
                <ChooseLocOverlay onSelectLocationFocus={onSelectLocationFocus} />
            ) : (
                <>
                    <MarkersVaccine data={data?.data} />
                    <LegendMap isPopoverOpened={isPopoverOpened} onToggleLegend={onShowLegend} />
                </>
            )}
        </Map>
    );
};

export default Main;
