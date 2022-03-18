import { Text, Tooltip } from "@mantine/core";
import { tooltip } from "lib/mantine/styles";
import moment from "moment";
import type { FunctionComponent } from "react";

interface LastUpdatedProps {
    label: string;
}

const LastUpdated: FunctionComponent<LastUpdatedProps> = ({ children, label }) => {
    return (
        <Tooltip
            label={moment(label).format("D MMM YYYY, LT")}
            position="right"
            color="gray"
            radius="md"
            styles={tooltip}
        >
            <Text component="span" size="xs" sx={(theme) => ({ color: theme.colors.dark[3] })}>
                {children}
            </Text>
        </Tooltip>
    );
};

export default LastUpdated;
