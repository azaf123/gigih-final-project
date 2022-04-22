/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable arrow-body-style */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { Typography } from "@mui/material";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setRemoveToken } from "../../redux/slices/TokenSlice";
// import { BrowserRouter as Link } from "react-router-dom";
import Style from "./navbar.module.css";

const Navbar = () => {
  const token = useSelector((state) => state.token.accesstoken);
  const dispatch = useDispatch();
  return (
    <div className={Style.navbarMaster}>
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="/home">
            {/* <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" /> */}
            <Typography variant="h5" component="h1">
              Zazafy.
            </Typography>
          </a>

          <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </a>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">

            <a className="navbar-item" href="/home">
              Home
            </a>

            <a className="navbar-item" href="/create-playlist">
              Create Playlist
            </a>
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">

                {token ? (
                  <a role="button" className="button is-light" onClick={() => dispatch(setRemoveToken())}>
                    Logout
                  </a>
                ) : (
                  <a className="button is-light" href="/">
                    Login
                  </a>
                )}

              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>

  );
};
export default Navbar;
