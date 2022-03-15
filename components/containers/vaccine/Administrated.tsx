import { memo } from "react";
import type { FunctionComponent } from "react";
import { Badge, Divider, Group, Text, Tooltip } from "@mantine/core";
import { BiChevronsUp } from "react-icons/bi";

import { Dose } from "components/common";
import { badge, tooltip, typography } from "lib/mantine/styles";
import { Penambahan, Total } from "types/vaccine.types";
import formatNum from "lib/numeral/formatNum";
import moment from "moment";

interface AdministratedProps {
    total: Total;
    increase: Penambahan;
}

const Administrated: FunctionComponent<AdministratedProps> = ({ increase, total }) => {
    return (
        <>
            <Text sx={typography.textHead} component="span">
                Vaccine doses administered indonesia
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
            <Group position="apart" noWrap sx={{ height: "50px" }}>
                {/* Left */}
                <Dose increase={increase.jumlah_vaksinasi_1} total={total.jumlah_vaksinasi_1} />
                <Divider orientation="vertical" sx={{ height: "100%" }} variant="dashed" size={1} />
                {/* Right */}
                <Dose increase={increase.jumlah_vaksinasi_2} total={total.jumlah_vaksinasi_2} />
            </Group>
            <Tooltip
                label={moment(increase.created).format("D MMM YYYY, LT")}
                position="right"
                color="gray"
                radius="md"
                mt="sm"
                styles={tooltip}
            >
                <Text component="span" size="xs" sx={(theme) => ({ color: theme.colors.dark[3] })}>
                    *last updated {moment(increase.created).fromNow()}
                </Text>
            </Tooltip>
        </>
    );
};

export default memo(Administrated);
