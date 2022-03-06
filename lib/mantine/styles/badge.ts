import { CSSObject } from "@mantine/core";

export default function badge(): Partial<
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
> {
    return {
        leftSection: {
            marginRight: "5px",
            display: "flex",
        },
        root: {
            padding: "8px",
            fontWeight: 400,
        },
    };
}
