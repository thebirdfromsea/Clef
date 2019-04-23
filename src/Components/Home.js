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
            // Displays the home page with the title, header, and user's top artists
            <div className="App">
            <div>
                <Title />
                <Header accessToken = {this.props.accessToken}/>
            </div>
                <Usertopartists/>
            </div>
            );
    }
}