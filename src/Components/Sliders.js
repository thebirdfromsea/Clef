import React, { Component } from 'react';
import EnergySlider from './energySlider';
import DanceabilitySlider from './DanceabilitySlider';
import ValenceSlider from './ValenceSlider';
import SpeechinessSlider from './SpeechinessSlider';




export default class Sliders extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div className="App">

                <div className="d-table">
                    <div className="d-table-row">
                        <div className="d-table-cell">
                            <DanceabilitySlider inputenergy={this.props.setDance} />
                        </div>
                        <br></br>
                        <div className="d-table-cell">
                            <EnergySlider inputenergy={this.props.setEnergy} />
                        </div>
                        <br></br>

                    </div>
                    <div className="d-table-row">
                        <div className="d-table-cell">
                            <ValenceSlider inputenergy={this.props.setValence} />
                        </div>
                        <br></br>

                        <div className="d-table-cell">
                            <SpeechinessSlider inputenergy={this.props.setSpeechiness} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}