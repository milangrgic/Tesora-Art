import React, { useEffect , useRef, useState  } from 'react' ;

import { connect } from 'react-redux';
import PropTypes from 'prop-types' ;

import Routing from './Routes';
import Header from './Layouts/Header';

import {
    Box
} from '@mui/material' ;

import { makeStyles } from '@mui/styles';


const useStyles = makeStyles((theme) => ({
    root : {
        height: '100vh',
        overflowX: 'auto', 
        overflowY: 'scroll',
    }
}))

const Main = (props) => {
    const classes = useStyles() ;


    const scrollTop = useRef({                
        current : {
            innerText : "efefef"
        }
    }) ;

    return (
        <Box className={classes.root} ref={scrollTop}>
            <Header />
            <Routing />
        </Box>
    )
}

Main.propTypes = {
}
const mapStateToProps = state => ({
}) ;
const mapDispatchToProps = {
} ;
export default connect(mapStateToProps, mapDispatchToProps)(Main) ;