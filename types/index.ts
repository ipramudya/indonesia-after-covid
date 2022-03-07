import { ReactChild, ReactNode } from "react";
import { Provinces } from "./provinces.types";
import { Update } from "./update.types";

/* Page props */
export declare interface HomeProps {
    provinces: Provinces;
    update: Update;
}

/* Context things */
export type CasesProviderProps = { children: ReactChild };
export type CasesState = { exploredProvince: { isEmpty: boolean }; cases: any };
export type CasesDispatch = (action: CasesActionType) => void;
export type CasesActionType =
    | { type: "setExploredProvince"; payload: object }
    | { type: "setProvinceFromStorage"; payload: any }
    | { type: "setCases"; payload: { provinces: object; update: object } };
export interface IVaccineState {}

/* Miscellaneous */
export type IProvinceList = Array<{
    doc_count: number;
    jenis_kelamin: Array<{ key: string; doc_count: number }>;
    jumlah_dirawat: number;
    jumlah_kasus: number;
    jumlah_meninggal: number;
    jumlah_sembuh: number;
    kelompok_umur: Array<{ key: string; doc_count: number; usia: object }>;
    key: string;
    lokasi: { lon: number; lat: number };
    penambahan: { positif: number; sembuh: number; meninggal: number };
}>;

export type docType = "jumlah_positif" | "jumlah_sembuh" | "jumlah_meninggal" | "jumlah_dirawat";

/* Dropdown Select Menu */
export declare interface ISelectItem {
    label: string;
    value: docType;
    color: string;
}
[];

export declare interface ISelectItemWithIcon {
    icon: ReactNode;
    label: string;
    value: "tca" | "tcd" | "afba" | "afbd";
    sortedBy: "jumlah_kasus" | "key";
    order: "asc" | "dsc";
}
