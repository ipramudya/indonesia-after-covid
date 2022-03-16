import { createContext, useMemo, useReducer } from "react";
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

    const value = useMemo(() => ({ state, dispatch }), [state]);
    return <VaccineContext.Provider value={value}>{children}</VaccineContext.Provider>;
}

export { VaccineContext, VaccineProvider };
