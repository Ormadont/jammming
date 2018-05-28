import React, { Component } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {searchResults:[
      {name: 'Moon',
      artist: 'Mikle Jackson',
      album: 'Platinum album',
      id: '009801'},
      {name: 'Apple',
      artist: 'Bob Rick',
      album: 'Gold album',
      id: '009802'},
      {name: 'Soul',
      artist: 'Don Valent',
      album: 'Silver album',
      id: '009803'},
    ]};
  }

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults}/>
            <Playlist />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
