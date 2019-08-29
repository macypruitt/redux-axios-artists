import React, { Component } from 'react';
import {connect} from 'react-redux';
import{HashRouter as Router, Route, Link} from 'react-router-dom';
import axios from 'axios';

class ArtistForm extends Component {
   state = {
       name: ''
   }

   updateArtist = (event) => {
       this.setState({
           name: event.target.value
       })
   }

   addArtistToList = (event) => {
    axios.post('/artist', this.state)
    .then((response) => {
      this.props.refreshArtists();
    })
    .catch((err) => {
      console.log('POST Error: ', err);
      alert('There was an error not in your favor adding an artist.');
    }); 
   }

    render() {
        return (
            <div>
                <input onChange={this.updateArtist} type="text" placeholder="Enter artist" />
                <button onClick={this.addArtistToList}>Add</button>
            </div>
        )
    }
}

const mapStoreToProps = (store) => ({
    store
});

export default connect(mapStoreToProps)(ArtistForm);