import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
    root : {
        width : '1320px',
        padding : '0px 20px',
        marginLeft : 'auto',
        marginRight : 'auto',

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

        ['@media (max-width:1400px)'] : {
            width : '960px'
        },
        ['@media (max-width:1000px)'] : {
            width : '720px'
        },
        ['@media (max-width:800px)'] : {
            width : '540px'
        },
    },
    topContent : {
        display : 'flex',
        justifyContent : 'space-between',
        alignItems : 'center',
        
        "& .MuiButton-root" : {
            minWidth : '170px',
            width : '170px',

            ['@media (max-width:600px)'] : {
                marginLeft : 'auto',
                marginRight : 'auto'
            },
        },

        ['@media (max-width:600px)'] : {
            display : 'grid',
            justifyContent : 'center'
        },
    },
    title : {
        fontSize : '24px',
        fontWeight : 'bold',
        marginTop : '20px',

        ['@media (max-width:600px)'] : {
            textAlign : 'center',
            fontSize : '20px',
        },
    },
    subTitle : {
        fontSize : '16px',
        fontWeight : 400,

        ['@media (max-width:600px)'] : {
            textAlign : 'center',
            marginBottom : '10px'
        },
    },
    searchDiv : {
        display : 'flex',
        justifyContent : 'space-between',
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
    card : {
        width : '450px',
        borderRadius : '18px',
        overflow : 'hidden',
        border : '1px solid #e7e7e7',
        boxShadow : '0 5px 20px 0 #cccccc',
        cursor : 'pointer',

        ['@media (max-width:550px)'] : {
            width : '350px',
        },
        ['@media (max-width:450px)'] : {
            width : '270px',
        },
    },
    cardContent : {
        width : '450px',
        height : '400px !important',
        borderRadius : '18px',
        border : '1px solid #e7e7e7',
        boxShadow : '0 5px 20px 0 #cccccc',
        cursor : 'pointer',
        transform : 'unset !important',

        ['@media (max-width:500px)'] : {
            width : '400px',
            height : '380px',
        },
    },
    cardImage : {
        position : 'relative',
        fontSize : '16px',

        "& img" : {
            width : '450px',
            height : '300px',

            ['@media (max-width:550px)'] : {
                width : '100%',
                height : '250px',
            },
        }
    },
    desc : {
        textAlign: 'center',
        padding : '10px',
        marginTop : '30px'
    },
    imageName : {
        fontWeight : 'bold',
    },
    smallImage : {
        position : 'absolute',
        bottom : -28,
        left : 0,
        right : 0,
        width : '64px !important',
        height : '64px !important',
        borderRadius : '50%',
        margin : 'auto',
    }
}))