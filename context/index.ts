import { useContext } from "react";
import { CasesContext } from "./cases/cases.context";

function useCases() {
    const context = useContext(CasesContext);
    if (context === undefined) {
        throw new Error("useCases must be used within a CasesProvider");
    }
    return context;
}

export { useCases };
