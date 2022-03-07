import { CSSObject } from "@mantine/core";

export default function button(): Partial<Record<"label" | "root", CSSObject>> {
    return {
        label: { width: "100%" },
        root: { padding: "0 12px", borderColor: "#ced4da" },
    };
}
