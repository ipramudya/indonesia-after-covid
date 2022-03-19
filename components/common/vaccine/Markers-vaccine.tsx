import { ActionIcon } from "@mantine/core";
import { FacilityType } from "components/layout/vaccine/Main";
import { FaskesIcon } from "components/ui/Icons";
import type { FunctionComponent } from "react";
import { memo, useMemo } from "react";
import { Marker } from "react-map-gl";
import { Datum } from "types/faskes-types";
import TooltipVaccine from "./Tooltip-vaccine";

interface MarkersVaccineProps {
    data: Datum[] | undefined;
    onMarkerClick: (detail: Datum) => void;
    value: FacilityType;
}

const MarkersVaccine: FunctionComponent<MarkersVaccineProps> = ({ data, onMarkerClick, value }) => {
    console.log(data?.[0].jenis_faskes, value);

    return (
        <>
            {useMemo(
                () =>
                    data
                        ?.filter((datum) => (value ? datum.jenis_faskes === value : datum))
                        .map((datum) => {
                            if (!datum.latitude || !datum.longitude) {
                                return null;
                            }

                            return (
                                <Marker
                                    latitude={+datum.latitude}
                                    longitude={+datum.longitude}
                                    onClick={() => {
                                        console.log(datum.jenis_faskes);
                                        onMarkerClick(datum);
                                    }}
                                    key={datum.id}
                                >
                                    <TooltipVaccine
                                        class_rs={datum.kelas_rs}
                                        name={datum.nama}
                                        phone={datum.telp}
                                        status={datum.status}
                                    >
                                        <ActionIcon variant="transparent">
                                            <FaskesIcon markerType={datum.jenis_faskes} />
                                        </ActionIcon>
                                    </TooltipVaccine>
                                </Marker>
                            );
                        }),
                [data, onMarkerClick, value]
            )}
        </>
    );
};

export default memo(MarkersVaccine);
