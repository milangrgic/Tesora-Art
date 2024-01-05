
import Art_Image from '../../../assets/Marketplace/art.png'

import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
    root : {
        width : '100%',
        padding : '0px 20px',

        "& .MuiFormControl-root" : {
            width : 'calc(100% - 250px)',
            marginTop : '20px',
            marginBottom : '20px',

            "& .MuiOutlinedInput-input" : {
                height : '35px',
                padding : '0px 10px',
            },
            ['@media (max-width:600px)'] : {
                width : '300px',
            },
        },
        "& .MuiButton-root" : {
            fontSize : '16px',
            textTransform : 'unset',
            background : '#008cff',
            boxShadow : '0 5px 15px -5px #cccccc',
            borderRadius : '8px',
            padding : '4px 10px',
            marginLeft : '10px',
        },
        "& .MuiGrid-item" : {
            display : 'flex',
            justifyContent : 'center',
        },
    },
    topImage : {
        height : '100px',
        backgroundImage : `url(${Art_Image})`,
        backgroundRepeat : 'no-repeat',
        backgroundSize : 'cover',
    },
    title : {
        fontSize : '24px',
        fontWeight : 'bold',
        marginTop : '20px',

        ['@media (max-width:600px)'] : {
            fontSize : '20px'
        },
    },
    searchDiv : {
        display : 'flex',
        alignItems : 'center',
        marginBottom : '30px',
        
        ['@media (max-width:600px)'] : {
            width : '300px',
            display : 'grid',
            justifyItems : 'center',
            marginLeft : 'auto',
            marginRight : 'auto'
        },
    },
    filterBtn : {
        display : 'flex',
        justifyContent : 'center',
        marginBottom : '20px',
        "& .MuiButton-root" : {
            width : '300px',
            marginLeft : '0px',
            
            ['@media (max-width:600px)'] : {
                width : '200px',
            },
        }
    },
    card : {
        width : '450px',
        height : '400px',
        borderRadius : '18px',
        overflow : 'hidden',
        border : '1px solid #e7e7e7',
        boxShadow : '0 5px 20px 0 #cccccc',
        cursor : 'pointer',

        ['@media (max-width:550px)'] : {
            width : '350px',
            height : '300px',
        },
        ['@media (max-width:450px)'] : {
            width : '270px',
            height : '230px',
        },
    },
    cardImage : {
        fontSize : '16px',
        "& img" : {
            width : '450px',
            height : '300px',

            ['@media (max-width:500px)'] : {
                width : '100%',
                height : '150px',
            },
        }
    },
    imageName : {
        fontWeight : 'bold',
    },
}))