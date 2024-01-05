import React, { useState, useEffect } from 'react' ;

import { connect } from 'react-redux';
import { GetCollectionViewDetailModel } from '../../redux/actions/getData';

import CollectionDetailForm from '../../components/Collection/CollectionDetail';

import {
    Box,
} from '@mui/material' ;

import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    root : {
        display : 'flex',
        marginTop : '80px',
    }
}));

const CollectionDetail = (props) => {

    const {
        GetCollectionViewDetailModel,
        collection,
        items,
        categories
    } = props;

    const classes = useStyles() ;

    useEffect(() => {
        GetCollectionViewDetailModel()
    }, [])

    return (
        <Box className = {classes.root}>
            <CollectionDetailForm 
                collection={collection}
                items={items}
                categories={categories}
            />
        </Box>
    )
}

const mapStateToProps = state => ({
    collection : state.collectionViewDetail.collection,
    items : state.collectionViewDetail.items,
    categories : state.collectionViewDetail.categories
})

const mapDispatchToProps = {
    GetCollectionViewDetailModel
}

export default connect(mapStateToProps, mapDispatchToProps) (CollectionDetail) ;