import { useMemo } from "react";
import formatTitle from "utils/formatTitle";

export default function useMemoizeSelect(value: any[]) {
    const memoizedValue = useMemo(
        () =>
            value.map((individual) => ({
                label: formatTitle(individual.value),
                value: individual.key,
            })),
        [value]
    );

    return memoizedValue;
}
