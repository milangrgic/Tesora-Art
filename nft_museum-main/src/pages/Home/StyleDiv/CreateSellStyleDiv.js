

import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme) => ({
    root : {
        padding : '50px 200px',

        "& .MuiGrid-item" : {
            display : 'flex',
            justifyContent : 'center',
            alignItems : 'center',
            // ['@media (max-width:500px)'] : {
            //     paddingLeft : '0px !important',
            // },
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
        marginBottom : '10px',

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
        ['@media (max-width:900px)'] : {
            textAlign : 'center',
        },
    },
    cardList : {
        padding : '50px 0px'
    },
    card : {
        width : '320px',
        borderRadius : '18px',
        overflow : 'hidden',
        display : 'flex',
        flexDirection : 'column',
        justifyContent : 'center',
        alignItems : 'center',
        border : '1px solid #e7e7e7',
        boxShadow : '0 5px 20px 0 #cccccc',
        cursor : 'pointer',
        padding : '50px 30px',

        "&:hover" : {
            background : '#e2f2ff',
        },

        ['@media (max-width:400px)'] : {
            width : '300px',
        },
    },
    cardName : {
        textAlign : 'center',
        fontSize : '20px',
        fontWeight : 'bold',
        marginBottom : '20px'
    },
    cardText : {
        textAlign : 'center',
        color : '#7a7a7a',
        fontSize : '14px',
    }
}));