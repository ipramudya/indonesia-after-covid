import { FunctionComponent, memo } from "react";
import { ListDataEntity } from "types/provinces-cases.types";
import CovidCase from "../CovidCase";

interface SummaryProps {
    province: ListDataEntity | undefined | any;
}

interface StaticData {
    color: "green" | "dark" | "yellow" | "#ee5555";
    title: "Healed" | "Fatal" | "Hospitalized" | "Confirmed case";
    increase: string;
    total: string;
}

const staticData: StaticData[] = [
    {
        title: "Confirmed case",
        increase: "positif",
        total: "jumlah_kasus",
        color: "#ee5555",
    },
    {
        title: "Healed",
        increase: "sembuh",
        total: "jumlah_sembuh",
        color: "green",
    },
    {
        title: "Fatal",
        increase: "meninggal",
        total: "jumlah_meninggal",
        color: "dark",
    },
];

const Summary: FunctionComponent<SummaryProps> = ({ province }) => {
    return (
        <div>
            {staticData.map((data) => {
                return (
                    <CovidCase
                        key={data.increase}
                        color={data.color}
                        title={data.title}
                        increase={province?.penambahan[data.increase]}
                        total={province?.[data.total]}
                        type="tiny"
                    />
                );
            })}
        </div>
    );
};

export default memo(Summary);
