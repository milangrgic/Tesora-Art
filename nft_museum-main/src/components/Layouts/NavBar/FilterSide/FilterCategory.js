import React, { useState, useEffect } from "react";

import { useStyles } from "../StyleDiv/NavBarStyleDiv";

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import {
    Box,
    Accordion,
    AccordionSummary,
    AccordionDetails,
} from '@mui/material';

const FilterCategory = (props) => {

    const {
        categories,
        expanded,
        handleChangeAccordion,
        SetFilterCategory
    } = props;

    const classes = useStyles();

    return (
        <Accordion expanded={expanded === 'panel4'} onChange={() => handleChangeAccordion('panel4')}>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >
                Categories
            </AccordionSummary>
            <AccordionDetails>
                {
                    categories?.map((element, index) => {
                        return (
                            <Box key={index} className={classes.collectionList} onClick={() => SetFilterCategory(element.category_id)}>
                                <Box className={classes.collectionImage}>
                                    <Box component={'img'} src={element.category_image} />
                                </Box>
                                {element.title}
                            </Box>
                        )
                    })
                }
            </AccordionDetails>
        </Accordion>
    )
}

export default FilterCategory;