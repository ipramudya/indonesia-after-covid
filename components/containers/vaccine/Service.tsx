import { Divider, Text } from "@mantine/core";
import { typography } from "lib/mantine/styles";
import type { FunctionComponent } from "react";

interface ServiceProps {}

const Service: FunctionComponent<ServiceProps> = ({}) => {
    return (
        <>
            <Text sx={typography.textHead} mb="sm">
                Vaccine service
            </Text>
            <Text sx={typography.textMain}>
                Find your exact location to get the right vaccination service for you.
            </Text>
            <Divider my="md" variant="dashed" />
        </>
    );
};

export default Service;
