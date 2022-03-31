import { CSSObject } from "@mantine/core";

export default function appshell(): Partial<Record<"body" | "main" | "root", CSSObject>> {
    return {
        root: {
            height: "100%",
            width: "100%",
            position: "absolute",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
        },
        body: {
            overflow: "hidden",
            width: "100%",
            height: "100%",
        },
    };
}
