import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useStyles } from './StyleDiv/MyCollectionStyleDiv';
import Test_Image from '../../assets/Home/test.jpg';
import Trend_Image from '../../assets/Home/trend.png';
import Unique_Image from '../../assets/Home/unique.png';
import Dfgadfrds_Image from '../../assets/Home/dfgadfrds.jpg';

import SearchIcon from '@mui/icons-material/Search';
import RestartAltIcon from '@mui/icons-material/RestartAlt';

import {
    Box, Grid, TextField, Button, useMediaQuery, Skeleton
} from '@mui/material';


const collection = [
    {
        image: Test_Image,
        name: 'Test Image',
        item: 0
    },
    {
        image: Trend_Image,
        name: 'Trend',
        item: 0
    },
    {
        image: Unique_Image,
        name: 'Unique',
        item: 2
    },
    {
        image: Dfgadfrds_Image,
        name: 'Dfgadfrds',
        item: 1
    },
]

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

const MyCollectionForm = (props) => {

    const {
        collections
    } = props;

    const classes = useStyles();
    const navigate = useNavigate();
    const match1700 = useMediaQuery('(min-width : 1700px)');
    const match900 = useMediaQuery('(min-width : 900px)');

    const [searchText, setSearchText] = useState('');
    const [loading, setLoading] = useState(false);

    const handleChangeSearch = (e) => {
        setSearchText(e.target.value);
    }

    const handleCollectionView = (element) => {
        navigate(`/collection/view/${element.collection_id}`);
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
            <Box className={classes.topContent}>
                <Box className={classes.title}>
                    My Collection
                    <Box className={classes.subTitle}>
                        Create, curate, and manage collections of unique NFTs to share and sell.
                    </Box>
                </Box>

                <Button variant='contained'
                    onClick={() => navigate(`/collection/add`)}
                    sx={{ fontSize: '18px !important' }}
                >
                    Create Collection
                </Button>
            </Box>
            <Box className={classes.searchDiv}>
                <TextField
                    value={searchText}
                    onChange={(e) => handleChangeSearch(e)}
                    placeholder='Search'
                    fullWidth
                />
                <Box>
                    <Button variant='contained'>
                        <SearchIcon />
                        Search
                    </Button>
                    <Button variant='contained'>
                        <RestartAltIcon />
                        Reset
                    </Button>
                </Box>
            </Box>


            <Grid container spacing={5}>
                {
                    loading ?
                        collections?.map((element, index) => {
                            return (
                                <Grid key={index} item xs={match1700 ? 4 : match900 ? 6 : 12}>
                                    <Box className={classes.card}
                                        onClick={() => handleCollectionView(element)}
                                    >
                                        <Box className={classes.cardImage}>
                                            <Box component={'img'}
                                                src={element.banner}
                                            />
                                            <Box component={'img'}
                                                src={element.image}
                                                className={classes.smallImage}
                                            />
                                        </Box>
                                        <Box className={classes.desc}>
                                            <Box className={classes.imageName}>
                                                {element.name}
                                            </Box>
                                            <Box className={classes.itemCount}>
                                                {element.item_count} items
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
                                    <Skeleton animation="wave" className={classes.cardContent}>

                                    </Skeleton>
                                </Grid>
                            )
                        })
                }
            </Grid>
        </Box>
    )
}

export default MyCollectionForm;