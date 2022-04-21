/* eslint-disable react/button-has-type */
import { Button, Typography } from "@mui/material";
import axios from "axios";
import React from "react";
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
        console.log(res.data.items);
        setPlaylistData(res.data.items);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className={Style.cardPlaylist}>
      <div className={Style.cardPlaylistItem}>
        <Button onClick={getPlaylist}>
          <Typography variant="h4">
            Playlist
          </Typography>
        </Button>

        {playlistData.map((item) => {
          return (
            <div className="card">
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
