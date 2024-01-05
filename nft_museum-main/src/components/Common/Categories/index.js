import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import {
    Box, Button, Grid, Skeleton, useMediaQuery,
} from '@mui/material';

import { useStyles } from './CategoryStyleDiv';

const emptyCollection = [
    {
        image: ''
    },
    {
        image: ''
    },
    {
        image: ''
    },
    {
        image: ''
    },
    {
        image: ''
    },
    {
        image: ''
    },
    {
        image: ''
    },
    {
        image: ''
    },
    {
        image: ''
    },
]

const delay = ms => new Promise(
    resolve => setTimeout(resolve, ms)
)

const Categories = (props) => {

    const {
        categories,
    } = props;

    const classes = useStyles();
    const navigate = useNavigate();
    const match1700 = useMediaQuery('(min-width : 1700px)');
    const match900 = useMediaQuery('(min-width : 900px)');

    const [loading, setLoading] = useState(false);

    const handleCollectionDetail = (element) => {
        navigate(`/item/view/${element.item_id}`);
    }

    useEffect(() => {
        async function makeRequest() {
            await delay(3000);
            setLoading(true);
        }

        makeRequest();
    }, [])

    return (
        <Box className={classes.root}>
            <Box className={classes.cardList}>
                <Grid container spacing={5}>
                    {
                        loading ?
                            categories?.map((element, index) => {
                                return (
                                    <Grid key={index} item xs={match1700 ? 4 : match900 ? 6 : 12}>
                                        <Box className={classes.card} onClick={() => handleCollectionDetail(element)}>
                                            <Box className={classes.cardImage}>
                                                <Box component={'img'} src={`https://nftapplication.api.mycom.world${element.category_image}`} />
                                            </Box>
                                            <Box sx={{ p: 2 }}>
                                                <Box className={classes.name}>
                                                    {element.title}
                                                </Box>
                                            </Box>
                                        </Box>
                                    </Grid>
                                )
                            })
                            :
                            emptyCollection.map((element, index) => {
                                return (
                                    <Grid key={index} item xs={match1700 ? 4 : match900 ? 6 : 12}>
                                        <Skeleton animation={'wave'} className={classes.cardContent}>

                                        </Skeleton>
                                    </Grid>
                                )
                            })
                    }
                </Grid>
            </Box>
        </Box>
    )
}

export default Categories;