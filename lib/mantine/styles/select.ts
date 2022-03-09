import { CSSObject, MantineTheme } from "@mantine/core";
import { BaseSelectStylesNames } from "@mantine/core/lib/components/Select/types";

export default function select(
    theme: MantineTheme
): Partial<Record<BaseSelectStylesNames, CSSObject>> {
    return {
        root: {
            width: "145px",
        },
        selected: {
            background: theme.colors.dark[1],
            color: theme.colors.dark,
        },
    };
}

export const selectSmall = (): Partial<Record<BaseSelectStylesNames, CSSObject>> => ({
    root: {
        width: "90px",
    },
    rightSection: {
        width: "25px",
        padding: "0 10px 0 0",
    },
    defaultVariant: {
        paddingRight: "unset",
    },
});
