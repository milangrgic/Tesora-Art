import React, { useState, useEffect } from 'react' ;

import Collection1_Image from '../../assets/Activity/collection1.png';
import Collection2_Image from '../../assets/Activity/collection2.png';
import Unique_Image from '../../assets/Home/unique.png';
import Simple_Image from '../../assets/Activity/simple.png';
import Photography_Image from '../../assets/Home/photography.png';
import Trend_Image from '../../assets/Home/trend.png';
import Sculpture_Image from '../../assets/Home/sculpture.jpg';
import Dfgadfrds_Image from '../../assets/Home/dfgadfrds.jpg';
import Certificates_Image from '../../assets/Home/certificates.jpg';

import {
    Box, Link, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow ,
} from '@mui/material' ;

import { useStyles } from './ActivityStyleDiv';
import TransactionInfo from '../Common/TransactionInfo';

const mockHead = [
    {
        name : 'Collection',
        width : '80px',
    },
    {
        name : 'Item',
        width : '80px',
    },
    {
        name : 'Event',
        width : '80px',
    },
    {
        name : 'Price',
        width : '50px',
    },
    {
        name : 'From',
        width : '80px',
    },
    {
        name : 'To',
        width : '80px',
    },
    {
        name : 'Transaction Hash',
        width : '100px',
    },
    {
        name : 'Created Date',
        width : '140px',
    },
]

const mockData = [
    {
        collection : Collection1_Image,
        item : Sculpture_Image,
        event : 'Minted',
        price : '0.0001 ETH',
        from : '',
        to : 'James Abbas',
        transactionHash : '0x76c642ed278930849ab990c42068067c5a17750f7f1536e54e31a62fff26239',
        createdDate : 'January 10, 2022'
    },
    {
        collection : Collection2_Image,
        item : Dfgadfrds_Image,
        event : 'Minted',
        price : '0.001 ETH',
        from : '',
        to : 'James Abbas',
        transactionHash : '0xf6b2b6e92058b462aff0c748c246e2c3549d417f2af758445e267a6a051b994',
        createdDate : 'December 13, 2021'
    },
    {
        collection : Unique_Image,
        item : Simple_Image,
        event : 'Bids',
        price : '0.001 ETH',
        from : 'James Abbas',
        to : 'Jammy h',
        transactionHash : '',
        createdDate : 'December 6, 2021'
    },
    {
        collection : Photography_Image,
        item : Photography_Image,
        event : 'Bids',
        price : '0.5 ETH',
        from : 'James Abbas',
        to : 'Jammy h',
        transactionHash : '',
        createdDate : 'December 1, 2021'
    },
    {
        collection : Unique_Image,
        item : Unique_Image,
        event : 'Bids',
        price : '0.5 ETH',
        from : 'James Abbas',
        to : 'Jammy h',
        transactionHash : '',
        createdDate : 'November 30, 2021'
    },
    {
        collection : Unique_Image,
        item : Unique_Image,
        event : 'Bids',
        price : '0.1 ETH',
        from : 'James Abbas',
        to : 'Jammy h',
        transactionHash : '',
        createdDate : 'November 30, 2021'
    },
    {
        collection : Photography_Image,
        item : Trend_Image,
        event : 'Minted',
        price : '6 ETH',
        from : '',
        to : 'Jammy h',
        transactionHash : '0xb37735b7f9fd06f551cfbf266c4cbd678d2d9e4db895a70d167afe3c9b8722da',
        createdDate : 'November 26, 2021'
    },
    {
        collection : Unique_Image,
        item : Unique_Image,
        event : 'Minted',
        price : '5 ETH',
        from : '',
        to : 'Jammy h',
        transactionHash : '0x01f16773898e1858e0f7f1bb7544d45e9aced48663ab665dff8aeaf4dbe21b79',
        createdDate : 'November 26, 2021'
    },
    {
        collection : Certificates_Image,
        item : Simple_Image,
        event : 'Bids',
        price : '1 ETH',
        from : 'dweio dicu',
        to : 'Jammy h',
        transactionHash : '',
        createdDate : 'November 24, 2021'
    },
    {
        collection : Certificates_Image,
        item : Simple_Image,
        event : 'Bids',
        price : '0.0001 ETH',
        from : 'Tina a',
        to : 'Jammy h',
        transactionHash : '',
        createdDate : 'November 20, 2021'
    },
]

const ActivityForm = (props) => {

    const {
        histories
    } = props;

    const classes = useStyles() ;

    return (
        <Box className = {classes.root}>
            <TransactionInfo
                transactionHead={mockHead}
                histories={histories}
            />
        </Box>
    )
}
export default ActivityForm ;