import React, { Component } from 'react';

export default class Pausebutton extends Component {
    constructor() {
    super();
}
    componentDidMount() {

    }
    render() {
        return(
          <div>
          <style dangerouslySetInnerHTML={{__html: " \n    .button-pause button{\n        width: 40px;\n        height: 40px;\n        border-style: double;\n        border-width: 0px 0px 0px 40px;\n        border-color: #ffa500;\n        background: #808080 !important;\n        position: absolute;\n        left: 50%;\n        right: 50%;\n        bottom: 3%; \n    }\n" }} /> 
          <div className="button-pause">
            <button />
          </div>
        </div>
      );
    }
  }