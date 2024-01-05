import React, { useState, useEffect } from "react";

import { useStyles } from "../StyleDiv/NavBarStyleDiv";

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import {
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Grid,
    Button,
} from '@mui/material';

const FilterSortBy = (props) => {

    const {
        expanded,
        handleChangeAccordion,
        filterSortBy,
        SetFilterSortBy
    } = props;

    const classes = useStyles();

    return (
        <Accordion expanded={expanded === 'panel1'} onChange={() => handleChangeAccordion('panel1')}>
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
                            onClick={() => SetFilterSortBy('recent')}
                            className={filterSortBy === 'recent' ? classes.selectedSortBy : ''}
                        >
                            Recent
                        </Button>
                    </Grid>
                    <Grid item xs={6}>
                        <Button variant='outlined'
                            onClick={() => SetFilterSortBy('most viewed')}
                            className={filterSortBy === 'most viewed' ? classes.selectedSortBy : ''}
                        >
                            Most Viewed
                        </Button>
                    </Grid>
                    <Grid item xs={6}>
                        <Button variant='outlined'
                            onClick={() => SetFilterSortBy('most liked')}
                            className={filterSortBy === 'most liked' ? classes.selectedSortBy : ''}
                        >
                            Most Liked
                        </Button>
                    </Grid>
                    <Grid item xs={6}>
                        <Button variant='outlined'
                            onClick={() => SetFilterSortBy('on auction')}
                            className={filterSortBy === 'on auction' ? classes.selectedSortBy : ''}
                        >
                            On Auction
                        </Button>
                    </Grid>
                </Grid>
            </AccordionDetails>
        </Accordion>
    )
}

export default FilterSortBy;