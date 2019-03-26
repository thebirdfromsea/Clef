import React, { Component } from 'react';
import { Search } from 'react-spotify-api';
import { ArtistRelated } from 'react-spotify-api'; 
import { Form, Text, TextArea, Radio, RadioGroup, Select, Checkbox } from 'react-form';
import SearchBar from 'material-ui-search-bar';
import { Artist } from 'react-spotify-api'
import TextField from "@material-ui/core/TextField";

import { TrackAnalysis } from 'react-spotify-api'
import { TrackFeatures} from 'react-spotify-api'
import { BrowseRecommendations } from 'react-spotify-api'
import { withStyles } from '@material-ui/core/styles';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import { ListItemAvatar, Typography } from '@material-ui/core';
import { Avatar } from 'material-ui';
import Chart from './chart'
import ScatterPlot from './scatterChart'



export default function fillGraphData(duration, length , analysisArray, analysisGraphData) {
    var i = 0
    while(analysisArray[i].start < 30){
        analysisGraphData[i] = {x: analysisArray[i].start, y : duration / length }
        i++ 
    }
    
}
