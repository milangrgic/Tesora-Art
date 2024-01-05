import React, { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import { connect } from "react-redux";

import { MobileHeader } from './MobileHeader'
import { useStyles } from "./StyleDIv/HeaderStyleDiv";
import ProfilePopover from "../../Common/ProfilePopover";
import Logo_Image from "../../../assets/Header/nft-logo.png";
import Profile_Image from "../../../assets/Header/pro_ic.png";
import AuthService from "../../Auth/authServices";

import MenuIcon from "@mui/icons-material/Menu";

import {
    Box,
    List,
    ListItem,
    useMediaQuery,
    Drawer,
} from "@mui/material";

const menuList = [
    {
        label: "Home",
        link: "/home",
    },
    {
        label: "Marketplace",
        link: "/marketplace",
    },
    {
        label: "Activity",
        link: "/activity",
    },
];

const authList = [
    {
        label: "Login",
    },
];

const profileList = [
    {
        label: "My Profile",
        link: "/profile",
    },
    {
        label: "My Wallet",
        link: "/wallet",
    },
    {
        label: "My Collection",
        link: "/collection/mycollection",
    },
    {
        label: "My Favorites",
        link: "/profile/favorited",
    },
    {
        label: "Logout",
        link: "/logout",
    },
];

const Header = (props) => {
    const classes = useStyles();
    const navigate = useNavigate();
    const location = useLocation();
    const match = useMediaQuery("(min-width : 900px)");
    const profileAnchorRef = useRef(null);
    const authService = new AuthService();

    const [routeType, setRouteType] = useState("Home");
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [profileOpen, setProfileOpen] = useState(false);

    const handleNavigateChange = async (element) => {
        if (element.label === "Login") {
            authService.signinRedirect();
        } else if (element.label === "Logout") {
            authService.logout();
        } else navigate(element.link);
        handleCloseDrawer();
    };

    const handleOpenProfile = () => {
        setProfileOpen(true);
    };

    const handleCloseProfile = () => {
        setProfileOpen(false);
    };

    const handleOpenDrawer = () => {
        setDrawerOpen(true);
    };

    const handleCloseDrawer = () => {
        setDrawerOpen(false);
    };

    useEffect(() => {
        if (location.pathname.includes("marketplace")) {
            setRouteType("Marketplace");
        } else if (location.pathname.includes("activity")) {
            setRouteType("Activity");
        } else if (location.pathname.includes("mycollection")) {
            setRouteType("My Collection");
        } else if (location.pathname.includes("profile")) {
            if (location.pathname.includes("favorite")) {
                setRouteType("My Favorites");
            } else setRouteType("My Profile");
        } else {
            setRouteType("Home");
        }
    }, [location.pathname]);

    return (
        <Box className={classes.root}>
            <Box component={"img"} src={Logo_Image} className={classes.logoImage} />
            {match ? (
                <List>
                    {menuList.map((element, index) => {
                        return (
                            <ListItem
                                key={index}
                                onClick={() => handleNavigateChange(element)}
                                sx={{
                                    color:
                                        routeType === element.label
                                            ? "black !important"
                                            : "rgba(44, 56, 74, 0.68)",
                                }}
                            >
                                {element.label}
                            </ListItem>
                        );
                    })}
                    {sessionStorage.getItem("access_token") ? (
                        <Box
                            component={"img"}
                            src={Profile_Image}
                            onClick={handleOpenProfile}
                            ref={profileAnchorRef}
                            className={classes.profileImage}
                        />
                    ) : (
                        authList.map((element, index) => {
                            return (
                                <ListItem
                                    key={index}
                                    onClick={() => handleNavigateChange(element)}
                                    sx={{
                                        color:
                                            routeType === element.label
                                                ? "black !important"
                                                : "rgba(44, 56, 74, 0.68)",
                                    }}
                                >
                                    {element.label}
                                </ListItem>
                            );
                        })
                    )}
                </List>
            ) : (
                <MenuIcon onClick={handleOpenDrawer} />
            )}

            <Drawer
                anchor="top"
                open={drawerOpen}
                onClose={handleCloseDrawer}
                className={classes.drawer}
            >
                <MobileHeader
                    classes={classes}
                    menuList={menuList}
                    authList={authList}
                    profileList={profileList}
                    Profile_Image={Profile_Image}
                    handleCloseDrawer={handleCloseDrawer}
                    handleNavigateChange={handleNavigateChange}
                />
            </Drawer>

            <ProfilePopover
                open={profileOpen}
                anchorRef={profileAnchorRef}
                handleClosePopOver={handleCloseProfile}
                popoverData={profileList}
                routeType={routeType}
                setRouteType={setRouteType}
            />
        </Box>
    );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Header);