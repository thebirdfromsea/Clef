import {BrowseNew} from 'react-spotify-api'
import React, {Component} from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import AlbumModal from './albumModal'



export default class newSong extends React.Component{
    constructor(props){
        super(props)
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

    render(){
    return(
        <div>
            <h1>
                What's New:
            </h1>
            <BrowseNew options = {{country: 'US', limit: 12, offset: 2}}>
                {(albums, loading, error) => (
                     albums ?( 
                        albums.albums.items.map(album=>(
                        <Card className="d-inline-block" style={{width: "20rem", height: "32rem", backgroundColor:"orange"}}>
                        <CardActionArea>
                            <p><img src= {album.images[1].url} alt ={album.name}/></p>
                            <CardContent>
                                <Typography>
                                <h3 key={album.id}>{album.name}</h3>
                                </Typography>
                                <Typography >
                                    <Button variant="outlined" color="inherit" onClick={this.handleOpen}>
                                        Tracks
                                    </Button>
                                    <AlbumModal
                                    open={this.state.open} handleClose={this.handleClose} item={album}/>
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        </Card>
                        ))
                    ):null
                )}
                
            </BrowseNew>
        </div>
        );
    }
}
