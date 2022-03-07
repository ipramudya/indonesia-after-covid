import { CasesState, CasesActionType } from "types/context.types";

export default function CasesReducer(state: CasesState, action: CasesActionType): CasesState {
    switch (action.type) {
        case "setExploredProvince": {
            return {
                ...state,
                exploredProvince: { isEmpty: false, province: action.payload },
            };
        }
        case "clearExploredProvince": {
            return {
                cases: { ...state.cases },
                exploredProvince: { isEmpty: true },
            };
        }
        case "setProvinceFromStorage": {
            return { ...state, exploredProvince: { ...action.payload } };
        }
        case "setCases": {
            return { ...state, cases: { ...action.payload } };
        }
    }
}
