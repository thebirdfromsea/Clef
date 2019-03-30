import React, { Component } from 'react';
import { User } from 'react-spotify-api';

let textColor = 'orange'
let defaultStyle = {
    color: textColor
};


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
