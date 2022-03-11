import { ReactNode } from "react";
import { BsSortAlphaDown, BsSortAlphaDownAlt, BsSortDown, BsSortDownAlt } from "react-icons/bs";

interface ISelectItemWithIcon {
    icon: ReactNode;
    label: string;
    value: "tca" | "tcd" | "afba" | "afbd";
    sortedBy: "jumlah_kasus" | "key";
    order: "asc" | "dsc";
}

const browseProvinceMenu: ISelectItemWithIcon[] = [
    {
        label: "Total case",
        value: "tca",
        sortedBy: "jumlah_kasus",
        order: "asc",
        icon: <BsSortDown />,
    },
    {
        label: "Total case",
        sortedBy: "jumlah_kasus",
        value: "tcd",
        order: "dsc",
        icon: <BsSortDownAlt />,
    },
    {
        label: "Alphabetical",
        sortedBy: "key",
        value: "afba",
        order: "asc",
        icon: <BsSortAlphaDown />,
    },
    {
        label: "Alphabetical",
        sortedBy: "key",
        value: "afbd",
        order: "dsc",
        icon: <BsSortAlphaDownAlt />,
    },
];

export default browseProvinceMenu;