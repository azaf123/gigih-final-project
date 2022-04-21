/* eslint-disable no-unused-vars */
/* eslint-disable arrow-body-style */
/* eslint-disable max-len */
/* eslint-disable jsx-a11y/label-has-associated-control */
import axios from "axios";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";

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

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setPlaylist({
      ...playlist,
      [name]: value,
    });
  };

  useEffect(() => {
    axios.get("https://api.spotify.com/v1/me", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        // console.log(res.data.uri.substring(13));
        setUser(res.data.uri.substring(13));
      })
      .catch((err) => {
        console.log(err);
      });
  }, [token]);

  const postPlaylist = async () => {
    await axios.post(
      `https://api.spotify.com/v1/users/${user}/playlists`,
      {
        name: playlist.playlistName,
        description: playlist.playlistDescription,
        public: playlist.playlistType,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    postPlaylist();
  };

  return (
    <div>
      <form onSubmit={handleOnSubmit}>
        <div className="box">
          <div className="field">
            <label className="label">Playlist Name</label>
            <div className="control">
              <input className="input" type="text" placeholder="PlaylistName" onChange={handleOnChange} value={playlist.playlistName} name="playlistName" />
            </div>
          </div>
          <div className="field">
            <label className="label">Description</label>
            <div className="control">
              <textarea className="textarea" placeholder="Description" onChange={handleOnChange} value={playlist.playlistDescription} name="playlistDescription" />
            </div>
          </div>
          <div className="field">
            <label className="label">Public</label>
            <div className="control">
              <div className="select">
                <select>
                  <option>Public</option>
                  <option>Private</option>
                </select>
              </div>
            </div>
          </div>
          <div className="field">
            <button className="button is-primary" type="submit">Create Playlist</button>
          </div>
        </div>
      </form>
    </div>
  );
};
export default createPlaylistCard;
