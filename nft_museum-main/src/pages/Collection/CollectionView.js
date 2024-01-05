import React, { useState, useEffect } from 'react';

import { connect } from 'react-redux';

import CollectionViewForm from '../../components/Collection/CollectionView';

import {
    Box,
} from '@mui/material';

import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        marginTop: '80px',
    }
}));

const CollectionView = (props) => {

    const classes = useStyles();

    return (
        <Box className={classes.root}>
            <CollectionViewForm />
        </Box>
    )
}

const mapStateToProps = state => ({
})

const mapDispatchToProps = {
}

export default connect(mapStateToProps, mapDispatchToProps)(CollectionView);