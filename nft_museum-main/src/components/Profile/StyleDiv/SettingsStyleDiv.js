import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
    root : {
        width : '1320px',
        padding : '0px 20px',
        marginTop : '100px',
        margin : 'auto',
        
        "& .MuiFormControl-root" : {
        },
        "& .MuiInputLabel-root" : {
            fontWeight : 'bold',
            marginBottom : '10px'
        },
    },
    title : {
        fontSize : '40px',
        fontWeight : 'bold',
        marginBottom : '20px',

        '@media (max-width:900px)' : {
            textAlign : 'center'
        }
    },
    submitBtn : {
        display : 'flex',
        justifyContent : 'center',
        alignItems : 'center',
        marginTop : '24px !important',
        
        "& .MuiButtonBase-root" : {
            width : '300px',
            textDecoration : 'none',
            textTransform : 'none'
        },
    }
}))