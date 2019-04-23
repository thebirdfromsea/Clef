 import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { SpotifyApiContext } from 'react-spotify-api';
import queryString from 'query-string';

import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

//takes accesstoken from URL
let parsed = queryString.parse(window.location.search);
let accessToken = parsed.access_token;



ReactDOM.render(
    //wraps access token around entire app so it will be used when calling api
    <SpotifyApiContext.Provider value={accessToken}>
         <App value = {accessToken}/>
    </SpotifyApiContext.Provider>, document.getElementById('root'), );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
