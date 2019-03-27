import React, { Component } from 'react';
import { UserTop } from 'react-spotify-api'
import { ArtistRelated } from 'react-spotify-api'; 
import { TrackAnalysis } from 'react-spotify-api'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';


export default class Utop extends React.Component{
    render(){
    return (
        <div>
        <h1>Your Top Artists:</h1>

        <UserTop type = "artists">
        {(artists, loading, error) =>
                 artists ? (
                     artists.items.map(artist => (
                     <Card className="d-inline-block" style={{width: "20rem", height: "32rem", backgroundColor: "orange"}}>
                     <CardActionArea>
                         <p><img src={artist.images[1].url} alt = {artist.name}/></p>
                         <CardContent>
                             <Typography>
                             <h3 key = {artist.id}>{artist.name}</h3>
                             <p>Genres : {artist.genres[0]}, {artist.genres[1]}</p>
                             </Typography>
                             <Typography component="p">
                             Popularity Rating: {artist.popularity}
                             </Typography>
                        </CardContent>
                    </CardActionArea>
                    </Card>
                    ))
                    ) : null
                    }
        </UserTop>
        </div>
        );
    }
}        

