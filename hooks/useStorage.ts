import { useCallback, useMemo } from "react";
import { useLocalStorage } from "react-use";
import { CasesState, VaccineState } from "types/context.types";

type storageType = "cases" | "vaccine";
type storageState = Omit<CasesState, "isPopupShown"> | VaccineState;

export default function useStorage(title: storageType = "cases") {
    const initialState = useMemo(() => {
        switch (title) {
            case "cases": {
                return { exploredProvince: { isEmpty: true } };
            }
            case "vaccine": {
                return { selectedLocation: { isEmpty: true } };
            }
        }
    }, [title]);

    const [value, setValue] = useLocalStorage<storageState>(title, initialState);

    const onSetStorage = useCallback((state: storageState) => setValue(state), [setValue]);
    const onClearStorage = useCallback(() => setValue(initialState), [initialState, setValue]);

    console.log(value);

    return {
        getStorageValue: value as typeof initialState,
        onSetStorage,
        onClearStorage,
    };
}
