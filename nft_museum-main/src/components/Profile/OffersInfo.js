import React, { useState, useEffect } from 'react' ;
import {useNavigate} from 'react-router-dom';

import {
    Box, Link, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow ,
} from '@mui/material' ;

import { useStyles } from './StyleDiv/OffersInfoStyleDiv';

const OffersInfo = (props) => {

    const {
        offerHead,
        offerData
    } = props;

    const classes = useStyles() ;
    const navigate = useNavigate();

    const handleNavigateChange = (element) => {

        const itemData = {
            image : element.item,
            ethPrice : 0.001,
            usdPrice : 18.203
        }

        navigate('/item/view', {state : {data : itemData}});
    }
    
    return (
        <Box className={classes.root}>
            <Paper>
                <Box className={classes.tableHeader}>
                    Activity
                </Box>

                <Box className={classes.tableContent}>
                    <TableContainer>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    {
                                        offerHead?.map((element, index) => {
                                            return(
                                                <TableCell key={index} sx={{minWidth : element.width}}>
                                                    { element.name }
                                                </TableCell>
                                            )
                                        })
                                    }
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                    offerData?.map((element,index) => {
                                        return(
                                            <TableRow key={index}>
                                                <TableCell>
                                                    <Box component={'img'}
                                                        src={element.item}
                                                        className={classes.itemImage}
                                                        onClick={() => handleNavigateChange(element)}
                                                    />
                                                </TableCell>
                                                <TableCell>
                                                    {element.sender_id}
                                                </TableCell>
                                                <TableCell>
                                                    {element.price}
                                                </TableCell>
                                                <TableCell>
                                                    {element.created_date}
                                                </TableCell>
                                                <TableCell>
                                                    {element.action}
                                                </TableCell>
                                            </TableRow>
                                        )
                                    })
                                }
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Box>
            </Paper>
        </Box>
    )
}
export default OffersInfo ;