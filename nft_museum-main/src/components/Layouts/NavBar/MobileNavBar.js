
import React, { useContext, useState } from 'react';

import { connect } from 'react-redux';

import Test_Image from '../../../assets/Home/test.jpg';
import Trend_Image from '../../../assets/Home/trend.png';
import Unique_Image from '../../../assets/Home/unique.png';
import Dfgadfrds_Image from '../../../assets/Home/dfgadfrds.jpg';
import Metaverso_Image from '../../../assets/Home/metaverso.jpg';
import Sculpture_Image from '../../../assets/Home/sculpture.jpg';
import Certificates_Image from '../../../assets/Home/certificates.jpg';
import Painters_Image from '../../../assets/Home/painters.png';
import Photography_Image from '../../../assets/Home/photography.png';
import Modern_Image from '../../../assets/Home/modern.png';

import CloseIcon from '@mui/icons-material/Close';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { useStyles } from './StyleDiv/MobileNavBarStyleDiv';

import {
    Box,
    TextField,
    Drawer,
    Button,
    IconButton,
    List,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Grid,
} from '@mui/material' ;

const collection = [
    {
        image : Test_Image,
        imageName : 'Test Collection',
    },
    {
        image : Trend_Image,
        imageName : 'Trend',
    },
    {
        image : Unique_Image,
        imageName : 'Unique',
    },
    {
        image : Dfgadfrds_Image,
        imageName : 'Dfgadfrds',
    },
]

const category = [
    {
        image : Metaverso_Image,
        imageName : 'METAVERSO',
    },
    {
        image : Sculpture_Image,
        imageName : 'PRIMARY SCULPTURE ARTISTS',
    },
    {
        image : Certificates_Image,
        imageName : 'CERTIFICATES-UTILITY',
    },
    {
        image : Painters_Image,
        imageName : 'PRIMARY PAINTERS ARTISTS',
    },
    {
        image : Photography_Image,
        imageName : 'PHOTOGRAPHY',
    },
    {
        image : Modern_Image,
        imageName : 'MODERN',
    },
]

const MobileNavbar = (props) => {

    const classes = useStyles() ;
    
    const {
        openDrawer,
        handleClose
    } = props ;

    const [ expanded, setExpanded ] = useState(false);
    const [ sortType, setSortType ] = useState('recent');
    const [ priceType, setPriceType ] = useState(1);
    const [ searchText, setSearchText ] = useState('');

    const handleChange = (panel) => {
        if(expanded === panel)
            setExpanded(false);
        else
            setExpanded(panel)
    }

    const handleChangeSort = (sort) => {
        setSortType(sort);
    }

    const handleChangePrice = (price) => {
        setPriceType(price);
    }

    const handleChangeSearch = (e) => {
        setSearchText(e.target.value);
    }

    return (
            <Drawer
                variant='persistent'
                anchor='bottom'
                open={openDrawer}
                onClose={handleClose}
                className={classes.root}
                classes={{
                    paper : classes.drawerPaper
                }}
            >
                <List>
                    <Box sx={{display : 'flex', justifyContent : 'flex-end'}}>
                        <IconButton onClick={() => {handleClose(false)}}>
                            <CloseIcon />
                        </IconButton>
                    </Box>
                    <Box>
                        <Accordion expanded={expanded === 'panel1'} onChange={() => handleChange('panel1')}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                Sort by
                            </AccordionSummary>
                            <AccordionDetails>
                                <Grid container spacing={2}>
                                    <Grid item xs={6}>
                                        <Button variant='outlined'
                                            onClick={() => handleChangeSort('recent')}
                                            className={sortType === 'recent' ? classes.selectedSortBy : ''}
                                        >
                                            Recent
                                        </Button>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Button variant='outlined'
                                            onClick={() => handleChangeSort('most viewed')}
                                            className={sortType === 'most viewed' ? classes.selectedSortBy : ''}
                                        >
                                            Most Viewed
                                        </Button>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Button variant='outlined'
                                            onClick={() => handleChangeSort('most liked')}
                                            className={sortType === 'most liked' ? classes.selectedSortBy : ''}
                                        >
                                            Most Liked
                                        </Button>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Button variant='outlined'
                                            onClick={() => handleChangeSort('on auction')}
                                            className={sortType === 'on auction' ? classes.selectedSortBy : ''}
                                        >
                                            On Auction
                                        </Button>
                                    </Grid>
                                </Grid>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion expanded={expanded === 'panel2'} onChange={() => handleChange('panel2')}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                Price
                            </AccordionSummary>
                            <AccordionDetails>
                                <Grid container spacing={2}>
                                    <Grid item xs={6}>
                                        <Button
                                            onClick={() => handleChangePrice(1)}
                                            className={priceType === 1 ? classes.selectedSortBy : ''}
                                        >
                                            {`< 1 ETH`}
                                        </Button>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Button
                                            onClick={() => handleChangePrice(10)}
                                            className={priceType === 10 ? classes.selectedSortBy : ''}
                                        >
                                            {`< 10 ETH`}
                                        </Button>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Button
                                            onClick={() => handleChangePrice(100)}
                                            className={priceType === 100 ? classes.selectedSortBy : ''}
                                        >
                                            {`> 100 ETH`}
                                        </Button>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Button
                                            onClick={() => handleChangePrice(1000)}
                                            className={priceType === 1000 ? classes.selectedSortBy : ''}
                                        >
                                            {`> 1000 ETH`}
                                        </Button>
                                    </Grid>
                                </Grid>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion expanded={expanded === 'panel3'} onChange={() => handleChange('panel3')}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                Collections
                            </AccordionSummary>
                            <AccordionDetails>
                                <TextField
                                    value={searchText}
                                    onChange={(e) => handleChangeSearch(e)}
                                    placeholder='Search'
                                    fullWidth
                                />
                                {
                                    collection.map((element, index) => {
                                        return(
                                            <Box key={index} className={classes.collectionList}>
                                                <Box className={classes.collectionImage}>
                                                    <Box component={'img'} src={element.image} />
                                                </Box>
                                                {element.imageName}
                                            </Box>
                                        )
                                    })
                                }
                            </AccordionDetails>
                        </Accordion>
                        <Accordion expanded={expanded === 'panel4'} onChange={() => handleChange('panel4')}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                Categories
                            </AccordionSummary>
                            <AccordionDetails>
                                {
                                    category.map((element, index) => {
                                        return(
                                            <Box key={index} className={classes.collectionList}>
                                                <Box className={classes.collectionImage}>
                                                    <Box component={'img'} src={element.image} />
                                                </Box>
                                                {element.imageName}
                                            </Box>
                                        )
                                    })
                                }
                            </AccordionDetails>
                        </Accordion>
                    </Box>
                </List>
            </Drawer> 
    )  
}

const mapStateToProps = state => ({
})
const mapDispatchToProps = {
}

export default connect(mapStateToProps, mapDispatchToProps)(MobileNavbar) ;