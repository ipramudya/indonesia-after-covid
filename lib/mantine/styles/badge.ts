import { CSSObject } from "@mantine/core";

export default function badge(): Partial<Record<"root" | "leftSection", CSSObject>> {
    return {
        root: {
            padding: "10px 8px",
            fontWeight: 400,
        },
        leftSection: {
            marginRight: "5px",
            display: "flex",
            fontSize: "14px",
        },
    };
}
