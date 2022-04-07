import { MantineProvider } from "@mantine/core";
import { CasesProvider } from "context/cases/cases.context";
import { VaccineProvider } from "context/vaccine/vaccine.context";
import theme from "lib/mantine/theme";
import "mapbox-gl/dist/mapbox-gl.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import NProgress from "nprogress";
import { useEffect } from "react";
import "styles/mantine.css";
import "styles/mapbox.css";
import "styles/nprogress.css";
import "styles/recharts.css";

function MyApp({ Component, pageProps }: AppProps) {
    const router = useRouter();

    useEffect(() => {
        const handleStart = () => {
            NProgress.start();
        };
        const handleStop = () => {
            NProgress.done();
        };

        router.events.on("routeChangeStart", handleStart);
        router.events.on("routeChangeComplete", handleStop);
        router.events.on("routeChangeError", handleStop);

        return () => {
            router.events.off("routeChangeStart", handleStart);
            router.events.off("routeChangeComplete", handleStop);
            router.events.off("routeChangeError", handleStop);
        };
    }, [router]);

    return (
        <MantineProvider withNormalizeCSS withGlobalStyles theme={theme}>
            <CasesProvider>
                <VaccineProvider>
                    <Component {...pageProps} />
                </VaccineProvider>
            </CasesProvider>
        </MantineProvider>
    );
}

export default MyApp;
