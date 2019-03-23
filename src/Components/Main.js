import React, { Component } from 'react';
import Title from './title';
import Playbutton from './playbutton';
import Pausebutton from './pausebutton';
import Songsearch from './songsearch';
import Similarsongs from './similarsongs';
import Volumeslider from './volumeslider';
import Wiki from './wiki';
import  Chart from './chart' ; 

// import backPic01 from './backPic01.png';
// import background from './background';
  
export default class Main extends Component {
    constructor() {
        super();
    }
    
    componentDidMount() {

    }
    // let imgUrl = 'images/berlin.jpg'
    // let styles = {
    //     root: {
    //         backgroundImage: 'url(' + imgUrl + ')',
    //         backgroundSize: 'cover',
    //         overflow: 'hidden',
    //     },
    render() {
        return (
            <div className="App">
            <Title />
            <Songsearch />
          
            {/* <Similarsongs/>
            <Volumeslider />
            <Playbutton />
            <Pausebutton />
            <Wiki/> */}
          
            </div>
        );
    }
}