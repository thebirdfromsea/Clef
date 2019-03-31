import React, { Component } from 'react';
import Title from './title';
import Songsearch from './songsearch';
import Wiki from './wiki';
import Slidesshow from './slidesshow';
import EnergySlider from './energySlider';
import DanceabilitySlider from './DanceabilitySlider';
import InstrumentalnessSlider from './InstrumentalnessSlider';
import SpeechinessSlider from './SpeechinessSlider';
import  Chart from './chart' ; 
import  Ap from './par' ; 
import { Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import PlaylistDialog from './PlaylistDialog';

  
export default class Main extends Component {
    constructor() {
        super();
        this.state = {
            energy: 0.5,
            danceability: 0.5,
            instrumentalness: 0.5,
            speechiness: 0.25
        }
    }

    
    componentDidMount() {

    }

    render() {
        return (
            <div className="App">
            <Title />
                <div className="d-table">
                    <div className="d-table-row">
                        <div className="d-table-cell">
                            <DanceabilitySlider inputenergy={(value) => {
                                this.setState({ danceability: value })}} />
                            <Typography component="h2" variant="display1"> {this.state.danceability} </Typography>
                        </div>
                        <div className="d-table-cell">
                            <EnergySlider inputenergy={(value) => {
                                this.setState({ energy: value  })}} />
                            <Typography component="h2" variant="display1"> {this.state.energy} </Typography>
                        </div>
                    </div>
                    <div className="d-table-row">
                        <div className="d-table-cell">
                            <InstrumentalnessSlider inputenergy={(value) => {
                                this.setState({ instrumentalness: value })}} />
                            <Typography component="h2" variant="display1"> {this.state.instrumentalness} </Typography>
                        </div>
                        <div className="d-table-cell">
                            <SpeechinessSlider inputenergy={(value) => {
                                this.setState({ speechiness: value })}} />
                            <Typography component="h2" variant="display1"> {this.state.speechiness} </Typography>
                        </div>
                    </div>
                </div>
                <PlaylistDialog accessToken={this.props.accessToken}/>

            <Songsearch energy={this.state.energy} danceability={this.state.danceability} instrumentalness={this.state.instrumentalness} speechiness={this.state.speechiness} />
            <Slidesshow/>
            <Wiki /> 
            <Chart/>
            <Ap/>
            </div>
        );
    }
}