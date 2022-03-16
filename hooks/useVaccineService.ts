import axios from "axios";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useEffectOnce } from "react-use";
import { Result } from "types/location-vaccine.types";

export default function useVaccineService() {
    const [allProvinces, setAllProvinces] = useState<Result[]>([]);
    const [provinceAsQuery, setProvinceAsQuery] = useState("");
    const [relatedDistricts, setRelatedDistricts] = useState<Result[]>([]);

    const fetchAllProvinces = useCallback(async () => {
        const res = await axios.post("https://kipi.covid19.go.id/api/get-province");

        if (res.status === 200) {
            setAllProvinces(res.data.results);
        }
    }, []);

    const fetchDistricts = useCallback(async (selectedProvince: string) => {
        const parsedForQuerying = selectedProvince.split(" ").join("+");
        const res = await axios.post(
            `https://kipi.covid19.go.id/api/get-city?start_id=${parsedForQuerying}`
        );

        if (res.status === 200) {
            setRelatedDistricts(res.data.results);
        }
    }, []);

    useEffectOnce(() => {
        fetchAllProvinces();
    });

    useEffect(() => {
        if (provinceAsQuery) {
            fetchDistricts(provinceAsQuery);
            return;
        }
    }, [fetchDistricts, provinceAsQuery]);

    const onFetchDistricts = (sentProvince: string) => {
        if (!sentProvince) {
            setRelatedDistricts([]);
        }

        setProvinceAsQuery(sentProvince);
    };

    const value = useMemo(
        () => ({ allProvinces, relatedDistricts, onFetchDistricts }),
        [allProvinces, relatedDistricts]
    );
    return value;
}
