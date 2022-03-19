import { VaccineReducer } from "types/context.types";

const VaccineReducer: VaccineReducer = (state, action) => {
    switch (action.type) {
        case "setVaccineLocation": {
            return {
                ...state,
                selectedLocation: { isEmpty: false, location: { ...action.payload } },
            };
        }
        case "clearVaccineLocation": {
            return {
                ...state,
                selectedLocation: { isEmpty: true },
            };
        }
        case "setLocationFromStorage": {
            return {
                ...state,
                selectedLocation: { ...action.payload },
            };
        }
        case "setVaccineDetail": {
            return {
                ...state,
                detail: { isEmpty: false, ...action.payload },
            };
        }
        case "clearVaccineDetail": {
            return {
                ...state,
                detail: { isEmpty: true },
            };
        }
        default: {
            return state;
        }
    }
};

export default VaccineReducer;
