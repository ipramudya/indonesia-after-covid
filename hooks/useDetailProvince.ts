import { NEXT_URL } from "config/url";
import { useCallback, useEffect, useState } from "react";
import { DetailProvince } from "types/detailProv.types";

export default function useDetailProvince(prov?: string) {
    const [data, setData] = useState<DetailProvince | undefined>();
    const [isLoading, setIsLoading] = useState(false);

    const urlParsed = prov?.split(" ").join("_");
    const endpoint = `${NEXT_URL}/api/province/${urlParsed}`;

    const fetcher = useCallback(async () => {
        const response = await fetch(endpoint);
        const json: DetailProvince = await response.json();
        setData(json);
        setIsLoading(false);
    }, [endpoint]);

    useEffect(() => {
        if (prov) {
            setIsLoading(true);
            fetcher();
        }
    }, [prov, fetcher]);

    return {
        isLoading,
        data,
    };
}
