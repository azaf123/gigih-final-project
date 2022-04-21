import { Typography } from "@mui/material";
import React from "react";
import Style from "./cardPlaylist.module.css";

const CardPlaylist = () => {
  return (
    <div className={Style.cardPlaylist}>
      <div className={Style.cardPlaylistItem}>
        <div className="card">
          <div className="card-content">
            <div className="content">
              <Typography variant="h4">
                playlist name

              </Typography>
              <hr />
              <Typography variant="h5">
                baguss
              </Typography>
              <Typography variant="h6">
                desc
              </Typography>
              <Typography variant="h6">
                total tract
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};
export default CardPlaylist;
