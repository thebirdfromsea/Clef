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
import Switch from '@material-ui/core/Switch';
import PropTypes from 'prop-types';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import { withStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

const styles = {
    tableCellStyle: {
        maxHeight: 531,
        overflow: 'auto',
        maxWidth: 698,
        
    },
};

class Songsearch extends Component {
    
    
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
            URI : [ ],
            searchFilter: 'Artist'
      };
     

    }

    componentDidUpdate(prevState) {
        if (this.state.refresher !== true)
            this.setState({refresher: true})
    }




    CreatePlaylist(){
        this.setState({needsPlaylist : true})
    }

    handleChange =  event => {
        this.setState({ searchFilter: event.target.value });
      };

 
    render() {
        const { classes } = this.props;
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
                        }}/>
 
 
         <FormControl component="fieldset" >
                    <FormLabel component="legend">Find Recommendations Based On</FormLabel>
                    <RadioGroup
                        aria-label="Find Recommendations Based On: "
                        name="Search Filter"
                      
                        value= {this.state.searchFilter}
                        onChange={this.handleChange}
                    >
                        <FormControlLabel value="Artist" control={<Radio />} label="Artist" />
                        <FormControlLabel value="Track" control={<Radio />} label="Track" />
        
                    </RadioGroup>
        </FormControl>
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
                                <div className={classes.tableCellStyle}> 
                                   {data.artists.items.map(artist => (
                                    
                                    <DisplayArtist item={artist} playartist={this.props.PlayArtist} />))}
                                </div>
                            </div>
                           
                            <div className="d-table-cell"  >
                                <Typography variant="h3">Recommended songs </Typography>
                                <div className={classes.tableCellStyle}> 
                                {this.state.refresher ? (
                                    
                                    this.state.searchFilter == 'Track' ? (
                                        data.tracks.items.map((track) =>
                                        
                                        <DisplayRecommendations refresh={(value) => {
                                            this.setState({ refresher: false })}}
                                            item={track} playtrack={this.props.PlayTrack} energy={this.props.energy}
                                            danceability={this.props.danceability}
                                            instrumentalness={this.props.instrumentalness}
                                            speechiness={this.props.speechiness} accessToken={this.props.accessToken} />
                                        
                                        )
                                        
                                     ) : 
                                   
                                        this.state.searchFilter == 'Artist' ? (
                                        data.artists.items.map(artist => (
                                       
                                        <div>
                                        
                                        <DisplayRecommendations refresh={(value) => {
                                            this.setState({ refresher: false })}}
                                            item={artist} playtrack={this.props.PlayTrack} energy={this.props.energy}
                                            danceability={this.props.danceability}
                                            instrumentalness={this.props.instrumentalness}
                                            speechiness={this.props.speechiness} accessToken={this.props.accessToken} />
                                        </div>
                                            ))
                                      
                        

                                        
                                                
                                          
                                            ): <h1> None Found </h1>
                                                    
                                        ): <h2>Refeshing..</h2>}
                                

                                </div>
                            </div>
                        </div>
                        <div className="d-table-row">
                            
                        <div className="d-table-cell">
                                <Typography variant="h2">Albums</Typography>                           
                                <div className={classes.tableCellStyle}> 
                                        {data.albums.items.map(album => (
                                        <DisplayAlbum item={album} playalbum={this.props.PlayAlbum}/>))}
                                </div>
                            </div>                 
                            <div className ="d-table-cell">
                            
                                <Typography variant="h3">Tracks</Typography>
                                <div className={classes.tableCellStyle}>
                                        {data.tracks.items.map((track) => 
                                        <DisplayTrack item={track} playtrack={this.props.PlayTrack} accessToken={this.props.accessToken} />)}
                                </div>
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

Songsearch.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Songsearch);