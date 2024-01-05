
import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
    root : {
        position : 'relative',
        width : '100%',
        
    },
    profileInfo : {
        padding : '0px 60px',

        ['@media (max-width:900px)'] : {
            padding : '16px'
        },
    },
    tab : {
        padding : '0px 60px',

        ['@media (max-width:900px)'] : {
            padding : '16px'
        },
        ['@media (max-width:600px)'] : {
            padding : '0px'
        }
    },
    userName : {
        display : 'flex',
        justifyContent : 'space-between',
        alignItems : 'center',
        fontSize : '30px',
        fontWeight : 'bold',
    },
    walletAddress : {
        display : 'flex',
        alignItems : 'center',
        cursor : 'pointer',

        "& img" : {
            width : '16px',
            height : '16px',
            marginRight : '5px'
        },
        "& .MuiTooltip-tooltip" : {
            color : 'red',
            height : 50,
        }
    },
    optionDiv : {
        display : 'flex',
        justifyContent : 'flex-end',
        margin : '20px',

        "& .MuiSvgIcon-root" : {
            width : '50px',
            height : '50px',
            cursor : 'pointer'
        }
    },
}))