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

export default class Songsearch extends Component {
    
    
    constructor(props)
    {
        super(props)
        var speed = 0
        this.state = {
            value : '',
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
    
    displayArtist(item){
        return( <div>
             <ListItem 
             button 
             divider
             key={item.id}  
             component = "a" 
             href = {item.external_urls.spotify} target = "_blank"
            
              >
                    <img src = {item.images[2] ? item.images[2].url : null} />
    
                
                <Typography variant = "h5">
                    {item.name}
                </Typography>
                    
                  
            </ListItem>
    
            <List>
            {this.displayRecommendations(item)}
            </List>
            
    
            </div>
            )
    }

    displayAlbum(item){
        return( <div>
    
            <ListItem divider key={item.id} >
                        <img src = {item.images[2] ? item.images[2].url : null} rounded/>
                        <Typography variant = "h5">
                            {item.name}
                        </Typography>

						<IconButton onClick={this.PlayAlbum.bind(this, item.id)}>
						<PlayArrow/>
						</IconButton>

    
            </ListItem>
    
             </div>
            )
    }

	PlayAlbum(item){
		this.setState({playerURI : item})
		this.setState({displayPlayer : true})
	}


    displayRecommendations(item){
        return(
    
            <div>
                <h2>Recommended songs : </h2>
                <BrowseRecommendations options={{ seed_artists: item.id  ,
                    min_popularity: 50 , 
                    target_energy : .8, 
                    limit: 5,
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

    
    displayTrackFeatures(track){
       
        const ticks = [
            5,10,15,20,25,30
        ]
        const analysisGraphData = [

        ]

        const analysisGraphData2 = [

        ]

        const analysisGraphData3 = [


        ]

       
        const featuresGraphData = [
            {
                name: 'Acousticness', number : 0
              },
              {
                name: 'Danceability', number : 0
              },
              {
                name: 'Energy', number: 0
              },
              
        ]       
        return( 
        <div>
            <div>
            <h2 key={track.id}>
            
            <a href = {track.external_urls.spotify}>
                      {track.name} 
            </a>
            </h2>
            <h2>Track Analysis:</h2> 
            <TrackAnalysis id= {track.id}>

                    {
                    (analysis, loading, error) => (
                        error?( null ):  
                        loading?(<h1>Loading...</h1>) : 
                        analysis ? (
                            fillGraphData(analysis.track.duration, analysis.bars.length , analysis.bars, analysisGraphData)
                            ,   
                            fillGraphData(analysis.track.duration, analysis.beats.length , analysis.beats, analysisGraphData2), 

                            fillGraphData(analysis.track.duration, analysis.tatums.length , analysis.tatums, analysisGraphData3)
                           ,

                            <div>
                                <ScatterPlot data = {analysisGraphData} data2 = {analysisGraphData2} data3 = {analysisGraphData3} ticks = {ticks}/>
                                <h3> Duration : {analysis.track.duration/60.00} minutes</h3>
                                <h3> Tempo : {analysis.track.tempo} </h3>
                                <h3> Start : {analysis.bars[0].start} </h3>
                                <h3> Start of bar 2: {analysis.bars[1].start}</h3>
                                <h3> Bars: {analysis.bars.length}</h3>
                                <h3> Beats : {analysis.beats.length}</h3>
                                <h3> Beats per Bar : {analysis.beats.length / analysis.bars.length}</h3>
                                <h3> Sections : {analysis.sections.length}</h3>
                                <h3> Segments : {analysis.segments.length} </h3>
                                <h3> Tatums :    {analysis.tatums.length} </h3>
                                <div>
                             
                            </div>   
                            </div>
                                                    ) : null
                    )}
            </TrackAnalysis>
            </div>
            <div>
                <h2>Track Features:</h2>
                 <TrackFeatures id= {track.id}>
                 {(features, loading, error) => (
                        features ? 
                        
                        (
                            featuresGraphData[0] = { name: 'Acousticness', number : features.acousticness},
                            featuresGraphData[1] = { name: 'Danceability', number : features.danceability}, 
                            featuresGraphData[2] ={  name: 'Energy', number : features.energy} , 
                            <div>
                                <center><Chart data = {featuresGraphData} /></center>
                            </div>     
                        ) : null
                    )}      
                    </TrackFeatures>    
            </div>
            </div>)
    
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
		{this.state.displayPlayer ? (
			<SpotifyPlayerClef uri={this.state.playerURI} />
			) : null}
		
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
                    <h1>Albums</h1>
                    <ul>
                        {
                            data.albums.items.map(album => (
                                this.displayAlbum(album) 
                            ))}
                        
                    </ul>

                    <h1>Artists</h1>
                    <ul>
                        {data.artists.items.map(artist => (
                                this.displayArtist(artist) 
                        ))}
                    </ul>

                    <h1>Tracks</h1>
                    <ul>
                        {data.tracks.items.map((track) => 
                                    this.displayTrackFeatures(track) 
                        )}
                    </ul>

                    <ul>
                        
                    </ul>
                  
                </ul>
            ) : null
                }
            </Search> 
            </div>)
         
            
        ); 
         
    }
 }