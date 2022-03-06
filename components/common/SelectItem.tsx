import { Box, Text } from "@mantine/core";
import { typography } from "lib/mantine/styles";
import { forwardRef } from "react";
import { ISelectItemWithIcon } from "types";
import { SelectIcon } from "./Icons";

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

export { SelectItemWithIcon };
