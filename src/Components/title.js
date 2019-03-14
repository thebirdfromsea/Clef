import React, { Component } from 'react';
import backPic01 from '../backPic01.png';
import backPic02 from '../backPic02.jpg';
const titleformat = {
    textAlign: "center",
    fontSize: "125px",
    color: "orange",
    borderColor: "orange",
    marginTop: "0px",
    marginBottom: "0px",
    padding: "0px",
}
const hr = {
    borderColor: "orange",
    padding: "0px",
    margin: "0px",
}

const clefimage = {
    width: "50",
    height: "50",
    padding: "0",
}
const background01 = {
    width: "50",
    height: "50",
    padding: "0",
}
const background02 = {
    width: "50",
    height: "50",
    padding: "0",
    // opacity:0.6,
}

export default class Title extends Component {
    constructor() {
    super();
}
    componentDidMount() {

    }

    render() {
        return (
        <div>
            <h1 style={titleformat}><img src={"https://upload.wikimedia.org/wikipedia/commons/e/e8/G-clef.svg"} alt="Clef Symbol" style={clefimage} /> Clef <img src={"https://upload.wikimedia.org/wikipedia/commons/e/e8/G-clef.svg"} alt="Clef Symbol" style={clefimage} /></h1>
            <hr style={hr} />
            <img src={backPic01} style = {background01}></img>
            <img src={backPic02} style={background02}></img>
            </div>
            );
        }
    }
    
