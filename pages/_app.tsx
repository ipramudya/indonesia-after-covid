import type { AppProps } from "next/app";
import { MantineProvider } from "@mantine/core";

import { CasesProvider } from "context/cases/cases.context";
import { VaccineProvider } from "context/vaccine/vaccine.context";
import theme from "lib/mantine/theme";
import "mapbox-gl/dist/mapbox-gl.css";
import "styles/recharts.css";
import "styles/mantine.css";
import "styles/mapbox.css";

function MyApp({ Component, pageProps }: AppProps) {
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
