import { CSSObject } from "@mantine/core";

const badge = (): Partial<
    Record<
        | "gradient"
        | "outline"
        | "light"
        | "dot"
        | "filled"
        | "rightSection"
        | "root"
        | "inner"
        | "leftSection",
        CSSObject
    >
> => ({
    leftSection: {
        marginRight: "5px",
        display: "flex",
    },
    root: {
        padding: "8px",
        fontWeight: 400,
    },
});

export default badge;
