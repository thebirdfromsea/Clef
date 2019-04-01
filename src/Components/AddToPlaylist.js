import React, { Component } from 'react';
    
export default class AddToPlaylist extends React.Component{
    constructor(props){
        super(props)
    }
    componentDidMount(){
        fetch(`https://api.spotify.com/v1/playlists/${this.props.playlistId}/tracks?uris=spotify%3Atrack%3A${this.props.track}`, {
            headers: {
                Accept: "application/json",
                Authorization: `Bearer ${this.props.accessToken}`,
                "Content-Type": "application/json"
            },
            method: "POST"
     }).then(response => response.json())


    }

    render(){
        return (<h1>We made it</h1>)
   
}
        
}
