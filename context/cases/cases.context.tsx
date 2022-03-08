import useStorage from "hooks/useStorage";
import { createContext, useEffect, useReducer } from "react";
// import { useLocalStorage } from "react-use";
import { CasesState, CasesDispatch, CasesProviderProps } from "types/context.types";

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
    const { getStorageValue } = useStorage();

    // Get data from local storage and serverside props, then store them inside context
    useEffect(() => {
        if (getStorageValue && !getStorageValue.exploredProvince.isEmpty) {
            dispatch({
                type: "setProvinceFromStorage",
                payload: getStorageValue.exploredProvince,
            });
            return;
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const value = { state, dispatch };
    return <CasesContext.Provider value={value}>{children}</CasesContext.Provider>;
}

export { CasesContext, CasesProvider };
