import { Container, Center, Group, Text } from "@mantine/core";
import { typography } from "lib/mantine/styles";
import type { FunctionComponent } from "react";

const NotSupported: FunctionComponent = ({}) => {
    return (
        <Container size="md">
            <Center style={{ height: "100vh" }}>
                <Group direction="column" spacing={3}>
                    <Text sx={typography.textHead} style={{ fontSize: "1.5rem" }}>
                        We&#39;re Sorry &#58;&#40;
                    </Text>
                    <Text sx={typography.textMain} style={{ fontSize: "1rem" }}>
                        Please use a wider screen for your convenience
                    </Text>
                </Group>
            </Center>
        </Container>
    );
};

export default NotSupported;
