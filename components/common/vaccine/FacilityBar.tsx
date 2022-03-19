import { Button, Group, Select } from "@mantine/core";
import { FacilityType } from "components/layout/vaccine/Main";
import { FunctionComponent, memo } from "react";
import { BsCheck, BsSearch } from "react-icons/bs";

interface FacilityBarProps {
    onFacilityClick: (facility: FacilityType) => void;
    value: FacilityType;
    data:
        | {
              label: string;
              value: number;
          }[]
        | undefined;
}

interface StaticMenu {
    value: FacilityType;
    label: string;
}

const staticMenu: StaticMenu[] = [
    { label: "All", value: "" },
    { label: "Hospital", value: "RUMAH SAKIT" },
    { label: "Clinic", value: "KLINIK" },
    { label: "Health services", value: "PUSKESMAS" },
    { label: "FKTP", value: "FKTP" },
];

const FacilityBar: FunctionComponent<FacilityBarProps> = ({ data, onFacilityClick, value }) => {
    return (
        <Group sx={{ position: "absolute", top: 10, left: 10, zIndex: 1000 }} spacing="xs">
            <Select
                styles={{ wrapper: { minWidth: "250px" } }}
                data={data as any}
                rightSection={<BsSearch />}
                searchable
                clearable
                placeholder="Search for health facilities"
                nothingFound="Health facility does not exist"
            />
            {staticMenu.map((menu) => {
                const isValueSame = menu.value === value;
                return (
                    <Button
                        variant={isValueSame ? "filled" : "white"}
                        key={menu.value}
                        color="green"
                        onClick={() => onFacilityClick(menu.value)}
                        rightIcon={isValueSame ? <BsCheck /> : null}
                        styles={{
                            root: {},
                            label: {
                                fontWeight: "normal",
                            },
                        }}
                    >
                        {menu.label}
                    </Button>
                );
            })}
            {/* TODO: CREATE LIST OF TOGGLING FACILITY BUTTON, eg: rumah sakit, klinik, etc */}
        </Group>
    );
};

export default memo(FacilityBar);
