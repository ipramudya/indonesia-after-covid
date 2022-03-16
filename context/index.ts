import { useContext } from "react";
import { CasesContext } from "./cases/cases.context";
import { VaccineContext } from "./vaccine/vaccine.context";

function useCases() {
    const context = useContext(CasesContext);
    if (context === undefined) {
        throw new Error("useCases must be used within a CasesProvider");
    }
    return context;
}

function useVaccine() {
    const context = useContext(VaccineContext);
    if (context === undefined) {
        throw new Error("useVaccine must be used within a VaccineProvider");
    }
    return context;
}

export { useCases, useVaccine };
