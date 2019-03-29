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
import { Avatar } from 'material-ui';
import Chart from './chart'
import ScatterPlot from './scatterChart'
import fillGraphData from './graphdata'
import SpotifyPlayerClef from './PlayBackWidget';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import PlayArrow from '@material-ui/icons/PlayArrow';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import EnergySlider from './energySlider';
import DisplayArtist from './DisplayArtist';
import DisplayAlbum from './DisplayAlbum';
import DisplayTrack from './DisplayTrack';
import DisplayTrackFeatures from './DisplayTrackFeatures';
import DisplayRecommendations from './DisplayRecommendations';




export default class Songsearch extends Component {
    
    
    constructor(props)
    {
        super(props)
        var speed = 0
        this.PlayArtist = this.PlayArtist.bind(this);
        this.PlayAlbum = this.PlayAlbum.bind(this);
        this.PlayTrack = this.PlayTrack.bind(this);
        this.state = {
            value: '',
            trackChange : true,
            display : 'defaultDisplay',
			playerURI : '',
			displayPlayer : false,
            searchProps : {
                market: 'US' ,
                limit : 5 ,
                offset: 0 ,
                include_external: ' '
            },
           
            
			URI : [ ]
      };
     

    }
    


	PlayArtist(item){
		this.setState({playerURI : "/artist/" + item})
		this.setState({displayPlayer : true})
	}

 

	PlayAlbum(item){
		this.setState({playerURI : "/album/" + item})
		this.setState({displayPlayer : true})
    }

    


   /* displayRecommendations(item){
        return(
    
            <div>
                <h2>Recommended songs : </h2>
                <BrowseRecommendations options={{ seed_artists: item.id  ,
                    min_popularity: 50 , 
                    target_energy: this.state.seeds.energy , 
                    limit: 5,
                    }}>
                    {
                        (recommendations, loading, error) => (
                        recommendations ? (
                        recommendations.tracks.map(track => (
                        <ListItem divider key={track.id}>
                        <img src = {track.album.images[0] ? track.album.images[2].url : null}/>
                        {track.name}
						<IconButton onClick={this.handleClick}>
						<PlayArrow/>
						</IconButton>
						</ListItem>
                    ))
                ) : <ListItem divider> None available</ListItem>
                )
                }</BrowseRecommendations>
            </div>
    
            )
        
    }*/

	PlayTrack(item){
		this.setState({playerURI : "/track/" + item})
		this.setState({displayPlayer : true})
	}

    

 
    render() {
        return (
         
            
            this.state.display == 'defaultDisplay' && this.state.trackChange ? (

               
            
            <div> 
                {this.state.displayPlayer ? (
                <SpotifyPlayerClef uri={this.state.playerURI} />
                ) : null},
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
	
        {this.state.displayPlayer ? (
                    <SpotifyPlayerClef uri={this.state.playerURI} />
                        ) : null}
                        <EnergySlider inputenergy={(value) => {
                            this.setState({ seeds: { energy: value } })}}/>
                        <Typography component="h2" variant="display1" gutterBottom> {0} </Typography>
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

                error?( null ):  
                loading?(<h1>Loading...</h1>) :
                
                 data ? (
                   <ul>
                    <ul>
                    <Typography variant="h2">Recommended songs : </Typography>

                    {data.artists.items.map(artist => (
                           <DisplayRecommendations item={artist} playtrack={this.PlayTrack} />
                      ))}
                     </ul>
                    <Typography variant="h2">Albums</Typography>
                    <ul>
                        {
                            data.albums.items.map(album => (
                               <DisplayAlbum item={album} playalbum={this.PlayAlbum}/>
                            ))}
                        
                    </ul>

                    <Typography variant="h2">Artists</Typography>
                    <ul>
                        {data.artists.items.map(artist => (
                              <DisplayArtist item={artist} playartist={this.PlayArtist} />
                        ))}
                    </ul>

                    <Typography variant="h2">Tracks</Typography>
					<ul>
                        {data.tracks.items.map((track) => 
                                <DisplayTrack item={track} playtrack={this.PlayTrack} />
                        )}
                    </ul>
                    <ul>
                         {data.tracks.items.map((track) =>
                                <DisplayTrackFeatures track={track}/>
                        )}
                    </ul>

                    
                  
                </ul>
            ) : null
                }
            </Search> 
            </div>)
         
            
        ); 
         
    }
 }