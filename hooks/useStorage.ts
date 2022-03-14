import { useCallback, useMemo } from "react";
import { useLocalStorage } from "react-use";
import { CasesState } from "types/context.types";

export default function useStorage() {
    const initialState = useMemo(() => ({ exploredProvince: { isEmpty: true } }), []);
    const [value, setValue] = useLocalStorage<Omit<CasesState, "isPopupShown">>(
        "cases",
        initialState
    );

    const onSetStorage = useCallback(
        (state: Omit<CasesState, "isPopupShown">) => setValue(state),
        [setValue]
    );
    const onClearStorage = useCallback(() => setValue(initialState), [initialState, setValue]);

    return {
        getStorageValue: value,
        onSetStorage,
        onClearStorage,
    };
}
