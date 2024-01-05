import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LogoutIcon from '@mui/icons-material/Logout';
import EmojiFlagsIcon from '@mui/icons-material/EmojiFlags';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import TimelineIcon from '@mui/icons-material/Timeline';
import ListIcon from '@mui/icons-material/List';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SellIcon from '@mui/icons-material/Sell';

import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Box,
    Button,
    Link,
    TableContainer,
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
    useMediaQuery,
    Stack
} from "@mui/material";
import AccordionGroup from "./AccordionGroup";
import MakeOfferDialog from "./MakeOfferDialog";

const priceHead = [
    {
        name: 'Price',
        width: '80px',
    },
    {
        name: 'User',
        width: '140px',
    },
    {
        name: 'Created Date',
        width: '140px',
    },
]

const offerHead = [
    {
        name: 'Sender',
        widht: '80px'
    },
    {
        name: 'Price',
        widht: '80px'
    },
    {
        name: 'CreatedDate',
        widht: '140px'
    },
    {
        name: 'Action',
        widht: '120px'
    },
]

const offerData = [
    {
        sender: '',
        price: '',
        createdDate: '',
        action: ''
    }
]

const ItemDetail = (props) => {

    const {
        classes,
        categoryInfo,
        collectionInfo,
        itemInfo,
        priceInfo,
    } = props;

    const navigate = useNavigate();
    const match1000 = useMediaQuery('(min-width : 1000px)');

    const [favorite, setFavorite] = useState(false);
    const [openOfferDialog, setOpenOfferDialog] = useState(false);

    const handleMakeOfferDialog = (type) => {
        setOpenOfferDialog(type)
    }

    return (
        <Box>
            <Box className={classes.collectionOption}>
                <Link href="/marketplace">
                    {categoryInfo?.title}
                </Link>
                <Box className={classes.collectionLink}>
                    <Button onClick={() => setFavorite(!favorite)} sx={{ borderRight: '1px solid lightgrey', borderTopLeftRadius: '12px !important', borderBottomLeftRadius: '12px !important' }}>
                        {
                            favorite ?
                                <FavoriteIcon sx={{ color: 'red' }} />
                                :
                                <FavoriteBorderIcon />
                        }
                    </Button>
                    <Button onClick={() => navigate('#')} sx={{ borderRight: '1px solid lightgrey' }}>
                        <LogoutIcon />
                    </Button>
                    <Button onClick={() => navigate('#')} sx={{ borderTopRightRadius: '12px !important', borderBottomRightRadius: '12px !important' }}>
                        <EmojiFlagsIcon />
                    </Button>
                </Box>
            </Box>

            <Box className={classes.collectionName}>
                {itemInfo?.name}
            </Box>

            <Box className={classes.collectionHelper}>
                <Box sx={{ mr: 3 }}>
                    Owned by &nbsp;
                    <Link href="/profile/${}">
                        {collectionInfo?.author.user_name}
                    </Link>
                </Box>
                <Stack direction={'row'}>
                    <RemoveRedEyeIcon />&nbsp;
                    {itemInfo?.view_count} Views
                </Stack>
            </Box>

            <Box className={classes.currentPrice}>
                Current Price
                <Box sx={{ fontSize: '30px', fontWeight: 'bold', mb: 1 }}>
                    {itemInfo?.price} ETH&nbsp;
                    <Box component={'span'} sx={{ fontSize: '16px', fontWeight: 400 }}>
                        {parseFloat(itemInfo?.price * 1200).toFixed(2)} USD
                    </Box>
                </Box>
                <Button variant='contained'>
                    <AccountBalanceWalletIcon />
                    Buy now
                </Button>

                <Button className={classes.offerBtn} onClick={() => handleMakeOfferDialog(true)}>
                    <SellIcon />
                    Make offer
                </Button>
            </Box>

            {
                !match1000 &&
                <AccordionGroup
                    classes={classes}
                    collectionInfo={collectionInfo}
                    itemInfo={itemInfo}
                />
            }

            <Accordion className={classes.priceHistory}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <TimelineIcon />
                    Price History
                </AccordionSummary>
                <AccordionDetails>
                    <TableContainer>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    {
                                        priceHead.map((element, index) => {
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
                                {/* {
                                    priceInfo?.map((element, index) => {
                                        return (
                                            <TableRow key={index}>
                                                <TableCell>
                                                    {element.price}
                                                </TableCell>
                                                <TableCell>
                                                    <Link href="#">
                                                        {element.user}
                                                    </Link>
                                                </TableCell>
                                                <TableCell>
                                                    {element.created_date}
                                                </TableCell>
                                            </TableRow>
                                        )
                                    })
                                } */}
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
                    <ListIcon />
                    Offers
                </AccordionSummary>
                <AccordionDetails>
                    <TableContainer>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    {
                                        offerHead.map((element, index) => {
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
                                    offerData.map((element, index) => {
                                        return (
                                            <TableRow key={index}>
                                                <TableCell>
                                                    {element.sender}
                                                </TableCell>
                                                <TableCell>
                                                    <Link href="#">
                                                        {element.price}
                                                    </Link>
                                                </TableCell>
                                                <TableCell>
                                                    {element.createdDate}
                                                </TableCell>
                                                <TableCell>
                                                    {element.action}
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

            <MakeOfferDialog
                open={openOfferDialog}
                handleClose={() => handleMakeOfferDialog(false)}
            />
        </Box>
    )
}

export default ItemDetail;