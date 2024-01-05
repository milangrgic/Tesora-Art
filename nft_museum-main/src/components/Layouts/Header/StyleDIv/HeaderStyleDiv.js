
import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
    root: {
        position: "fixed",
        top: 0,
        zIndex: 1000,
        width: "100%",
        height: "80px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        background: "white",
        boxShadow:
            "10px 6px 8px 0px rgba(0, 0, 0, 0.25), inset 0px -1px 1px rgba(0, 0, 0, 0.04), inset 0px 2px 0px rgba(255, 255, 255, 0.25)",
        padding: "0px 20px",

        "& .MuiList-root": {
            display: "flex",
        },
        "& .MuiListItem-root": {
            fontSize: "20px",
            fontWeight: "bold",
            cursor: "pointer",
            padding: "20px 30px",
        },
        "& .MuiAccordionSummary-root": {
            height: "70px",
            padding: 0,
        },
        "& .MuiSvgIcon-root": {
            cursor: 'pointer'
        }
    },
    logoImage: {
        width: "120px",
        height: "70px",
        "@media (max-width:600px)": {
            width: "100px",
            height: "60px",
        },
    },
    profileImage: {
        width: "40px",
        height: "40px",
        cursor: "pointer",
        margin: "auto",
        marginLeft: "20px",
        marginRight: "20px",
    },
    menuIcon: {
        width: "40px !important",
        height: "40px !important",
        cursor: "pointer",
    },
    drawer: {
        width: "100%",
        zIndex: "999999999999999 !important",
        "& .MuiPaper-root": {
            width: "100%",
        },
        "& .MuiListItem-root": {
            display: "flex",
            alignItems: "center",
            padding: "20px",
            paddingLeft: "0px",
            cursor: "pointer",
        },

        "& svg": {
            marginRight: "10px",
        },
    },
    menuBody: {
        zIndex: 9999,
    },
    closeDiv: {
        display: "flex",
        justifyContent: "space-between"
    },
    menuDiv: {
        height: "100%",
        padding: "0px 24px",
        "& .MuiListItem-root": {
            color: "rgba(44, 56, 74, 0.68)",
            fontSize: "20px",
            fontWeight: "bold",
            cursor: "pointer",
            padding: "20px 30px",
        },
        "& a": {
            textDecoration: "none ",
            color: "white",
        },
    },
    dropDown: {
        color: "rgba(44, 56, 74, 0.68)",
        fontWeight: "bold",
        padding: "10px 20px",
        cursor: "pointer",
    },
}));