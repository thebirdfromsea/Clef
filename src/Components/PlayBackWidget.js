import React, { Component } from 'react';
import SpotifyPlayer from 'react-spotify-player';
export default class SpotifyPlayerClef extends Component {

constructor(props) {
    super(props);
}
	
render(){
const size = {
  width: '50%',
  height: 300
}
const view = 'list'; // or 'coverart'
const theme = 'black'; // or 'white'
 
return (

<SpotifyPlayer
  uri={this.props.uri}
  size={size}
  view={view}
  theme={theme}
/>
);
}
}