import React, { Component } from 'react';
import { User } from 'react-spotify-api';
import CreatePlaylist from './CreatePlaylist'

/*
    Class that finds the current user using react-spotify-api and 
    calls the CreatePlaylist Component to be rendered, passing user, accessToken,
    name(of playlist), and desc(description of playlist) as props.
*/
export default class CreatePlaylistWithUser extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <User>
                {(user, loading, error) =>
                    user ? (
                        <CreatePlaylist user={user.id} accessToken={this.props.accessToken} name={this.props.name} desc={this.props.desc} />
                    ) : null
                }
            </User>
        )
    }

}
