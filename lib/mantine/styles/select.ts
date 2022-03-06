import { CSSObject, MantineTheme } from "@mantine/core";
import { BaseSelectStylesNames } from "@mantine/core/lib/components/Select/types";

export default function select(
    theme: MantineTheme
): Partial<Record<BaseSelectStylesNames, CSSObject>> {
    return {
        root: {
            width: "150px",
        },
        selected: {
            background: theme.colors.dark[1],
            color: theme.colors.dark,
        },
    };
}
