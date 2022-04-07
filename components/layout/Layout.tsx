import type { FunctionComponent } from "react";
import Head from "next/head";
import { AppShell } from "@mantine/core";
import { appshell } from "lib/mantine/styles";
import Topbar from "./Topbar";
import { SidebarCasesProps } from "./cases/Sidebar";
import { SidebarVaccineProps } from "./vaccine/Sidebar";
import NotSupported from "./notSupported";
import useMedia from "use-media";

interface LayoutProps<T> {
    Sidebar: FunctionComponent<T> | JSX.Element;
    description?: string;
    title?: string;
}

const Layout: FunctionComponent<LayoutProps<SidebarCasesProps | SidebarVaccineProps>> = ({
    Sidebar,
    children,
    description,
    title,
}) => {
    const isWide = useMedia({ minWidth: 900 });

    console.log(isWide);

    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content={description} />
                <meta name="author" content="Pramudya Tamir" />
                <title>{title}</title>
            </Head>
            {isWide ? (
                <AppShell
                    padding="sm"
                    navbar={<>{Sidebar}</>}
                    header={<Topbar />}
                    styles={appshell}
                >
                    {children}
                </AppShell>
            ) : (
                <NotSupported />
            )}
        </>
    );
};

Layout.defaultProps = {
    title: "Indonesia After Covid",
    description: "Covid 19 tracker app made from Indonesia to Indonesian",
};

export default Layout;
