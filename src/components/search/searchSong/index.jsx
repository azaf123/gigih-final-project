/* eslint-disable arrow-body-style */
/* eslint-disable react/button-has-type */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import Style from "./searchSong.module.css";
import { setSearch } from "../../../redux/slices/SearchSlice";
import { setData } from "../../../redux/slices/SongSlice";

const SearchSong = () => {
  const dispatch = useDispatch();
  const accessToken = useSelector((state) => state.token.accesstoken);
  const search = useSelector((state) => state.search.search);
  useEffect(() => {
    axios.get(`https://api.spotify.com/v1/search?q=justinbieber&type=track&limit=10&offset=0&access_token=${accessToken}`)
      .then((res) => {
        console.log(res.data);
        dispatch(setData({ data: res.data.tracks.items }));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // getSongData
  const getSongData = () => {
    axios.get(`https://api.spotify.com/v1/search?q=${search}&type=track&limit=10&offset=0&access_token=${accessToken}`)
      .then((res) => {
        console.log(res.data);
        dispatch(setData({ data: res.data.tracks.items }));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // handle Change Search
  const handleOnChange = (e) => {
    dispatch(setSearch({ search: e.target.value }));
  };
  // handle Submit Search

  const handleOnSubmit = (e) => {
    e.preventDefault();
    getSongData();
  };

  return (
    <div className={Style.searchBar}>
      <form onSubmit={handleOnSubmit}>
        <div className="field has-addons">
          <p className="control">
            <input className="input" type="text" placeholder="Search Song" onChange={handleOnChange} />
          </p>
          <p className="control">
            <button className="button" type="submit">
              Search
            </button>
          </p>
        </div>
      </form>
    </div>
  );
};
export default SearchSong;
