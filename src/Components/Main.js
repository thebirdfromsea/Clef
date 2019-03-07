import React, { Component } from 'react';
import Title from './title';
import Playbutton from './playbutton';

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
             <Playbutton />
            </div>
        );
    }
}