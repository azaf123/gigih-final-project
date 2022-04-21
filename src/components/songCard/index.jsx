/* eslint-disable arrow-body-style */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Style from "./songCard.module.css";
import { handleSongSelected, handleSongDeselected } from "../../redux/slices/SongSlice";

const SongCard = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.song.data);
  const selected = useSelector((state) => state.song.selected);
  return (
    <div className={Style.cardSong}>
      {data.map((item) => (
        <div className="card" key={item.id}>
          <div className={Style.cardMaster}>
            <div className="cardimage">
              <img src={item.album.images[0].url} alt="Placeholder image" />
            </div>
            <div className="card-content">
              <div className="media">

                <div className="media-content">
                  <p className="title is-5">{item.name}</p>
                  <p className="subtitle is-6">{item.artists[0].name}</p>
                </div>
              </div>
            </div>
            <div className={Style.content}>
              {item.album.name}
              {" "}
              <a>
                <p>Popularity</p>
                {item.popularity}
              </a>
            </div>
            <div className={Style.buttonSelect}>
              {selected.includes(item.uri) ? (
                <div className={Style.buttonSelected}>
                  <button type="button" className="button is-danger" onClick={() => dispatch(handleSongDeselected({ uri: item.uri }))}>
                    Remove
                  </button>
                </div>
              ) : (
                <div className={Style.buttonDeselected}>
                  <button type="button" className="button is-primary" onClick={() => dispatch(handleSongSelected({ uri: item.uri }))}>
                    Add to Playlist
                  </button>
                </div>
              )}

            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default SongCard;
