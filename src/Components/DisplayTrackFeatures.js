import React, { Component } from 'react';
import ListItem from '@material-ui/core/ListItem';
import { Typography } from '@material-ui/core';
import Chart from './chart'
import ScatterPlot from './scatterChart'
import fillGraphData from './graphdata'
import { TrackAnalysis } from 'react-spotify-api'
import { TrackFeatures } from 'react-spotify-api'


export default class DisplayTrackFeatures extends Component {
    constructor(props) {
        super(props);
        
    }

    

    render() {
        const ticks = [5, 10, 15, 20, 25, 30]
        const analysisGraphData = []
        const analysisGraphData2 = []
        const analysisGraphData3 = []
        const featuresGraphData = [
            {
                name: 'Danceability', number: 0
            },
            {
                name: 'Valence', number: 0
            },
            {
                name: 'Energy', number: 0
            },
            {
                name: 'Speechiness', number: 0
            }

        ]  

        return (     
            <div>
                <div>
                    <h1 key={this.props.track.id}>
                           <b> {this.props.track.name} </b>
                    </h1>
                    
                </div>
                <div>
                    <h2>Track Features:</h2>
                    <TrackFeatures id={this.props.track.id}>
                        {(features, loading, error) => (
                            features ?

                                (
                                    featuresGraphData[0] = { name: 'Danceability', number: features.danceability },
                                    featuresGraphData[1] = { name: 'Valence', number: features.valence },
                                    featuresGraphData[2] = { name: 'Energy', number: features.energy },
                                    featuresGraphData[3] = { name: 'Speechiness', number : features.speechiness},
                                    <div>
                                        <center><Chart data={featuresGraphData} /></center>
                                    </div>
                                ) : null
                        )}
                    </TrackFeatures>
                </div>
            </div>

        );
    }
}

