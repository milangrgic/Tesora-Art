import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';

import { connect } from 'react-redux';
import { GetEditCollection } from '../../redux/actions/getData';

import ProfilePopover from '../Common/ProfilePopover';
import Collections from '../Common/Collections';
import { useStyles } from './StyleDiv/CollectionVIewStyleDiv';
import Test_Image from '../../assets/Home/test.jpg';
import Trend_Image from '../../assets/Home/trend.png';
import Unique_Image from '../../assets/Home/unique.png';
import Dfgadfrds_Image from '../../assets/Home/dfgadfrds.jpg';

import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import SearchIcon from '@mui/icons-material/Search';
import RestartAltIcon from '@mui/icons-material/RestartAlt';

import {
    Box, Grid, TextField, Button, useMediaQuery
} from '@mui/material';

const settingData = [
    {
        label: 'Add Item',
        link: '/item/add'
    },
    {
        label: 'Edit Collection',
        link: '/collection/edit'
    },
    {
        label: 'Delete Collection',
        link: ''
    },
    {
        label: 'Activity',
        link: '/collection/activity'
    },
]

const items = [
    {
        image: Test_Image,
        name: 'Test Image',
        ethPrice: 0.0001,
        usdPrice: 38.233
    },
    {
        image: Trend_Image,
        name: 'Trend',
        ethPrice: 0.01,
        usdPrice: 19.117
    },
    {
        image: Unique_Image,
        name: 'Unique',
        ethPrice: 0.01,
        usdPrice: 19.119
    },
    {
        image: Dfgadfrds_Image,
        name: 'Dfgadfrds',
        ethPrice: 0.001,
        usdPrice: 1.912
    },
]

const CollectionViewForm = (props) => {

    const {
        GetEditCollection,
        collection
    } = props;

    const classes = useStyles();
    const anchorRef = useRef();
    const { collection_id } = useParams();

    const [collectionData, setCollectionData] = useState(null);
    const [settingPopover, setSettingPopover] = useState(false);
    const [searchText, setSearchText] = useState('');

    const handleChangeSearch = (e) => {
        setSearchText(e.target.value);
    }

    const handleSettingPopover = (type) => {
        setSettingPopover(type);
    }

    useEffect(() => {
        if (collection_id)
            GetEditCollection(collection_id)
    }, [collection_id])

    useEffect(() => {
        if (collection) {
            setCollectionData(collection)
        }
    }, [collection])

    return (
        <Box className={classes.root}>
            <Box className={classes.imageContent}>
                <Box component={'img'} src={collectionData?.banner} className={classes.backImage} />
                <Box component={'img'} src={collectionData?.image} className={classes.smallImage} />
            </Box>

            <Box className={classes.optionDiv}>
                <SettingsApplicationsIcon
                    onClick={() => handleSettingPopover(true)}
                    ref={anchorRef}
                />
            </Box>

            <Box className={classes.headerDiv}>
                <Box className={classes.collectionName}>
                    {collectionData?.name}
                </Box>
                <Box className={classes.collectionInfo}>
                    <Box className={classes.item}>
                        <Box sx={{ fontWeight: 'bold' }}> {collectionData?.item_count} </Box>
                        <Box sx={{ fontSize: '14px' }}> Items </Box>
                    </Box>
                    <Box className={classes.item}>
                        <Box sx={{ fontWeight: 'bold' }}> {collectionData?.royalties} </Box>
                        <Box sx={{ fontSize: '14px' }}> Royalties </Box>
                    </Box>
                    <Box className={classes.item}>
                        <Box sx={{ fontWeight: 'bold' }}> {collectionData?.volume_traded} </Box>
                        <Box sx={{ fontSize: '14px' }}> Volume Traded </Box>
                    </Box>
                </Box>
            </Box>

            <Box className={classes.filterItem}>
                <Box className={classes.searchDiv}>
                    <TextField
                        value={searchText}
                        onChange={(e) => handleChangeSearch(e)}
                        placeholder='Search'
                        fullWidth
                    />
                    <Box>
                        <Button variant='contained'>
                            <SearchIcon />
                            Search
                        </Button>
                        <Button variant='contained'>
                            <RestartAltIcon />
                            Reset
                        </Button>
                    </Box>
                </Box>

                <Collections
                    collection={items}
                />
            </Box>

            <ProfilePopover
                open={settingPopover}
                anchorRef={anchorRef}
                handleClosePopOver={() => handleSettingPopover(false)}
                popoverData={settingData}
                collection_id={collection_id}
            />
        </Box>
    )

}

const mapStateToProps = state => ({
    collection: state.editCollection.collection
})

const mapDispatchToProps = {
    GetEditCollection
}

export default connect(mapStateToProps, mapDispatchToProps)(CollectionViewForm);