import { CSSObject, MantineTheme } from "@mantine/core";

interface IBox {
    case: CSSObject;
    titleAndMenu: (theme: MantineTheme) => CSSObject;
    tooltipWrapper: CSSObject;
}

const box: IBox = {
    case: {
        display: "flex",
        justifyContent: "space-between",
        marginBottom: "0.5rem",
    },
    titleAndMenu: (theme) => ({
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: theme.spacing.md,
    }),
    tooltipWrapper: {
        background: "rgba(255, 255, 255, 0.7)",
        padding: "5px",
    },
};

export default box;
