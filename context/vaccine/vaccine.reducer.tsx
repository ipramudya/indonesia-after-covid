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
    }
};

export default VaccineReducer;
