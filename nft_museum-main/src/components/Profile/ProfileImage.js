import React, { useState, useEffect, useRef } from 'react' ;

import { useStyles } from './StyleDiv/ProfileImageStyleDiv';

import EditIcon from '@mui/icons-material/Edit';

import {
    Box, InputLabel ,
} from '@mui/material' ;

const ProfileImage = () => {

    const classes = useStyles() ;
    const fileInput = useRef();

    const [ selectedFile, setSelectedFile ] = useState({
        preview : '',
        raw : ''
    })

    const handleChangeUrl = e => {
        if(e.target.value){
            setSelectedFile({
                preview : URL.createObjectURL(e.target.files[0]),
                raw : e.target.files[0]
            })
        }
    }

    const handleSelectedFile = () => {
        fileInput.current.click();
    }

    return (
        <Box className={classes.root} onClick={handleSelectedFile}>
            <InputLabel disabled className={classes.profileImage}>
                {
                    selectedFile.preview ?
                    <img src={selectedFile.preview}/> : <EditIcon className={classes.image}/>
                }
            </InputLabel>

            <input
                type='file'
                onChange={handleChangeUrl}
                style={{display : 'none'}}
                ref={fileInput}
            />
        </Box>
    )
}
export default ProfileImage ;