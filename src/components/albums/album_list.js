import React, { Component } from 'react';
import { View, ScrollView, TouchableOpacity } from 'react-native';
import axios from 'axios';
import { Actions } from 'react-native-router-flux';

import AlbumDetail from './album_detail';

import { Button, Spinner } from '../common';


class AlbumList extends Component {

  state = { albums: [],};

 
  componentWillMount() {
    axios.get('http://172.30.1.17:3090/access') //axios.post('fdsjsd/access, data).then((res)->)
       .then(response => this.setState({ albums: response.data }));
  }


  renderAlbums() {
    return this.state.albums.map(album =>
      <AlbumDetail key={album.NUM} album={album} />
    );
  }
  
  render() {
    console.log(this.state);

    if (this.state.albums.length === 0) {
      return <Spinner size="large" />;
    }

    
    return (

      
      <ScrollView> 
  
        {this.renderAlbums()}
      
      </ScrollView>
    );
  }
}

export default AlbumList;
