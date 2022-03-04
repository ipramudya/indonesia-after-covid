import { ThemeIcon } from "@mantine/core";
import { FunctionComponent } from "react";
import { BsCircleFill } from "react-icons/bs";

interface IListIcon {
    size?: "xs" | "sm" | "md";
    color: "green" | "dark" | "yellow";
}

const ListIcon: FunctionComponent<IListIcon> = ({ size = "xs", color }) => {
    return (
        <ThemeIcon color={color} radius="xl" variant="light" size={size}>
            <BsCircleFill size={8} />
        </ThemeIcon>
    );
};

export { ListIcon };
