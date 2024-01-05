import React, { useState, useEffect, useRef } from 'react' ;
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import { useStyles } from './StyleDiv/CollectionDetailStyleDiv';

import Test_Image from '../../assets/Home/test.jpg';

import {
    Box , Grid , TextField , Button , useMediaQuery
} from '@mui/material';

const CollectionDetailForm = (props) => {

    const classes = useStyles() ;
    const location = useLocation();
    const navigate = useNavigate();

    const [ collectionData, setCollectionData ] = useState('');

    const handleItemView = () => {
        const tempData = {
            image : collectionData.item,
            ethPrice : collectionData.ethPrice,
            usdPrice : collectionData.usdPrice
        }

        navigate('/item/view', {state : {data : tempData}})
    }

    useEffect(() => {
        if(location.state){
            setCollectionData(location.state.data);
        }
    }, [location.state])

    return (
        <Box className = {classes.root}>
            <Box className={classes.imageContent}>
                <Box component={'img'} src={collectionData.collection} className={classes.backImage} />
                <Box component={'img'} src={collectionData.collection} className={classes.smallImage} />
            </Box>

            <Box className={classes.headerDiv}>
                <Box className={classes.collectionName}>
                    {collectionData.name}
                </Box>
                <Box className={classes.collectionInfo}>
                    <Box className={classes.item}>
                        <Box sx={{fontWeight : 'bold'}}> 1 </Box>
                        <Box sx={{fontSize : '14px'}}> Items </Box>
                    </Box>
                    <Box className={classes.item}>
                        <Box sx={{fontWeight : 'bold'}}> 10% </Box>
                        <Box sx={{fontSize : '14px'}}> Royalties </Box>
                    </Box>
                    <Box className={classes.item}>
                        <Box sx={{fontWeight : 'bold'}}> 0 </Box>
                        <Box sx={{fontSize : '14px'}}> Volume Traded </Box>
                    </Box>
                </Box>
            </Box>

            <Box className={classes.deploy}>
                <Box className={classes.list}>
                    Recently Listed
                </Box>
                <Box className={classes.card} onClick={() => handleItemView()}>
                    <Box className={classes.cardImage}>
                        <Box component={'img'} src={collectionData.item}/>
                    </Box>
                    <Box sx={{p : 2}}>
                        <Box className={classes.imageName}>
                            Apee
                        </Box>
                        <Box className={classes.imagePrice}>
                            {'Price'} {collectionData.ethPrice} {'ETH'} {'~'} {'$'}{collectionData.usdPrice} {'USD'}
                        </Box>
                    </Box>
                </Box>

                <Box className={classes.list}>
                    Newly Minted
                </Box>
                <Box className={classes.card}>
                    <Box className={classes.cardImage}>
                        <Box component={'img'} src={collectionData.item}/>
                    </Box>
                    <Box sx={{p : 2}}>
                        <Box className={classes.imageName}>
                            Apee
                        </Box>
                        <Box className={classes.imagePrice}>
                            {'Price'} {collectionData.ethPrice} {'ETH'} {'~'} {'$'}{collectionData.usdPrice} {'USD'}
                        </Box>
                    </Box>
                </Box>

                <Box className={classes.list}>
                    On Auction
                </Box>
                <Box className={classes.card}>
                    <Box className={classes.cardImage}>
                        <Box component={'img'} src={collectionData.item}/>
                    </Box>
                    <Box sx={{p : 2}}>
                        <Box className={classes.imageName}>
                            Apee
                        </Box>
                        <Box className={classes.imagePrice}>
                            {'Price'} {collectionData.ethPrice} {'ETH'} {'~'} {'$'}{collectionData.usdPrice} {'USD'}
                        </Box>
                    </Box>
                </Box>
            </Box>
            
        </Box>
    )
}

export default CollectionDetailForm ;