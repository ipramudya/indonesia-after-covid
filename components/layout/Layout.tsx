import type { FunctionComponent } from "react";
import Head from "next/head";
import { AppShell } from "@mantine/core";
import { appshell } from "lib/mantine/styles";
import Topbar from "./Topbar";
import { SidebarCases } from "./cases/Sidebar";

interface LayoutProps<T> {
    Sidebar: FunctionComponent<T> | JSX.Element;
    description?: string;
    title?: string;
}

const Layout: FunctionComponent<LayoutProps<SidebarCases>> = ({
    Sidebar,
    children,
    description,
    title,
}) => {
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content={description} />
                <meta name="author" content="Pramudya Tamir" />
                <title>{title}</title>
            </Head>
            <AppShell padding="sm" navbar={<>{Sidebar}</>} header={<Topbar />} styles={appshell}>
                {children}
            </AppShell>
        </>
    );
};

Layout.defaultProps = {
    title: "Indonesia After Covid",
    description: "Covid 19 tracker app made from Indonesia to Indonesian",
};

export default Layout;
