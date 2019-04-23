import { BrowseNew } from 'react-spotify-api'
import React from 'react';
import DisplayNewReleases from './DisplayNewReleases';


export default class newSong extends React.Component {
    constructor(props) {
        super(props)

    }
    render() {
        return (
            <div>
                <h1>
                    What's New:
            </h1>
                <BrowseNew options={{ country: 'US', limit: 12, offset: 0 }}>
                    {(albums, loading, error) => (
                        albums ? (
                            albums.albums.items.map(album => (
                                <DisplayNewReleases album={album} />
                            ))
                        ) : null
                    )}
                </BrowseNew>
            </div>
        );
    }
}
