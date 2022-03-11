import { CSSObject, MantineTheme } from "@mantine/core";

interface ITypography {
    link: CSSObject;
    textMain: CSSObject;
    textTiny: CSSObject;
    numberTiny: CSSObject;
    textHead: (theme: MantineTheme) => CSSObject;
    number: CSSObject;
    tooltip: CSSObject;
}

const typography: ITypography = {
    link: {
        cursor: "pointer",

        "&:hover": {
            opacity: "0.7",
        },
    },
    number: {
        fontSize: "16px",
        fontWeight: "bold",
    },
    textHead: (theme) => ({
        fontSize: "16px",
        fontWeight: "bold",
        color: theme.colors.dark[7],
    }),
    textMain: {
        fontSize: "14px",
        fontWeight: 400,
    },
    textTiny: {
        fontSize: "12px",
    },
    numberTiny: {
        fontSize: "12px",
        fontWeight: "bold",
    },
    tooltip: {
        fontSize: "12px",
    },
};

export default typography;