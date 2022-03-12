import { FunctionComponent } from "react";
import { GiSelect } from "react-icons/gi";
import { SelectIcon } from "components/ui/Icons";

const DividerLabel: FunctionComponent = () => {
    return (
        <>
            <SelectIcon icon={<GiSelect />} />
            <span>selected province</span>
        </>
    );
};

export default DividerLabel;
