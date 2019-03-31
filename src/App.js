import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Home from './Components/Home';
import Main from './Components/Main';
import WhatsNew from './Components/WhatsNew';
import Par from './Components/par';
import { style } from 'react-toastify';


class App extends Component {

    constructor() {
        super();
    }
    componentDidMount() {
      
    }
    render() {
        return (
            <div >
            <Par />
            <Router>
                <Switch>
                <Route
                    path='/main'
                    render={(props) => <Main accessToken = {this.props.value}/>}
                    />
                  
                    <Route 
                    path='/home'
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
