import { CSSObject, MantineTheme } from "@mantine/core";

function tooltip(): Partial<Record<"tooltip" | "body" | "wrapper" | "root" | "arrow", CSSObject>> {
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

function markerTooltip(
    theme: MantineTheme
): Partial<Record<"tooltip" | "body" | "wrapper" | "root" | "arrow", CSSObject>> {
    return {
        root: {
            cursor: "pointer",
        },
        body: {
            padding: "12px",
            background: "white",
            boxShadow: theme.shadows.sm,
        },
    };
}

export { tooltip, markerTooltip };
