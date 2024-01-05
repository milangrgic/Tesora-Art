import React, { useState, useEffect } from 'react';

import { validate } from 'validate.js';

import { useStyles } from './StyleDiv/CreateItemStyleDiv';
import CreateItemDiv from './CreateItemForm';
import AddPropertyDialog from './AddPropertyDialog';

import {
    Box, Paper
} from '@mui/material';

const schema = {
    name: {
        presence: { allowEmpty: false, message: 'is required' },
        length: {
            maximum: 300,
        },
    },
    description: {
        presence: { allowEmpty: false, message: 'is required' },
        length: {
            maximum: 300,
        },
    },
    price: {
        presence: { allowEmpty: false, message: 'is required' },
    },
    external_link: {
        presence: { allowEmpty: false, message: 'is required' },
    },
};

const CreateItemForm = () => {

    const classes = useStyles();

    const [propertyOpen, setPropertyOpen] = useState(false);
    const [levelOpen, setLevelOpen] = useState(false);
    const [statOpen, setStatOpen] = useState(false);

    const [propertyList, setPropertyList] = useState({
        isValid: false,
        values: [],
        touched: {},
        errors: {}
    });
    const [levelList, setLevelList] = useState({
        isValid: false,
        values: [],
        touched: {},
        errors: {}
    });
    const [statList, setStatList] = useState({
        isValid: false,
        values: [],
        touched: {},
        errors: {}
    });

    const [selectedThumb, setSelectedThumb] = useState({
        preview: "",
        raw: ""
    });
    const [selectedVideo, setSelectedVideo] = useState({
        preview: "",
        raw: ""
    });
    const [formState, setFormState] = useState({
        isValid: false,
        values: {},
        touched: {},
        errors: {}
    })

    const handleChange = event => {
        setFormState(formState => ({
            ...formState,
            values: {
                ...formState.values,
                [event.target.name]: event.target.value
            },
            touched: {
                ...formState.touched,
                [event.target.name]: true,
            }
        }))
    }

    const handleChangeThumb = e => {
        handleChange(e);
        if (e.target.files[0]) {
            setSelectedThumb({
                preview: URL.createObjectURL(e.target.files[0]),
                raw: e.target.files[0]
            })
        }
    }

    const handleChangeMedia = e => {
        handleChange(e);
        if (e.target.files[0]) {
            setSelectedVideo({
                preview: URL.createObjectURL(e.target.files[0]),
                raw: e.target.files[0]
            })
        }
    }

    const handleAddPropertiesOpen = (type) => {
        setPropertyOpen(type)
    }

    const handleAddLevelsOpen = (type) => {
        setLevelOpen(type)
    }

    const handleAddStatsOpen = (type) => {
        setStatOpen(type)
    }

    useEffect(() => {

        const errors = validate(formState.values, schema);

        setFormState(formState => ({
            ...formState,
            isValid: errors ? false : true,
            errors: errors || {},
        }));

    }, [formState.values]);

    const hasError = field => formState.touched[field] && formState.errors[field] ? true : false;

    return (
        <Box className={classes.root}>
            <Paper>
                <Box className={classes.header}>
                    Add Your Item
                </Box>
                <CreateItemDiv
                    classes={classes}
                    selectedThumb={selectedThumb}
                    selectedVideo={selectedVideo}
                    formState={formState}
                    handleChange={handleChange}
                    handleChangeThumb={handleChangeThumb}
                    handleChangeMedia={handleChangeMedia}
                    hasError={hasError}
                    handleAddPropertiesOpen={() => handleAddPropertiesOpen(true)}
                    handleAddLevelsOpen={() => handleAddLevelsOpen(true)}
                    handleAddStatsOpen={() => handleAddStatsOpen(true)}
                    propertyList={propertyList}
                    levelList={levelList}
                    statList={statList}
                />
            </Paper>

            <AddPropertyDialog
                open={propertyOpen}
                handleClose={() => handleAddPropertiesOpen(false)}
                setAttributeList={setPropertyList}
            />

            <AddPropertyDialog
                open={levelOpen}
                handleClose={() => handleAddLevelsOpen(false)}
                setAttributeList={setLevelList}
            />

            <AddPropertyDialog
                open={statOpen}
                handleClose={() => handleAddStatsOpen(false)}
                setAttributeList={setStatList}
            />
        </Box>
    )
}

export default CreateItemForm;