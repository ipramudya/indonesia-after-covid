import { ReactNode } from "react";

/* Page props */
export declare interface HomeProps {
    provinces: object;
    update: {
        data: any;
        penambahan: any;
        harian: object[];
        total: any;
    };
}

/* Context things */
export type CasesState = { exploredProvince: { isEmpty: boolean }; cases: any };

export type CasesDispatch = (action: CasesActionType) => void;

export type CasesActionType =
    | { type: "setExploredProvince"; payload: object }
    | { type: "setProvinceFromStorage"; payload: any }
    | { type: "setCases"; payload: { provinces: object; update: object } };

export type CasesProviderProps = {
    children: ReactNode;
    readonly initialProps: HomeProps;
};

export interface IVaccineState {}
