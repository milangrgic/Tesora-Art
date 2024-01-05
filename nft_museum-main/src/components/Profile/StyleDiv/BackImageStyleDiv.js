import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
    root : {
        "& img" : {
            width : '100%',
            height : '100%',
            objectFit : 'cover'
        }
    },
    backImage : {
        height : '320px',
        display : 'flex !important',
        alignSelf : 'center',
        backgroundColor : 'rgba(0, 0, 0, 0.15)',
        cursor : 'pointer',

        "& .MuiSvgIcon-root" : {
            width : '60px',
            height : '60px'
        },
    }
}))