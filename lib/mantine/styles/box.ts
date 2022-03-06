import { CSSObject } from "@mantine/core";

interface IBox {
    case: CSSObject;
    titleAndMenu: CSSObject;
}

const box: IBox = {
    case: {
        display: "flex",
        justifyContent: "space-between",
        marginBottom: "0.5rem",
    },
    titleAndMenu: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
    },
};

export default box;
