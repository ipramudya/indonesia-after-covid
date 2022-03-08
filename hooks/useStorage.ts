import { useLocalStorage } from "react-use";
import { CasesState } from "types/context.types";

export default function useStorage() {
    const initialState = { exploredProvince: { isEmpty: true }, cases: {} };
    const [value, setValue] = useLocalStorage<CasesState>("cases", initialState);

    const onSetStorage = (state: CasesState) => {
        setValue(state);
        return;
    };

    const onClearStorage = () => {
        setValue(initialState);
    };

    return {
        getStorageValue: value,
        onSetStorage,
        onClearStorage,
    };
}
