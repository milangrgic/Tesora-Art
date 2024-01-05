import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import {
    Box,
    List,
    ListItem,
    IconButton,
    Accordion,
    AccordionSummary,
    AccordionDetails,
} from "@mui/material";

export const MobileHeader = (props) => {

    const {
        classes,
        menuList,
        authList,
        profileList,
        Profile_Image,
        handleCloseDrawer,
        handleNavigateChange
    } = props;

    return (
        <Box
            sx={{ width: "auto" }}
            role="presentation"
            className={classes.menuBody}
        >
            <List className={classes.menuDiv}>
                <ListItem className={classes.closeDiv} onClick={() => handleCloseDrawer(false)}>
                    <IconButton>
                        <CloseIcon />
                    </IconButton>
                </ListItem>

                <Box sx={{ padding: "0px 10px" }}>
                    {menuList.map((element, index) => {
                        return (
                            <ListItem
                                key={index}
                                onClick={() => handleNavigateChange(element)}
                            >
                                {element.label}
                            </ListItem>
                        );
                    })}
                    {sessionStorage.getItem("login") === "scucess_login" ? (
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <ListItem sx={{ padding: "0px !important" }}>
                                    <Box component={"img"} src={Profile_Image} />
                                </ListItem>
                            </AccordionSummary>
                            <AccordionDetails>
                                {profileList.map((row, index) => {
                                    return (
                                        <Box
                                            key={index}
                                            onClick={() => handleNavigateChange(row)}
                                            className={classes.dropDown}
                                        >
                                            {row.label}
                                        </Box>
                                    );
                                })}
                            </AccordionDetails>
                        </Accordion>
                    ) : (
                        authList.map((element, index) => {
                            return (
                                <ListItem
                                    key={index}
                                    onClick={() => handleNavigateChange(element)}
                                >
                                    {element.label}
                                </ListItem>
                            );
                        })
                    )}
                </Box>
            </List>
        </Box>
    )
};