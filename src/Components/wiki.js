import React, { Component } from 'react';

export default class Wiki extends Component {
    constructor() {
    super();
}
    componentDidMount() {
    }

    render() {
        return (
        <div>
           
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Wikipedia_svg_logo.svg/500px-Wikipedia_svg_logo.svg.png" class="App-logo" width={10} length={10} alt="logo"></img>
            <input type="text" name="query" id="query" class="form-control input-lg" placeholder="Search"/>
            <button type="button" type="submit" id="wikisearch">Go!</button>
            <button type="submit"onclick="window.location.href='http://en.wikipedia.org/wiki/Special:Random';">I'm feeling Lucky!</button>
            <h1>
                wiki
            </h1>
      </div>
            );
        }
    }
