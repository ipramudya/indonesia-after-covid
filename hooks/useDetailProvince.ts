import { NEXT_URL } from "config/url";
import { useEffect, useState } from "react";
import { DetailProvince } from "types/detailProv.types";

export default function useDetailProvince(prov?: string) {
    const [data, setData] = useState<DetailProvince | undefined>();
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const urlParsed = prov?.split(" ").join("_");
        const endpoint = `${NEXT_URL}/api/province/${urlParsed}`;

        const fetcher = async () => {
            const response = await fetch(endpoint);
            const json: DetailProvince = await response.json();
            setData(json);
            setIsLoading(false);
        };

        if (prov) {
            setIsLoading(true);
            fetcher();
        }
    }, [prov]);

    return {
        isLoading,
        data,
    };
}
