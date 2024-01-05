import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme) => ({
    root : {

        "& .MuiBackdrop-root": {
            display: "none"
        },
        "& .MuiAccordionSummary-root" : {
            minHeight : '60px !important',
            borderBottom : '1px solid lightgrey',
            padding : '10px 20px',
        },
        "& .MuiAccordionSummary-content" : {
            margin : '0px !important',
        },
        "& .MuiPaper-root" : {
            borderTop : '1px solid lightgrey',
            padding : '20px',
            margin : '0px !important'
        },
        "& .MuiButton-root" : {
            width : '100%',
            fontSize : '15px',
            textTransform : 'unset',
            background : 'white',
            border : '1px solid #008cff',
            padding : '10px 10px',

            "&:hover" : {
                background : '#008cff',
                color : '#ffffff',
                border : '1px solid #008cff',
            },
        },
        "& .MuiFormControl-root" : {
            margin : '10px 0px',

            "& .MuiOutlinedInput-input" : {
                height : '30px',
                padding : '0px 10px',
            }
        }
    } ,
    drawerPaper: {
        top : "60px !important",
        '& ::-webkit-scrollbar': {
            display: 'none !important',
        },
    },
    filter : {
        width : '100%',
        height : '64px',
        display : 'flex',
        justifyContent : 'space-between !important',
        alignItems : 'center',
        borderBottom : '1px solid lightgrey'
    },
    filterIcon : {
        display : 'flex',
        alignItems : 'center',
        fontWeight : 'bold',
        "& .MuiSvgIcon-root" : {
            width : '30px',
            height : '30px',
        }
    },
    selectedSortBy : {
        background : '#008cff !important',
        color : '#ffffff !important',
    },
    collectionList : {
        display : 'flex',
        alignItems : 'center',
        padding : '5px 0px'
    },
    collectionImage : {
        width : '35px',
        height : '35px',
        borderRadius : '50%',
        overflow : 'hidden',
        marginRight : '15px',

        "& img" : {
            width : '100%',
            height : '100%',
        }
    }
})) ;