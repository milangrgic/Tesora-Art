
import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
    root : {
        overflow : 'auto',
        border : '1px solid lightgrey',
        borderRadius : '8px',

        "& .MuiPaper-root" : {
            borderRadius : '8px',
        
            "& .MuiTableHead-root" : {
                background : theme.palette.secondary.main,

                "& .MuiTableCell-root" : {
                    color : 'white',
                    borderRight : '1px solid rgb(30,35,45)'
                }
            },
            "& .MuiTableBody-root" : {
                borderLeft : '1px solid lightgrey',
                "& .MuiTableRow-root:nth-child(even)" : {
                    backgroundColor : '#eee !important'
                },
                "& a" : {
                    color : '#008cff',
                    textDecoration : 'none',
                }
            },
            "& .MuiTableCell-root" : {
                fontSize : '18px',
                textAlign : 'center',
                borderRight : '1px solid lightgrey',
                padding : '10px',

                ["@media (max-width:600px)"] : {
                    fontSize : '14px',
                    padding : '5px',
                }
            }
        }
    },
    tableHeader : {
        height : '50px',
        display : 'flex',
        alignItems : 'center',
        color : 'white',
        fontWeight : 'bold',
        background : theme.palette.primary.main,
        borderTopRightRadius : '8px',
        borderTopLeftRadius : '8px',
        paddingLeft : '50px',
    },
    tableContent : {
        padding : '30px 30px',
        ["@media (max-width:600px)"] : {
            padding : '10px 10px'
        }
    },
    collectionImage : {
        width : '50px',
        height : '50px',
        boxShadow : '10px 6px 8px 0px rgba(0, 0, 0, 0.25), inset 0px -1px 1px rgba(0, 0, 0, 0.04), inset 0px 2px 0px rgba(255, 255, 255, 0.25)',
        borderRadius : '50%',
        cursor : 'pointer',

        ["@media (max-width:600px)"] : {
            width : '40px',
            height : '40px',
        }
    },
    itemImage : {
        width : '150px',
        height : '100px',
        borderRadius : '4px',
        cursor : 'pointer',
        
        ["@media (max-width:600px)"] : {
            width : '70px',
            height : '60px',
        }
    }
}))