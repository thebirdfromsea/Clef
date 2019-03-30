import React, { Component } from 'react';
import {
  ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, LabelList,
} from 'recharts';


export default class ScatterPlot extends React.Component{

    
    render(){
        return(
        <ScatterChart
        width={700}
        height={300}
        
       
        margin={{
          top: 20, right: 20, bottom: 20, left: 20,
        }}
        >
        

        <CartesianGrid />
        <XAxis padding={{ left: 50 }} type="number" dataKey="x" name="time" unit="sec"  domain = {[0, 30]} ticks = {this.props.ticks}/>
        <YAxis padding={{ left: 50 }} type="number" dataKey="y" name="speed" unit="beats / sec" />
        <Tooltip cursor={{ strokeDasharray: '3 3' }} />
        <Scatter name="A school" data ={this.props.data} fill="#8884d8"/>
        <Scatter name="A school" data ={this.props.data2} fill="green" shape = "cross"/>
        <Scatter name="A school" data ={this.props.data3} fill="#purple"/>


        
        </ScatterChart>)}
    
}
