import { ActionIcon, Divider, Group, Text, Tooltip } from "@mantine/core";
import { FaskesIcon } from "components/ui/Icons";
import { markerTooltip, typography } from "lib/mantine/styles";
import type { FunctionComponent } from "react";
import { memo, useMemo } from "react";
import { Marker } from "react-map-gl";
import { Datum } from "types/faskes-types";

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
                                <Tooltip
                                    styles={markerTooltip}
                                    label={
                                        <Group direction="column" spacing={3}>
                                            <Text
                                                sx={typography.tooltip}
                                                style={{ fontWeight: "bold" }}
                                            >
                                                {datum.nama}
                                            </Text>
                                            <Divider
                                                variant="dashed"
                                                sx={{ width: "100%" }}
                                                my={6}
                                            />
                                            <Text sx={typography.tooltip}>
                                                Status: {datum.status}
                                            </Text>
                                            <Text sx={typography.tooltip}>
                                                Class: {datum.kelas_rs || "-"}
                                            </Text>
                                            <Text sx={typography.tooltip}>
                                                Phone: {datum.telp || "-"}
                                            </Text>
                                        </Group>
                                    }
                                >
                                    <ActionIcon variant="transparent">
                                        <FaskesIcon markerType={datum.jenis_faskes} />
                                    </ActionIcon>
                                </Tooltip>
                            </Marker>
                        );
                    }),
                [data]
            )}
        </>
    );
};

export default memo(MarkersVaccine);
