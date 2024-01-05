import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Banner_Image from "../../assets/Home/banner.png";
import { useStyles } from "./StyleDiv/IntroStyleDiv";
import queryString from "query-string";
import jwt_decode from "jwt-decode";

import { Box, Button, Grid, useMediaQuery } from "@mui/material";

const Intro = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const match = useMediaQuery("(min-width : 900px)");

  const handleChangeNavigate = (url) => {
    navigate(url);
  };

  useEffect(() => {
    getAuthCodeFromUrl();
  }, []);

  const getAuthCodeFromUrl = () => {
    let str = window.location.search;
    if (str.length > 0) {
      var value = queryString.parse(window.location.search);
      if (Object.keys(value).includes("refe")) {
        let token = sessionStorage.getItem(
          process.env.NODE_ENV === "production"
            ? "oidc.user:https://auth.tesoragroup.com:NFT_Museum_dev"
            : "oidc.user:https://auth.tesora.dev:NFT_Museum_dev"
        );
        if (token !== undefined && token !== null) {
          console.log("token sso------", JSON.parse(JSON.stringify(token)));
          const res = JSON.parse(token);
          callSsoAuthZeroApiForToken(res);
        }
      }
    }
  };

  const callSsoAuthZeroApiForToken = (res) => {
    var token = res["access_token"];
    var idtoken = res["id_token"];
    sessionStorage.setItem("id_token", idtoken);
    sessionStorage.setItem("access_token", token);
    var decoded = jwt_decode(token);
    console.log("decode token---", decoded);
    // navigate("marketplace");
  };

  return (
    <Box className={classes.root}>
      <Box>
        <Grid container>
          <Grid item xs={match ? 6 : 12} className={classes.container}>
            <Box>
              <Box className={classes.title}>
                Discover, Collect, and sell extraordinary{" "}
                <Box component={"span"} sx={{ color: "#008cff" }}>
                  {" "}
                  NFTs{" "}
                </Box>
              </Box>
              <Box className={classes.text}>
                Etiam auctor urna ac nisi feugiat, in tempor massa tempus arcu
                necneque efficitur porta
              </Box>
            </Box>
            <Box className={classes.buttonGroup}>
              <Button
                variant="outlined"
                onClick={() => handleChangeNavigate("/marketplace")}
              >
                Explore
              </Button>
              <Button
                variant="outlined"
                onClick={() => handleChangeNavigate("/collection/mycollection")}
              >
                Create
              </Button>
            </Box>
          </Grid>
          <Grid item xs={match ? 6 : 12} className={classes.container}>
            <Box className={classes.bannerImage}>
              <Box component={"img"} src={Banner_Image} />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};
export default Intro;
