import { BsSortAlphaDown, BsSortAlphaDownAlt, BsSortDown, BsSortDownAlt } from "react-icons/bs";

type IDailySpreadMenu = {
    label: string;
    value: "tca" | "tcd" | "afba" | "afbd";
    icon: JSX.Element;
}[];

const dailySpreadMenu: IDailySpreadMenu = [
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
