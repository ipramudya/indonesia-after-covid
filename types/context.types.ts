import { ReactChild } from "react";

import { ListDataEntity } from "./provinces-cases.types";

export type CasesProviderProps = { children: ReactChild };

export interface CasesState {
    exploredProvince: {
        isEmpty: boolean;
        province?: ListDataEntity;
    };
    isPopupShown: boolean;
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
      }
    | { type: "triggerPopup"; payload: boolean };

export interface IVaccineState {}
