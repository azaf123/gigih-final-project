/* eslint-disable import/extensions */
/* eslint-disable no-unused-vars */
import React from "react";
import { Container, Typography } from "@mui/material";
import Navbar from "../../components/navbar";
import Login from "../login";
// eslint-disable-next-line no-unused-vars
import Style from "./home.module.css";
import Footer from "../../components/footer";

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
          <div className={Style.contentMiddle}>

            <div className={Style.titleContent}>
              <Typography variant="h1">
                You
                {" "}
                can listen to your favorite music from anywhere with Zazafy
              </Typography>
            </div>
          </div>
          <div className={Style.button}>
            <a href="/create-playlist">
              <button className={Style.glowonhover} type="button">
                <Typography variant="h5">
                  Create your playlist
                </Typography>
              </button>
            </a>

          </div>
        </div>
      </Container>
      <Footer />
    </>

  );
};
export default Home;
