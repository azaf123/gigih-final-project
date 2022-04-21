/* eslint-disable global-require */
/* eslint-disable react/button-has-type */
/* eslint-disable no-unused-vars */
import React from "react";
import { Button, Container, Typography } from "@mui/material";
// eslint-disable-next-line no-unused-vars
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import Style from "./login.module.css";
import { setToken } from "../../redux/slices/TokenSlice";
// get the token from local storage
const AUTH_URL = "https://accounts.spotify.com/authorize";
const CLIENT_ID = `${process.env.REACT_APP_SPOTIFY_CLIENT_ID}`;
const REDIRECT_URI = "http://localhost:3000/";
const SCOPES = "user-read-private user-read-email playlist-modify-private playlist-read-private playlist-modify-public playlist-read-collaborative user-read-playback-state user-modify-playback-state user-read-currently-playing user-read-recently-played user-top-read user-follow-read user-follow-modify user-library-read user-library-modify";
const URL = `${AUTH_URL}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=${SCOPES}&response_type=token&show_dialog=true`;

const Login = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleLogin = () => {
    window.location.replace(URL);
  };
  const accessTokenFromUrl = window.location.hash
    .substring(1, window.location.hash.length - 1)
    .split("&")[0]
    .split("=")[1];

  if (accessTokenFromUrl) {
    dispatch(setToken({ token: accessTokenFromUrl }));
    history.push("/home");
  }

  return (
    <Container fixed>
      <div className="columns">
        <div className="column is-half is-offset-one-quarter">
          <div className={Style.columnGrid}>
            <div className={Style.columnGridItemLogin}>
              <Typography variant="h4" component="h1">
                <b>ZazaFy</b>
              </Typography>
              <Typography variant="h5" component="h1">
                Wanna listening with us ?
              </Typography>
              <div className={Style.buttonLogin}>
                <button onClick={handleLogin}>Login</button>
              </div>

            </div>
            <div className={Style.columnGridItemImage}>
              <div className={Style.image}>
                <img src="/assets/songmic.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>

      </div>
    </Container>
  );
};
export default Login;
