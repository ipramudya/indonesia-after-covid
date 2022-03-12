import { ThemeIcon } from "@mantine/core";
import type { FunctionComponent, ReactNode } from "react";

interface SelectIconProps {
    icon: ReactNode;
    color?: string;
}

const SelectIcon: FunctionComponent<SelectIconProps> = ({ icon }) => (
    <ThemeIcon sx={(theme) => ({ background: "transparent", color: theme.colors.dark[7] })}>
        {icon}
    </ThemeIcon>
);

export default SelectIcon;
