import { forwardRef, RefObject, useRef } from "react";
import { Box, Group, Text } from "@mantine/core";
import { typography } from "lib/mantine/styles";
import { FaStar, FaRegStar } from "react-icons/fa";

import { ISelectItemWithIcon } from "types";
import { SelectIcon } from "./Icons";
import formatNum from "lib/numeral/formatNum";
import formatTitle from "utils/formatTitle";
import { useHoverDirty } from "react-use";

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

const ButtonItem = ({ label, quantity }: { label: string; quantity: number }) => {
    const btnref = useRef() as RefObject<HTMLDivElement>;
    const isHovering = useHoverDirty(btnref);

    return (
        <Box
            ref={btnref}
            sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
            }}
        >
            <Group spacing={isHovering ? 3 : 0} sx={{ transition: "all 0.3s ease" }}>
                <SelectIcon icon={isHovering ? <FaStar /> : <FaRegStar />} />
                <Text component="span" sx={typography.textMain}>
                    {formatTitle(label)}
                </Text>
            </Group>
            <Text component="span" sx={typography.textMain}>
                {formatNum(quantity)}
            </Text>
        </Box>
    );
};

export { SelectItemWithIcon, ButtonItem };
