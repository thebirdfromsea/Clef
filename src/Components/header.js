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

const orangeTheme = createMuiTheme({ palette: { primary: orange}})

export default class Header extends Component {
    constructor() {
        super();
    }
    componentDidMount() {
        
    }

    render() {
        const headerStyle = { color: 'orange', 'font-size': '50px' }
        return (
          
            <div>
            <User>
                {(user, loading, error) =>
                    user ? (
                        <div>
                            <h1 style={headerStyle}>
                                Welcome, {user.display_name}
                            </h1>
                            </div>
                    ) : <button onClick={() => window.location = 'http://localhost:8888/login'}
                        style={defaultStyle}>Log in with Spotify</button>
                }
                </User>
               
                </div>
        );
    }
}
