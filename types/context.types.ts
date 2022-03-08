import { ReactChild } from "react";

import { ListDataEntity } from "./provinces.types";

export type CasesProviderProps = { children: ReactChild };

export interface CasesState {
    exploredProvince: {
        isEmpty: boolean;
        province?: ListDataEntity;
    };
}

export type CasesDispatch = (action: CasesActionType) => void;

export type CasesActionType =
    | { type: "setExploredProvince"; payload: ListDataEntity }
    | { type: "clearExploredProvince" }
    | {
          type: "setProvinceFromStorage";
          payload: {
              isEmpty: boolean;
              province?: ListDataEntity | undefined;
          };
      };

export interface IVaccineState {}
