import React, { useState, useEffect } from 'react' ;

import CreateCollectionForm from '../../components/Collection/CreateCollection';

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

const CreateCollection = () => {

    const classes = useStyles() ;

    return (
        <Box className = {classes.root}>
            <CreateCollectionForm />
        </Box>
    )
}
export default CreateCollection ;