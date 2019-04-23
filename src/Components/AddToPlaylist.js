import React, { Component } from 'react';

/*
    Class that takes playlistId, trackId, and accessToken props, and uses them in a JSON POST request
    in order to add a song to a Spotify Playlist
*/
export default class AddToPlaylist extends React.Component{
    constructor(props){
        super(props)
    }
    componentDidMount(){
        fetch(`https://api.spotify.com/v1/playlists/${this.props.playlistId}/tracks?uris=spotify%3Atrack%3A${this.props.trackId}`, {
            headers: {
                Accept: "application/json",
                Authorization: `Bearer ${this.props.accessToken}`,
                "Content-Type": "application/json"
            },
            method: "POST"
     }).then(response => response.json())


    }

    render(){
        // render method was required so that Component works but nothing needs to be displayed 
        return (null)
   
    }
        
}
