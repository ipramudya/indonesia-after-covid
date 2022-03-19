import { ThemeIcon } from "@mantine/core";
import { FunctionComponent } from "react";
import { BsCircleFill } from "react-icons/bs";

interface ListIconProps {
    size?: "xs" | "sm" | "md";
    color: string;
}

const ListIcon: FunctionComponent<ListIconProps> = ({ size = "xs", color }) => (
    <ThemeIcon
        color={color}
        sx={{ color: color === "#20c589" ? "#20c589" : "" }}
        radius="xl"
        variant="light"
        size={size}
    >
        <BsCircleFill size={8} />
    </ThemeIcon>
);

export default ListIcon;
