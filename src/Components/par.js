// import React from "react";
import Particles from 'react-particles-js';
import React, {Component} from 'react';
export default class Ap extends Component{
  
    render(){
        return (
            <Particles
    params={{
	    "particles": {
	        "number": {
	            "value": 50
	        },
	        "size": {
	            "value": 3
	        }
	    },
	    "interactivity": {
	        "events": {
	            "onhover": {
	                "enable": true,
	                "mode": "repulse"
	            }
	        }
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
	}} />
        );
    };
}

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