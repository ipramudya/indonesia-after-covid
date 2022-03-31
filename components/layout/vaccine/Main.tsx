import { LoadingOverlay } from "@mantine/core";
import { ChooseLocOverlay, FacilityBar, LegendMap, MarkersVaccine } from "components/common";
import { useVaccine } from "context";
import useFaskes from "hooks/useFaskes";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import type { FunctionComponent, Ref } from "react";
import Map, { MapRef } from "react-map-gl";
import { Datum } from "types/faskes-types";
import formatTitle from "utils/formatTitle";

export type FacilityType = "" | "KLINIK" | "FKTP" | "PUSKESMAS" | "RUMAH SAKIT";

const defaultCoordinate = {
    longitude: 117.9188324776498,
    latitude: -2.1851528432548974,
    zoom: 4.4, // default 10
};

const Main: FunctionComponent = () => {
    const [viewport, setViewport] = useState(defaultCoordinate);
    const [isPopoverOpened, setIsPopoverOpened] = useState(false);
    const [facilityType, setFacilityType] = useState<FacilityType>("");
    const mapRef: Ref<MapRef> = useRef(null);

    const {
        state: { selectedLocation, locationRef, detail },
        dispatch,
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

    useEffect(() => {
        if (!detail.isEmpty) {
            mapRef.current?.resize();
            return setViewport({
                zoom: 16.5,
                latitude: Number(detail.data?.latitude),
                longitude: Number(detail.data?.longitude),
            });
        } else if (data) {
            mapRef.current?.resize();
            return setViewport({
                zoom: 10,
                latitude: Number(data?.data[0].latitude),
                longitude: Number(data?.data[0].longitude),
            });
        } else {
            mapRef.current?.resize();
            return setViewport(defaultCoordinate);
        }
    }, [data, detail]);

    const onSelectLocationFocus = useCallback(() => locationRef.current.focus(), [locationRef]);

    const onShowLegend = useCallback(() => setIsPopoverOpened((prev) => !prev), []);

    const onSelectFacility = (facility: FacilityType) => {
        setFacilityType(facility);
    };

    const onSetVaccineDetail = useCallback(
        (detail: Datum | number | string | null) => {
            if (detail && typeof detail !== "number") {
                return dispatch({ type: "setVaccineDetail", payload: detail as Datum });
            } else if (typeof detail === "number") {
                const found = data?.data.find((item) => item.id === detail);
                return dispatch({ type: "setVaccineDetail", payload: found as Datum });
            }
            return;
        },
        [data, dispatch]
    );

    const searchableData = useMemo(() => {
        if (data) {
            if (facilityType) {
                return data?.data
                    .filter((item) => item.jenis_faskes !== facilityType)
                    .map((item) => ({
                        label: formatTitle(item.nama),
                        value: item.id,
                        status: item.status,
                    }));
            }
            return data?.data.map((item) => ({
                label: formatTitle(item.nama),
                value: item.id,
                status: item.status,
            }));
        }
        return [];
    }, [data, facilityType]);

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
                    <MarkersVaccine
                        data={data?.data}
                        onMarkerClick={onSetVaccineDetail}
                        value={facilityType}
                    />
                    <LegendMap isPopoverOpened={isPopoverOpened} onToggleLegend={onShowLegend} />
                    <FacilityBar
                        data={searchableData}
                        onFacilityClick={onSelectFacility}
                        onSearchFacility={onSetVaccineDetail}
                        value={facilityType}
                    />
                </>
            )}
        </Map>
    );
};

export default Main;
