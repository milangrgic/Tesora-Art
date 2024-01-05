import React, { useState } from "react";

import { useNavigate } from 'react-router-dom';

import CollectionDeleteDialog from '../Collection/CollectionDeleteDialog'

import {
    Box, List, ListItem, Popover
} from '@mui/material';

import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    popOver: {
        fontSize: '16px',
        "& .MuiListItem-root": {
            display: 'flex',
            alignItems: 'center',
            fontSize: '20px',
            color: 'rgba(44, 56, 74, 0.68)',
            fontWeight: 'bold',
            padding: '10px 20px',
            cursor: 'pointer',
            "&:hover": {
                background: '#d8dbe0'
            }
        },
    },
}));

const ProfilePopover = (props) => {

    const {
        open,
        anchorRef,
        handleClosePopOver,
        popoverData,
        routeType,
        collection_id
    } = props;

    const classes = useStyles();
    const navigate = useNavigate();

    const [openDialog, setOpenDialog] = useState(false);

    const handleNavigate = (element) => {
        if (element.label === 'Logout') {
            sessionStorage.removeItem("login");
        }
        else if (element.label === 'Delete Collection') {
            setOpenDialog(true);
        }
        else if (element.label === "Edit Collection") {
            navigate(`${element.link}/${collection_id}`)
        }
        else
            navigate(element.link);
        handleClosePopOver();
    }

    const handleCloseDialog = () => {
        setOpenDialog(false);
    }

    return (
        <>
            <Popover
                id="popover"
                open={open}
                anchorEl={anchorRef ? anchorRef.current : null}
                onClose={handleClosePopOver}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right'
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                PaperProps={{
                    style: { width: '220px' }
                }}
            >
                <Box className={classes.popOver}>
                    <List>
                        {
                            popoverData.map((element, index) => {
                                return (
                                    <ListItem key={index}
                                        onClick={() => handleNavigate(element)}
                                        sx={{ color: (routeType === element.label) ? 'black !important' : 'rgba(44, 56, 74, 0.68)' }}
                                    >
                                        {element.label}
                                    </ListItem>
                                )
                            })
                        }
                    </List>
                </Box>

            </Popover>
            <CollectionDeleteDialog
                open={openDialog}
                handleClose={handleCloseDialog}
            />
        </>
    )
}

export default ProfilePopover;