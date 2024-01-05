import React, { useState, useEffect } from "react";

import { connect } from 'react-redux';
import { SetFilterSortBy, SetFilterPrice, SetFilterCollection, SetFilterCategory } from "../../../../redux/actions/filter";

import FilterSortBy from './FilterSortBy';
import FilterPrice from './FilterPrice';
import FilterCollection from "./FilterCollection";
import FilterCategory from "./FilterCategory";

import Test_Image from '../../../../assets/Home/test.jpg';
import Trend_Image from '../../../../assets/Home/trend.png';
import Unique_Image from '../../../../assets/Home/unique.png';
import Dfgadfrds_Image from '../../../../assets/Home/dfgadfrds.jpg';
import Metaverso_Image from '../../../../assets/Home/metaverso.jpg';
import Sculpture_Image from '../../../../assets/Home/sculpture.jpg';
import Certificates_Image from '../../../../assets/Home/certificates.jpg';
import Painters_Image from '../../../../assets/Home/painters.png';
import Photography_Image from '../../../../assets/Home/photography.png';
import Modern_Image from '../../../../assets/Home/modern.png';

import {
    Box,
} from '@mui/material';

const collection = [
    {
        image: Test_Image,
        imageName: 'Test Collection',
    },
    {
        image: Trend_Image,
        imageName: 'Trend',
    },
    {
        image: Unique_Image,
        imageName: 'Unique',
    },
    {
        image: Dfgadfrds_Image,
        imageName: 'Dfgadfrds',
    },
]

const category = [
    {
        image: Metaverso_Image,
        imageName: 'METAVERSO',
    },
    {
        image: Sculpture_Image,
        imageName: 'PRIMARY SCULPTURE ARTISTS',
    },
    {
        image: Certificates_Image,
        imageName: 'CERTIFICATES-UTILITY',
    },
    {
        image: Painters_Image,
        imageName: 'PRIMARY PAINTERS ARTISTS',
    },
    {
        image: Photography_Image,
        imageName: 'PHOTOGRAPHY',
    },
    {
        image: Modern_Image,
        imageName: 'MODERN',
    },
]

const FilterSide = (props) => {

    const {
        collections,
        categories,
        SetFilterSortBy, SetFilterPrice, SetFilterCollection, SetFilterCategory,
        filterSortBy, filterPrice, filterCollection, filterCategory,
    } = props;

    const [expanded, setExpanded] = useState(false);

    const handleChangeAccordion = (panel) => {
        if (expanded === panel)
            setExpanded(false);
        else
            setExpanded(panel)
    }

    return (
        <Box>
            <FilterSortBy
                expanded={expanded}
                handleChangeAccordion={handleChangeAccordion}
                filterSortBy={filterSortBy}
                SetFilterSortBy={SetFilterSortBy}
            />
            <FilterPrice
                expanded={expanded}
                handleChangeAccordion={handleChangeAccordion}
                filterPrice={filterPrice}
                SetFilterPrice={SetFilterPrice}
            />
            <FilterCollection
                collections={collection}
                expanded={expanded}
                handleChangeAccordion={handleChangeAccordion}
                SetFilterCollection={SetFilterCollection}
            />
            <FilterCategory
                categories={category}
                expanded={expanded}
                handleChangeAccordion={handleChangeAccordion}
                SetFilterCategory={SetFilterCategory}
            />
        </Box>
    )
}

const mapStateToProps = state => ({
    collections: state.marketPlace.collections,
    categories: state.marketPlace.categories,
    filterSortBy: state.filter.filterSortBy,
    filterPrice: state.filter.filterPrice,
    filterCollection: state.filter.filterCollection,
    filterCategory: state.filter.filterCategory,
})

const mapDispatchToProps = {
    SetFilterSortBy,
    SetFilterPrice,
    SetFilterCollection,
    SetFilterCategory
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterSide);