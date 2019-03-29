import React, { Component } from 'react';
import Header from './header';
import Usertopartists from './usertopartists';

import Title from './title';

export default class Home extends Component {
    constructor() {
        super();
    }
    componentDidMount() {

    }

    render() {
        return (
            <div className="App">
            <div>
                <Title />
                <Header />
            </div>
                
                <Usertopartists/>
            </div>
            );
    }
}