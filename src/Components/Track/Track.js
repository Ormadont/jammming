import React, { Component } from 'react';
// import SearchBar from '../SearchBar/SearchBar';
// import SearchResults from '../SearchResults/SearchResults';
// import Playlist from '../Playlist/Playlist';
import './Track.css';

class Track extends Component {
  renderAction(isRemoval) {
    return isRemoval ? '+' : '-';
  }
  render() {
    return (
      <div className="Track">
        <div className="Track-information">
          <h3>track name will go here</h3>
          <p>track artist will go here  track album will go here</p>
        </div>
        <a className="Track-action"> {this.renderAction(true)} </a>
      </div>
    );
  }
}

export default Track;
