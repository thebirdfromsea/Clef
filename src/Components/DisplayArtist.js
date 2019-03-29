import React, { Component } from 'react';
import ListItem from '@material-ui/core/ListItem';
import { Typography }  from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import PlayArrow from '@material-ui/icons/PlayArrow';

export default class DisplayArtist extends Component {
	constructor(props){
        super(props);
        this.state = {

        }
    }

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
                    <IconButton onClick={this.handleClick}>
                        <PlayArrow />
                    </IconButton>
                </ListItem>



            </div>
            
            );
    }
}