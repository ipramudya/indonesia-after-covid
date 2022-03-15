import { FunctionComponent, memo } from "react";
import { Badge, Group, Text, Tooltip } from "@mantine/core";
import moment from "moment";

import CovidCase from "components/common/CovidCase";
import { badge, typography } from "lib/mantine/styles";
import tooltip from "lib/mantine/styles/tooltip";
import formatNum from "lib/numeral/formatNum";
import { BiChevronsUp } from "react-icons/bi";
import { Update } from "types/update-cases.types";

interface ConfirmedProps {
    update: Update;
}

const Confirmed: FunctionComponent<ConfirmedProps> = ({ update }) => {
    return (
        <div>
            <Text component="span" sx={typography.textHead}>
                Indonesia total confirmed cases
            </Text>
            <Group align="center" noWrap mb="md">
                <Text sx={{ fontSize: "24px" }} color="#ee5555" weight="bold">
                    {formatNum(update?.total.jumlah_positif)}
                </Text>
                <Badge radius="sm" color="gray" leftSection={<BiChevronsUp />} styles={badge}>
                    {formatNum(update?.penambahan.jumlah_positif)}
                </Badge>
            </Group>
            <CovidCase
                color="green"
                increase={update?.penambahan.jumlah_sembuh}
                total={update?.total.jumlah_sembuh}
                title="Healed"
            />
            <CovidCase
                color="yellow"
                increase={update?.penambahan.jumlah_dirawat}
                total={update?.total.jumlah_dirawat}
                title="Hospitalized"
            />
            <CovidCase
                color="dark"
                increase={update?.penambahan.jumlah_meninggal}
                total={update?.total.jumlah_meninggal}
                title="Fatal"
            />
            <Tooltip
                label={moment(update?.penambahan.created).format("D MMM YYYY, LT")}
                position="right"
                color="gray"
                radius="md"
                styles={tooltip}
            >
                <Text component="span" size="xs" sx={(theme) => ({ color: theme.colors.dark[3] })}>
                    *last updated {moment(update?.penambahan.created).fromNow()}
                </Text>
            </Tooltip>
        </div>
    );
};

export default memo(Confirmed);
