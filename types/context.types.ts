import { ReactChild, Ref } from "react";
import { Datum } from "./faskes-types";

import { ListDataEntity } from "./provinces-cases.types";

// Cases Stuff
export type CasesProviderProps = { children: ReactChild };
export interface CasesState {
    exploredProvince: {
        isEmpty: boolean;
        province?: ListDataEntity;
    };
    isPopupShown: boolean;
}
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
export type CasesDispatch = (action: CasesActionType) => void;
export type CasesReducer = (state: CasesState, action: CasesActionType) => CasesState;

// Vaccine Stuff
export type VaccineProviderProps = CasesProviderProps;
export interface VaccineState {
    selectedLocation: {
        isEmpty: boolean;
        location?: {
            province: string;
            district: string;
        };
    };
    locationRef?: Ref<HTMLInputElement> | any;
    detail: Datum | { isEmpty: boolean };
}
export type VaccineActionType =
    | {
          type: "setVaccineLocation";
          payload: { province: string; district: string };
      }
    | { type: "clearVaccineLocation" }
    | { type: "setVaccineDetail"; payload: Datum }
    | { type: "clearVaccineDetail" }
    | {
          type: "setLocationFromStorage";
          payload: {
              isEmpty: boolean;
              location: {
                  district: string;
                  province: string;
              };
          };
      };
export type VaccineDispatch = (action: VaccineActionType) => void;
export type VaccineReducer = (state: VaccineState, action: VaccineActionType) => VaccineState;
