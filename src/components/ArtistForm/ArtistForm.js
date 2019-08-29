import React, { Component } from 'react';
import {connect} from 'react-redux';
import{HashRouter as Router, Route, Link} from 'react-router-dom';
import axios from 'axios';

class ArtistForm extends Component {
   state = {
       artistName: ''
   }

   updateArtist = (event) => {
       this.setState({
           artistName: event.target.value
       })
   }

   addArtistToList = (event) => {
    axios.post('/artist', this.state.artistName)
    .then((response) => {
      console.log(response);
      this.props.refreshArtists();
    })
    .catch((err) => {
      console.log('POST Error: ', err);
      alert('There was an error not in your favor adding an artist.');
    });

       this.props.dispatch({type: 'GET_ARTIST_LIST', payload:this.state.artistName});
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