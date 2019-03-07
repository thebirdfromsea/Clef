import React, { Component } from 'react';

export default class Volumeslider extends Component {
    constructor() {
    super();
}
    componentDidMount() {

    }
    render() {
        return(
        <div>
            <style dangerouslySetInnerHTML={{__html: "\n    .volume-slider{\n        position: absolute;\n        left: 10%;\n        right: 40%;\n        bottom: 3%;\n        color: #ffa500;\n    }\n" }} /> 
            <form action="#" method="post" className="volume-slider">
            Volume
            <input type="range" id="rating" min={0} max={100} onchange="evalSlider()" />
            <output id="sliderVal" className="volume-slider" />
            </form>
            </div>
            );
        }
    }