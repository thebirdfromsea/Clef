import React, { Component } from 'react';
import ListItem from '@material-ui/core/ListItem';
import { Typography } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import PlayArrow from '@material-ui/icons/PlayArrow';
import { BrowseRecommendations } from 'react-spotify-api'

export default class DisplayTrack extends Component {
    constructor(props) {
        super(props);
        this.state = {
            seeds: {
                energy: 0.5
            }
        }
    }

    handleClick(item){
        this.props.playtrack(item)
    };

    render() {


        return (
            <div>
                
                <BrowseRecommendations options={{
                    seed_artists: this.props.item.id,
                    min_popularity: 50,
                    target_energy: this.state.seeds.energy,
                    limit: 5,
                }}>
                    {
                        (recommendations, loading, error) => (
                            recommendations ? (
                                recommendations.tracks.map(track => (
                                    <ListItem divider key={track.id}>
                                        <img src={track.album.images[0] ? track.album.images[2].url : null} />
                                        {track.name}
                                        <IconButton onClick={this.handleClick.bind(this,track.id)}>
                                            <PlayArrow />
                                        </IconButton>
                                    </ListItem>
                                ))
                            ) : <ListItem divider> None available</ListItem>
                        )
                    }</BrowseRecommendations>
            </div>
        );
    }
}