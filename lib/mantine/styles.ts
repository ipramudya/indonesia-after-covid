import { createStyles, CSSObject, MantineTheme } from "@mantine/core";

const useStyles = createStyles((theme: MantineTheme) => ({
    link: {
        cursor: "pointer",

        "&:hover": {
            opacity: "0.7",
        },
    },
}));

export default useStyles;
