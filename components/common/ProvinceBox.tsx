import { Button } from "@mantine/core";
import { button, selectedButton } from "lib/mantine/styles/button";
import { FunctionComponent, memo } from "react";
import { ButtonItem } from "./Items";

interface ProvinceBoxProps {
    provName: string;
    quantity: number;
    onProvinceChange: (target: string | null) => void;
    isSelected?: boolean;
}

const ProvinceBox: FunctionComponent<ProvinceBoxProps> = ({
    provName,
    quantity,
    onProvinceChange,
    isSelected = false,
}) => {
    const onProvinceBoxSelected = () => {
        if (isSelected) {
            onProvinceChange(null);
            return;
        }

        onProvinceChange(provName);
    };

    console.log(isSelected);

    return (
        <Button
            variant="outline"
            color="gray"
            fullWidth
            styles={isSelected ? selectedButton : button}
            onClick={onProvinceBoxSelected}
        >
            <ButtonItem label={provName} quantity={quantity} isSelected={isSelected} />
        </Button>
    );
};

export default memo(ProvinceBox);
