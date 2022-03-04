import { createContext, useEffect, useReducer } from "react";
import { useLocalStorage } from "react-use";

import { CasesDispatch, CasesProviderProps, CasesState } from "types";
import casesReducer from "./cases.reducer";

const initialState: CasesState = {
    exploredProvince: { isEmpty: true },
    cases: {},
};

const CasesContext = createContext<{ state: CasesState; dispatch: CasesDispatch } | undefined>(
    undefined
);

function CasesProvider({ children, initialProps }: CasesProviderProps) {
    const [state, dispatch] = useReducer(casesReducer, initialState);
    const [storageValue] = useLocalStorage("cases", initialState.exploredProvince);
    const { update, provinces } = initialProps;

    // Get data from local storage and serverside props, then store them inside context
    useEffect(() => {
        dispatch({ type: "setCases", payload: { update, provinces } });
        dispatch({ type: "setProvinceFromStorage", payload: storageValue });
    }, [update, provinces, storageValue]);

    const value = { state, dispatch };
    return <CasesContext.Provider value={value}>{children}</CasesContext.Provider>;
}

export { CasesContext, CasesProvider };
