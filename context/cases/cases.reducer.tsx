import { CasesActionType, CasesState } from "types/context.types";

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
                ...state,
                exploredProvince: { isEmpty: true },
            };
        }
        case "triggerPopup": {
            return {
                ...state,
                isPopupShown: action.payload,
            };
        }
        case "setProvinceFromStorage": {
            return { ...state, exploredProvince: action.payload };
        }
    }
}
