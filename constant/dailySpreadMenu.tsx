import { ISelectItem } from "types";

const dailySpreadMenu: ISelectItem[] = [
    {
        label: "New cases",
        value: "jumlah_positif",
        color: "#EE5555",
    },
    {
        label: "Healed",
        value: "jumlah_sembuh",
        color: "#40C057",
    },
    {
        label: "Hospitalized",
        value: "jumlah_dirawat",
        color: "#FBC239",
    },
    {
        label: "Fatal",
        value: "jumlah_meninggal",
        color: "#060C14",
    },
];

export default dailySpreadMenu;
