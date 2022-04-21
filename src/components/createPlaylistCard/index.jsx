/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";

const createPlaylistCard = () => {
  return (
    <div>
      <div className="box">
        <div className="field">
          <label className="label">Playlist Name</label>
          <div className="control">
            <input className="input" type="text" placeholder="Playlist Name" />
          </div>
        </div>
        <div className="field">
          <label className="label">Description</label>
          <div className="control">
            <textarea className="textarea" placeholder="Description" />
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

      </div>
    </div>
  );
};
export default createPlaylistCard;
