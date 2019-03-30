import React, { Component } from 'react';
import queryString from 'query-string';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { orange } from '@material-ui/core/colors';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { User } from 'react-spotify-api';
import { Search } from 'react-spotify-api';
import CreatePlaylist from './CreatePlaylist'

export default class CreatePlaylistWithUser extends React.Component {
    render(){
        return(
            <User>
                {(user, loading, error) =>
                        user ? (
                            <CreatePlaylist user = {user.id} accessToken = {this.props.accessToken}/>
                        ) : null
                    }
             </User>
        )
    }
   
}