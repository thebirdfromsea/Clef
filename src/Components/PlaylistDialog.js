import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { orange } from '@material-ui/core/colors';
import Snackbar from '@material-ui/core/Snackbar';
import CreatePlaylist from './CreatePlaylist';

const orangeTheme = createMuiTheme({ palette: { primary: orange } })


export default class FormDialog extends React.Component {
    state = {
        open: false,
        name: "",
        desc: "",
        openSnack: false,
    };

    handleClickOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
        CreatePlaylist(this.props.accessToken, this.state.name, this.state.desc);
        this.setState({ openSnack: true });
    };

    handleNameChange = name => event => {
        this.setState({
            [name]: event.target.value
        });
    };
    handleDescChange = desc => event => {
        this.setState({
            [desc]: event.target.value
        });
    };
    handleSnackClose = () => {
        this.setState({ openSnack: false });
    };

        

    

    render() {
        return (
            <div>
                <MuiThemeProvider theme={orangeTheme}>
                    <Button variant="contained" color="primary" onClick={this.handleClickOpen}>
                    Create Playlist
                </Button></MuiThemeProvider>
                <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                    aria-labelledby="form-dialog-title"
                >
                    <DialogTitle id="form-dialog-title">Playlist</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Please enter a playlist name and/or descript. Then press create so we can generate the playlist for you.
                        </DialogContentText>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Playlist Name"
                            onChange={this.handleNameChange('name')}
                            fullWidth
                            
                        />
                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Description"
                            onChange={this.handleDescChange('desc')}
                            fullWidth
                            multiline
                            rows="4"
                            className={this.textField}
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose} color="primary">
                            Cancel
                        </Button>
                        <Button onClick={this.handleClose} color="primary">Create</Button>
                        
                    </DialogActions>
                </Dialog>
                <Snackbar
                    autoHideDuration={1500}
                    open={this.state.openSnack}
                    onClose={this.handleSnackClose}
                    
                    ContentProps={{
                        'aria-describedby': 'message-id',
                    }}
                    message={<span id="message-id">Your Playlist has been created!</span>} />
            </div>
        );
    }
}