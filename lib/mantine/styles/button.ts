import { CSSObject, MantineTheme } from "@mantine/core";

function button(): Partial<Record<"label" | "root", CSSObject>> {
    return {
        label: { width: "100%" },
        root: {
            padding: "0 12px",
            borderColor: "#ced4da",
            transition: "all 0.3s ease",

            "&:hover": {
                borderColor: "gray",
            },
        },
    };
}

function selectedButton(theme: MantineTheme): Partial<Record<"label" | "root", CSSObject>> {
    return {
        label: { width: "100%" },
        root: {
            padding: "0 12px",
            borderColor: "gray",
            transition: "all 0.3s ease",

            "&:hover": {
                borderColor: theme.colors.red[7],
            },

            "&:hover span": {
                transition: "all 0.3s ease",
                color: theme.colors.red[7],
            },
        },
    };
}

export { button, selectedButton };
