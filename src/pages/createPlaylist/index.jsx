import React from "react";
import { Container, Typography } from "@mui/material";
import SearchSong from "../../components/search/searchSong";
import SongCard from "../../components/songCard";
import CreatePlaylistCard from "../../components/createPlaylistCard";
import Style from "./createPlaylist.module.css";
import Navbar from "../../components/navbar";
import CardPlaylist from "../../components/cardPlaylist";
import Footer from "../../components/footer";

const CreatePlaylistPage = () => {
  return (
    <div className={Style.home}>
      <div className={Style.navbar}>
        <Navbar />
      </div>
      <Container>
        <div className={Style.content}>
          <div className={Style.searchTitle}>
            <Typography variant="h4">
              Search for a song to add to your playlist
            </Typography>
          </div>
          <div className={Style.search}>
            <div className={Style.searchInput}>
              <SearchSong />
            </div>
          </div>
          <div className={Style.card}>
            <div className={Style.cardItem}>
              <SongCard />
            </div>
          </div>
          <hr />
          <div className={Style.cardPlaylist}>
            <Typography variant="h4">
              Create Playlist
            </Typography>
            <div className={Style.cardPlaylistItem}>
              <CreatePlaylistCard />
            </div>
          </div>
          <hr />
          <div className={Style.cardPlaylist}>
            <Typography variant="h4">
              My Playlist
            </Typography>
            <div className={Style.cardPlaylistItem}>
              <CardPlaylist />
            </div>
          </div>

        </div>

      </Container>
      <Footer />
    </div>
  );
};
export default CreatePlaylistPage;
