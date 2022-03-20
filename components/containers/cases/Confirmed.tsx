import { Badge, Group, Text, useMantineTheme } from "@mantine/core";
import { LastUpdated } from "components/common";
import CovidCase from "components/common/CovidCase";
import { badge, typography } from "lib/mantine/styles";
import formatNum from "lib/numeral/formatNum";
import moment from "moment";
import { FunctionComponent, memo } from "react";
import { BiChevronsUp } from "react-icons/bi";
import { Update } from "types/update-cases.types";

interface ConfirmedProps {
    update: Update;
}

const Confirmed: FunctionComponent<ConfirmedProps> = ({ update }) => {
    const theme = useMantineTheme();
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
                color={theme.colors.green[6]}
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
            <LastUpdated label={update?.penambahan.created}>
                *last updated {moment(update?.penambahan.created).fromNow()}
            </LastUpdated>
        </div>
    );
};

export default memo(Confirmed);
