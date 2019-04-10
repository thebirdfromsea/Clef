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

import FormControlLabel from '@material-ui/core/FormControlLabel';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControl from '@material-ui/core/FormControl';
import { FormGroup } from '@material-ui/core';
import SearchBar from 'material-ui-search-bar';


const styles = {
    tableCell: {
        display: 'd-table-cell',
        width: 740,
    },
};

class Main extends Component {
    constructor() {
        super();
        this.setSpeechiness = this.setSpeechiness.bind(this);
        this.setValence = this.setValence.bind(this);
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
            valence: 0.5,
            speechiness: 0.25, 
            searchFilter: 'Artist',
            display: 'defaultDisplay' , 
            value: ''
        }
    }

    handleChange =  event => {
        this.setState({ searchFilter: event.target.value });
      };

 
    setDanceability = (value) => {
        this.setState({ danceability: value });
    }

    setEnergy = (value) => {
        this.setState({ energy: value });
    }

    setValence = (value) => {
        this.setState({ valence: value });
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
                {this.state.displayPlayer ? (
                    <SpotifyPlayerClef uri={this.state.playerURI} />
                ) : null}
                <div className='d-table'>
                    <div className='d-table-row'>
                        <div className={classes.tableCell}>
                            <Sliders setDance={this.setDanceability} setEnergy={this.setEnergy} setValence={this.setValence} setSpeechiness={this.setSpeechiness} />
                        </div>
                       
                        <div className='d-table-cell' style={{width: 625}}>
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
                        <div className='d-table-cell'>
                            <div className='d-table-row'>
                                
                            </div>
                        </div>
                    </div>
                </div>
                <br></br>
                <FormGroup align = 'center' >
                                <FormControl component="fieldset" >
                                    
                                 <RadioGroup
                                        aria-label="Find Recommendations Based On: "
                                        name="Search Filter"
                                        row
                                        value={this.state.searchFilter}
                                        onChange={this.handleChange}>
                                        <FormControlLabel value="Artist" control={<Radio />} label="Artist" />
                                        <FormControlLabel value="Track" control={<Radio />} label="Track" />
                                    </RadioGroup>
                                </FormControl>
                </FormGroup>
                <SearchBar
                    onChange={(value)=> this.setState({value: value , display: 'defaultDisplay'})}
                    onRequestSearch={()=> this.setState({display:'loadDisplay'})}
                    style={{
                        margin: '0 auto',
                        maxWidth: 600
                    }
                    }
                    placeholder= {"Search by " + this.state.searchFilter}
                />
                <Songsearch searchFilter = {this.state.searchFilter} energy={this.state.energy} danceability={this.state.danceability} valence={this.state.valence} speechiness={this.state.speechiness}
                    PlayTrack={this.PlayTrack} PlayArtist={this.PlayArtist} PlayAlbum={this.PlayAlbum} accessToken={this.props.accessToken}
                    display = {this.state.display}
                    value   = {this.state.value}
                />
                 
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