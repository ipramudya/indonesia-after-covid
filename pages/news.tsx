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

// import type { GetServerSideProps, NextPage } from "next";
// import { Fragment } from "react";
// import { Layout, MainNews } from "components/layout";
// import { Article, News } from "types/news.types";

// interface NewsPageProps {
//     articles: Article[];
// }

// const NewsPage: NextPage<NewsPageProps> = ({ articles }) => {
//     console.log(articles);

//     return (
//         <Layout Sidebar={<Fragment />}>
//             <MainNews articles={articles} />
//         </Layout>
//     );
// };

// const getServerSideProps: GetServerSideProps = async () => {
//     const fetchOptions: RequestInit = {
//         method: "GET",
//         headers: {
//             "x-api-key": "w1IbBp8vpNH4n_GbTPTYnmJ1Q9gLj2pECcassVDQ5Rk",
//         },
//     };

//     const response = await fetch(
//         "https://api.newscatcherapi.com/v2/search?q=health&lang=id&page=1",
//         fetchOptions
//     );

//     const { articles }: News = await response.json();

//     return {
//         props: {
//             articles,
//         },
//     };
// };

// export { getServerSideProps };
// export default NewsPage;
