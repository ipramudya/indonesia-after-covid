import { Center, Container, Group, Text } from "@mantine/core";
import { typography } from "lib/mantine/styles";
import type { FunctionComponent } from "react";

const NotFound: FunctionComponent = () => {
    return (
        <Container size="md">
            <Center style={{ height: "100vh" }}>
                <Group direction="column" spacing={3}>
                    <Text sx={typography.textHead} style={{ fontSize: "1.5rem" }}>
                        We&#39;re sorry, our internal server error
                    </Text>
                    <Text sx={typography.textMain} style={{ fontSize: "1rem" }}>
                        Things are a little bit unstable and unpredictable here, I suggest come back
                        later :&#40;
                    </Text>
                </Group>
            </Center>
        </Container>
    );
};

export default NotFound;
