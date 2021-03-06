import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import PlaylistAddRounded from '@material-ui/icons/PlaylistAddRounded';
import Typography from '@material-ui/core/Typography';
import { UserPlaylists } from 'react-spotify-api';
import AddToPlaylist from './AddToPlaylist';
import Tooltip from '@material-ui/core/Tooltip';


const ITEM_HEIGHT = 48;

class PlaylistMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            anchorEl: null,
            addSong: false,
            selectedPlaylist: ''
        };
        this.addToPlaylist = this.addToPlaylist.bind(this);
    }

    handleClick = event => {
        this.setState({ anchorEl: event.currentTarget });
    };

    handleClose = () => {
        this.setState({ anchorEl: null });
    };
    addToPlaylist(playlist) {
        this.setState({ addSong: true });
        this.setState({ anchorEl: null });
        this.setState({ selectedPlaylist: playlist });
    }

    render() {
        const { anchorEl } = this.state;
        const open = Boolean(anchorEl);

        return (
            <div>
                <Tooltip title='Add to playlist'>
                    <IconButton aria-label="More"
                        aria-owns={open ? 'long-menu' : undefined}
                        aria-haspopup="true"
                        onClick={this.handleClick}>
                        <PlaylistAddRounded />
                    </IconButton>
                </Tooltip>
                <Menu
                    id="long-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={this.handleClose}
                    PaperProps={{
                        style: {
                            maxHeight: ITEM_HEIGHT * 4.5,
                            width: 200,
                        },
                    }}>
                    <UserPlaylists>
                        {(playlists, loading, error) =>
                            playlists ? (
                                playlists.items.map(playlist => (
                                    <MenuItem key={playlist.id} onClick={() => this.addToPlaylist(playlist.id)}>
                                        <Typography variant="caption">{playlist.name}</Typography>
                                        {this.state.addSong && this.state.selectedPlaylist == playlist.id ? (
                                            <AddToPlaylist accessToken={this.props.accessToken} playlistId={playlist.id} trackId={this.props.trackID} />) : null
                                        }
                                    </MenuItem>
                                ))
                            ) : null
                        }
                    </UserPlaylists>

                </Menu>
            </div>
        );
    }
}

export default PlaylistMenu;
