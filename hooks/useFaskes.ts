import axios from "axios";
import { useVaccine } from "context";
import { useCallback, useEffect, useMemo, useState } from "react";
import { Faskes } from "types/faskes-types";

export default function useFaskes() {
    const [data, setData] = useState<Faskes | undefined>();
    const [isLoading, setIsLoading] = useState(false);
    const {
        state: { selectedLocation },
    } = useVaccine();

    const parseStringToUrl = (location: string | undefined) => {
        if (!location) return;

        return location.split(" ").join("+");
    };

    const endpoint = `https://kipi.covid19.go.id/api/get-faskes-vaksinasi?skip=0&province=${parseStringToUrl(
        selectedLocation.location?.province
    )}&city=${parseStringToUrl(selectedLocation.location?.district)}`;

    const fetcher = useCallback(async () => {
        const response = await axios.get(endpoint);

        if (response.status === 200) {
            setData(response.data);
            setIsLoading(false);
        }
    }, [endpoint]);

    useEffect(() => {
        if (!selectedLocation.isEmpty) {
            setIsLoading(true);
            fetcher();
        }
    }, [fetcher, selectedLocation.isEmpty]);

    const value = useMemo(() => ({ data, isLoading }), [data, isLoading]);
    return value;
}
