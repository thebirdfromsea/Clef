import React, { Component } from 'react';
import { Search } from 'react-spotify-api';
import { ArtistRelated } from 'react-spotify-api'; 
import { Form, Text, TextArea, Radio, RadioGroup, Select, Checkbox } from 'react-form';
import SearchBar from 'material-ui-search-bar';
import { Artist } from 'react-spotify-api'
import TextField from "@material-ui/core/TextField";

import { TrackAnalysis } from 'react-spotify-api'
import { TrackFeatures} from 'react-spotify-api'
import { BrowseRecommendations } from 'react-spotify-api'
import { withStyles } from '@material-ui/core/styles';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import { ListItemAvatar, Typography } from '@material-ui/core';


function displayArtist(item){
    return( <div>
         <ListItem 
         button 
         divider
         key={item.id}  
         component = "a" 
         href = {item.external_urls.spotify} target = "_blank"
        
          >
                <img src = {item.images[2] ? item.images[2].url : null}/>
            
            <Typography variant = "h5">
                {item.name}
            </Typography>
                
              
        </ListItem>

        <List>
        {displayRecommendations(item)}
        </List>
            
         

         </div>
        )
}

function displayAlbum(item){
    return( <div>
        <ListItem button divider key={item.id}  component = "a" href = {item.external_urls.spotify} target = "_blank">
                    <img src = {item.images[2] ? item.images[2].url : null}/>
                    <Typography variant = "h5">
                        {item.name}
                    </Typography>

        </ListItem>

         </div>
        )
}

function displayRecommendations(item){
    return(
        <div>
            <h2>Recommended songs : </h2>
            <BrowseRecommendations options={{ seed_artists: item.id  ,
                min_popularity: 50 , 
                target_energy : .8, 
                limit: 5
                }}>
                {
                    (recommendations, loading, error) => (
                    recommendations ? (
                    recommendations.tracks.map(track => (
                    <ListItem button divider key={track.id}>
                    <img src = {track.album.images[0] ? track.album.images[2].url : null}/>
                    {track.name}</ListItem>
                ))
            ) : <ListItem divider> None available</ListItem>
            )
            }</BrowseRecommendations>

        </div>
        
        )
    
}


function displayTrackFeatures(track){
    return( <div>
        <div>
        <h2 key={track.id}>
        
        <a href = {track.external_urls.spotify}>
                  {track.name} 
        </a>
        </h2>
        <h2>Track Analysis:</h2> 
        <TrackAnalysis id= {track.id}>
                {(analysis, loading, error) => (
                    analysis ? (
                        <div>
                            <h3> Duration : {analysis.track.duration/60.00} minutes</h3>
                            <h3> Tempo : {analysis.track.tempo} </h3>
                            <h3> Loudness : {analysis.track.loudness} </h3>
                            <h3> Time Signature : {analysis.track.time_signature} </h3>
                            
                        </div>     
                    ) : null
                )}
        </TrackAnalysis>
        </div>
        <div>
            <h2>Track Features:</h2>
             <TrackFeatures id= {track.id}>
             {(features, loading, error) => (
                    features ? (
                        <div>
                            <h3> Acousticness : {features.acousticness} </h3>
                            <h3> Danceability : {features.danceability} </h3>
                            <h3> Energy : {features.energy} </h3>
                            <h3> Loudness : {features.loudness}</h3>
                        </div>     
                    ) : null
                )}      
                </TrackFeatures>    
        </div>
        </div>)

}


export default class Songsearch extends Component {

    constructor(props)
    {
        super(props)
        this.state = {
            value : '',
            display : 'defaultDisplay',
            searchProps : {
                market: 'US' ,
                limit : 5 ,
                offset: 0 ,
                include_external: ' '
              
            }
      };
     

    }
  


 
    render() {
        return (
            this.state.display == 'defaultDisplay'? (
            <div> 
             <SearchBar
                onChange={(value)=> this.setState({value: value})}
                onRequestSearch={()=> this.setState({display:'loadDisplay'})}
                style={{
                    margin: '0 auto',
                    maxWidth: 600
                }}
             />
            </div>
         ) : 

         (
        <div> 
        <SearchBar
            onChange={(value)=> this.setState({value: value , display: 'defaultDisplay'})}
            onRequestSearch={()=> this.setState({display:'loadDisplay'})}
            style={{
                margin: '0 auto',
                maxWidth: 600
            }
            }

        />
         <Search query= {this.state.value} album artist track options= {this.state.searchProps}>
            
            {
                (data, loading, error) =>
                
                 data ? (
                <ul>
                    <h1>Albums</h1>
                    <ul>
                        {
                            data.albums.items.map(album => (
                                 displayAlbum(album) 
                            ))}
                        
                    </ul>

                    <h1>Artists</h1>
                    <ul>
                        {data.artists.items.map(artist => (
                              displayArtist(artist)
                        ))}
                    </ul>

                    <h1>Tracks</h1>
                    <ul>
                        {data.tracks.items.map(track => (
                           displayTrackFeatures(track)
                        ))}
                    </ul>
             

                    <ul>
                        
                    </ul>
                  
                </ul>
            ) : null
                }
            </Search> 
            </div>)
         
            
        ); 
          /*     <div className="col" id="songSearch">
        <h4 style={formatSearch}>
            Songs search
            </h4>
            <p style={searchSection}>
                This section of the page is for the song search.
                </p>
                </div>
            }
    */
    }
 }