import React, { Component } from 'react';
import Title from './title';
import Songsearch from './songsearch';
import Slidesshow from './slidesshow'; 
import  Ap from './par' ; 
import PlaylistDialog from './PlaylistDialog';
import Sliders from './Sliders';
import PlaylistView from './PlaylistView';
import SpotifyPlayerClef from './PlayBackWidget';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';


const styles = {
    tableCell: {
        display: 'd-table-cell',
        width: 745,
    },
};

class Main extends Component {
    constructor() {
        super();
        this.setSpeechiness = this.setSpeechiness.bind(this);
        this.setInstrumentalness = this.setInstrumentalness.bind(this);
        this.setEnergy = this.setEnergy.bind(this);
        this.setDanceability = this.setDanceability.bind(this);
        this.PlayArtist = this.PlayArtist.bind(this);
        this.PlayAlbum = this.PlayAlbum.bind(this);
        this.PlayTrack = this.PlayTrack.bind(this);
        this.PlayPlaylist = this.PlayPlaylist.bind(this);
        this.ClosePlayer = this.ClosePlayer.bind(this);
        this.state = {
       
            displayPlayer: false,
            playerURI: '',
            energy: 0.5,
            danceability: 0.5,
            instrumentalness: 0.5,
            speechiness: 0.25
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
    ClosePlayer() {
        this.setState({ displayPlayer: false });
    }

    componentDidMount() {

    }

    render() {
        const { classes } = this.props;
        return (
            <div className="App">
                <Title /> 
                <div className='d-table'>
                    <div className='d-table-row'>
                        <div className={classes.tableCell}>
                            <Sliders setDance={this.setDanceability} setEnergy={this.setEnergy} setInstrumental={this.setInstrumentalness} setSpeechiness={this.setSpeechiness} />
                        </div>
                        <div className='d-table-cell'>
                            <div className='d-table-row' style={{height: 100}}></div>
                            <div className='d-table-row'>
                            <div className='d-inline-flex' style={{padding: 10}}>
                                <PlaylistDialog accessToken={this.props.accessToken} />
                            </div>
                            <div className='d-inline-flex'>
                                <PlaylistView PlayPlaylist={this.PlayPlaylist} closePlayer={this.ClosePlayer} />
                            </div>
                                </div>
                        </div>
                    </div>
                </div>
                {this.state.displayPlayer ? (
                    <SpotifyPlayerClef uri={this.state.playerURI} />
                ) : null}
                <Songsearch energy={this.state.energy} danceability={this.state.danceability} instrumentalness={this.state.instrumentalness} speechiness={this.state.speechiness}
                    PlayTrack={this.PlayTrack} PlayArtist={this.PlayArtist} PlayAlbum={this.PlayAlbum} accessToken={this.props.accessToken}/>
                <Slidesshow />
               
                <Ap />
            </div>
        );
    }
}

Main.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Main);