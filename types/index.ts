import { ReactNode } from "react";

export declare interface HomeProps {
    provinces: object;
    update: {
        data: object;
        penambahan: object;
        harian: object[];
        total: object;
    };
}

/* Context things */
export type CasesState = { exploredProvince: { isEmpty: boolean }; cases: object };

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
