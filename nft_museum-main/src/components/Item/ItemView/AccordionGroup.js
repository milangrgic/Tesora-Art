import React from "react";

import { PRIVATE_TESORA_API } from "../../../static/constants";

import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Box,
    List,
    ListItem,
    Link,
    Button
} from '@mui/material';

import FormatAlignLeftRoundedIcon from '@mui/icons-material/FormatAlignLeftRounded';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import BallotIcon from '@mui/icons-material/Ballot';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const AccordionGroup = (props) => {

    const {
        classes,
        collectionInfo,
        itemInfo
    } = props;

    return(
        <Box className={classes.accordionGroup}>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    sx={{borderTop : '1px solid rgba(0, 0, 21, 0.175) !important'}}
                >
                    <FormatAlignLeftRoundedIcon />
                    Description
                </AccordionSummary>
                <AccordionDetails>
                    {itemInfo?.description}
                </AccordionDetails>
            </Accordion>

            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <LibraryBooksIcon />
                    About Collection
                </AccordionSummary>
                <AccordionDetails>
                    <Box component={'img'} src={`${PRIVATE_TESORA_API}${collectionInfo?.banner}`} />
                    <Box>
                        {collectionInfo?.contract_symbol}
                        <Box sx={{fontWeight : 400, color : 'rgb(44,56,74)'}}>
                            {collectionInfo?.name}
                        </Box>
                    </Box>
                </AccordionDetails>
            </Accordion>
            
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <BallotIcon />
                    Details
                </AccordionSummary>
                <AccordionDetails>
                    <List>
                        <ListItem>
                            <Box>
                                Contract Address
                            </Box>
                            <Link href="#">
                                {String(collectionInfo?.contract_address).substring(0,4) + "..." + String(collectionInfo?.contract_address).substring(String(collectionInfo?.contract_address).length-4)}
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Box>
                                Token
                            </Box>
                            <Link href="#">
                                {itemInfo?.token_id}
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Box>
                                Blockchain
                            </Box>
                            <Box>
                                Rinkeby
                            </Box>
                        </ListItem>
                    </List>
                </AccordionDetails>
            </Accordion>
        </Box>
    )
}

export default AccordionGroup;