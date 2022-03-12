import { useCases } from "context";
import { FunctionComponent, useState } from "react";
import { Ref, useCallback, useEffect, useRef } from "react";
import Map, { MapRef } from "react-map-gl";

const defaultLocation = {
    longitude: 117.9188324776498,
    latitude: -2.1851528432548974,
    zoom: 4.4,
};

const Main: FunctionComponent = () => {
    const mapRef: Ref<MapRef> = useRef(null);
    const {
        state: { exploredProvince },
    } = useCases();

    const [viewState, setViewState] = useState(defaultLocation);

    const onSetViewstate = useCallback(({ zoom, latitude, longitude }) => {
        setViewState({
            zoom,
            latitude,
            longitude,
        });
    }, []);

    useEffect(() => {
        if (!exploredProvince.isEmpty) {
            const latitude = exploredProvince.province?.lokasi.lat;
            const longitude = exploredProvince.province?.lokasi.lon;
            onSetViewstate({ latitude, longitude, zoom: 9 });
        } else {
            onSetViewstate(defaultLocation);
        }
        mapRef.current?.resize();
    }, [exploredProvince.isEmpty, exploredProvince.province, onSetViewstate]);

    return (
        <Map
            {...viewState}
            onMove={(event) => {
                console.log(event.target.getCenter());
                console.log(event.target.getZoom());
                setViewState(event.viewState);
            }}
            ref={mapRef}
            mapStyle="mapbox://styles/ipramudya0/cl0k1g3f6000315p4q5f1grm2/draft"
            mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
            style={{ width: "100%", height: "100%" }}
        />
    );
};

export default Main;
