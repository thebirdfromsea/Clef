import React, { Component } from 'react';

export default class ButtonTest extends Component {

    constructor() {
        super();
        this.state = {
        };
    }

    clicked(text) {
        this.setState({ text: this.refs.textBox.value });
    }

    render() {

        return <div>
            <h2>1. Who is your favorite song artist?</h2>
            <input ref="textBox" type="text" />
            <button onClick={(e) => { this.clicked(); }}>Submit</button>
            <h2>2. What is your favorite genre of music?</h2>
            <input ref="textBox" type="text" />
            <button onClick={(e) => { this.clicked(); }}>Submit</button>
            <h2>3. Are you in the dancing kind of mood?</h2>
            <input ref="textBox" type="text" />
            <button onClick={(e) => { this.clicked(); }}>Submit</button>
        </div>;
    }

}
