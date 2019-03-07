import React, { Component } from 'react';
import Title from './title';
import Playbutton from './playbutton';
import Pausebutton from './pausebutton';
import Songsearch from './songsearch';
import Similarsongs from './similarsongs';

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
            <Playbutton />
            <Pausebutton />
            </div>
        );
    }
}