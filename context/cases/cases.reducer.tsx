import { CasesReducer } from "types/context.types";

const CasesReducer: CasesReducer = (state, action) => {
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
};

export default CasesReducer;
