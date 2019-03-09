import React, { Component } from 'react';

const formatSearch = {
    fontSize: "30px",
    textAlign: "left",
    padding: "0",
    marginTop: "0",
    marginLeft: "150px", 
    color: "orange",
}

const searchSection = {
    fontSize: "15px",
    textAlign: "left",
    margin: "100px",
    color: "orange",
}

export default class Songsearch extends Component {
    constructor() {
    super();
}
    componentDidMount() {

    }

    render() {
        return (
        <div className="col" id="songSearch">
        <h4 style={formatSearch}>
            Songs search
            </h4>
            <p style={searchSection}>
                This section of the page is for the song search.
                </p>
                </div>
                );
            }
        }