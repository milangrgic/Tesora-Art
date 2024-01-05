import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
    root : {
        width : '100%',

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
        "& .MuiGrid-item" : {
            display : 'flex',
            justifyContent : 'center',
        },

    },
    imageContent : {
        position : 'relative',
        width : '100%',
        height : '250px',
    },
    backImage : {
        width : '100%',
        height : '100%'
    },
    smallImage : {
        position : 'absolute',
        bottom : -62,
        left : 0,
        right : 0,
        width : '125px !important',
        height : '125px !important',
        borderRadius : '50%',
        margin : 'auto',
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
    headerDiv : {
        textAlign : 'center',
        marginTop : '100px'
    },
    collectionName : {
        fontSize : '20px',
        fontWeight : 'bold'
    },
    collectionInfo : {
        width : '364px',
        border : '1px solid #e7e7e7',
        borderLeft : 'none',
        margin : '15px auto'
    },
    item : {
        display : 'inline-block',
        width : '120px',
        borderLeft : '1px solid #e7e7e7',
        padding : '15px 0px',
    },
    deploy : {
        width : '1320px',
        padding : '20px',
        margin : 'auto',

        ['@media (max-width:1400px)'] : {
            width : '960px'
        },
        ['@media (max-width:1000px)'] : {
            width : '720px'
        },
        ['@media (max-width:800px)'] : {
            width : '540px'
        },
        ['@media (max-width:600px)'] : {
            width : '360px'
        },
    },
    list : {
        borderBottom : '1px solid lightgrey',
        paddingBottom : '10px',
        marginBottom : '30px',
    },
    card : {
        width : '450px',
        height : '400px',
        borderRadius : '12px',
        overflow : 'hidden',
        border : '1px solid #e7e7e7',
        boxShadow : '0 5px 20px 0 #cccccc',
        cursor : 'pointer',
        marginBottom : '50px',

        ['@media (max-width:600px)'] : {
            width : '300px',
            height : '300px',
            margin : 'auto',
            marginBottom : '50px',
        },
    },
    cardImage : {
        fontSize : '16px',
        "& img" : {
            width : '450px',
            height : '300px',

            ['@media (max-width:600px)'] : {
                width : '100%',
                height : '200px',
            },
        }
    },
}))