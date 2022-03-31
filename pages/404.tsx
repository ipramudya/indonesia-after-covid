import { Center, Container, Group, Text } from "@mantine/core";
import { typography } from "lib/mantine/styles";
import Link from "next/link";
import type { FunctionComponent } from "react";

const NotFound: FunctionComponent = () => {
    return (
        <Container size="md">
            <Center style={{ height: "100vh" }}>
                <Group direction="column" spacing={3}>
                    <Text sx={typography.textHead} style={{ fontSize: "1.5rem" }}>
                        You&#39;ve found a page that doesn&#39;t exist
                    </Text>
                    <Text sx={typography.textMain} style={{ fontSize: "1rem" }}>
                        The page you were looking for has either been removed or it really
                        doesn&#39;t exist. Breathe in, and on the out breath,{" "}
                        <Link href="/" passHref>
                            <Text
                                component="span"
                                sx={typography.link}
                                color="blue"
                                style={{ textDecoration: "underline" }}
                            >
                                go back
                            </Text>
                        </Link>{" "}
                        and try again :&#41;
                    </Text>
                </Group>
            </Center>
        </Container>
    );
};

export default NotFound;
