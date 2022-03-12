import { ThemeIcon } from "@mantine/core";
import { FunctionComponent } from "react";
import { BsCircleFill } from "react-icons/bs";

interface ListIconProps {
    size?: "xs" | "sm" | "md";
    color: "green" | "dark" | "yellow" | "#ee5555";
}

const ListIcon: FunctionComponent<ListIconProps> = ({ size = "xs", color }) => (
    <ThemeIcon color={color} radius="xl" variant="light" size={size}>
        <BsCircleFill size={8} />
    </ThemeIcon>
);

export default ListIcon;
