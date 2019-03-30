import React, { Component } from 'react';
import { Typography } from '@material-ui/core';
import Modal from '@material-ui/core/Modal';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import DisplayTrackFeatures from './DisplayTrackFeatures';

const styles = theme => ({
	paper: {
    position: 'absolute',
    width: theme.spacing.unit * 100,
	height: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
    outline: 'none',
  },
});

function getModalStyle() {
  const top = 50;
  const left = 50;
   return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
  }

class FeatureModal extends Component {
  
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
			  <DisplayTrackFeatures track={this.props.analysis}/>
            </Typography>
            <Typography variant="subtitle1" id="simple-modal-description">
              Click outside of graph to exit..
            </Typography>
          </div>
        </Modal>
      </div>
    );
  }

  }

  FeatureModal.propTypes = {
  classes: PropTypes.object.isRequired,
};

// We need an intermediary variable for handling the recursive nesting.
const SimpleModalWrapped = withStyles(styles)(FeatureModal);

export default SimpleModalWrapped;