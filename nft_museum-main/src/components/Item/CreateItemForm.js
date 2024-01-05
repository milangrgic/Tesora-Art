import * as React from 'react';
// import React from 'react';

import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import ImageIcon from '@mui/icons-material/Image';
import VideoFileIcon from '@mui/icons-material/VideoFile';

import {
    Box, Button, FormControl, InputLabel, TextField, Select, MenuItem, ListItem, FormLabel, RadioGroup, FormControlLabel, Radio, List, Stack, Grid
} from '@mui/material';


const CreateItemForm = (props) => {

    const {
        classes,
        selectedThumb,
        selectedVideo,
        formState,
        handleChange,
        handleChangeThumb,
        handleChangeMedia,
        hasError,
        handleAddPropertiesOpen,
        handleAddLevelsOpen,
        handleAddStatsOpen,
        propertyList,
        levelList,
        statList,
    } = props;

    return (
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

            <InputLabel> Category ID </InputLabel>
            <Select
                fullWidth
                name='categoryId'

                onChange={handleChange}
                value={formState.values.categoryId || 'select'}
            >
                <MenuItem value={'select'}> Select Category </MenuItem>
                <MenuItem value={'art'}> Art </MenuItem>
            </Select>

            <InputLabel sx={{ mt: 2 }}> Description </InputLabel>
            <TextField
                fullWidth
                name='description'

                helperText={hasError('description') ? formState.errors.description[0] : null}
                error={hasError('description')}
                onChange={handleChange}
                value={formState.values.description || ''}
            />

            <InputLabel> Price </InputLabel>
            <TextField
                fullWidth
                name='price'

                helperText={hasError('price') ? formState.errors.price[0] : null}
                error={hasError('price')}
                onChange={handleChange}
                value={formState.values.price || ''}
            />

            <InputLabel> External Link </InputLabel>
            <TextField
                fullWidth
                name='external_link'

                helperText={hasError('external_link') ? formState.errors.external_link[0] : null}
                error={hasError('external_link')}
                onChange={handleChange}
                value={formState.values.external_link || ''}
            />

            <InputLabel> Item Thumb </InputLabel>
            <InputLabel
                disabled
                htmlFor="upload-thumb"
                className={classes.fileInput}
            >
                {
                    selectedThumb.preview ?
                        <img src={selectedThumb.preview} /> : <ImageIcon sx={{ margin: 'auto' }} />
                }
            </InputLabel>

            <input
                type='file'
                id='upload-thumb'
                name='thumb'
                onChange={handleChangeThumb}
                style={{ display: 'none' }}
            />

            <InputLabel sx={{ mt: 5 }}> Item Media </InputLabel>
            <InputLabel
                disabled
                htmlFor="upload-media"
                className={classes.fileInput}
            >
                {
                    selectedVideo.preview ?
                        <video src={selectedVideo.preview} controls style={{ width: '100%', height: '100%' }} />
                        :
                        <VideoFileIcon sx={{ margin: 'auto' }} />
                }
            </InputLabel>

            <input
                type='file'
                id='upload-media'
                name='media'
                onChange={handleChangeMedia}
                style={{ display: 'none' }}
            />

            <List>
                <ListItem>
                    <Box>
                        <InputLabel>
                            Properties
                        </InputLabel>
                        <Box>
                            Textual traits that show up as rectangles
                        </Box>
                    </Box>
                    <Box className={classes.addBtn} onClick={handleAddPropertiesOpen}>
                        <AddOutlinedIcon />
                    </Box>
                </ListItem>

                <Grid container spacing={3} sx={{ mb: 3 }}>
                    {
                        propertyList.values?.map((element, index) => {
                            return (
                                <Grid item xs={3} key={index}>
                                    <Box className={classes.propertyCard}>
                                        <Box className={classes.propertyType}> {element.type} </Box>
                                        <Box className={classes.propertyName}> {element.name} </Box>
                                    </Box>
                                </Grid>
                            )
                        })
                    }
                </Grid>

                <ListItem>
                    <Box>
                        <InputLabel>
                            Levels
                        </InputLabel>
                        <Box>
                            Numberical traits that show as a progress bar
                        </Box>
                    </Box>
                    <Box className={classes.addBtn} onClick={handleAddLevelsOpen}>
                        <AddOutlinedIcon />
                    </Box>
                </ListItem>

                <Grid container spacing={3} sx={{ mb: 3 }}>
                    {
                        levelList.values?.map((element, index) => {
                            return (
                                <Grid item xs={3} key={index}>
                                    <Box className={classes.propertyCard}>
                                        <Box className={classes.propertyType}> {element.type} </Box>
                                        <Box className={classes.propertyName}> {element.name} </Box>
                                    </Box>
                                </Grid>
                            )
                        })
                    }
                </Grid>

                <ListItem>
                    <Box>
                        <InputLabel>
                            Stats
                        </InputLabel>
                        <Box>
                            Numberical traits that just show as numbers
                        </Box>
                    </Box>
                    <Box className={classes.addBtn} onClick={handleAddStatsOpen}>
                        <AddOutlinedIcon />
                    </Box>
                </ListItem>

                <Grid container spacing={3} sx={{ mb: 3 }}>
                    {
                        statList.values?.map((element, index) => {
                            return (
                                <Grid item xs={3} key={index}>
                                    <Box className={classes.propertyCard}>
                                        <Box className={classes.propertyType}> {element.type} </Box>
                                        <Box className={classes.propertyName}> {element.name} </Box>
                                    </Box>
                                </Grid>
                            )
                        })
                    }
                </Grid>
            </List>

            <FormControl>
                <FormLabel id="demo-radio-buttons-group-label">Show Media For All</FormLabel>
                <RadioGroup
                    row
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="female"
                    name="radio-buttons-group"
                >
                    <FormControlLabel value="media_true" control={<Radio />} label="True" />
                    <FormControlLabel value="media_false" control={<Radio />} label="False" />
                </RadioGroup>
            </FormControl> <br />

            <FormControl>
                <FormLabel id="demo-radio-buttons-group-label">Enable Auction</FormLabel>
                <RadioGroup
                    row
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="female"
                    name="radio-buttons-group"
                >
                    <FormControlLabel value="true" control={<Radio />} label="True" />
                    <FormControlLabel value="false" control={<Radio />} label="False" />
                </RadioGroup>
            </FormControl>

            <Box className={classes.submitBtn}>
                <Button variant='contained'>
                    Save
                </Button>
            </Box>
        </Box>
    )
}

export default CreateItemForm;