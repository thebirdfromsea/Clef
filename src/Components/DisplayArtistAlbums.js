import React, { Component } from 'react';
import { ArtistAlbums } from 'react-spotify-api';
import ListItem from '@material-ui/core/ListItem';
import { Typography } from '@material-ui/core';



export default class DisplayArtistAlbums extends Component {
    constructor(props) {
        super(props);
        
    }

    

    render() {
        return(

        <div>
            <div>
               
                <h2 key = {this.props.artist.id}>
                    
                </h2>
                <h2>Albums by this artist: </h2>
                <ArtistAlbums id ={this.props.artist.id}>
                    {(albums, loading, error) => (
                        albums ? (
                            albums.items.map(album => (
                                <ListItem divider key = {album.id}>
                                    <Typography >
                                        <h3 key ={album.id}>{album.name}</h3>
                                    </Typography>
                                 
                                </ListItem>
                             ))
                         ) : null
                     )}

                </ArtistAlbums>


            </div>
        </div>

    
    
        )}
 }
