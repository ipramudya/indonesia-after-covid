import { ListDataEntity } from "types/provinces-cases.types";

type TSort<A> = (arr: A, sortedKey: "jumlah_kasus" | "key", type: "asc" | "dsc") => A;

const sort: TSort<ListDataEntity[] | null | undefined> = (arr, sortedKey, type) => {
    let newArray;
    if (sortedKey === "key") {
        newArray = arr?.sort((a, b) => {
            if (a.key < b.key) {
                return type === "asc" ? -1 : 1;
            } else {
                return type === "dsc" ? -1 : 1;
            }
        });
        return newArray;
    } else {
        newArray = arr?.sort((a, b) => {
            if (type === "asc") {
                return b.jumlah_kasus - a.jumlah_kasus;
            } else {
                return a.jumlah_kasus - b.jumlah_kasus;
            }
        });
        return newArray;
    }
};

export default sort;
