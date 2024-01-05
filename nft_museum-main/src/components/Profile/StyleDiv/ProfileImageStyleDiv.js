import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
    root : {
        height : '0px',
        marginBottom : '60px',
        padding : '0px 32px',
        
        "& img" : {
            width : '100%',
            height : '100%',
            objectFit : 'cover'
        }
    },
    profileImage : {
        position : 'absolute',
        bottom : 150,
        width : '180px',
        height : '180px',
        display : 'flex !important',
        alignSelf : 'center',
        backgroundImage : `url(${'https://storage.googleapis.com/opensea-static/opensea-profile/19.png'})`,

        borderRadius : '50%',
        cursor : 'pointer',

        "& img" : {
            borderRadius : '50%'
        }
    },
    image : {
        margin : 'auto'
    }
}))