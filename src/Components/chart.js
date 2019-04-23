import React, { Component } from 'react';
import {
    BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

export default class Chart extends Component {


    render() {
        return (
            <BarChart
                width={700}
                height={300}
                data={this.props.data}
                margin={{
                    top: 5, right: 30, left: 20, bottom: 5,
                }}>

                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />

                <Bar dataKey="number" fill="orange" />
            </BarChart>
        );
    }
}