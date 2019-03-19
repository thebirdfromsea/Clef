import React, { Component } from 'react';
import { Search } from 'react-spotify-api';
import { ArtistRelated } from 'react-spotify-api'; 
import { Form, Text, TextArea, Radio, RadioGroup, Select, Checkbox } from 'react-form';
import SearchBar from 'material-ui-search-bar';
import { Artist } from 'react-spotify-api'
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Grid } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import { TrackAnalysis } from 'react-spotify-api'
import { TrackFeatures} from 'react-spotify-api'


function displayItem(item){
    return( <div>
        <h2 key={item.id}>
        
        <a href = {item.external_urls.spotify}> 
                <img src = {item.images[2] ? item.images[2].url : null}/> 
                {item.name}
              
        </a>
        
        </h2>
        </div>)
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
     
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
 
    handleChange(event) {
        event.preventDefault() ;
        this.setState({value: event.target.value,
                       display: 'defaultDisplay'
        }); 
       
        console.log(this.state.value) ;
      }

    handleSubmit(event) {
        event.preventDefault(); 
        this.setState({display : 'loadDisplay'}) ; 
        console.log(this.state.display) ;
    }
    

 
    render() {
        return (
            this.state.display == 'defaultDisplay'? (
            <div> 
           <form onSubmit={this.handleSubmit}>
                <label>
                Name:
                <input type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
           </form>
           
            </div>
         ) : 

         (
        <div> 
         <form onSubmit={this.handleSubmit}>
              <label>
              Name:
              <input type="text" value={this.state.value} onChange={this.handleChange} />
              </label>
              <input type="submit" value="Submit" />
         </form>
        
         <Search query= {this.state.value} album artist track options= {this.state.searchProps}>
            
            {
               
                (data, loading, error) =>
                
                 data ? (
                <ul>
                    <h1>Albums</h1>
                    <ul>
                        {
                            data.albums.items.map(album => (
                                displayItem(album)
                        ))}
                        
                    </ul>

                    <h1>Artists</h1>
                    <ul>
                        {data.artists.items.map(artist => (
                              displayItem(artist) 
                        ))}
                        
                    </ul>
                    <h1>Tracks</h1>
                    <ul>
                        {data.tracks.items.map(track => (
                           displayTrackFeatures(track)
                        ))}
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