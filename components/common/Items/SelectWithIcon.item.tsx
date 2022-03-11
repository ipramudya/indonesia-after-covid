import { forwardRef, memo } from "react";
import { Box, Text } from "@mantine/core";
import type { ReactNode } from "react";

import { typography } from "lib/mantine/styles";
import { SelectIcon } from "../Icons";

interface ISelectItemWithIcon {
    icon: ReactNode;
    label: string;
    value: "tca" | "tcd" | "afba" | "afbd";
    sortedby: "jumlah_kasus" | "key";
    order: "asc" | "dsc";
}

const SelectItemWithIcon = forwardRef<HTMLDivElement | null, ISelectItemWithIcon>(
    ({ icon, label, value, ...others }, ref) => (
        <div ref={ref} {...others}>
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <Text sx={typography.textMain}>{label}</Text>
                <SelectIcon icon={icon} />
            </Box>
        </div>
    )
);

SelectItemWithIcon.displayName = "SelectItemWithIcon";

export default memo(SelectItemWithIcon);
