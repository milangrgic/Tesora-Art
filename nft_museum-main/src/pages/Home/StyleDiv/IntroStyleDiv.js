

import Background_Image from '../../../assets/Home/background.png';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme) => ({
    root : {
        backgroundImage : `url(${Background_Image})`,
        backgroundSize : 'cover',
        backgroundRepeat : 'no-repeat',
        padding : '100px 200px',
        "& .MuiButton-root" : {
            width : '110px',
            color : '#008cff',
            border : '2px solid #008cff',
            borderRadius : '43px',
        },
        ['@media (max-width:1250px)'] : {
            padding : '100px 50px',
        },
        ['@media (max-width:900px)'] : {
            padding : '100px 100px',
        },
        ['@media (max-width:750px)'] : {
            padding : '100px 20px',
        }
    },
    container : {
        display : 'flex',
        flexDirection : 'column !important',
        justifyContent : 'center !important',
    },
    title : {
        fontSize : '50px',
        fontWeight : 'bold',

        ['@media (max-width:1500px)'] : {
            fontSize : '35px',
        },
        ['@media (max-width:900px)'] : {
            textAlign : 'center',
            fontSize : '46px',
        },
        ['@media (max-width:600px)'] : {
            fontSize : '36px',
        },
        ['@media (max-width:450px)'] : {
            fontSize : '28px',
        }
    },
    text : {
        fontSize : '18px',
        color : '#7a7a7a',
        marginTop : '10px',

        ['@media (max-width:900px)'] : {
            textAlign : 'center',
        },
        ['@media (max-width:450px)'] : {
            fontSize : '14px',
        }
    },
    buttonGroup : {
        marginTop : '50px',

        "& .MuiButton-root" : {
            height : '40px',
            fontSize : '18px',
            textTransform : 'unset',
            padding : '8px 30px !important',
            marginRight : '20px',
            "&:hover" : {
                background : '#008cff',
                color : '#ffffff',
                border : '2px solid #008cff'
            }
        },

        ['@media (max-width:900px)'] : {
            textAlign : 'center',
            marginBottom : '50px'
        }
    },
    bannerImage : {
        borderRadius : '40px !important',
        overflow : 'auto',
        "& img" : {
            width : '100%',
        }
    }
}));