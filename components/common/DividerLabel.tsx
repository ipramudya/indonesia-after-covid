import { FunctionComponent } from "react";
import { IoIosSearch } from "react-icons/io";
import { SelectIcon } from "./Icons";

const DividerLabel: FunctionComponent = () => {
    return (
        <>
            <SelectIcon icon={<IoIosSearch />} />
            <span>search result</span>
        </>
    );
};

export default DividerLabel;
