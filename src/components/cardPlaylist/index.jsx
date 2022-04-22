/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/button-has-type */
import { Button, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Style from "./cardPlaylist.module.css";

const CardPlaylist = () => {
  const token = useSelector((state) => { return state.token.accesstoken; });
  const [playlistData, setPlaylistData] = React.useState([]);

  const getPlaylist = () => {
    axios.get("https://api.spotify.com/v1/me/playlists", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        setPlaylistData(res.data.items);
      });
  };
  useEffect(() => {
    getPlaylist();
  }, []);

  return (
    <div className={Style.cardPlaylist}>

      <Typography variant="h4">
        My Playlist
      </Typography>
      <br />
      <Button variant="outlined" onClick={getPlaylist}>
        Refresh your new playlist here
      </Button>
      <br />
      <br />
      <div className={Style.cardPlaylistItem}>
        {playlistData.map((item) => {
          return (
            <div className="card has-background-grey-lighter" key={item.id}>
              <div className="card-content">
                <div className="content">
                  <Typography variant="h4">
                    {item.name}
                  </Typography>
                  <hr />
                  <Typography variant="h5">
                    {item.description}
                  </Typography>
                  <Typography variant="h6">
                    {item.tracks.total}
                  </Typography>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>

  );
};
export default CardPlaylist;
