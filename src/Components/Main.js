import React, { Component } from 'react';
import Title from './title';
import Songsearch from './songsearch';
import Wiki from './wiki';
import Slidesshow from './slidesshow'; 
import  Ap from './par' ; 
import Grid from '@material-ui/core/Grid';
import PlaylistDialog from './PlaylistDialog';
import SliderSwitch from './SliderSwitch';
import Sliders from './Sliders';
import PlaylistView from './PlaylistView';
import SpotifyPlayerClef from './PlayBackWidget';

export default class Main extends Component {
    constructor() {
        super();
        this.toggleSliders = this.toggleSliders.bind(this);
        this.setSpeechiness = this.setSpeechiness.bind(this);
        this.setInstrumentalness = this.setInstrumentalness.bind(this);
        this.setEnergy = this.setEnergy.bind(this);
        this.setDanceability = this.setDanceability.bind(this);
        this.PlayArtist = this.PlayArtist.bind(this);
        this.PlayAlbum = this.PlayAlbum.bind(this);
        this.PlayTrack = this.PlayTrack.bind(this);
        this.PlayPlaylist = this.PlayPlaylist.bind(this);
        this.state = {
            showSlider: false,
            displayPlayer: false,
            playerURI: '',
            energy: 0.5,
            danceability: 0.5,
            instrumentalness: 0.5,
            speechiness: 0.25
        }
    }

    toggleSliders = () => {
        if (this.state.showSlider === false) {
            this.setState({ showSlider: true })
        } else {
            this.setState({ showSlider: false })
        }
    }

    setDanceability = (value) => {
        this.setState({ danceability: value });
    }

    setEnergy = (value) => {
        this.setState({ energy: value });
    }

    setInstrumentalness = (value) => {
        this.setState({ instrumentalness: value });
    }

    setSpeechiness = (value) => {
        this.setState({ speechiness: value });
    }
    PlayArtist(item) {
        this.setState({ playerURI: "/artist/" + item })
        this.setState({ displayPlayer: true })
    }

    PlayAlbum(item) {
        this.setState({ playerURI: "/album/" + item })
        this.setState({ displayPlayer: true })
    }

    PlayTrack(item) {
        this.setState({ playerURI: "/track/" + item })
        this.setState({ displayPlayer: true })
    }
    PlayPlaylist(item) {
        this.setState({ playerURI: "/playlist/" + item })
        this.setState({ displayPlayer: true })
    }
    componentDidMount() {

    }

    render() {
        return (
            <div className="App">
                <Title />
                <SliderSwitch toggle={this.toggleSliders} />
                {this.state.showSlider ? (
                    <Sliders setDance={this.setDanceability} setEnergy={this.setEnergy} setInstrumental={this.setInstrumentalness} setSpeechiness={this.setSpeechiness} />
                ) : null}
                <PlaylistDialog accessToken={this.props.accessToken} />
                <PlaylistView PlayPlaylist={this.PlayPlaylist} />
                {this.state.displayPlayer ? (
                    <SpotifyPlayerClef uri={this.state.playerURI} />
                ) : null}
                <Songsearch energy={this.state.energy} danceability={this.state.danceability} instrumentalness={this.state.instrumentalness} speechiness={this.state.speechiness}
                    PlayTrack={this.PlayTrack} PlayArtist={this.PlayArtist} PlayAlbum={this.PlayAlbum}/>
                <Slidesshow />
                <Wiki />

                <Ap />
            </div>
        );
    }
}