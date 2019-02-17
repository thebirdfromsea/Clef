import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import queryString from 'query-string';
import Header from './Components/header';
import ButtonTest from './Components/buttonTest';
import { BrowserRouter, Route, Link } from 'react-router-dom';


let textColor = 'orange'
let defaultStyle = {
  color: textColor
};


class App extends Component {

    constructor() {
        super();
        this.state = { serverData: {} }
    }
    componentDidMount() {
        let parsed = queryString.parse(window.location.search);
        let accessToken = parsed.access_token;

        fetch('https://api.spotify.com/v1/me', {
            headers: { 'Authorization': 'Bearer ' + accessToken }
        }).then((response) => response.json()).then(data => this.setState({ serverData: { user: { name: data.display_name } } }))

     

    }
    render() {
     const headerStyle = { color: 'orange', 'font-size': '50px' }
     return (
            <div className="App">
            
             <Header userName={this.state.serverData.user ? this.state.serverData.user.name : false}/> 
             <ButtonTest/>
             
            </div>

         
        );
}
}




export default App;
