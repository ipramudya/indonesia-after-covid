export interface IOverviewLineMenu {
    label: string;
    value: "KASUS" | "MENINGGAL" | "SEMBUH";
    color: string;
}

const overviewLineMenu: IOverviewLineMenu[] = [
    {
        label: "Cases",
        value: "KASUS",
        color: "#EE5555",
    },
    {
        label: "Healed",
        value: "SEMBUH",
        color: "#40C057",
    },
    {
        label: "Fatal",
        value: "MENINGGAL",
        color: "#060C14",
    },
];

export default overviewLineMenu;
