import { CSSObject } from "@mantine/core";

interface ITypography {
    link: CSSObject;
    textMain: CSSObject;
    number: CSSObject;
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
    textMain: {
        fontSize: "14px",
        fontWeight: 400,
    },
};

export default typography;
