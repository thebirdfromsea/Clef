// import React from "react";
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

	// params={{
	//     "fps_limit": 28,
	//     "particles": {
	//         "number": {
	//             "value": 200,
	//             "density": {
	//                 "enable": false
	//             }
	//         },
	//         "line_linked": {
	//             "enable": true,
	//             "distance": 30,
	//             "opacity": 0.4
	//         },
	//         "move": {
	//             "speed": 1
	//         },
	//         "opacity": {
	//             "anim": {
	//                 "enable": true,
	//                 "opacity_min": 0.05,
	//                 "speed": 2,
	//                 "sync": false
	//             },
	//             "value": 0.4
	//         }
	//     },
	//     "polygon": {
	//         "enable": true,
	//         "scale": 0.5,
	//         "type": "inline",
	//         "move": {
	//             "radius": 10
	//         },
	//         "url": "/small-deer.2a0425af.svg",
	//         "inline": {
	//             "arrangement": "equidistant"
	//         },
	//         "draw": {
	//             "enable": true,
	//             "stroke": {
	//                 "color": "rgba(255, 255, 255, .2)"
	//             }
	//         }
	//     },
	//     "retina_detect": false,
	//     "interactivity": {
	//         "events": {
	//             "onhover": {
	//                 "enable": true,
	//                 "mode": "bubble"
	//             }
	//         },
	//         "modes": {
	//             "bubble": {
	//                 "size": 6,
	//                 "distance": 40
	//             }
	//         }
	//     }


// import Particles from 'react-particles-js';
// export default class Par extends Component {
  
//     render(){
//         return (
//             <Particles
//      params={{
// 	    "particles": {
// 	        "number": {
// 	            "value": 50
// 	        },
// 	        "size": {
// 	            "value": 3
// 	        }
// 	    },
// 	    "interactivity": {
// 	        "events": {
// 	            "onhover": {
// 	                "enable": true,
// 	                "mode": "repulse"
// 	            }
// 	        }
// 	    }
// 	}} />
//         );
//     };

// }