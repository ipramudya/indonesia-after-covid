import { CSSObject } from "@mantine/core";

interface IBox {
    case: CSSObject;
}

const box: IBox = {
    case: {
        display: "flex",
        justifyContent: "space-between",
        marginBottom: "0.5rem",
    },
};

export default box;
