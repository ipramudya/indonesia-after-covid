import { FunctionComponent } from "react";
import { Badge, Group, Skeleton, Text } from "@mantine/core";
import { TiArrowSortedUp } from "react-icons/ti";
import moment from "moment";

import { useCases } from "context";
import formatNum from "lib/numeral/formatNum";
import useStyles from "lib/mantine/styles";
import CovidCase from "components/common/Cases";

const Confirmed: FunctionComponent = () => {
    const {
        state: { cases },
    } = useCases();

    const { classes } = useStyles();

    return (
        <div>
            {cases ? (
                <div>
                    <Text color="dark" component="span" weight="bold" mb="xs">
                        Indonesia total confirmed cases
                    </Text>
                    <Group align="center" noWrap={true} mb="md">
                        <Text sx={{ fontSize: "24px" }} color="#ee5555" weight="bold">
                            {formatNum(cases.update?.total.jumlah_positif)}
                        </Text>
                        <Badge
                            radius="sm"
                            color="gray"
                            leftSection={<TiArrowSortedUp />}
                            className={classes.badge}
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
                    <Text component="span" weight={200} size="xs">
                        *last updated{" "}
                        {moment(cases.update?.penambahan.created).format("D MMM YYYY, LT")}
                    </Text>
                </div>
            ) : (
                <>
                    <Skeleton height="50px" radius="xs" mb="1rem" />
                    <Skeleton height="20px" radius="xs" />
                    <Skeleton height="20px" radius="xs" />
                    <Skeleton height="20px" radius="xs" />
                </>
            )}
        </div>
    );
};

export default Confirmed;
