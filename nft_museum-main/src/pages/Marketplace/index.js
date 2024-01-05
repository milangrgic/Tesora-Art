import React, { useState, useEffect } from 'react';

import { connect } from 'react-redux';
import { GetMarketPlaceViewModel } from '../../redux/actions/getData';

import NavBar from '../../components/Layouts/NavBar';
import MarketplaceForm from '../../components/Marketplace';
import { filterContext } from '../../utils/context';

import {
    Box, useMediaQuery,
} from '@mui/material';

import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        marginTop: '80px',
    }
}));

const Marketplace = (props) => {

    const {
        GetMarketPlaceViewModel,
        collections,
        items,
        categories
    } = props;

    const classes = useStyles();
    const match = useMediaQuery('(min-width : 900px)');


    useEffect(() => {
        GetMarketPlaceViewModel()
    }, [])

    return (
        <Box className={classes.root}>
            {
                match && <NavBar />
            }
            <MarketplaceForm
                collections={collections}
                items={items}
                categories={categories}
            />
        </Box>
    )
}

const mapStateToProps = state => ({
    collections: state.marketPlace.collections,
    items: state.marketPlace.items,
    categories: state.marketPlace.categories
})

const mapDispatchToProps = {
    GetMarketPlaceViewModel
}

export default connect(mapStateToProps, mapDispatchToProps)(Marketplace);