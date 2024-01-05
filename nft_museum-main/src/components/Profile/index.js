import React, { useState, useEffect, useRef } from 'react' ;

import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

import BasicTabs from '../Common/Tabs';
import { useStyles } from './StyleDiv/ProfileStyleDiv';
import BackImage from './BackImage';
import ProfileImage from './ProfileImage';

import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import ContentCopyOutlinedIcon from '@mui/icons-material/ContentCopyOutlined';

import {
    Box, IconButton, Tooltip,
} from '@mui/material' ;

const ProfileForm = (props) => {

    const classes = useStyles() ;
    const navigate = useNavigate();
    const location = useLocation();

    const [ type, setType ] = useState('');
    const [ text, setText ] = useState(null);
    const [ successCopy, setSuccessCopy ] = useState('Copy');

    const handleSettingChange = () => {
        navigate('/settings');
    }

    const handleCopyToClipboard = () => {
        setText('0x4091aA3388D0a10A0c4c69D63b3128876AE505A6');
    }

    const delay = ms => new Promise(
        resolve => setTimeout(resolve, ms)
    )

    useEffect(() => {
        if(location.pathname === '/profile/favorited'){
            setType('favorited')
        }
        else
            setType('collected')
    }, [location.pathname])

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
        <Box className = {classes.root}>
            <BackImage />
            <ProfileImage />

            <Box className={classes.profileInfo}>
                <Box className={classes.userName}>
                    Unnamed
                    <Box className={classes.optionDiv}>
                        <SettingsApplicationsIcon
                            onClick={handleSettingChange}
                        />
                    </Box>
                </Box>
                <Box className={classes.walletAddress}>
                    <Box component={'img'} src={'https://static.opensea.io/general/ETH.svg'} />

                    <Tooltip title={successCopy} placement="top" arrow 
                        PopperProps={{sx : {"& .MuiTooltip-tooltip" : {fontSize : '16px'}}}}
                    >
                        <Box onClick={() => handleCopyToClipboard()}>
                            {String("0x4091aA3388D0a10A0c4c69D63b3128876AE505A6").substring(0,4) + "..." + String("0x4091aA3388D0a10A0c4c69D63b3128876AE505A6").substring(String("0x4091aA3388D0a10A0c4c69D63b3128876AE505A6").length-4)}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </Box>
                    </Tooltip>

                    Joined August 2022
                </Box>
            </Box>

            <Box className={classes.tab}>
                <BasicTabs
                    type={type}
                />
            </Box>
            
        </Box>
    )
}
export default ProfileForm ;