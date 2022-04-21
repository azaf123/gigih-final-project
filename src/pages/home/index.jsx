/* eslint-disable no-unused-vars */
import React from "react";
import { Container, Typography } from "@mui/material";
import Navbar from "../../components/navbar";
import Login from "../login";
// eslint-disable-next-line no-unused-vars
import Style from "./home.module.css";

const Home = () => {
  return (
    <>
      <div className={Style.navbar}>
        <Navbar />
      </div>
      <Container>
        <div className={Style.content}>
          <div className={Style.title}>
            <Typography variant="h3">Welcome to Zazafy</Typography>
          </div>
          <div className={Style.subtitle}>
            <Typography variant="h6">
              Zazafy is a music streaming service that allows you to listen to
              your favorite music from anywhere.
            </Typography>
          </div>
          <hr />
          <img src="./assets/songmic.jpg" alt="" />
        </div>
      </Container>
    </>

  );
};
export default Home;
