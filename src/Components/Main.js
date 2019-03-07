import React, { Component } from 'react';
import Title from './title';

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
            </div>
        );
    }
}