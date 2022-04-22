/* eslint-disable import/extensions */
/* eslint-disable arrow-body-style */
/* eslint-disable react/button-has-type */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import Style from "./searchSong.module.css";
import { setSearch } from "../../../redux/slices/SearchSlice";
import { setData } from "../../../redux/slices/SongSlice";
import { RootState } from "../../../redux/store";

const SearchSong = () => {
  const dispatch = useDispatch();
  const accessToken = useSelector((state:RootState) => state.token.accesstoken);
  const search = useSelector((state:RootState) => state.search.search);
  useEffect(() => {
    axios.get(`https://api.spotify.com/v1/search?q=tulus&type=track&limit=12&offset=0&access_token=${accessToken}`)
      .then((res) => {
        dispatch(setData({ data: res.data.tracks.items }));
      });
  }, []);

  // getSongData
  const getSongData = () => {
    axios.get(`https://api.spotify.com/v1/search?q=${search}&type=track&limit=10&offset=0&access_token=${accessToken}`)
      .then((res) => {
        dispatch(setData({ data: res.data.tracks.items }));
      });
  };

  // handle Change Search
  const handleOnChange = (e:{
    target:{
      value:string,
    },
  }) => {
    dispatch(setSearch({ search: e.target.value }));
  };
  // handle Submit Search

  const handleOnSubmit = (e:{
    preventDefault:() => void,
  }) => {
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
