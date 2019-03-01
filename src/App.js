import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Home from './Components/Home';
import Main from './Components/Main';

class App extends Component {

    constructor() {
        super();
    }
    componentDidMount() {
      
    }
    render() {
        return (

            <Router>
                <Switch>
                    <Route exact path="/home" component={Home} />
                    <Route exact path="/main" component={Main} />
                </Switch>  
            </Router>
         
        );
}
}




export default App;
