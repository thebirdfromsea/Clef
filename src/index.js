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

let parsed = queryString.parse(window.location.search);
let accessToken = parsed.access_token;
//

function removeParams(sParam) {
    var url = window.location.href.split('?')[0] + '?';
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] != sParam) {
            url = url + sParameterName[0] + '=' + sParameterName[1] + '&'
        }
    }
    return url.substring(0, url.length - 1);
}

ReactDOM.render(
    
    <SpotifyApiContext.Provider value={accessToken}>
         <App value = {accessToken}/>
    </SpotifyApiContext.Provider>, document.getElementById('root'), );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
