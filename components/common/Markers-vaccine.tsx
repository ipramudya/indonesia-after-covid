import { ActionIcon } from "@mantine/core";
import { FaskesIcon } from "components/ui/Icons";
import type { FunctionComponent } from "react";
import { memo, useMemo } from "react";
import { Marker } from "react-map-gl";
import { Datum } from "types/faskes-types";
import TooltipVaccine from "./Tooltip-vaccine";

interface MarkersVaccineProps {
    data: Datum[] | undefined;
}

const MarkersVaccine: FunctionComponent<MarkersVaccineProps> = ({ data }) => {
    return (
        <>
            {useMemo(
                () =>
                    data?.map((datum) => {
                        if (!datum.latitude || !datum.longitude) {
                            return null;
                        }

                        return (
                            <Marker
                                latitude={+datum.latitude}
                                longitude={+datum.longitude}
                                onClick={() => console.log(datum)}
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
                [data]
            )}
        </>
    );
};

export default memo(MarkersVaccine);
