import React, { useState, useEffect } from 'react';

import { connect } from 'react-redux';
import { SetFilterSortBy } from '../../redux/actions/filter';

import Collections from '../Common/Collections';
import MobileNavBar from '../Layouts/NavBar/MobileNavBar';
import Test_Image from '../../assets/Home/test.jpg';
import Trend_Image from '../../assets/Home/trend.png';
import Unique_Image from '../../assets/Home/unique.png';
import Dfgadfrds_Image from '../../assets/Home/dfgadfrds.jpg';
import { useStyles } from './StyleDiv/MarketplaceStyleDiv';

import SearchIcon from '@mui/icons-material/Search';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';

import {
    Box, TextField, Button, useMediaQuery,
} from '@mui/material';

const collection = [
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

const MarketplaceForm = (props) => {

    const {
        items,
        filterSortBy,
    } = props;

    const classes = useStyles();
    const match900 = useMediaQuery('(min-width : 900px)');

    const [searchText, setSearchText] = useState('');
    const [openDrawer, setOpenDrawer] = useState(false);

    const handleChangeSearch = (e) => {
        setSearchText(e.target.value);
    }

    const handleChangeDrawer = (type) => {
        setOpenDrawer(type);
    }

    return (
        <Box className={classes.root}>
            <Box className={classes.topImage} />

            <Box className={classes.title}>
                Products greater than 10 ETH
            </Box>

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

            {
                !match900 &&
                <Box className={classes.filterBtn}>
                    <Button onClick={() => handleChangeDrawer(true)}>
                        <FilterAltOutlinedIcon />
                        Filter
                    </Button>
                </Box>
            }

            <Collections
                collection={collection}
            />

            <MobileNavBar
                openDrawer={openDrawer}
                handleClose={handleChangeDrawer}
            />
        </Box>
    )
}

const mapStateToProps = state => ({
    filterSortBy: state.filter.filterSortBy,
})

const mapDispatchToProps = {
    SetFilterSortBy
}

export default connect(mapStateToProps, mapDispatchToProps)(MarketplaceForm);