import React, { Component } from 'react';
import ListItem from '@material-ui/core/ListItem';
import { Typography } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import PlayArrow from '@material-ui/icons/PlayArrow';
import Tooltip from '@material-ui/core/Tooltip';

/*
    Creates an individual list item that displays an artist's
    picture and name, along with a button to play the artist's top tracks. 

    Takes item as a prop, which refers to the artist being passed into this component.
*/
export default class DisplayArtist extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    // handles artist play button. When clicked, this plays an artist's top songs.
    handleClick = (event) => {
        this.props.playartist(this.props.item.id)
    };

    render() {


        return (
            <div>
                <ListItem divider key={this.props.item.id}>
                    <img src={this.props.item.images[2] ? this.props.item.images[2].url : null} />
                    <Typography variant="h5">
                        {this.props.item.name}
                    </Typography>
                    <Tooltip title='Play Artist Top Tracks'>
                        <IconButton onClick={this.handleClick}>
                            <PlayArrow />
                        </IconButton>
                    </Tooltip>
                </ListItem>
            </div>
        );
    }
}