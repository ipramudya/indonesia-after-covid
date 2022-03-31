import { Center, Group, Text, useMantineTheme } from "@mantine/core";
import { MainCard } from "components/common";
import Spotlight from "components/containers/news/Spotlight";
import { typography } from "lib/mantine/styles";
import { Article } from "types/news.types";

import type { FunctionComponent } from "react";
interface NewsfeedProps {
    articles: Article[];
}

const Newsfeed: FunctionComponent<NewsfeedProps> = ({ articles }) => {
    const theme = useMantineTheme();
    return (
        <>
            <Center mb={12}>
                <Text sx={typography.textHead} style={{ fontSize: "1.5rem" }} mb="lg">
                    Newest Coronavirus News
                </Text>
            </Center>
            <Group
                spacing={0}
                p="xs"
                sx={{
                    alignItems: "start",
                    width: "100%",
                    borderBottom: `1px solid ${theme.colors.gray[3]}`,
                }}
            >
                {/* main banner */}
                <MainCard mainArticle={articles[0]} />

                {/* spotlight */}
                <Spotlight />
            </Group>
        </>
    );
};

export default Newsfeed;
