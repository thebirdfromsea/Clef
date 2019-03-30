import Particles from 'react-particles-js';
import React, {Component} from 'react';

const style={
	position: "fixed",
	top: 0,
	left: 0,
	width: "100%",
	height: "100%",
	zIndex: -1,
}
const particleFormat = {
    particles: {
        number: {
            value: 100
        },
        size: {
            value: 50
		}
    },
    interactivity: {
        events: {
            onhover: {
                enable: true,
                mode: "repulse"
            }
        }
}
}

export default class Particle extends Component{



    render(){
        return (

            <Particles style={style}
    params={{ particleFormat }} />
	);
};
}