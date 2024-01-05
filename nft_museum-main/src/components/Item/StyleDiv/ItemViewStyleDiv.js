
import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: '1240px',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: '100px',
        "& .MuiPaper-root": {
            marginBottom: '10px !important'
        },
        "& a": {
            color: 'rgb(32, 129, 226)',
            textDecoration: 'none'
        },
        "& .MuiGrid-item": {
            ['@media (max-width:600px)']: {
                padding: '0px !important'
            }
        },
        "& .MuiAccordionSummary-root": {
            height: '60px',
        },
        "& .MuiTableHead-root": {
            background: theme.palette.secondary.main,

            "& .MuiTableCell-root": {
                color: 'white',
                borderRight: '1px solid rgb(30,35,45)'
            }
        },
        "& .MuiTableBody-root": {
            borderLeft: '1px solid lightgrey',
            "& .MuiTableRow-root:nth-child(even)": {
                backgroundColor: '#eee !important'
            },
            "& a": {
                color: '#008cff',
                textDecoration: 'none',
            }
        },
        "& .MuiTableCell-root": {
            fontSize: '18px',
            borderRight: '1px solid lightgrey',
            padding: '10px',

            ["@media (max-width:600px)"]: {
                fontSize: '14px',
                padding: '5px',
            }
        },

        ["@media (max-width:1280px)"]: {
            width: '990px',
        },
        ["@media (max-width:1000px)"]: {
            width: '584px',
        },
        ["@media (max-width:600px)"]: {
            width: '350px',
        }
    },
    imageContent: {
        display: 'flex',
        justifyContent: 'center'
    },
    accordionGroup: {
        "& .MuiPaper-root": {
            border: '1px solid lightgrey !important',

            "& .MuiAccordionSummary-root": {
                fontWeight: 'bold',
            },
            "& .MuiAccordionDetails-root": {
                display: 'flex',
                alignItems: 'center',
                borderTop: '1px solid lightgrey',

                "& img": {
                    width: '40px',
                    height: '40px',
                    marginRight: '10px',
                },
                "& .MuiList-root": {
                    width: '100%',
                    "& .MuiListItem-root": {
                        justifyContent: 'space-between',
                        padding: '10px 0px'
                    }
                }
            },
            "& .MuiSvgIcon-root": {
                marginRight: '10px',
            }
        },
    },
    image: {
        width: '508px',
        height: '508px',
        objectFit: 'cover',
        cursor: 'pointer',
        marginBottom: '20px',

        ["@media (max-width:1280px)"]: {
            width: '400px',
            height: '400px',
        },
        ["@media (max-width:1000px)"]: {
            width: '582px',
            height: '582px',
        },
        ["@media (max-width:600px)"]: {
            width: '340px',
            height: '340px'
        }
    },
    detail: {
        paddingTop: '30px !important',
    },
    collectionOption: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    collectionLink: {
        width: '138px',
        height: '46px',
        border: '1px solid lightgrey',
        borderRadius: '13px',

        "& .MuiButton-root": {
            minWidth: '45px',
            height: '45px',
            borderRadius: '0px',
            padding: '0px',
            "&:hover": {
                background: 'rgba(0, 0, 0, 0.15)'
            }
        }
    },
    collectionName: {
        fontSize: '30px',
        fontWeight: 600,
        marginBottom: '20px'
    },
    collectionHelper: {
        display: 'flex',
        alignItems: 'center',
        color: 'rgb(112,122,131)',
        marginBottom: '20px'
    },
    currentPrice: {
        border: '1px solid lightgrey',
        borderRadius: '12px',
        padding: '20px',
        marginBottom: '20px',

        "& .MuiSvgIcon-root": {
            marginRight: '10px'
        },
        "& .MuiButton-root": {
            width: '200px',
            fontWeight: 'bold',
            textTransform: 'none',
            borderRadius: '12px',
            padding: '17px 24px'
        }
    },
    offerBtn: {
        border: '2px solid rgb(229, 232, 235) !important',
        marginLeft: '30px !important',

        "&:hover": {
            boxShadow: 'rgb(0 0 0 / 10%) 0px 2px 10px',
            transition: 'all 0.2s ease 0s'
        }
    },
    priceHistory: {
        fontWeight: 'bold',
        borderRadius: '8px !important',
        border: '1px solid lightgrey !important',
        marginBottom: '10px',

        "& .MuiAccordionDetails-root": {
            display: 'flex',
            borderTop: '1px solid lightgrey',
            paddingTop: '20px',
            overflow: 'auto'
        },
        "&::before": {
            content: 'none !important'
        },
        "& .MuiSvgIcon-root": {
            marginRight: '10px',
        },
        "& .MuiGrid-item": {
            display: 'flex',
            justifyContent: 'center',
        },

    },
    card: {
        width: '270px',
        borderRadius: '18px',
        overflow: 'hidden',
        border: '1px solid #e7e7e7',
        boxShadow: '0 5px 20px 0 #cccccc',
        cursor: 'pointer',
        margin: '16px',

        ["@media (max-width:1280px)"]: {
            width: '368px',
        },
        ["@media (max-width:1000px)"]: {
            width: '518px',
        },
        ["@media (max-width:600px)"]: {
            width: '171px'
        }
    },
    cardImage: {
        fontSize: '16px',
        "& img": {
            width: '270px',
            height: '270px',

            ["@media (max-width:1280px)"]: {
                width: '368px',
                height: '368px',
            },
            ["@media (max-width:1000px)"]: {
                width: '518px',
                height: '518px',
            },
            ["@media (max-width:600px)"]: {
                width: '171px',
                height: '171px',
            }
        }
    },
    imageName: {
        fontSize: '12px',
        fontWeight: 'bold',
    },
    imagePrice: {
        fontSize: '16px',
        fontWeight: 400,
    }
}))