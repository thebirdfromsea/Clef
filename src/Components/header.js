import React, { Component } from 'react';


let textColor = 'orange'
let defaultStyle = {
    color: textColor
};

export default class Header extends Component {
    constructor(props) {
        super(props);
        
    }
    render() {
        const headerStyle = { color: 'orange', 'font-size': '50px' }
        return (
            <div className="App">
                {
                    this.props.userName ? 
                        <div>
                            <h1 style={headerStyle}>
                                Welcome, 
              {
                                    this.props.userName}
                            </h1>


                            <div>

                                <button onClick={() => window.location = 'http://localhost:8080/clef.html'}
                                >Click here to search for song information</button>
                            </div>
                        </div> : <button onClick={() => window.location = 'http://localhost:8888/login'}
                            style={defaultStyle}>Log in with Spotify</button>
                }
            </div>
        );
    }
}
