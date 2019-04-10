import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import { orange } from '@material-ui/core/colors';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { UserPlaylists } from 'react-spotify-api';
import PlayArrow from '@material-ui/icons/PlayArrow';
import Folder from '@material-ui/icons/Folder'; 
import Tooltip from '@material-ui/core/Tooltip';


const orangeTheme = createMuiTheme({ palette: { primary: orange } });

const styles = {
  appBar: {
    position: 'relative',
  },
  flex: {
    flex: 1,
  },
};

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class PlaylistView extends React.Component {
  state = {
    open: false,
  };

  handleClickOpen = () => {
      this.setState({ open: true });
      this.props.closePlayer();
  };

  handleClose = () => {
    this.setState({ open: false });
    };

    handlePlay(playlistID) {
        this.setState({ open: false });
        this.props.PlayPlaylist(playlistID);
    };

  render() {
    const { classes } = this.props;
    return (
        <div>
        <MuiThemeProvider theme={orangeTheme}>
        <Tooltip title = 'View Your Playlists'>
        <IconButton  color="primary" onClick={this.handleClickOpen}>
                  <Folder/>
        </IconButton>
        </Tooltip>
          
        </MuiThemeProvider>
        <Dialog
          fullScreen
          open={this.state.open}
          onClose={this.handleClose}
          TransitionComponent={Transition}
        >
          <AppBar className={classes.appBar}>
            <Toolbar>
              <IconButton color="inherit" onClick={this.handleClose} aria-label="Close">
                <CloseIcon />
              </IconButton>
              <Typography variant="h6" color="inherit" className={classes.flex}>
                Your Playlists
              </Typography>
            </Toolbar>
          </AppBar>
          <UserPlaylists>
            {(playlists, loading, error) =>
                playlists ? (
                    playlists.items.map(playlist => (
                                <ListItem divider key={playlist.id}>
                                    <img src={playlist.images[1] ? (playlist.images[1].url) : null} />
                                    <Typography variant="h4">{playlist.name}</Typography>
                                    <IconButton onClick={() => this.handlePlay(playlist.id)}>
                                        <PlayArrow />
                                    </IconButton>
                                </ListItem>
                    ))
                ) : null
            }
        </UserPlaylists>
        </Dialog>
      </div>
    );
  }
}

PlaylistView.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PlaylistView);
