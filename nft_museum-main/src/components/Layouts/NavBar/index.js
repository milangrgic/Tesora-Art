
import React, { useRef, useState } from 'react';

import { connect } from 'react-redux';

// import Test_Image from '../../../assets/Home/test.jpg';
// import Trend_Image from '../../../assets/Home/trend.png';
// import Unique_Image from '../../../assets/Home/unique.png';
// import Dfgadfrds_Image from '../../../assets/Home/dfgadfrds.jpg';
// import Metaverso_Image from '../../../assets/Home/metaverso.jpg';
// import Sculpture_Image from '../../../assets/Home/sculpture.jpg';
// import Certificates_Image from '../../../assets/Home/certificates.jpg';
// import Painters_Image from '../../../assets/Home/painters.png';
// import Photography_Image from '../../../assets/Home/photography.png';
// import Modern_Image from '../../../assets/Home/modern.png';

import { useStyles } from './StyleDiv/NavBarStyleDiv';
import FilterSide from './FilterSide';

import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import {
    Box,
    ListItem,
    IconButton,
} from '@mui/material';

// const collection = [
//     {
//         image : Test_Image,
//         imageName : 'Test Collection',
//     },
//     {
//         image : Trend_Image,
//         imageName : 'Trend',
//     },
//     {
//         image : Unique_Image,
//         imageName : 'Unique',
//     },
//     {
//         image : Dfgadfrds_Image,
//         imageName : 'Dfgadfrds',
//     },
// ]

// const category = [
//     {
//         image : Metaverso_Image,
//         imageName : 'METAVERSO',
//     },
//     {
//         image : Sculpture_Image,
//         imageName : 'PRIMARY SCULPTURE ARTISTS',
//     },
//     {
//         image : Certificates_Image,
//         imageName : 'CERTIFICATES-UTILITY',
//     },
//     {
//         image : Painters_Image,
//         imageName : 'PRIMARY PAINTERS ARTISTS',
//     },
//     {
//         image : Photography_Image,
//         imageName : 'PHOTOGRAPHY',
//     },
//     {
//         image : Modern_Image,
//         imageName : 'MODERN',
//     },
// ]

const NavBar = (props) => {

    const [showType, setShowType] = useState(true);

    const classes = useStyles({ showType: showType });

    const handleChangeShow = () => {
        setShowType(!showType);
    }

    return (
        <Box className={classes.root}>
            {
                showType ?
                    <ListItem className={classes.filter}>
                        <Box className={classes.filterIcon}>
                            <FilterAltOutlinedIcon />
                            Filter
                        </Box>
                        <IconButton onClick={handleChangeShow}>
                            <ArrowBackIcon />
                        </IconButton>
                    </ListItem>
                    :
                    <ListItem sx={{ justifyContent: 'center' }}>
                        <IconButton onClick={handleChangeShow}>
                            <ArrowForwardIcon />
                        </IconButton>
                    </ListItem>

            }
            {
                showType &&
                <FilterSide />
            }
        </Box>
    );
}

const mapStateToProps = state => ({
})

const mapDispatchToProps = {
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);