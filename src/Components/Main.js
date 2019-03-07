import React, { Component } from 'react';
import Title from './title';
import Playbutton from './playbutton';
import Pausebutton from './pausebutton';
import Songsearch from './songsearch';

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
             <Playbutton />
             <Pausebutton />
            </div>
        );
    }
}