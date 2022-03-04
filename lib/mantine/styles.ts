import { createStyles } from "@mantine/core";

const useStyles = createStyles((theme) => ({
    link: {
        cursor: "pointer",

        "&:hover": {
            opacity: "0.7",
        },
    },
    caseBox: {
        display: "flex",
        justifyContent: "space-between",
        marginBottom: "0.5rem",
    },
    subHeading: {
        fontSize: "14px",
        fontWeight: 400,
    },
    number: {
        fontSize: "16px",
        fontWeight: "bold",
    },
    badge: {
        ".mantine-Badge-inner": {
            fontWeight: 400,
        },
    },
}));

export default useStyles;
