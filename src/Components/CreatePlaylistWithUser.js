import React, { Component } from 'react';
import { User } from 'react-spotify-api';
import CreatePlaylist from './CreatePlaylist'

export default class CreatePlaylistWithUser extends Component {
    constructor(props) {
        super(props);
    }

    render(){
        return(
            <User>
                {(user, loading, error) =>
                    user ? (
                        <CreatePlaylist user={user.id} accessToken={this.props.accessToken} name={this.props.name} desc={this.props.desc}/>
                         ): null
                    }
             </User>
        )
    }
   
}
