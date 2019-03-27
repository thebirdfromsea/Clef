import React, { Component } from 'react';

export default class SpotifyPlayerClef extends Component {

constructor(props) {
    super(props);
}
	
render(){

return (
    <div>
        <iframe src={"https://open.spotify.com/embed/album/" + this.props.uri} width="50%" height="350" frameBorder="0" allowtransparency="true" allow="encrypted-media" />
        </div>
);
}
}