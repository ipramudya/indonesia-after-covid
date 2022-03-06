import { BsSortAlphaDown, BsSortAlphaDownAlt, BsSortDown, BsSortDownAlt } from "react-icons/bs";
import { ISelectItemWithIcon } from "types";

const dailySpreadMenu: ISelectItemWithIcon[] = [
    {
        label: "Total case",
        value: "tca",
        icon: <BsSortDown />,
    },
    {
        label: "Total case",
        value: "tcd",
        icon: <BsSortDownAlt />,
    },
    {
        label: "Alphabetical",
        value: "afba",
        icon: <BsSortAlphaDown />,
    },
    {
        label: "Alphabetical",
        value: "afbd",
        icon: <BsSortAlphaDownAlt />,
    },
];

export default dailySpreadMenu;
