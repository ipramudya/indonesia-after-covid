import { ReactChild } from "react";

import { ListDataEntity, Provinces } from "./provinces.types";
import { Update } from "./update.types";

export type CasesProviderProps = { children: ReactChild };

export interface CasesState {
    exploredProvince: {
        isEmpty: boolean;
        province?: ListDataEntity;
    };
    cases?: any;
}

export type CasesDispatch = (action: CasesActionType) => void;

export type CasesActionType =
    | { type: "setExploredProvince"; payload: ListDataEntity }
    | { type: "clearExploredProvince" }
    | { type: "setCases"; payload: { provinces: Provinces; update: Update } }
    | {
          type: "setProvinceFromStorage";
          payload: {
              isEmpty: boolean;
              province?: ListDataEntity | undefined;
          };
      };

export interface IVaccineState {}
