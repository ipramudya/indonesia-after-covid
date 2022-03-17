import { useStorage } from "hooks";
import { createContext, useMemo, useReducer } from "react";
import { useEffectOnce } from "react-use";
import { VaccineDispatch, VaccineProviderProps, VaccineState } from "types/context.types";
import VaccineReducer from "./vaccine.reducer";

const initialState: VaccineState = {
    selectedLocation: {
        isEmpty: true,
    },
};

const VaccineContext = createContext<
    { state: VaccineState; dispatch: VaccineDispatch } | undefined
>(undefined);

function VaccineProvider({ children }: VaccineProviderProps) {
    const [state, dispatch] = useReducer(VaccineReducer, initialState);
    const { getStorageValue } = useStorage("vaccine");

    useEffectOnce(() => {
        if (getStorageValue && !getStorageValue.exploredProvince?.isEmpty) {
            dispatch({
                type: "setLocationFromStorage",
                payload: getStorageValue.selectedLocation as any,
            });
        }
    });

    const value = useMemo(() => ({ state, dispatch }), [state]);
    return <VaccineContext.Provider value={value}>{children}</VaccineContext.Provider>;
}

export { VaccineContext, VaccineProvider };
