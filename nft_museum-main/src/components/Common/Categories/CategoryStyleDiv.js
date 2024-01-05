

import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme) => ({
    root: {

        "& .MuiGrid-item": {
            display: 'flex',
            justifyContent: 'center',
        },
    },
    cardList: {
        padding: '50px 0px'
    },
    card: {
        width: '450px',
        height: '400px',
        borderRadius: '18px',
        overflow: 'hidden',
        border: '1px solid #e7e7e7',
        boxShadow: '0 5px 20px 0 #cccccc',
        cursor: 'pointer',

        ['@media (max-width:500px)']: {
            width: '400px',
            height: '380px',
        },
    },
    cardContent: {
        width: '450px',
        height: '400px !important',
        borderRadius: '18px',
        border: '1px solid #e7e7e7',
        boxShadow: '0 5px 20px 0 #cccccc',
        cursor: 'pointer',
        transform: 'unset !important',

        ['@media (max-width:500px)']: {
            width: '400px',
            height: '380px',
        },
    },
    cardImage: {
        fontSize: '16px',
        "& img": {
            width: '450px',
            height: '300px',

            ['@media (max-width:500px)']: {
                width: '100%',
                height: '280px',
            },
        }
    },
    name: {
        fontWeight: 'bold',
    },
}));