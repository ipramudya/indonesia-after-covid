import { createContext, ReactChild, useEffect, useReducer } from "react";
import { useLocalStorage } from "react-use";

import { CasesDispatch, CasesState, CasesProviderProps } from "types";
import casesReducer from "./cases.reducer";

const initialState: CasesState = {
    exploredProvince: { isEmpty: true },
    cases: {},
};

const CasesContext = createContext<{ state: CasesState; dispatch: CasesDispatch } | undefined>(
    undefined
);

function CasesProvider({ children }: CasesProviderProps) {
    const [state, dispatch] = useReducer(casesReducer, initialState);
    const [storageValue] = useLocalStorage("cases", initialState.exploredProvince);

    // Get data from local storage and serverside props, then store them inside context
    useEffect(() => {
        dispatch({ type: "setProvinceFromStorage", payload: storageValue });
    }, [storageValue]);

    const value = { state, dispatch };
    return <CasesContext.Provider value={value}>{children}</CasesContext.Provider>;
}

export { CasesContext, CasesProvider };
