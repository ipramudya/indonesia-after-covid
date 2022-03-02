import type { AppProps } from "next/app";
import { MantineProvider } from "@mantine/core";

import theme from "lib/mantine/theme";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <MantineProvider withNormalizeCSS withGlobalStyles theme={theme}>
            <Component {...pageProps} />
        </MantineProvider>
    );
}

export default MyApp;
