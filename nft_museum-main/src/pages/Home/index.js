import React, { useState, useEffect } from 'react';

import { connect } from 'react-redux';
import { GetHomeViewModel } from '../../redux/actions/getData';

import Intro from './Intro';
import Trending from './Trending';
import CreateSell from './CreateSell';
import BrowseCategory from './BrowseCategory';

import {
    Box,
} from '@mui/material';

import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: '80px',
    }
}));

const Home = (props) => {

    const {
        GetHomeViewModel,
        collections,
        items,
        categories
    } = props;

    const classes = useStyles();

    useEffect(() => {
        GetHomeViewModel()
    }, [])

    return (
        <Box className={classes.root}>
            <Intro />
            <Trending collections={collections} items={items} />
            <CreateSell />
            <BrowseCategory categories={categories} />
        </Box>
    )
}

const mapStateToProps = state => ({
    collections: state.home.collections,
    items: state.home.items,
    categories: state.home.categories
})

const mapDispatchToProps = {
    GetHomeViewModel
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);