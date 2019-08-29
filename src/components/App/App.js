import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import{HashRouter as Router, Route, Link} from 'react-router-dom';
import { connect } from 'react-redux';

//router paths
import ArtistList from '../ArtistList/ArtistList';
import ArtistForm from '../ArtistForm/ArtistForm';

class App extends Component {
  // Called when the (App) component is created
  
  // DOM is ready
  componentDidMount() { // react Component method
    this.refreshArtists();
  }

  refreshArtists = () => {
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
        <Router>
        
          <div className="App">
            <header className="App-header">
              <h1 className="App-title">Famous Artists</h1>
            
            <ul>
              <li><Link to="/">Artist List</Link></li>
              <li><Link to="/ArtistForm">Artist Form</Link></li>
            </ul>
            </header>
          
          
          <Route exact path="/" component={ArtistList} />
          <Route path="/ArtistForm" render={()=> <ArtistForm refreshArtists={this.refreshArtists}/>}  />

      </div>
      </Router>
      
    );
  }
}

export default connect ()(App);
