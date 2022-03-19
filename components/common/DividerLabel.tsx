import { FunctionComponent } from "react";
import { GiSelect } from "react-icons/gi";
import { SelectIcon } from "components/ui/Icons";

interface DividerLabelProps {
    label: string;
}

const DividerLabel: FunctionComponent<DividerLabelProps> = ({ label }) => {
    return (
        <>
            <SelectIcon icon={<GiSelect />} />
            <span>{label}</span>
        </>
    );
};

export default DividerLabel;
