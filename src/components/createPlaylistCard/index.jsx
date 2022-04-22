/* eslint-disable no-alert */
/* eslint-disable no-unused-vars */
/* eslint-disable arrow-body-style */
/* eslint-disable max-len */
/* eslint-disable jsx-a11y/label-has-associated-control */
import axios from "axios";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Typography } from "@mui/material";
import Style from "./createPlaylistCard.module.css";

const createPlaylistCard = () => {
  const token = useSelector((state) => state.token.accesstoken);
  const selected = useSelector((state) => state.song.selected);
  const [user = {}, setUser] = React.useState({});
  const [playlist, setPlaylist] = React.useState({
    playlistName: "",
    playlistDescription: "",
    playlistType: false,
    playlistId: "",
    playlistData: [],
  });
  const [hasError = false, setHasError] = React.useState(false);
  const handleOnChange = async (e) => {
    const { name, value } = e.target;
    setPlaylist({
      ...playlist,
      [name]: value,
    });
    if (playlist.playlistName.length < 9) {
      setHasError({
        ...hasError,
        playlistName: "Playlist name must be at least 10 characters",
      });
    } else {
      setHasError({
        ...hasError,
        playlistName: "",
      });
    }
  };

  useEffect(() => {
    axios.get("https://api.spotify.com/v1/me", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        setUser(res.data.uri.substring(13));
      });
  }, [token]);

  const postPlaylist = async () => {
    await axios.post(
      `https://api.spotify.com/v1/users/${user}/playlists`,
      {
        name: playlist.playlistName,
        description: playlist.playlistDescription,
        public: false,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    )
      .then((res) => {
        setPlaylist({
          ...playlist,
          playlistId: res.data.id,
        });
      });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    postPlaylist();
    if (playlist.playlistName.length < 9) {
      setHasError(true);
      return alert("Playlist name must be at least 10 characters");
    }
    setHasError(false);
    return alert("Playlist created");
  };

  const addSongToPlaylist = async () => {
    await axios.post(
      `https://api.spotify.com/v1/playlists/${playlist.playlistId}/tracks`,
      {
        uris: selected,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    )
      .then((res) => {
        setPlaylist({
          ...playlist,
          playlistId: res.data.id,
        });
      });
  };

  useEffect(() => {
    addSongToPlaylist();
  }, [playlist.playlistId]);

  return (
    <form onSubmit={handleOnSubmit}>
      <div className={Style.container}>
        <Typography variant="h4">
          Create Playlist
        </Typography>
        <br />
        <div className="box has-background-grey-light">
          <div className="field">
            <label className="label">Playlist Name</label>
            <div className="control">
              <input className="input" type="text" placeholder="Playlist Name" onChange={handleOnChange} value={playlist.playlistName} name="playlistName" min={10} />
              {hasError.playlistName && <p className="help is-danger">{hasError.playlistName}</p>}
            </div>
          </div>
          <div className="field">
            <label className="label">Description</label>
            <div className="control">
              <textarea className="textarea" placeholder="Description" onChange={handleOnChange} value={playlist.playlistDescription} name="playlistDescription" />
            </div>
          </div>
          <div className="field">
            <label className="label">Type</label>
            <div className="control">
              {/* readonly */}
              <input className="input" type="text" placeholder="Type" onChange={handleOnChange} value="Private" name="playlistType" readOnly />
            </div>
          </div>
          <div className="field">
            <button className="button is-primary" type="submit">Create Playlist</button>
          </div>
        </div>
      </div>
    </form>

  );
};
export default createPlaylistCard;
