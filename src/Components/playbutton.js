import React, { Component } from 'react';

export default class Playbutton extends Component {
    constructor() {
    super();
}
    componentDidMount() {

    }
    render() {
        return(
        <div>
            <style dangerouslySetInnerHTML={{__html: "\n    .button-play button {\n        width: 40px;\n        height: 40px;\n        border-style: solid;\n        border-width: 20px 0px 20px 40px;\n        box-sizing: border-box;\n        border-color: #808080 #808080 #808080 #ffa500;  \n        background: #808080 !important;\n        position: absolute;\n        left: 45%;\n        right: 45%;\n        bottom: 3%;\n    } \n" }} />
            <div className="button-play">
              <button />
            </div>
        </div>
        );
      }
    }