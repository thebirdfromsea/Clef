import React, { Component } from 'react';

export default class Title extends Component {
    constructor() {
    super();
}
    componentDidMount() {

    }

    render() {
        return (
        <div>
            <div className="title">
            <h1 style={{textAlign: 'center', fontSize: '500%', color: 'orange'}}><img src="https://upload.wikimedia.org/wikipedia/commons/e/e8/G-clef.svg" alt="Clef Symbol" width={50} height={50} /> Clef <img src="https://upload.wikimedia.org/wikipedia/commons/e/e8/G-clef.svg" alt="Clef Symbol" width={50} height={50} /></h1>
            </div>
            <hr style={{borderColor: 'orange'}} />
            </div>
            );
        }
    }
    
