import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import queryString from 'query-string' ;


let textColor = 'orange'
let defaultStyle = {
  color: textColor
};


class App extends Component {

  constructor(){
    super();
    this.state = {serverData: {}}
  }
  componentDidMount(){
    let parsed = queryString.parse(window.location.search);
    let accessToken = parsed.access_token;

  fetch('https://api.spotify.com/v1/me',{
       headers:{ 'Authorization': 'Bearer ' + accessToken}
   }).then((response)=> response.json()).then(data => this.setState({serverData:{user: {name:data.display_name}}}))

}
  render() {
    const headerStyle = {color: 'orange', 'font-size':'50px'}
    return (
      <div className="App">
            {
            this.state.serverData.user ?
            <div>
              <h1 style = {headerStyle}>
            Welcome ,
              {
                this.state.serverData.user.name}
              </h1>


              <div>

                <button onClick={()=>window.location = 'http://localhost:8080/clef.html'}
                >Click here to search for song information</button>
              </div>
            </div> : <button onClick={()=>window.location = 'http://localhost:8888/login'}
            style = {defaultStyle}>Log in with Spotify</button>
            }
      </div>
    );
  }
}



export default App;
