import React, { useState, useEffect } from 'react' ;

import { connect } from 'react-redux';
import { GetProfileViewModel } from '../../redux/actions/getData';

import SettingsForm from '../../components/Profile/Setting';

import {
    Box ,
} from '@mui/material' ;

import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    root : {
        display : 'flex',
        marginTop : '80px',
    }
}));

const Settings = (props) => {

    const {
        users
    } = props;

    const classes = useStyles() ;

    useEffect(() => {
        GetProfileViewModel()
    }, [])

    return (
        <Box className = {classes.root}>
            <SettingsForm users={users}/>
        </Box>
    )
}

const mapStateToProps = state => ({
    users : state.profile.users,
})

const mapDispatchToProps = {
    GetProfileViewModel
}

export default connect(mapStateToProps, mapDispatchToProps) (Settings) ;