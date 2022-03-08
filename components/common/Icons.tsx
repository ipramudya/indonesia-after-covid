import { ThemeIcon } from "@mantine/core";
import { FunctionComponent, ReactNode } from "react";
import { BsCircleFill } from "react-icons/bs";

interface IListIcon {
    size?: "xs" | "sm" | "md";
    color: "green" | "dark" | "yellow";
}
interface ISelectIcon {
    icon: ReactNode;
    color?: string;
}

const ListIcon: FunctionComponent<IListIcon> = ({ size = "xs", color }) => (
    <ThemeIcon color={color} radius="xl" variant="light" size={size}>
        <BsCircleFill size={8} />
    </ThemeIcon>
);

const SelectIcon: FunctionComponent<ISelectIcon> = ({ icon }) => (
    <ThemeIcon sx={(theme) => ({ background: "transparent", color: theme.colors.dark[7] })}>
        {icon}
    </ThemeIcon>
);

export { ListIcon, SelectIcon };
