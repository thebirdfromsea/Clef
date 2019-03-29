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
                name: 'Acousticness', number: 0
            },
            {
                name: 'Danceability', number: 0
            },
            {
                name: 'Energy', number: 0
            },

        ]  

        return (     
            <div>
                <div>
                    <h2 key={this.props.track.id}>

                        <a href={this.props.track.external_urls.spotify}>
                            {this.props.track.name}
                        </a>
                    </h2>
                    <h2>Track Analysis:</h2>
                    <TrackAnalysis id={this.props.track.id}>

                        {
                            (analysis, loading, error) => (
                                error ? (null) :
                                    loading ? (<h1>Loading...</h1>) :
                                        analysis ? (
                                            fillGraphData(analysis.track.duration, analysis.bars.length, analysis.bars, analysisGraphData)
                                            ,
                                            fillGraphData(analysis.track.duration, analysis.beats.length, analysis.beats, analysisGraphData2),

                                            fillGraphData(analysis.track.duration, analysis.tatums.length, analysis.tatums, analysisGraphData3)
                                            ,

                                            <div>
                                                <ScatterPlot data={analysisGraphData} data2={analysisGraphData2} data3={analysisGraphData3} ticks={ticks} />
                                                <h3> Duration : {analysis.track.duration / 60.00} minutes</h3>
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
                    <TrackFeatures id={this.props.track.id}>
                        {(features, loading, error) => (
                            features ?

                                (
                                    featuresGraphData[0] = { name: 'Acousticness', number: features.acousticness },
                                    featuresGraphData[1] = { name: 'Danceability', number: features.danceability },
                                    featuresGraphData[2] = { name: 'Energy', number: features.energy },
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