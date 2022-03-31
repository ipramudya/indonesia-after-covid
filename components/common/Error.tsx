import { Center, Text } from "@mantine/core";
import { typography } from "lib/mantine/styles";
import type { FunctionComponent } from "react";

interface ErrorProps {
    message: string;
}

const Error: FunctionComponent<ErrorProps> = ({ message }) => {
    return (
        <Center>
            <Text sx={typography.textHead} style={{ color: "#ee5555" }}>
                {message}
            </Text>
        </Center>
    );
};

export default Error;
