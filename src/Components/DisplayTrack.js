import React, { Component } from 'react';
import ListItem from '@material-ui/core/ListItem';
import { Typography } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import PlayArrow from '@material-ui/icons/PlayArrow';
import PieChart from '@material-ui/icons/PieChart';
import FeatureModal from './FeatureModal';
import PlaylistAddRounded from '@material-ui/icons/PlaylistAddRounded'


export default class DisplayTrack extends Component {
    constructor(props) {
        super(props);
        this.state = {
		open: false

        }
		this.handleClose = this.handleClose.bind(this);
    }

	handleClose = () => {
    this.setState({ open: false });
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

    handleClick = (event) => {
        this.props.playtrack(this.props.item.id)
    };


    render() {


        return (
            <div>
                <ListItem divider key={this.props.item.id}>
                    <img src={this.props.item.album.images[0] ? this.props.item.album.images[2].url : null} rounded />
                    <Typography variant="h5">
                        {this.props.item.name}
                    </Typography>
                    <IconButton onClick={this.handleClick}>
                        <PlayArrow />
                    </IconButton>
                    <IconButton>
                        <PlaylistAddRounded />
                    </IconButton>
					<IconButton onClick={this.handleOpen}>
                        <PieChart />
                    </IconButton>
					 <FeatureModal open={this.state.open} handleClose={this.handleClose} analysis={this.props.item}/>
                </ListItem>

            </div>

        );
    }
}