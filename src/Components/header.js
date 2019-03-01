import React, { Component } from 'react';
import queryString from 'query-string';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { orange } from '@material-ui/core/colors';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';


let textColor = 'orange'
let defaultStyle = {
    color: textColor
};

const orangeTheme = createMuiTheme({ palette: { primary: orange}})

export default class Header extends Component {
    constructor() {
        super();
        this.state = { serverData: {} }
    }
    componentDidMount() {
        let parsed = queryString.parse(window.location.search);
        let accessToken = parsed.access_token;

        fetch('https://api.spotify.com/v1/me', {
            headers: { 'Authorization': 'Bearer ' + accessToken }
        }).then((response) => response.json()).then(data => this.setState({ serverData: { user: { name: data.display_name } } }))
    }

    render() {
        const headerStyle = { color: 'orange', 'font-size': '50px' }
        return (
            <div className="App">
                {
                    this.state.serverData.user ? 
                        <div>
                            <h1 style={headerStyle}>
                                Welcome, 
              {
                                    this.state.serverData.user.name}
                            </h1>


                            <div>
                                <MuiThemeProvider theme={orangeTheme}>
                                    <Button variant="contained" color="primary" component={Link} to="/Main"> Click here to search for song information </Button>
                                </MuiThemeProvider>
                            </div>
                        </div> : <button onClick={() => window.location = 'http://localhost:8888/login'}
                            style={defaultStyle}>Log in with Spotify</button>
                }
            </div>
        );
    }
}
