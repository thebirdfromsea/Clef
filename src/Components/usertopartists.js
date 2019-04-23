import React, { Component } from 'react';
import { UserTop } from 'react-spotify-api'
import { ArtistRelated } from 'react-spotify-api';
import { TrackAnalysis } from 'react-spotify-api'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { ArtistAlbums } from 'react-spotify-api';
import Button from '@material-ui/core/Button';
import ArtistAlbumModal from './artistAlbumModal';
import DisplayUserTop from './DisplayUserTop';

/*
 * Class that retrieves a user's top artists using the UserTop component from react-spotify-api
 * and calls DisplayUserTop in order to display them.
 *
 */
export default class Utop extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false
        };
        this.handleClose = this.handleClose.bind(this);
    }

    // sets state of modal to closed when modal is exited
    handleClose = () => {
        this.setState({ open: false });
    };

    // sets state of modal to open when modal to display albums is selected 
    handleOpen = () => {
        this.setState({ open: true });
    };

    render() {
        return (
            <div>
                <h1>Your Top Artists:</h1>
                <UserTop type="artists">
                    {
                        (artists, loading, error) =>
                            artists ? (
                                artists.items.map(artist => (
                                    <DisplayUserTop artist={artist} />
                                ))
                            ) : null
                    }
                </UserTop>
            </div>
        );
    }
}




