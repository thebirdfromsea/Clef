import React, { Component } from 'react';
import { Search } from 'react-spotify-api';
import SearchBar from 'material-ui-search-bar';

export default class Songsearch extends Component {
    constructor() {
        super();
    }
    componentDidMount() {

    }

    

    render() {
        return (

            <div></div>
        /*<div className="col" id="songSearch">

                <SearchBar
                    onChange={(newValue) => this.setState({value: newValue})}
                    onRequestSearch={() => console.log('onChange')}
                    style={{
                    margin: '0 auto',
                    maxWidth: 800
                    }}
                />

                        <Search query={this.state.value} artist>
                            {(data, loading, error) =>
                                data ? (
                                    <div>
                                    <li>Artists</li>
                                    <ul>
                                        {data.artists.items.map(artist => (
                                            <li key={artist.id}>{artist.name}</li>
                                        ))}
                                        </ul>
                                        </div>
                                        ): null

                            }           s
                        </Search>
                    
                }
                  
        </div>*/
            
                );
            }
        }