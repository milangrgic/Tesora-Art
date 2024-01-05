import React, { useState, useEffect } from 'react' ;

import { connect } from 'react-redux';
import { GetProfileViewModel } from '../../redux/actions/getData';

import ProfileForm from '../../components/Profile';
import { ProfileContext } from '../../utils/context'

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

const Profile = (props) => {

    const {
        GetProfileViewModel,
        items,
        offers,
        favourates,
        users
    } = props;

    const classes = useStyles() ;

    React.useEffect(() => {
        GetProfileViewModel()
    }, [])

    return (
        <Box className = {classes.root}>
            <ProfileContext.Provider value={{
                    items,
                    offers,
                    favourates,
                    users
                }}
            >
                <ProfileForm />
            </ProfileContext.Provider>
        </Box>
    )
}

const mapStateToProps = state => ({
    items : state.profile.items,
    offers : state.profile.offers,
    favourates : state.profile.favourates,
    users : state.profile.users,
})

const mapDispatchToProps = {
    GetProfileViewModel
}

export default connect(mapStateToProps, mapDispatchToProps) (Profile) ;