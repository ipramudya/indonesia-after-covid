import { Badge, Divider, Group, Text } from "@mantine/core";
import { Dose, LastUpdated } from "components/common";
import { badge, typography } from "lib/mantine/styles";
import formatNum from "lib/numeral/formatNum";
import moment from "moment";
import type { FunctionComponent } from "react";
import { memo } from "react";
import { BiChevronsUp } from "react-icons/bi";
import { Penambahan, Total } from "types/vaccine.types";

interface AdministratedProps {
    total: Total;
    increase: Penambahan;
}

const Administrated: FunctionComponent<AdministratedProps> = ({ increase, total }) => {
    return (
        <>
            <Text sx={typography.textHead} component="span">
                Vaccine doses administered
            </Text>
            <Group align="center" noWrap mb="md" sx={{ width: "100%" }}>
                <Text sx={{ fontSize: "24px" }} color="green" weight="bold">
                    {formatNum(total.jumlah_vaksinasi_1 + total.jumlah_vaksinasi_2)}
                </Text>
                <Badge radius="sm" color="gray" leftSection={<BiChevronsUp />} styles={badge}>
                    {formatNum(
                        increase.jumlah_vaksinasi_1 + increase.jumlah_vaksinasi_2,
                        "autoformat"
                    )}
                </Badge>
            </Group>
            <Group position="apart" noWrap sx={{ height: "50px" }} mb={6}>
                {/* Left */}
                <Dose
                    increase={increase.jumlah_vaksinasi_1}
                    total={total.jumlah_vaksinasi_1}
                    title="First dose"
                />
                <Divider orientation="vertical" sx={{ height: "100%" }} variant="dashed" size={1} />
                {/* Right */}
                <Dose
                    increase={increase.jumlah_vaksinasi_2}
                    total={total.jumlah_vaksinasi_2}
                    title="Second dose"
                />
            </Group>
            <LastUpdated label={increase.created}>
                *last updated {moment(increase.created).fromNow()}
            </LastUpdated>
        </>
    );
};

export default memo(Administrated);
