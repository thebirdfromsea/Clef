import React, { Component } from 'react';
import { Typography } from '@material-ui/core';
import Modal from '@material-ui/core/Modal';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import DisplayArtistAlbums from './DisplayArtistAlbums';


const styles = theme => ({
    paper:{
        position: 'absolute',
        width: theme.spacing.unit*100,
        height: theme.spacing.unit *60,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[2],
        padding: theme.spacing.unit*4,
        outline: 'none',
    
    },
});

function getModalStyle(){
    const top =50;
    const left = 50; 
    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
      };
}

class artistAlbumModal extends Component {
  
    constructor(props) {
          super(props);
          this.state = {
          }
      }
  
  
    render() {
    const { classes } = this.props;
  
      return(
        <div>
          <Modal
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            open={this.props.open}
            onClose={this.props.handleClose}
          >
            <div style={getModalStyle()} className={classes.paper}>
              <Typography variant="h6" id="modal-title">
      <DisplayArtistAlbums artist = {this.props.item}/>
              </Typography>
              <Typography variant="subtitle1" id="simple-modal-description">
                Click outside box to exit...
              </Typography>
              
            </div>
          </Modal>
        </div>
      );
    }
  
    }
  
    artistAlbumModal.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  // We need an intermediary variable for handling the recursive nesting.
  const SimpleModalWrapped = withStyles(styles)(artistAlbumModal);
  
  export default SimpleModalWrapped;

