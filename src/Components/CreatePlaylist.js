import React, { Component } from 'react';
import queryString from 'query-string';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { orange } from '@material-ui/core/colors';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { User } from 'react-spotify-api';
import { Search } from 'react-spotify-api';

let textColor = 'orange'
let defaultStyle = {
    color: textColor
};

/*
    Class that takes user, name, desc (description), and accessToken props in order to make a JSON
    POST request which creates a playlist in the user's Spotify account. 
*/

export default class CreatePlaylist extends React.Component {
    


            componentDidMount(){
                fetch(`https://api.spotify.com/v1/users/${this.props.user}/playlists`, {
            
                    body: `{\"name\":\"${this.props.name}\",\"description\":\"${this.props.desc}\",\"public\":false}`,
                    headers: {
                        Authorization: `Bearer ${this.props.accessToken}`,
                        "Content-Type": "application/json"
                    },
                    method: 'POST'}).then(response => response.json())
                }
            
       
       
            render()
            {
                //render method required for Component but nothing needs to be displayed 
                return(null)
            }


}
