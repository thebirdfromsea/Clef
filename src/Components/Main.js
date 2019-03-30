import React, { Component } from 'react';
import Title from './title';
// import Playbutton from './playbutton';
// import Pausebutton from './pausebutton';
import Songsearch from './songsearch';
// import Similarsongs from './similarsongs';
// import Volumeslider from './volumeslider';
import Wiki from './wiki';
import Slidesshow from './slidesshow';
// import Slider from './Slider';
// // impoer P from './videoSlides';
// import ImageSlides from './imageSlides';
// import backPic01 from './backPic01.png';
// import background from './background';
import EnergySlider from './energySlider';
import  Chart from './chart' ; 
// import  Par from './par' ; 
import  Ap from './par' ; 
import { Typography } from '@material-ui/core';
// import backPic01 from './backPic01.png';
// import background from './background';

import SpotifyPlayerClef from './PlayBackWidget';
  
export default class Main extends Component {
    constructor() {
        super();
        this.state = {
            seeds: {
                energy: 0.5,
            }
        }
    }
    
    componentDidMount() {

    }

    render() {
        return (
            <div className="App">
                <Title />
                <EnergySlider inputenergy={(value) => {
                    this.setState({ seeds: { energy: value } })}}/>
                <Typography component="h2" variant="display1" gutterBottom> {this.state.seeds.energy} </Typography>
                <Songsearch seed={this.state.seeds}/>
             
            <Slidesshow/>
            <Wiki /> 
            
            <Chart/>
            <Ap/>

            {/* <Similarsongs/>
            <Volumeslider />
            <Playbutton />
            <Pausebutton />
            <Wiki/>
            {/* <VideoSlides/> */}
            {/* <Slider/> */}
            {/* <background/> */}
            {/* <Par/> */}
            </div>
        );
    }
}