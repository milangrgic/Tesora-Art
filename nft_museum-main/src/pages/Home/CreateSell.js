import React, { useState, useEffect } from 'react' ;

import Wallet_Image from '../../assets/Home/wallet.png';
import Collections_Image from '../../assets/Home/collections.png';
import NFTS_Image from '../../assets/Home/nfts.png';
import Sale_Image from '../../assets/Home/sale.png';

import {
    Box , Grid, useMediaQuery,
} from '@mui/material' ;

import { useStyles } from './StyleDiv/CreateSellStyleDiv';


const CreateSell = () => {

    const classes = useStyles() ;
    const match1500 = useMediaQuery('(min-width : 1500px)');
    const match900 = useMediaQuery('(min-width : 900px)');

    return (
        <Box className = {classes.root}>
            <Box className={classes.title}>
                Create and Sell your Nfts
            </Box>
            <Box className={classes.text}>
                ellentesque mollis magna nec tortor mattis rln quis purus.
            </Box>

            <Box className={classes.cardList}>
                <Grid container spacing={2}>
                    <Grid item xs={match1500 ? 3 : match900 ? 6 : 12} >
                        <Box className={classes.card}>
                            <Box component={'img'} src={Wallet_Image} />
                            <Box className={classes.cardName}>
                                Setup your wallet
                            </Box>
                            <Box className={classes.cardText}>
                                Etiam auctor urna ac nisi feugiat, in tempor massa tempus arcu nec neque efficitur porta ollis magnanec tortor mattis eugiat, in tempoarcu nec neque effici...
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={match1500 ? 3 : match900 ? 6 : 12}>
                        <Box  className={classes.card}>
                            <Box component={'img'} src={Collections_Image} />
                            <Box className={classes.cardName}>
                                Create your collection
                            </Box>
                            <Box className={classes.cardText}>
                                Etiam auctor urna ac nisi feugiat, in tempor massa tempus arcu nec neque efficitur porta ollis magnanec tortor mattis eugiat, in tempoarcu nec neque effici...
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={match1500 ? 3 : match900 ? 6 : 12}>
                        <Box  className={classes.card}>
                            <Box component={'img'} src={NFTS_Image} />
                            <Box className={classes.cardName}>
                                Add your Nfts
                            </Box>
                            <Box className={classes.cardText}>
                                Etiam auctor urna ac nisi feugiat, in tempor massa tempus arcu nec neque efficitur porta ollis magnanec tortor mattis eugiat, in tempoarcu nec neque effici...
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={match1500 ? 3 : match900 ? 6 : 12}>
                        <Box  className={classes.card}>
                            <Box component={'img'} src={Sale_Image} />
                            <Box className={classes.cardName}>
                                List Them for Sale
                            </Box>
                            <Box className={classes.cardText}>
                                Etiam auctor urna ac nisi feugiat, in tempor massa tempus arcu nec neque efficitur porta ollis magnanec tortor mattis eugiat, in tempoarcu nec neque effici...
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}
export default CreateSell ;