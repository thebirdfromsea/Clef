import React, { Component } from 'react';
import ListItem from '@material-ui/core/ListItem';
import IconButton from '@material-ui/core/IconButton';
import PlayArrow from '@material-ui/icons/PlayArrow';
import { BrowseRecommendations } from 'react-spotify-api'
import PlaylistAddRounded from '@material-ui/icons/PlaylistAddRounded'
import FeatureModal from './FeatureModal'
import PieChart from '@material-ui/icons/PieChart';
import PlaylistMenu from './PlaylistMenu'

export default class DisplayRecommendations extends Component {
    constructor(props) {
        super(props);
        this.closeModal = this.closeModal.bind(this);
        this.state = {
            openModal: false,
        }
    }

    componentDidUpdate(prevProps) {
        if (this.props !== prevProps)
            this.handleRefresh();
    }

    handleRefresh() {
        this.props.refresh(false);
    }

    handleClick(item){
        this.props.playtrack(item)
    };
    closeModal = () => {
        this.setState({ openModal: false });
    }
    openModal = () => {
    this.setState({ openModal: true });
    }



    render() {


        return (
            <div>
                <BrowseRecommendations options={{
                    seed_artists: this.props.item.id,
                    seed_tracks: this.props.item.id, 
                    min_popularity: 0,
                    target_energy: this.props.energy,
                    target_danceability: this.props.danceability,
                    target_instrumentalness: this.props.instrumentalness,
                    target_speechiness: this.props.speechiness,
                    limit: 5,}}>
                            {
                        (recommendations, loading, error) => (
                                recommendations ? (
                                    recommendations.tracks.map(track => (
                                          <ListItem divider key={track.id}>
                                              <img src={track.album.images[0] ? track.album.images[2].url : null} />
                                              {track.name}
                                              <IconButton onClick={this.handleClick.bind(this, track.id)}>
                                                  <PlayArrow />
                                              </IconButton>
                                              <PlaylistMenu accessToken={this.props.accessToken} trackID={track.id}/>
                                              <IconButton onClick={this.openModal}>
                                                <PieChart />
                                              </IconButton>
                                              <FeatureModal open={this.state.openModal} handleClose={this.closeModal} analysis={track} />
                                               
                                          </ListItem>
                                      ))
                                  ) : <ListItem divider> None available</ListItem>
                            )
                        }</BrowseRecommendations>
            </div>
                                   
                    
            
        );
    }
}