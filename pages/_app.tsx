import type { AppProps } from "next/app";
import { MantineProvider } from "@mantine/core";

import { CasesProvider } from "context/cases/cases.context";
import theme from "lib/mantine/theme";
import "styles/recharts.css";
import "styles/mantine.css";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <MantineProvider withNormalizeCSS withGlobalStyles theme={theme}>
            <CasesProvider>
                <Component {...pageProps} />
            </CasesProvider>
        </MantineProvider>
    );
}

export default MyApp;
