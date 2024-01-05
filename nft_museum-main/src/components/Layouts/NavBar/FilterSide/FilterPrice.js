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

const FilterPrice = (props) => {

    const {
        expanded,
        handleChangeAccordion,
        filterPrice,
        SetFilterPrice,
    } = props;

    const classes = useStyles();

    return (
        <Accordion expanded={expanded === 'panel2'} onChange={() => handleChangeAccordion('panel2')}>
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
                            onClick={() => SetFilterPrice(1)}
                            className={filterPrice === 1 ? classes.selectedSortBy : ''}
                        >
                            {`< 1 ETH`}
                        </Button>
                    </Grid>
                    <Grid item xs={6}>
                        <Button
                            onClick={() => SetFilterPrice(10)}
                            className={filterPrice === 10 ? classes.selectedSortBy : ''}
                        >
                            {`< 10 ETH`}
                        </Button>
                    </Grid>
                    <Grid item xs={6}>
                        <Button
                            onClick={() => SetFilterPrice(100)}
                            className={filterPrice === 100 ? classes.selectedSortBy : ''}
                        >
                            {`> 100 ETH`}
                        </Button>
                    </Grid>
                    <Grid item xs={6}>
                        <Button
                            onClick={() => SetFilterPrice(1000)}
                            className={filterPrice === 1000 ? classes.selectedSortBy : ''}
                        >
                            {`> 1000 ETH`}
                        </Button>
                    </Grid>
                </Grid>
            </AccordionDetails>
        </Accordion>
    )
}

export default FilterPrice;