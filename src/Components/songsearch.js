import React, { Component } from 'react';
import { Search } from 'react-spotify-api';
import SearchBar from 'material-ui-search-bar';
import { Typography } from '@material-ui/core';
import DisplayArtist from './DisplayArtist';
import DisplayAlbum from './DisplayAlbum';
import DisplayTrack from './DisplayTrack';
import DisplayTrackFeatures from './DisplayTrackFeatures';
import DisplayRecommendations from './DisplayRecommendations';
import CreatePlaylistWithUser from './CreatePlaylistWithUser';




export default class Songsearch extends Component {
    
    
    constructor(props)
    {
        super(props)


        this.state = {
            value: '',
            trackChange : true,
            display : 'defaultDisplay',
            refresher: true,
            searchProps: {
                market: 'US',
                limit : 5 ,
                offset: 0 ,
                include_external: ' '
            },
			URI : [ ]
      };
     

    }

    componentDidUpdate(prevState) {
        if (this.state.refresher !== true)
            this.setState({refresher: true})
    }




    CreatePlaylist(){
        this.setState({needsPlaylist : true})
    }

 
    render() {
        return (
         
            
            this.state.display == 'defaultDisplay' ? (

               
            
            <div> 

                 {this.state.needsPlaylist ? (
                     <CreatePlaylistWithUser accessToken = {this.props.accessToken}/>
                        ) : null}
             <SearchBar
                onChange={(value)=> this.setState({value: value})}
                onRequestSearch={()=> this.setState({display:'loadDisplay'})}
                style={{
                    margin: '0 auto',
                    maxWidth: 600,
                    
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

                error?( null ):  
                loading?(<h1>Loading...</h1>) :
                
                 data ? (
                   <div> 
                   <div className="d-table"> 
                        <div className="d-table-row"> 
                            <div className="d-table-cell">
                                <Typography variant="h3">Artists</Typography>
                                {data.artists.items.map(artist => (
                                    <DisplayArtist item={artist} playartist={this.props.PlayArtist} />))}
                            </div>
                            <div className="d-table-cell">
                                <Typography variant="h2">Albums</Typography>
                    
                            
                                {data.albums.items.map(album => (
                               <DisplayAlbum item={album} playalbum={this.props.PlayAlbum}/>))}
                            </div>  
                        </div>
                        <div className="d-table-row">
                            <div className="d-table-cell">
                                <Typography variant="h3">Recommended songs </Typography>
                                {this.state.refresher ? (<div>
                                    {data.artists.items.map(artist => (
                                        <DisplayRecommendations refresh={(value) => {
                                            this.setState({ refresher: false })}}
                                            item={artist} playtrack={this.props.PlayTrack} energy={this.props.energy}
                                            danceability={this.props.danceability}
                                            instrumentalness={this.props.instrumentalness}
                                            speechiness={this.props.speechiness} accessToken={this.props.accessToken} />))}</div>
                                                    ): <h2>Refeshing..</h2>}
                            </div>
                        
                            <div className ="d-table-cell">
                                <Typography variant="h3">Tracks</Typography>
                                
                                {data.tracks.items.map((track) => 
                                <DisplayTrack item={track} playtrack={this.props.PlayTrack} accessToken={this.props.accessToken} />)}
                            </div>
                        </div>
                    </div>
                    
                    </div>) : null
                            
            }
            </Search> 
            </div>)
         
            
        ); 
         
    }
 }

					/*<div>
                    {data.tracks.items.map((track) =>
                           <DisplayTrackFeatures track={track}/>
                    )}
                    </div> */
