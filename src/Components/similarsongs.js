import React, { Component } from 'react';

const formatSimilar = {
    fontSize: "30px",
    textAlign: "left",
    padding: "0",
    marginTop: "50px",
    marginLeft: "150px", 
    color: "orange",
}

const formatMachineLearn = {
    fontSize: "15px",
    textAlign: "left",
    marginBottom: "50px",
    maginTop: "100px",
    marginLeft: "130px",
    color: "orange",
}


export default class Similarsongs extends Component {
    constructor() {
    super();
}
    componentDidMount() {

    }

    render() {
        return (
            <div>
                <h4 style={formatSimilar}>
                    Similar songs
                </h4>
                <p style={formatMachineLearn}>
                    This part is for the machine learning
                </p>
            </div>
            );
            }
        }