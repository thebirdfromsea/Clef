import React, { Component } from 'react';

export default class PlayBackWidget extends Component {
    constructor() {
    super();
}
    componentDidMount() {

    }
    render() {
        return(
          <div>
                <iframe src="https://open.spotify.com/embed/album/1gbgmfoERh4YxIVyyjS8Hp" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
          </div>
      );
    }
}

