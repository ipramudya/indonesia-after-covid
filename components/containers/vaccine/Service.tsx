import { useState } from "react";
import type { FunctionComponent } from "react";
import { Divider, Select, Text } from "@mantine/core";
import { IoLocationSharp } from "react-icons/io5";

import { useMemoizeSelect, useVaccineService } from "hooks";
import { typography } from "lib/mantine/styles";

interface ServiceProps {}

const Service: FunctionComponent<ServiceProps> = ({}) => {
    const [selectedProvince, setSelectedProvince] = useState("");
    const [selectedDistrict, setSelectedDistrict] = useState("");

    const { allProvinces, onFetchDistricts, relatedDistricts } = useVaccineService();

    // format all provinces for select menu
    const formattedProvinces = useMemoizeSelect(allProvinces);

    // format all districts for select menu
    const formattedDistricts = useMemoizeSelect(relatedDistricts);

    const onSelectProvince = (province: string | null) => {
        if (!province) {
            setSelectedProvince("");
            setSelectedDistrict("");
            return;
        }

        onFetchDistricts(province);
        setSelectedProvince(province);
        return;
    };

    const onSelectDistrict = (district: string | null) => {
        if (!district) {
            setSelectedDistrict("");
            return;
        }

        setSelectedDistrict(district);
        return;
    };

    return (
        <>
            <Text sx={typography.textHead} mb="sm">
                Vaccine service
            </Text>
            <Text sx={typography.textMain}>
                Find your exact location to get the right vaccination service for you.
            </Text>
            <Divider my="sm" variant="dashed" />
            <Select
                data={formattedProvinces}
                value={selectedProvince}
                label="Choose province"
                placeholder="search province name"
                icon={<IoLocationSharp />}
                onChange={onSelectProvince}
                searchable
                nothingFound="province does not exist :("
                clearable
                mb="sm"
            />
            <Select
                data={formattedDistricts}
                value={selectedDistrict}
                label="Choose district"
                placeholder="search district name"
                icon={<IoLocationSharp />}
                onChange={onSelectDistrict}
                searchable
                nothingFound="district does not exist :("
                clearable
            />
        </>
    );
};

export default Service;
