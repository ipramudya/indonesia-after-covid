import { NEXT_URL } from "config/url";
import { useCases } from "context";
import { useCallback, useEffect, useState, useMemo } from "react";
import { DetailProvince } from "types/detailProv-cases.types";

export default function useDetailProvince() {
    const [data, setData] = useState<DetailProvince | undefined>();
    const [isLoading, setIsLoading] = useState(false);
    const {
        state: { exploredProvince },
    } = useCases();

    const urlParsed = exploredProvince.province?.key.split(" ").join("_");
    const endpoint = `${NEXT_URL}/api/province/${urlParsed}`;

    const fetcher = useCallback(async () => {
        const response = await fetch(endpoint);
        const json: DetailProvince = await response.json();
        setData(json);
        setIsLoading(false);
    }, [endpoint]);

    useEffect(() => {
        if (exploredProvince.province?.key) {
            setIsLoading(true);
            fetcher();
        }
    }, [exploredProvince.province?.key, fetcher]);

    const value = useMemo(() => ({ isLoading, data }), [data, isLoading]);
    return value;
}
