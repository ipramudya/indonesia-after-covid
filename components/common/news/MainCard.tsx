import { Box, Group, Image, Text, useMantineTheme } from "@mantine/core";
import { typography } from "lib/mantine/styles";
import type { FunctionComponent } from "react";
import { Article } from "types/news.types";

interface MainCardProps {
    mainArticle: Article;
}

const MainCard: FunctionComponent<MainCardProps> = ({ mainArticle }) => {
    const theme = useMantineTheme();
    return (
        <Box
            sx={{
                width: "50%",
                height: "100%",
                borderRight: `1px solid ${theme.colors.gray[3]}`,
            }}
            px="2rem"
            mb="2rem"
        >
            <Image
                fit="cover"
                height={500}
                alt={mainArticle.title}
                src={mainArticle.media}
                sx={{ filter: "grayscale(90%)" }}
                mb="lg"
            />
            <Group direction="column" spacing={12}>
                <Group position="apart" sx={{ width: "100%" }}>
                    <Text sx={typography.textHead} component="text">
                        {mainArticle.topic.toUpperCase()}
                    </Text>
                    <Text
                        sx={typography.textMain}
                        style={{ color: theme.colors.gray[6] }}
                        component="text"
                    >
                        {`By ${mainArticle.authors[0] || mainArticle.clean_url}`}
                    </Text>
                </Group>
                <Text
                    sx={typography.textHead}
                    style={{ fontSize: "1.5rem", fontWeight: 500 }}
                    component="text"
                >
                    {mainArticle.title}
                </Text>
                <Text sx={typography.textMain} component="p">
                    {mainArticle.excerpt}
                </Text>
            </Group>
        </Box>
    );
};

export default MainCard;
