import React, { Component } from 'react';
import ListItem from '@material-ui/core/ListItem';
import IconButton from '@material-ui/core/IconButton';
import PlayArrow from '@material-ui/icons/PlayArrow';
import { BrowseRecommendations } from 'react-spotify-api'
import PlaylistAddRounded from '@material-ui/icons/PlaylistAddRounded'
import FeatureModal from './FeatureModal'
import PieChart from '@material-ui/icons/PieChart';
import PlaylistMenu from './PlaylistMenu'
import Typography from 'material-ui/styles/typography';
import DisplayTrack from './DisplayTrack' ;

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
              
                <div>
                <h3>Based on <b>{this.props.item.name}</b></h3>
                </div>
                  
                <BrowseRecommendations options={{
                    limit: 5,
                    seed_tracks: this.props.item.id , 
                    seed_artists: this.props.item.id,
                    target_energy: this.props.energy,
                    target_danceability: this.props.danceability,
                    target_valence: this.props.valence,
                    target_speechiness: this.props.speechiness,
                    }}>
                            {
                        (recommendations, loading, error) => (
                                error ? (
                                    <h1> error</h1>
                                ):

                                recommendations ? (
                                    
                                    recommendations.tracks.map(track => (
                            
                                        <DisplayTrack item={track} playtrack={this.props.playtrack} accessToken={this.props.accessToken} />
                                       
                                      ))
                                  ) : null 
                
                            )
                        }</BrowseRecommendations>
            </div>
                                   
                    
            
        );
    }
}