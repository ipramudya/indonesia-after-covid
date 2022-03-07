import { forwardRef, useRef } from "react";
import { Box, Group, Text, ThemeIcon } from "@mantine/core";
import { typography } from "lib/mantine/styles";
import { FaStar, FaRegStar } from "react-icons/fa";
import type { ReactNode, RefObject } from "react";

import { SelectIcon } from "./Icons";
import formatNum from "lib/numeral/formatNum";
import formatTitle from "utils/formatTitle";
import { useHoverDirty } from "react-use";

interface ISelectItemWithIcon {
    icon: ReactNode;
    label: string;
    value: "tca" | "tcd" | "afba" | "afbd";
    sortedBy: "jumlah_kasus" | "key";
    order: "asc" | "dsc";
}

type TButtonItem = ({
    label,
    quantity,
    isSelected,
}: {
    label?: string;
    quantity?: number;
    isSelected?: boolean;
}) => JSX.Element;

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

const ButtonItem: TButtonItem = ({ label, quantity, isSelected = false }) => {
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
                {isSelected ? (
                    <ThemeIcon
                        sx={(theme) => ({
                            background: "transparent",
                            transition: "all 0.3s ease",
                            color: isHovering ? theme.colors.red[6] : theme.colors.dark[7],
                        })}
                    >
                        <FaStar />
                    </ThemeIcon>
                ) : (
                    <SelectIcon icon={isHovering ? <FaStar /> : <FaRegStar />} />
                )}
                <Text component="span" sx={typography.textMain}>
                    {formatTitle(label as string)}
                </Text>
            </Group>
            <Text component="span" sx={typography.textMain}>
                {formatNum(quantity)}
            </Text>
        </Box>
    );
};

export { SelectItemWithIcon, ButtonItem };
