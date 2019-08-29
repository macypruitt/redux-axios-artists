// App.js

import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import ArtistList from './../ArtistList/ArtistList.js';

import { connect } from 'react-redux'

class App extends Component {
  // Called when the (App) component is created
  
  
  // DOM is ready
  componentDidMount() { // react Component method
    this.refreshArtists();
  }

  refreshArtists = () => {
    // just like $.ajax()
    axios({
      method: 'GET',
      url: '/artist'
    }).then((response) => {
      const artistList = response.data;
      const action = {
        type: 'GET_ARTIST_LIST',
        payload: artistList
      }
     this.props.dispatch(action);
      console.log(response);
    })
    .catch((err) => {
      console.log('GET Error: ', err);
      alert('There was an error getting your artist.');
      // response.data will be the array of artists
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Famous Artists</h1>
        </header>
        <br/>
        <ArtistList  />
      </div>
    );
  }
}

export default connect ()(App);
