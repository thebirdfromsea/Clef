import React, { Component } from 'react';
import { Search, Artist } from 'react-spotify-api';
import { Typography } from '@material-ui/core';
import DisplayArtist from './DisplayArtist';
import DisplayAlbum from './DisplayAlbum';
import DisplayTrack from './DisplayTrack';
import DisplayRecommendations from './DisplayRecommendations';
import CreatePlaylistWithUser from './CreatePlaylistWithUser';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = {
    tableCellStyle: {
        maxHeight: 531,
        overflow: 'auto',
        maxWidth: 698,
        width: 698,
    },
    table: {
        display: 'd-table',
        width: 1396,
        margin: '0 auto',
        justifyContent: 'center',
        alignItems: 'center',
    },
};

class Songsearch extends Component {


    constructor(props) {
        super(props)


        this.state = {
            value: '',
            trackChange: true,
            display: 'defaultDisplay',
            refresher: true,
            searchProps: {
                market: 'US',
                limit: 5,
                offset: 0,
                include_external: ' '
            },
            URI: [],
        };


    }
    //this was the way to force the recommended songs to refresh when the slider bars change by changing refresher back to true whenever it gets changed to false
    componentDidUpdate(prevState) {
        if (this.state.refresher !== true)
            this.setState({ refresher: true })
    }


    render() {
        const { classes } = this.props;
        return (


            this.props.display == 'defaultDisplay' ? (
                <div>
                    {this.state.needsPlaylist ? (
                        <CreatePlaylistWithUser accessToken={this.props.accessToken} />
                    ) : null}
                    <br></br>

                </div>) : (
                    <div>
                        <br></br>
                        <Search query={this.props.value} album artist track options={this.state.searchProps}>
                            {
                                (data, loading, error) =>

                                    error ? (<h1>None available</h1>) :
                                        loading ? (<h1>Loading...</h1>) :
                                            data ? (
                                                <div>
                                                    <div className={classes.table}>
                                                        <div className="d-table-row">
                                                            {this.props.searchFilter == 'Artist' ?
                                                                (
                                                                    <div className="d-table-cell">
                                                                        <Typography variant="h3">Artists</Typography>
                                                                        <div className={classes.tableCellStyle}>
                                                                            {data.artists.items.map(artist => (
                                                                                <DisplayArtist item={artist} playartist={this.props.PlayArtist} />))}
                                                                        </div>
                                                                    </div>


                                                                ) :

                                                                (
                                                                    <div className="d-table-cell">
                                                                        <Typography variant="h3">Tracks</Typography>
                                                                        <div className={classes.tableCellStyle}>
                                                                            {data.tracks.items.map(track => (

                                                                                <DisplayTrack item={track} playtrack={this.props.PlayTrack} accessToken={this.props.accessToken} />

                                                                            ))}
                                                                        </div>
                                                                    </div>)

                                                            }

                                                            <div className="d-table-cell"  >
                                                                <Typography variant="h3">Recommended songs </Typography>
                                                                <div className={classes.tableCellStyle}>
                                                                    {this.state.refresher ? (

                                                                        this.props.searchFilter == 'Track' ? (
                                                                            data.tracks.items.map((track) =>

                                                                                <DisplayRecommendations refresh={(value) => {
                                                                                    this.setState({ refresher: false })
                                                                                }}
                                                                                    item={track} playtrack={this.props.PlayTrack} energy={this.props.energy}
                                                                                    danceability={this.props.danceability}
                                                                                    valence={this.props.valence}
                                                                                    speechiness={this.props.speechiness} accessToken={this.props.accessToken} />
                                                                            )

                                                                        ) :

                                                                            this.props.searchFilter == 'Artist' ? (
                                                                                data.artists.items.map(artist => (

                                                                                    <div>

                                                                                        <DisplayRecommendations refresh={(value) => {
                                                                                            this.setState({ refresher: false })
                                                                                        }}
                                                                                            item={artist} playtrack={this.props.PlayTrack} energy={this.props.energy}
                                                                                            danceability={this.props.danceability}
                                                                                            valence={this.props.valence}
                                                                                            speechiness={this.props.speechiness} accessToken={this.props.accessToken} />
                                                                                    </div>
                                                                                ))
                                                                            ) : <h1> None Found </h1>

                                                                    ) : <h2>Refeshing..</h2>}


                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="d-table-row">



                                                            <div className="d-table-cell">
                                                                <Typography variant="h3">Albums </Typography>
                                                                <div className={classes.tableCellStyle}>
                                                                    {data.albums.items.map(
                                                                        album => (
                                                                            <DisplayAlbum item={album} playalbum={this.props.PlayAlbum} />))}
                                                                </div>
                                                            </div>



                                                        </div>
                                                    </div>

                                                </div>) : null

                            }
                        </Search>
                    </div>)


        );

    }
}

Songsearch.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Songsearch);
