import React, { Component } from 'react';
import Header from './header';
import Usertopartists from './usertopartists';
import ButtonTest from './buttontest';

export default class Home extends Component {
    constructor() {
        super();
    }
    componentDidMount() {

    }

    render() {
        return (
            <div className="App">
                <Header />
               

                <Usertopartists/>
            </div>
            );
    }
}