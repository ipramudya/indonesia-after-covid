import { ReactNode } from "react";
import { BsSortAlphaDown, BsSortAlphaDownAlt, BsSortDown, BsSortDownAlt } from "react-icons/bs";

interface ISelectItemWithIcon {
    icon: ReactNode;
    label: string;
    value: "tca" | "tcd" | "afba" | "afbd";
    sortedby: "jumlah_kasus" | "key";
    order: "asc" | "dsc";
}

const browseProvinceMenu: ISelectItemWithIcon[] = [
    {
        label: "Total case",
        value: "tca",
        sortedby: "jumlah_kasus",
        order: "asc",
        icon: <BsSortDown />,
    },
    {
        label: "Total case",
        sortedby: "jumlah_kasus",
        value: "tcd",
        order: "dsc",
        icon: <BsSortDownAlt />,
    },
    {
        label: "Alphabetical",
        sortedby: "key",
        value: "afba",
        order: "asc",
        icon: <BsSortAlphaDown />,
    },
    {
        label: "Alphabetical",
        sortedby: "key",
        value: "afbd",
        order: "dsc",
        icon: <BsSortAlphaDownAlt />,
    },
];

export default browseProvinceMenu;
