import React, { Component } from 'react';
import ListItem from '@material-ui/core/ListItem';
import { Typography } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import PlayArrow from '@material-ui/icons/PlayArrow';
import Tooltip from '@material-ui/core/Tooltip';

/*
    Creates an individual list item that displays an album's
    artwork and name, along with a button to play the album. 

    Takes item as a prop, which refers to the album being passed into this component.
*/

export default class DisplayAlbum extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    //handles the play button located in album list item , plays album when activated

    handleClick = (event) => {
        this.props.playalbum(this.props.item.id)
    };

    render() {


        return (
            <div>
                <ListItem divider key={this.props.item.id}>
                    <img src={this.props.item.images[2] ? this.props.item.images[2].url : null} rounded />
                    <Typography variant="h5">
                        {this.props.item.name}
                    </Typography>
                    <Tooltip title='Play album'>
                        <IconButton onClick={this.handleClick}>
                            <PlayArrow />
                        </IconButton>
                    </Tooltip>
                </ListItem>

            </div>

        );
    }
}