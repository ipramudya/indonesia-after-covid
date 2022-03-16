import { Divider, Select, Text } from "@mantine/core";
import { LocationBox } from "components/common";
import { useVaccine } from "context";
import { useMemoizeSelect, useVaccineService } from "hooks";
import { selectClearable, typography } from "lib/mantine/styles";
import { FunctionComponent, useCallback, useState } from "react";
import { IoLocationSharp } from "react-icons/io5";

const Service: FunctionComponent = () => {
    const [selectedProvince, setSelectedProvince] = useState("");
    const [selectedDistrict, setSelectedDistrict] = useState("");

    const { allProvinces, onFetchDistricts, relatedDistricts } = useVaccineService();
    const {
        dispatch,
        state: { selectedLocation },
    } = useVaccine();

    // format all provinces for select menu
    const formattedProvinces = useMemoizeSelect(allProvinces);

    // format all districts for select menu
    const formattedDistricts = useMemoizeSelect(relatedDistricts);

    const onSelectProvince = (province: string | null) => {
        // clear everything when selected province isn't provided
        if (!province) {
            setSelectedProvince("");
            setSelectedDistrict("");
            onFetchDistricts("");
            dispatch({ type: "clearVaccineLocation" });
            return;
        }

        onFetchDistricts(province);
        setSelectedProvince(province);
        return;
    };

    const onSelectDistrict = useCallback(
        (district: string | null) => {
            if (!district) {
                setSelectedDistrict("");
                dispatch({ type: "clearVaccineLocation" });
                return;
            }
            setSelectedDistrict(district);

            // store to context storage when selected province and district are exist
            if (selectedProvince && district) {
                return dispatch({
                    type: "setVaccineLocation",
                    payload: { province: selectedProvince, district },
                });
            }
            return;
        },
        [dispatch, selectedProvince]
    );

    const onCLoseLocationBox = () => {
        setSelectedProvince("");
        setSelectedDistrict("");
        onFetchDistricts("");
        return dispatch({ type: "clearVaccineLocation" });
    };

    return (
        <>
            <Text sx={typography.textHead} mb="sm">
                Vaccine service
            </Text>
            <Text sx={typography.textMain}>
                Find your exact location to get the right vaccination service for you.
            </Text>
            {!selectedLocation.isEmpty && <LocationBox onCLoseLocationBox={onCLoseLocationBox} />}
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
                styles={selectClearable}
            />
            <Select
                data={!relatedDistricts ? [] : formattedDistricts} // clear districts when province isn't selected yet
                value={selectedDistrict}
                label="Choose district"
                placeholder="search district name"
                icon={<IoLocationSharp />}
                onChange={onSelectDistrict}
                searchable
                nothingFound="district does not exist :("
                clearable
                styles={selectClearable}
            />
        </>
    );
};

export default Service;
