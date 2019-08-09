import React, { Component } from 'react';
import {View, StyleSheet, ScrollView } from 'react-native'

import AlbumDetail from './AlbumDetail';

class AlbumList extends Component{

    constructor(props){
        super(props);
        this.state = {albums:[]};
    }

    renderAlbums(){
       return this.state.albums.map(album=>
            <AlbumDetail key={album.title} album={album} />
        );
    }

    componentWillMount(){
       return fetch('http://rallycoding.herokuapp.com/api/music_albums')
       .then((response)=>response.json())
       .then(
           (responseJson) =>{
                this.setState(
                    {albums:responseJson}
                );
           }
       );
    }

    render(){
        return (
            <ScrollView>
                {this.renderAlbums()}
            </ScrollView>
        );
    }

}

export default AlbumList;