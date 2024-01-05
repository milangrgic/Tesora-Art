

import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme) => ({
    root : {
        padding : '50px 200px',

        "& .MuiButton-root" : {
            fontSize : '18px',
            textTransform : 'unset',
            borderRadius : '20px',
            boxShadow : '0 5px 15px -5px #cccccc',
            padding : '4px 20px',
            marginRight : '10px',
            marginBottom : '20px',

            "&:hover" : {
                background : '#008cff',
                color : '#ffffff',
            },
        },
        "& .MuiGrid-item" : {
            display : 'flex',
            justifyContent : 'center',
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
    title : {
        fontSize : '36px',
        fontWeight : 'bold',
        marginBottom : '50px',
        
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
    buttonGroup : {

        ['@media (max-width:900px)'] : {
            display : 'flex',
            justifyContent : 'center',
            flexWrap : 'wrap'
        },
    },
    selectedButton : {
        background : '#008cff !important',
        color : 'white !important',
    },
    cardList : {
        padding : '50px 0px'
    },
    card : {
        width : '450px',
        height : '400px',
        borderRadius : '18px',
        overflow : 'hidden',
        border : '1px solid #e7e7e7',
        boxShadow : '0 5px 20px 0 #cccccc',
        cursor : 'pointer',

        ['@media (max-width:500px)'] : {
            width : '400px',
            height : '380px',
        },
    },
    cardImage : {
        fontSize : '16px',
        "& img" : {
            width : '450px',
            height : '300px',

            ['@media (max-width:500px)'] : {
                width : '100%',
                height : '280px',
            },
        }
    },
    imageName : {
        fontWeight : 'bold',
    },
}));