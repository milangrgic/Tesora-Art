import React, { useState, useEffect } from 'react' ;

import Collections from '../../components/Common/Collections';
import Test_Image from '../../assets/Home/test.jpg';
import Trend_Image from '../../assets/Home/trend.png';
import Unique_Image from '../../assets/Home/unique.png';
import Dfgadfrds_Image from '../../assets/Home/dfgadfrds.jpg';

import {
    Box, Button, Grid, useMediaQuery ,
} from '@mui/material' ;

import { useStyles } from './StyleDiv/TrendingStyleDiv';

const collection = [
    {
        image : Test_Image,
        name : 'Test Image',
        ethPrice : 0.0001,
        usdPrice : ''
    },
    {
        image : Trend_Image,
        name : 'Trend',
        ethPrice : 6,
        usdPrice : ''
    },
    {
        image : Unique_Image,
        name : 'Unique',
        ethPrice : 5,
        usdPrice : ''
    },
    {
        image : Dfgadfrds_Image,
        name : 'Dfgadfrds',
        ethPrice : 0.0001,
        usdPrice : ''
    },
]

const Trending = (props) => {

    const {
        collections,
        items
    } = props;

    const classes = useStyles() ;

    const [ viewType, setViewType ] = useState('all items');

    const handleChangeViewType = (type) => {
        setViewType(type);
    }

    return (
        <Box className = {classes.root}>
            <Box className={classes.title}>
                Trending
            </Box>
            <Box className={classes.buttonGroup}>
                {
                    collections && collections.map((element, index) => {
                        return(
                            <Button key={index} onClick={() => handleChangeViewType(element.name)} className={viewType === element.name ? classes.selectedButton : ''}>
                                {element.name}
                            </Button>
                        )
                    })
                }
            </Box>

            <Collections
                collection={items}
            />
        </Box>
    )
}

export default Trending ;