import React, { Component } from 'react';

export default class ButtonTest extends Component {

    constructor() {
        super();
        this.state = {
            text: "Answer: "
        };
    }

    clicked() {
        this.setState({ text: this.refs.textBox.value });
    }

    render() {

        const questionStyle = { color: 'white', 'font-size': '30px', padding: "10px 20px", textAlign: "center" }

        return <div style={questionStyle}>
            <h2 style={questionStyle}>1. Who is your favorite song artist?</h2>
            {this.state.text}<input ref="textBox" type="text" />
            <button onClick={(e) => { this.clicked(); }}>Submit</button>
            <h2 style={questionStyle}>2. What is your favorite genre of music?</h2>
            {this.state.text}<input ref="textBox" type="text" />
            <button onClick={(e) => { this.clicked(); }}>Submit</button>
            <h2 style={questionStyle}>3. Are you in the dancing kind of mood?</h2>
            {this.state.text}<input ref="textBox" type="text" />
            <button onClick={(e) => { this.clicked(); }}>Submit</button>
        </div>;
    }

}