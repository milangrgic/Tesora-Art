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
        textAlign : 'center'
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
    filterItem : {
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
}))