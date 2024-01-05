import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { connect } from 'react-redux';
import { GetItemViewViewModel } from '../../../redux/actions/getData';

import { useStyles } from '../StyleDiv/ItemViewStyleDiv';
import Modal from './ImageModal';
import Loading from '../../Common/Loading';
import AccordionGroup from './AccordionGroup';
import ItemDetail from './ItemDetail';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SwapVertIcon from '@mui/icons-material/SwapVert';
import GridOnIcon from '@mui/icons-material/GridOn';

import {
    Box,
    Grid,
    useMediaQuery,
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Link,
    TableContainer,
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
} from '@mui/material';

const tradeHead = [
    {
        name: 'Event',
        width: '80px'
    },
    {
        name: 'Price',
        width: '100px'
    },
    {
        name: 'From',
        width: '80px'
    },
    {
        name: 'To',
        width: '80px'
    },
    {
        name: 'Transaction Hash',
        width: '120px'
    },
    {
        name: 'CreatedDate',
        width: '120px'
    },
]

const tradeData = [
    {
        event: 'transfer',
        price: 0.02,
        from: 'tesora test',
        to: 'museum testtwo',
        transactionHash: '0x099bb4f278c2c33cb62f10c61e4e1ca27c073633b33b4a9933f5f494d601986f',
        createdDate: 'August 2, 2022'
    },
    {
        event: 'bids',
        price: 0.03,
        from: 'tesora THREE',
        to: 'tesora test',
        transactionHash: '',
        createdDate: 'August 2, 2022'
    },
    {
        event: 'bids',
        price: 0.02,
        from: 'museum testtwo',
        to: 'tesora test',
        transactionHash: '',
        createdDate: 'August 2, 2022'
    },
    {
        event: 'bids',
        price: 0.01,
        from: '',
        to: 'tesora test',
        transactionHash: '0xd870993ae83de586a5d4d29aeb510f743a8b443b2ad61f0953931f8ffb38c757',
        createdDate: 'August 2, 2022'
    },
]

const delay = ms => new Promise(
    resolve => setTimeout(resolve, ms)
)

const ItemView = (props) => {

    const {
        GetItemViewViewModel,
        collections, items, categories,
        offers, histories, prices, users
    } = props;

    const classes = useStyles();
    const { item_id } = useParams();
    const match1000 = useMediaQuery('(min-width : 1000px)');

    const [collectionInfo, setCollectionInfo] = useState(null);
    const [itemInfo, setItemInfo] = useState(null);
    const [categoryInfo, setCategoryInfo] = useState(null);
    const [historyInfo, setHistoryInfo] = useState('');
    const [priceInfo, setPriceInfo] = useState('');
    const [userInfo, setUserInfo] = useState(null);
    const [openImage, setOpenImage] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleOpenImage = () => {
        setOpenImage(true);
    }

    const handleCloseImage = () => {
        setOpenImage(false);
    }

    useEffect(() => {
        GetItemViewViewModel()

        async function makeRequest() {
            await delay(2000);
            setLoading(true);
        }

        makeRequest();
    }, [])

    useEffect(() => {
        if (items) {
            items.forEach(element => {
                if (element.item_id === parseInt(item_id)) {

                    setItemInfo(element)

                    collections.forEach(row => {
                        if (element.collection_id === row.collection_id)
                            setCollectionInfo(row)
                    })

                }
            });
        }
    }, [items])

    useEffect(() => {
        if (categories) {
            categories.forEach(row => {
                if (row.category_id === itemInfo?.category_id)
                    setCategoryInfo(row)
            })
        }

        if (prices) {
            prices.forEach(row => {
                if (row.item_id === itemInfo?.item_id) {
                    setPriceInfo(priceInfo => [...priceInfo, row])

                    users.forEach(element => {
                        if (element.user_id === row.user_id)
                            setUserInfo(element)
                    })
                }
            })
        }

        if (histories) {
            histories.forEach(row => {
                if (row.item_id === itemInfo?.item_id)
                    setHistoryInfo(historyInfo => [...historyInfo, row])
            })
        }
    }, [itemInfo])

    return (
        <Box className={classes.root}>
            {
                loading ?
                    <>
                        <Grid container spacing={2} sx={{ width: '100%', marginLeft: '0px' }}>
                            <Grid item xs={match1000 ? 5 : 12} sx={{ pl: 0 + ' !important' }}>
                                <Box className={classes.imageContent}
                                    onClick={itemInfo?.media && handleOpenImage}
                                >
                                    <Box component={'img'}
                                        src={itemInfo?.image}
                                        className={classes.image}
                                    />
                                </Box>
                                {
                                    match1000 &&
                                    <AccordionGroup
                                        classes={classes}
                                        collectionInfo={collectionInfo}
                                        itemInfo={itemInfo}
                                    />
                                }
                            </Grid>
                            <Grid item xs={match1000 ? 7 : 12} className={classes.detail}>
                                <ItemDetail
                                    classes={classes}
                                    categoryInfo={categoryInfo}
                                    collectionInfo={collectionInfo}
                                    itemInfo={itemInfo}
                                    priceInfo={priceInfo}
                                    userInfo={userInfo}
                                />
                            </Grid>
                        </Grid>

                        <Accordion className={classes.priceHistory}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <SwapVertIcon />
                                Trade History
                            </AccordionSummary>
                            <AccordionDetails>
                                <TableContainer>
                                    <Table>
                                        <TableHead>
                                            <TableRow>
                                                {
                                                    tradeHead.map((element, index) => {
                                                        return (
                                                            <TableCell key={index} sx={{ minWidth: element.width }}>
                                                                {element.name}
                                                            </TableCell>
                                                        )
                                                    })
                                                }
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {
                                                tradeData.map((element, index) => {
                                                    return (
                                                        <TableRow key={index}>
                                                            <TableCell>
                                                                {element.event}
                                                            </TableCell>
                                                            <TableCell>
                                                                {element.price}
                                                            </TableCell>
                                                            <TableCell>
                                                                <Link href="#">
                                                                    {element.from}
                                                                </Link>
                                                            </TableCell>
                                                            <TableCell>
                                                                <Link href="#">
                                                                    {element.to}
                                                                </Link>
                                                            </TableCell>
                                                            <TableCell>
                                                                <Link href="#">
                                                                    {element.transactionHash}
                                                                </Link>
                                                            </TableCell>
                                                            <TableCell>
                                                                {element.createdDate}
                                                            </TableCell>
                                                        </TableRow>
                                                    )
                                                })
                                            }
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </AccordionDetails>
                        </Accordion>

                        <Accordion className={classes.priceHistory}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <GridOnIcon />
                                More from this collection
                            </AccordionSummary>
                            <AccordionDetails>
                                <Box sx={{ display: 'inline-flex' }}>
                                    {
                                        items?.map((element, index) => {
                                            return (
                                                <Box key={index} className={classes.card}>
                                                    <Box className={classes.cardImage}>
                                                        <Box component={'img'} src={element.media} />
                                                    </Box>
                                                    <Box sx={{ p: 2 }}>
                                                        <Box className={classes.imageName}>
                                                            {element.name}
                                                        </Box>
                                                        <Box className={classes.imagePrice}>
                                                            {"Price" + element.price + 'ETH' + '~ $' + element.price * 1200 + 'USD'}
                                                        </Box>
                                                    </Box>
                                                </Box>
                                            )
                                        })
                                    }
                                </Box>
                            </AccordionDetails>
                        </Accordion>
                    </>
                    :
                    <Loading />
            }

            <Modal isOpen={openImage} closeModal={handleCloseImage}>
                <Box component={'img'} src={itemInfo?.media} className={classes.image} />
            </Modal>
        </Box>
    )
}

const mapStateToProps = state => ({
    collections: state.itemView.collections,
    items: state.itemView.items,
    categories: state.itemView.categories,
    offers: state.itemView.offers,
    histories: state.itemView.histories,
    prices: state.itemView.prices,
    users: state.itemView.users,
})

const mapDispatchToProps = {
    GetItemViewViewModel
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemView);