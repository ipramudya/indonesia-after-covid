import { CSSObject } from "@mantine/core";

export default function tooltip(): Partial<
    Record<"tooltip" | "body" | "wrapper" | "root" | "arrow", CSSObject>
> {
    return {
        root: {
            cursor: "pointer",
            marginTop: "0.5rem",
        },
        body: {
            padding: "6px",
            fontSize: "12px",
            background: "#F8F9FA",
            color: "#212529",
        },
    };
}
