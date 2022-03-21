import { Center, Text } from "@mantine/core";
import { Layout } from "components/layout";
import { typography } from "lib/mantine/styles";
import type { NextPage } from "next";

interface NewsPageProps {}

const NewsPage: NextPage<NewsPageProps> = ({}) => {
    return (
        <Layout Sidebar={<></>}>
            <Center mt="lg">
                <Text sx={typography.textHead}>News page will be coming soon !</Text>
            </Center>
        </Layout>
    );
};

export default NewsPage;
