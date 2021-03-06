import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Home from './Components/Home';
import Main from './Components/Main';
import WhatsNew from './Components/WhatsNew';
import Par from './Components/par';


class App extends Component {

    constructor() {
        super();
    }
    //this looks for if you have an access token and will redirect you to the login if you do not
    componentDidMount() {
        if (!this.props.value)
            window.location = "https://cleflogin.herokuapp.com/login" || "http://localhost:8888/login";
    }
    render() {
        return (
            //sets up the router for the different 'pages' of our website
            <div >
            <Par />
            <Router>
                <Switch>
                <Route
                    path='/main'
                    render={(props) => <Main accessToken = {this.props.value}/>}
                    />
                  
                    <Route 
                    exact
                    path='/'
                    render={(props) => <Home accessToken = {this.props.value} />}
                    />
                    <Route exact path="/whatsnew" component={WhatsNew}/>
                </Switch>  
            </Router>
            </div>
        

        );
}
}




export default App;
