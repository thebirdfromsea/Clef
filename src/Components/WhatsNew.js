import React, { Component } from 'react';
import Title from './title';
import BrowseNew from './browseNew'

export default class WhatsNew extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="App">

                <div>
                    <Title />

                </div>
                <BrowseNew />
            </div>
        );
    }
}