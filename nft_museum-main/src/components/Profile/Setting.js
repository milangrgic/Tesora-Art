import React, { useState, useEffect, useRef } from 'react' ;

import { useStyles } from './StyleDiv/SettingsStyleDiv';

import ContentCopyIcon from '@mui/icons-material/ContentCopy';

import {
    Box, Button, Grid, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField, Tooltip, useMediaQuery ,
} from '@mui/material' ;

const SettingsForm = (props) => {

    const {
        users
    } = props;
    
    const classes = useStyles() ;
    const match900 = useMediaQuery('(min-width : 900px)');

    const [ text, setText ] = useState(null);
    const [ successCopy, setSuccessCopy ] = useState('Copy');
    const [ formState, setFormState ] = useState({
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
                [event.target.name] : event.target.value
            },
            touched : {
                ...formState.touched,
                [event.target.name] : true,
            }
        }))
    }

    const handleCopyToClipboard = () => {
        setText('0x4091aA3388D0a10A0c4c69D63b3128876AE505A6');
    }

    const delay = ms => new Promise(
        resolve => setTimeout(resolve, ms)
    )

    useEffect(() => {
        if(text) {
            navigator.clipboard.writeText(text);
            setSuccessCopy('Copied')
        }
    }, [text])
    
    useEffect(() => {
        if(successCopy === 'Copied') {
            async function makeRequest(){
                await delay(1000)
                setSuccessCopy('Copy')
            }

            makeRequest();
        }
    }, [successCopy])

    return (
        <Box className={classes.root}>
            <Box className={classes.title}>
                Profile details
            </Box>

            <Grid container spacing={3}>
                <Grid item xs={match900 ? 6 : 12}>
                    <InputLabel> Username </InputLabel>
                    <TextField
                        fullWidth
                        name='name'
                        placeholder='Enter username'
                        
                        onChange={handleChange}
                        value={formState.values.name || ''}
                    />
                </Grid>
                <Grid item xs={match900 ? 6 : 12}>
                    <InputLabel> Email </InputLabel>
                    <TextField
                        fullWidth
                        name='email'
                        placeholder='Enter email'
                        
                        onChange={handleChange}
                        value={formState.values.email || ''}
                    />
                </Grid>
                <Grid item xs={match900 ? 6 : 12}>
                    <InputLabel> Last Name </InputLabel>
                    <TextField
                        fullWidth
                        name='last_name'
                        placeholder='Enter lastname'
                        
                        onChange={handleChange}
                        value={formState.values.last_name || ''}
                    />
                </Grid>
                <Grid item xs={match900 ? 6 : 12}>
                    <InputLabel> First Name </InputLabel>
                    <TextField
                        fullWidth
                        name='first_name'
                        placeholder='Enter firstname'
                        
                        onChange={handleChange}
                        value={formState.values.first_name || ''}
                    />
                </Grid>
                <Grid item xs={match900 ? 6 : 12}>
                    <InputLabel> Password </InputLabel>
                    <TextField
                        fullWidth
                        type='password'
                        name='password'
                        placeholder='Enter password'
                        
                        onChange={handleChange}
                        value={formState.values.password || ''}
                    />
                </Grid>
                <Grid item xs={match900 ? 6 : 12}>
                    <InputLabel> Confirm Password </InputLabel>
                    <TextField
                        fullWidth
                        type='password'
                        name='confirm_password'
                        placeholder='Enter confirm password'
                        
                        onChange={handleChange}
                        value={formState.values.confirm_password || ''}
                    />
                </Grid>
                <Grid item xs={match900 ? 6 : 12}>
                    <InputLabel> Wallet Address </InputLabel>
                    <OutlinedInput
                        fullWidth
                        disabled
                        value='0x4091aA3388D0a10A0c4c69D63b3128876AE505A6'
                        endAdornment={
                          <InputAdornment position="end">
                            <Tooltip title={successCopy} placement="top" arrow 
                                PopperProps={{sx : {"& .MuiTooltip-tooltip" : {fontSize : '16px'}}}}
                            >
                                <IconButton onClick={() => handleCopyToClipboard()}>
                                    <ContentCopyIcon />
                                </IconButton>
                                
                            </Tooltip>
                          </InputAdornment>
                        }
                    />
                </Grid>
                <Grid item xs={match900 ? 6 : 12} className={classes.submitBtn}>
                    <Button variant='contained'>
                        Save
                    </Button>
                </Grid>
            </Grid>
        </Box>
    )
}
export default SettingsForm ;