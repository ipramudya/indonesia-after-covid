import { CSSObject } from "@mantine/core";

const tooltip = (): Partial<
    Record<"tooltip" | "body" | "wrapper" | "root" | "arrow", CSSObject>
> => ({
    root: {
        cursor: "pointer",
        marginTop: "0.5rem",
    },
    body: {
        padding: "5px",
        fontSize: "12px",
        background: "#F8F9FA",
        color: "#212529",
    },
});

export default tooltip;
