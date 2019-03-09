import React, { Component } from 'react';
import Title from './title';
import Playbutton from './playbutton';
import Pausebutton from './pausebutton';
import Songsearch from './songsearch';
import Similarsongs from './similarsongs';
import Volumeslider from './volumeslider';
import Wiki from './wiki';
export default class Main extends Component {
    constructor() {
        super();
    }
    componentDidMount() {

    }

    render() {
        return (
            <div className="App">
            <Title />
            <Songsearch />
            <Similarsongs/>
            <Volumeslider />
            <Playbutton />
            <Pausebutton />
            <Wiki/>
            </div>
        );
    }
}