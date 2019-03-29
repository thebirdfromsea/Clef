import React, { Component } from 'react';
import { Search } from 'react-spotify-api';
import SearchBar from 'material-ui-search-bar';
import { ListItemAvatar, Typography } from '@material-ui/core';
import SpotifyPlayerClef from './PlayBackWidget';
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
                   <div> 
                   <div className="d-table"> 
                        <div className="d-table-row"> 
                            <div className="d-table-cell">
                                <Typography variant="h2">Recommended songs </Typography>

                                {data.artists.items.map(artist => (
                                <DisplayRecommendations item={artist} playtrack={this.PlayTrack} />
                                ))}
                            </div>
                            <div className="d-table-cell">
                                <Typography variant="h2">Albums</Typography>
                    
                            
                                {data.albums.items.map(album => (
                               <DisplayAlbum item={album} playalbum={this.PlayAlbum}/>))}
                            </div>  
                        </div>
                        <div className="d-table-row">
                            <div className="d-table-cell">
                                <Typography variant="h2">Artists</Typography>
                                
                                {data.artists.items.map(artist => (
                                <DisplayArtist item={artist} playartist={this.PlayArtist} />))}
                            </div>
                        
                            <div className ="d-table-cell">
                                <Typography variant="h2">Tracks</Typography>
                                
                                {data.tracks.items.map((track) => 
                                <DisplayTrack item={track} playtrack={this.PlayTrack} />)}
                            </div>
                        </div>
                    </div>
                    <div>
                    {data.tracks.items.map((track) =>
                           <DisplayTrackFeatures track={track}/>
                    )}
                    </div>
                    </div>) : null
                            
            }
            </Search> 
            </div>)
         
            
        ); 
         
    }
 }