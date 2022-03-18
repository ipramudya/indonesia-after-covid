import { Button } from "@mantine/core";
import { button, selectedButton } from "lib/mantine/styles";
import { FunctionComponent, memo, ReactChild } from "react";

interface ProvinceBoxProps {
    provName: string;
    onClick: (target: string | null) => void;
    isSelected?: boolean;
    children: ReactChild;
}

const ProvinceBox: FunctionComponent<ProvinceBoxProps> = ({
    provName,
    onClick,
    isSelected = false,
    children,
}) => {
    const onProvinceBoxSelected = () => {
        if (isSelected) {
            onClick(null);
            return;
        }
        onClick(provName);
    };

    return (
        <Button
            variant="outline"
            color="gray"
            fullWidth
            styles={isSelected ? selectedButton : button}
            onClick={onProvinceBoxSelected}
        >
            {children}
        </Button>
    );
};

export default memo(ProvinceBox);
