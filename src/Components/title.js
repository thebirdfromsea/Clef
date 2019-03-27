import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { orange } from '@material-ui/core/colors';

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
const hr = {
    borderColor: "orange",
    padding: "0px",
    margin: "5px",
}

const clefimage = {
    width: "50",
    height: "50",
    padding: "0",
}

const orangeTheme = createMuiTheme({ palette: { primary: orange}})

export default class Title extends Component {
    constructor() {
    super();
}
    componentDidMount() {

    }

    render() {
        return (
            <div>
              <div>
                <div>
                  <Typography component="h1" variant="h2" style={titleformat} gutterBottom>
                  <img src={"https://upload.wikimedia.org/wikipedia/commons/e/e8/G-clef.svg"} alt="Clef Symbol" style={clefimage} />
                  Clef
                  <img src={"https://upload.wikimedia.org/wikipedia/commons/e/e8/G-clef.svg"} alt="Clef Symbol" style={clefimage} />
                  </Typography>
                  <Typography variant="h6" align="center" color="textPrimary" paragraph>
                  The Musical Web App
                  </Typography>
                  <div>
                    <Grid container spacing={16} justify="center">
                    <Grid item>
                    <MuiThemeProvider theme={orangeTheme}>
                    <Button variant="contained" color="primary" component={Link} to="/Home">
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
                                    <Button variant="contained" color="primary" component={Link} to="/Main"> Search for song information </Button>
                                </MuiThemeProvider>
                    </Grid>
                    </Grid>
                    <hr style={hr} />
                    </div>
                    </div>
                    </div>
                    </div>  
                    );
                  }
                }
        
        
        
        
        
        
        
    //     <div>
    //         <h1 style={titleformat}><img src={"https://upload.wikimedia.org/wikipedia/commons/e/e8/G-clef.svg"} alt="Clef Symbol" style={clefimage} /> Clef <img src={"https://upload.wikimedia.org/wikipedia/commons/e/e8/G-clef.svg"} alt="Clef Symbol" style={clefimage} /></h1>
    //         <hr style={hr} />
           
    //         </div>
    //         );
    //     }
    // }
    
