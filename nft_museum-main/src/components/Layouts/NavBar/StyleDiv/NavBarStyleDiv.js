import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme) => ({
    root : {
        minWidth : props => {
            return props.showType ? '350px' : '50px'
        },
        height : 'calc(100vh - 80px)',
        borderRight : '1px solid lightgrey',

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
            margin : '0px !important'
        },
        "& .MuiButton-root" : {
            width : '100%',
            fontSize : '15px',
            textTransform : 'unset',
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
        color : 'black !important',
        cursor : 'pointer',
        padding : '5px 0px',

        "&:hover" : {
            background : 'rgba(147, 147, 147, 0.1)'
        }
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