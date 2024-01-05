import React, { useState, useEffect, useRef } from 'react';

import { connect } from 'react-redux';
import { CreateCollection } from '../../redux/actions/actions';

import { validate } from 'validate.js';

import { useStyles } from './StyleDiv/CreateCollectionStyleDiv';

import ImageIcon from '@mui/icons-material/Image';

import {
    Box, Paper, Button, Grid, FormControl, InputLabel, Input, FilledInput, InputAdornment, TextField
} from '@mui/material';


const schema = {
    name: {
        presence: { allowEmpty: false, message: 'is required' },
        length: {
            maximum: 300,
        },
    },
    royalties: {
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
    logo: {
        presence: { allowEmpty: false, message: 'is required' },
    },
    banner: {
        presence: { allowEmpty: false, message: 'is required' },
    },
};

const CreateCollectionForm = (props) => {

    const {
        CreateCollection
    } = props;

    const classes = useStyles();

    const [logo, setLogo] = useState({ preview: "", raw: "" });
    const [banner, setBanner] = useState({ preview: "", raw: "" });

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
                [event.target.name]:
                    event.target.type === 'file'
                        ? event.target.files[0]
                        : event.target.value
            },
            touched: {
                ...formState.touched,
                [event.target.name]: true,
            }
        }))
    }

    const handleChangeLogo = e => {
        handleChange(e);
        if (e.target.files.length) {
            setLogo({
                preview: URL.createObjectURL(e.target.files[0]),
                raw: e.target.files[0]
            })
        }
    }

    const handleChangeBanner = e => {
        handleChange(e);
        if (e.target.files.length) {
            setBanner({
                preview: URL.createObjectURL(e.target.files[0]),
                raw: e.target.files[0]
            })
        }
    }

    const handleSubmit = async () => {
        if (formState.isValid) {
            await CreateCollection(formState.values);
        }
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
                    Add Your Collection
                </Box>

                <Box className={classes.form}>
                    <InputLabel> Name </InputLabel>
                    <TextField
                        fullWidth
                        name='name'

                        helperText={hasError('name') ? formState.errors.name[0] : null}
                        error={hasError('name')}
                        onChange={handleChange}
                        value={formState.values.name || ''}
                    />

                    <InputLabel> Symbol </InputLabel>
                    <TextField
                        fullWidth
                        name='contract_symbol'

                        helperText={hasError('contract_symbol') ? formState.errors.contract_symbol[0] : null}
                        error={hasError('contract_symbol')}
                        onChange={handleChange}
                        value={formState.values.contract_symbol || ''}
                    />

                    <InputLabel> Royalties </InputLabel>
                    <TextField
                        fullWidth
                        name='royalties'

                        helperText={hasError('royalties') ? formState.errors.royalties[0] : null}
                        error={hasError('royalties')}
                        onChange={handleChange}
                        value={formState.values.royalties || ''}
                    />

                    <InputLabel> Description </InputLabel>
                    <TextField
                        fullWidth
                        name='description'

                        helperText={hasError('description') ? formState.errors.description[0] : null}
                        error={hasError('description')}
                        onChange={handleChange}
                        value={formState.values.description || ''}
                    />

                    <InputLabel> Collection Logo </InputLabel>
                    <Box>
                        <InputLabel
                            disabled
                            htmlFor="upload-logo"
                            className={classes.fileInput}
                        >
                            {
                                // logo.preview ?
                                //     <img src={logo.preview} /> : <ImageIcon />
                                logo.preview
                                    ? logo.raw?.type.includes("image")
                                        ? <img src={logo.preview} />
                                        : <video src={logo.preview} autoPlay />
                                    : <ImageIcon />
                            }
                        </InputLabel>

                        <input
                            type='file'
                            id="upload-logo"
                            name='logo'
                            onChange={handleChangeLogo}
                            style={{ display: 'none' }}
                        />
                    </Box>

                    <InputLabel> Collection Banner </InputLabel>
                    <Box>
                        <InputLabel
                            disabled
                            htmlFor="upload-banner"
                            className={classes.fileInput}
                        >
                            {
                                // banner.preview ?
                                //     <img src={banner.preview} /> : <ImageIcon />
                                banner.preview
                                    ? banner.raw?.type.includes("image")
                                        ? <img src={banner.preview} />
                                        : <video src={banner.preview} autoPlay />
                                    : <ImageIcon />
                            }
                        </InputLabel>

                        <input
                            type='file'
                            id="upload-banner"
                            name='banner'
                            onChange={handleChangeBanner}
                            style={{ display: 'none' }}
                        />
                    </Box>

                    <Box className={classes.submitBtn}>
                        <Button variant='contained' onClick={handleSubmit}>
                            Create
                        </Button>
                    </Box>
                </Box>
            </Paper>
        </Box>
    )
}

const mapStateToProps = state => ({

})

const mapDispatchToProps = {
    CreateCollection
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateCollectionForm);