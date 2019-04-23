import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { orange } from '@material-ui/core/colors';
import Slidesshow from './slidesshow';

// Formats the word Clef in the title
const titleformat = {
    textAlign: "center",
    fontSize: "125px",
    fontFamily: "Helvetica",
    color: "orange",
    borderColor: "orange",
    marginTop: "0px",
    marginBottom: "0px",
    padding: "0px",


}
// Formats the horizontal rule
const hr = {
    borderColor: "orange",
    padding: "0px",
    margin: "5px",
}

// Formatted the size of the Clef images
const clefimage = {
    width: "50",
    height: "50",
    padding: "0",
}

//have to create color to be able to override Mui button color
const orangeTheme = createMuiTheme({ palette: { primary: orange } })

export default class Title extends Component {
    constructor() {
        super();
    }
    componentDidMount() {
    }

    render() {
        return (
            {/* Displays the top of the page including the slideshow, title, and buttons */ }
            < div >
            <div>
                <div>
                    <Slidesshow />
                    <Typography component="h1" variant="h2" style={titleformat} gutterBottom>
                        Clef
                    </Typography>
                    <MuiThemeProvider theme={orangeTheme}>
                        <Typography variant="h6" align="center" color="primary" paragraph>
                            The Musical Web App
                        </Typography>
                    </MuiThemeProvider>
                    <div>
                        <Grid container spacing={16} justify="center">
                            <Grid item>
                                <MuiThemeProvider theme={orangeTheme}>
                                    <Button variant="contained" color="primary" component={Link} to="/">
                                        Home
                                </Button>
                                </MuiThemeProvider>
                            </Grid>
                            <Grid item>
                                <MuiThemeProvider theme={orangeTheme}>
                                    <Button variant="contained" color="primary" component={Link} to="/WhatsNew">
                                        What's New?
                                    </Button>
                                </MuiThemeProvider>
                            </Grid>
                            <Grid item>
                                <MuiThemeProvider theme={orangeTheme}>
                                    <Button variant="contained" color="primary" component={Link} to="/main"> Search for song recommendations </Button>
                                </MuiThemeProvider>
                            </Grid>
                        </Grid>
                        <hr style={hr} />
                    </div>
                </div>
            </div>
            </div >  
                    );
    }
}





