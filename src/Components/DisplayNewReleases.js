import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import AlbumModal from './albumModal'

export default class DisplayNewReleases extends Component {
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

    render() {
        return (
            <Card className="d-inline-block" style={{ width: "20rem", height: "28rem", backgroundColor: "orange" }}>
                <p><img src={this.props.album.images[1].url} alt={this.props.album.name} /></p>
                <CardContent>
                    <Typography>
                        <h3 key={this.props.album.id}>{this.props.album.name}</h3>
                    </Typography>
                    <Typography >
                        <Button variant="outlined" color="inherit" onClick={this.handleOpen}>
                            Tracks
                        </Button>
                        <AlbumModal open={this.state.open} handleClose={this.handleClose} item={this.props.album.id} />
                    </Typography>
                </CardContent>
            </Card>
           //This sets up what is going to be on each card for the what's new page including album cover photo
           //track button using material UI
        );
    }
}