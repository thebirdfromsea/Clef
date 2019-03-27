import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Home from './Components/Home';
import Main from './Components/Main';
import WhatsNew from './Components/WhatsNew';

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
                    <Route exact path ="/whatsnew" component={WhatsNew}/>
                </Switch>  
            </Router>
         
        );
}
}




export default App;
