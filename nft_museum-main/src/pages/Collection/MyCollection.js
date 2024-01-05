import React, { useState, useEffect } from 'react' ;

import { connect } from 'react-redux';
import { GetMyCollectionViewModel } from '../../redux/actions/getData';

import MyCollectionForm from '../../components/Collection/MyCollection';

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

const MyCollection = (props) => {

    const {
        GetMyCollectionViewModel,
        collections
    } = props;

    const classes = useStyles() ;

    useEffect(() => {
        GetMyCollectionViewModel()
    }, [])
    
    return (
        <Box className = {classes.root}>
            <MyCollectionForm collections={collections}/>
        </Box>
    )
}

const mapStateToProps = state => ({
    collections : state.myCollection.collections,
})

const mapDispatchToProps = {
    GetMyCollectionViewModel
}

export default connect(mapStateToProps, mapDispatchToProps) (MyCollection) ;