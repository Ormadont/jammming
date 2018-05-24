import React, { Component } from 'react';
import TrackList from '../TrackList/TrackList';

import './Playlist.css';

class Playlist extends Component {
  render() {
    return (
      <div className="Playlist">
        <input value={'New Playlist'}/>
        <a className="Playlist-save">SAVE TO SPOTIFY</a>
      </div>
    );
  }
}

export default Playlist;
