import React, { useState, useEffect } from "react";

import { useStyles } from "../StyleDiv/NavBarStyleDiv";

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import {
    Box,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    TextField,
} from '@mui/material';

const FilterCollection = (props) => {

    const {
        collections,
        expanded,
        handleChangeAccordion,
        SetFilterCollection
    } = props;

    const classes = useStyles();

    const [searchText, setSearchText] = useState('');

    const handleChangeSearch = (e) => {
        setSearchText(e.target.value);
    }

    return (
        <Accordion expanded={expanded === 'panel3'} onChange={() => handleChangeAccordion('panel3')}>
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
                    collections?.map((element, index) => {
                        return (
                            <Box key={index} className={classes.collectionList} onClick={() => SetFilterCollection(element.collection_id)}>
                                <Box className={classes.collectionImage}>
                                    <Box component={'img'} src={element.image} />
                                </Box>
                                {element.name}
                            </Box>
                        )
                    })
                }
            </AccordionDetails>
        </Accordion>
    )
}

export default FilterCollection;