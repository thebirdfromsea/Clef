/*
This file is the one responsible for opening the iframe that has the Spotify Playback Widget in it.
It passes part of the necessary link to the Widget and then accepts the rest of the link as a props.
Rest if the link comes from DisplayTrack, DisplayArtist, and DisplayAlbum.
*/
import React, { Component } from 'react';

export default class SpotifyPlayerClef extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div>
                <iframe src={"https://open.spotify.com/embed" + this.props.uri} width="50%" height="350" frameBorder="0" allowtransparency="true" allow="encrypted-media" />
            </div>
        );
    }
}