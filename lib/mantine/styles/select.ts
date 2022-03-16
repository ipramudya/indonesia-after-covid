import { CSSObject, MantineTheme } from "@mantine/core";
import { BaseSelectStylesNames } from "@mantine/core/lib/components/Select/types";

function select(theme: MantineTheme): Partial<Record<BaseSelectStylesNames, CSSObject>> {
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

function selectSmall(): Partial<Record<BaseSelectStylesNames, CSSObject>> {
    return {
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
    };
}

function selectClearable(theme: MantineTheme): Partial<Record<BaseSelectStylesNames, CSSObject>> {
    return {
        rightSection: {
            "> button": {
                transition: "all ease .3s",

                "&:hover": {
                    color: theme.colors.red,
                },
            },
        },
    };
}

export { select, selectSmall, selectClearable };
