import React, { Component } from 'react';
import { UserTop } from 'react-spotify-api'

export default class Utop extends React.Component{
    render(){
    return (
        <div>
        <h1>Your Top Artists:</h1>

        <UserTop type="artists">
            {(artists, loading, error) =>
                artists ? (
                    artists.items.map(artist => (
                        <div>
                              <h1 key={artist.id}>{artist.name}</h1>
                              <img src =  {artist.images[1].url}/> 
                              <p>Genres : {artist.genres[0]}, {artist.genres[1]} </p>
                              <p>Popularity Rating: {artist.popularity}</p>
                        </div>
                    ))
                ) : null
            }
        </UserTop>

        </div>
    )
    }

}