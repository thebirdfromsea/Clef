import {BrowseNew} from 'react-spotify-api'
import React, {Component} from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import AlbumModal from './albumModal';
import DisplayNewReleases from './DisplayNewReleases';


export default class newSong extends React.Component{
    constructor(props){
        super(props)

    }
    render(){
    return(
        <div>
            <h1>
                What's New:
            </h1>
            <BrowseNew options = {{country: 'US', limit: 12, offset: 0}}>
                {(albums, loading, error) => (
                     albums ?( 
                        albums.albums.items.map(album=>(
                            <DisplayNewReleases album={album} />
                        ))
                    ):null
                )}
                
            </BrowseNew>
        </div>
        );
    }
}
