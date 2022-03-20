import { Group } from "@mantine/core";
import { StatsVaccine } from "components/common";
import { useVaccine } from "context";
import type { FunctionComponent } from "react";

const GeneralDetail: FunctionComponent = () => {
    const {
        state: {
            detail: { data },
        },
    } = useVaccine();

    return (
        <Group direction="column" spacing={6}>
            <StatsVaccine label="Status :" stats={data?.status} isHighlight />
            <StatsVaccine label="Class :" stats={data?.kelas_rs || "-"} />
            <StatsVaccine label="Phone :" stats={data?.telp || "-"} />
            <StatsVaccine label="Address :" stats={data?.alamat || "-"} noWrap />
        </Group>
    );
};

export default GeneralDetail;
