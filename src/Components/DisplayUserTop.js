import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ArtistAlbumModal from './artistAlbumModal';

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
            <Card className="d-inline-block" style={{width: "20rem", height: "32rem", backgroundColor: "orange"}}>
                         <p><img src={this.props.artist.images[1].url} alt = {this.props.artist.name}/></p>
                         <CardContent>
                             <Typography>
                             <h4 key = {this.props.artist.id}>{this.props.artist.name}</h4>
                             <p>Genres : {this.props.artist.genres[0]}, {this.props.artist.genres[1]}</p>
                             </Typography>
                             <Typography component="p">
                             Popularity Rating: {this.props.artist.popularity}
                             </Typography>
                               
                             <Button variant="outlined" color="inherit" onClick={this.handleOpen}>
                                        Albums
                            </Button>
                            
                            <ArtistAlbumModal open={this.state.open} handleClose={this.handleClose} item={this.props.artist}/>
                        </CardContent>
                    </Card>
        );
    }
}