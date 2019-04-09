import React, { Component } from 'react';
import { AlbumTracks } from 'react-spotify-api';
import ListItem from '@material-ui/core/ListItem';
import { Typography } from '@material-ui/core';


export default class DisplayArtistTracks extends Component {
    constructor(props) {
        super(props);
        
    }

    

    render() {
        return(

        <div>
            <div>
                

                <h2>Tracks in this Album:</h2>
                <AlbumTracks id={this.props.album}>
                    {(tracks, loading, error) => (
                        tracks ? (
                            tracks.items.map(tracks => (
                                 <ListItem divider key ={tracks.id}>
                                    <h3 key={tracks.id}>{tracks.name}</h3>
                                 </ListItem>
                            ))
                        ) : null
                     )}
                </AlbumTracks>
                

            </div>
        </div>

    
    
        )}
 }
