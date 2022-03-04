import { CasesActionType, CasesState } from "types";

export default function CasesReducer(state: CasesState, action: CasesActionType) {
    switch (action.type) {
        case "setExploredProvince": {
        }
        case "setProvinceFromStorage": {
            return { ...state, exploredProvince: { ...action.payload } };
        }
        case "setCases": {
            return { ...state, cases: { ...action.payload } };
        }
        default: {
            return state;
        }
    }
}
