import React, { Component } from 'react';
import { Typography } from '@material-ui/core';
import Modal from '@material-ui/core/Modal';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import DisplayAlbumTracks from './DisplayAlbumTracks';

const styles = theme => ({
    paper:{
        position: 'absolute',
        width: theme.spacing.unit*100,
        maxHeight: theme.spacing.unit *50,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing.unit*4,
        outline: 'none',
        overflow: 'auto',
    
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

class albumModal extends Component {
  
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
              <DisplayAlbumTracks album = {this.props.item}/>

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
  
    albumModal.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  // We need an intermediary variable for handling the recursive nesting.
  const SimpleModalWrapped = withStyles(styles)(albumModal);
  
  export default SimpleModalWrapped;

