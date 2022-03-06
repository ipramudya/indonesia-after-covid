import { FunctionComponent } from "react";
import { Badge, Group, Skeleton, Text, Tooltip } from "@mantine/core";
import { BiChevronsUp } from "react-icons/bi";
import moment from "moment";

import { useCases } from "context";
import formatNum from "lib/numeral/formatNum";
import CovidCase from "components/common/Cases";
import { badge, typography } from "lib/mantine/styles";
import tooltip from "lib/mantine/styles/tooltip";

const Confirmed: FunctionComponent = () => {
    const {
        state: { cases },
    } = useCases();

    return (
        <div>
            {cases ? (
                <>
                    <Text component="span" sx={typography.textHead}>
                        Indonesia total confirmed cases
                    </Text>
                    <Group align="center" noWrap={true} mb="md">
                        <Text sx={{ fontSize: "24px" }} color="#ee5555" weight="bold">
                            {formatNum(cases.update?.total.jumlah_positif)}
                        </Text>
                        <Badge
                            radius="sm"
                            color="gray"
                            leftSection={<BiChevronsUp />}
                            styles={badge}
                        >
                            {formatNum(cases.update?.penambahan.jumlah_positif)}
                        </Badge>
                    </Group>
                    <CovidCase
                        color="green"
                        increase={cases.update?.penambahan.jumlah_sembuh}
                        total={cases.update?.total.jumlah_sembuh}
                        title="Healed"
                    />
                    <CovidCase
                        color="yellow"
                        increase={cases.update?.penambahan.jumlah_dirawat}
                        total={cases.update?.total.jumlah_dirawat}
                        title="Hospitalized"
                    />
                    <CovidCase
                        color="dark"
                        increase={cases.update?.penambahan.jumlah_meninggal}
                        total={cases.update?.total.jumlah_meninggal}
                        title="Fatal"
                    />
                    <Tooltip
                        label={moment(cases.update?.penambahan.created).format("D MMM YYYY, LT")}
                        position="right"
                        color="gray"
                        radius="md"
                        styles={tooltip}
                    >
                        <Text component="span" size="xs">
                            *last updated {moment(cases.update?.penambahan.created).fromNow()}
                        </Text>
                    </Tooltip>
                </>
            ) : (
                <>
                    <Skeleton height="50px" radius="xs" mb="1rem" />
                    <Skeleton height="20px" radius="xs" />
                    <Skeleton height="20px" radius="xs" />
                    <Skeleton height="20px" radius="xs" />
                    <Skeleton height="8px" radius="xs" />
                </>
            )}
        </div>
    );
};

export default Confirmed;
